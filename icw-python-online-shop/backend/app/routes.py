from flask import Blueprint, request, jsonify, send_from_directory, current_app
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
import datetime
import os
from werkzeug.utils import secure_filename
from . import mongo, jwt
from .models import serialize_doc

bp = Blueprint('main', __name__)

@bp.route('/')
def home():
    return "Backend is running"

@bp.route('/upload', methods=['POST'])
def upload_image():
    if 'product' not in request.files:
        return jsonify({'success': 0, 'error': 'No file part'})
    file = request.files['product']
    if file.filename == '':
        return jsonify({'success': 0, 'error': 'No selected file'})
    filename = secure_filename(f"product_{int(datetime.datetime.utcnow().timestamp())}{os.path.splitext(file.filename)[1]}")
    file.save(os.path.join('./upload/images', filename))
    return jsonify({'success': 1, 'image_url': f"http://localhost:4000/images/{filename}"})

@bp.route('/signup', methods=['POST'])
def signup():
    users = mongo.db.users
    data = request.get_json()
    existing_user = users.find_one({'email': data['email']})
    if existing_user:
        return jsonify({'success': False, 'errors': 'Existing user found with this email'}), 400
    cart = {str(i): 0 for i in range(300)}
    user_id = users.insert_one({
        'name': data['username'],
        'email': data['email'],
        'password': data['password'],
        'cartData': cart,
        'date': datetime.datetime.utcnow()
    }).inserted_id
    token = create_access_token(identity=str(user_id))
    return jsonify({'success': True, 'token': token})

@bp.route('/login', methods=['POST'])
def login():
    users = mongo.db.users
    data = request.get_json()
    user = users.find_one({'email': data['email']})
    if user and user['password'] == data['password']:
        token = create_access_token(identity=str(user['_id']))
        return jsonify({'success': True, 'token': token})
    return jsonify({'success': False, 'errors': 'Invalid email or password'}), 400

@bp.route('/allproducts', methods=['GET'])
def get_all_products():
    products = mongo.db.products.find()
    product_list = [serialize_doc(product) for product in products]
    return jsonify(product_list)

@bp.route('/addtocart', methods=['POST'])
@jwt_required()
def add_to_cart():
    users = mongo.db.users
    data = request.get_json()
    user_id = data['user_id'] 
    users.update_one(
        {'_id': user_id},
        {'$inc': {f'cartData.{data["itemId"]}': 1}}
    )
    return 'Added'

@bp.route('/removefromcart', methods=['POST'])
def remove_from_cart():
    users = mongo.db.users
    data = request.get_json()
    user_id = data['user_id']  
    users.update_one(
        {'_id': user_id},
        {'$inc': {f'cartData.{data["itemId"]}': -1}}
    )
    return 'Removed'

@bp.route('/getcart', methods=['POST'])
def get_cart():
    users = mongo.db.users
    data = request.get_json()
    user_id = data['user_id'] 
    user = users.find_one({'_id': user_id})
    return jsonify(user['cartData'])

@bp.route('/addproduct', methods=['POST'])
def add_product():
    products = mongo.db.products
    data = request.get_json()
    last_product = products.find_one(sort=[("id", -1)])
    new_id = last_product['id'] + 1 if last_product else 1
    product = {
        'id': new_id,
        'name': data['name'],
        'image': data['image'],
        'category': data['category'],
        'price': data['price'],
        'date': datetime.datetime.utcnow(),
        'available': True
    }
    products.insert_one(product)
    return jsonify({'success': True, 'name': data['name']})

@bp.route('/removeproduct', methods=['POST'])
def remove_product():
    data = request.get_json()
    products = mongo.db.products
    products.delete_one({'id': data['id']})
    return jsonify({'success': True, 'name': data['name']})

@bp.route('/images/<filename>')
def uploaded_file(filename):
    return send_from_directory(current_app.config['UPLOAD_FOLDER'], filename)
