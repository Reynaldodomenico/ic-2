from flask import Flask
from flask_pymongo import PyMongo
from flask_jwt_extended import JWTManager
from flask_cors import CORS
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Configuration
app.config['MONGO_URI'] = os.getenv('MONGO_URI')
app.config['JWT_SECRET_KEY'] = os.getenv('f234141zt134513f')
app.config['UPLOAD_FOLDER'] = './upload/images'

mongo = PyMongo(app)
jwt = JWTManager(app)

def get_collection(name):
    return mongo.db[name]

if __name__ == '__main__':
    app.run(port=4000)
