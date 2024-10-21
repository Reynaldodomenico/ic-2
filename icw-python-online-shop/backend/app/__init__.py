from flask import Flask
from flask_pymongo import PyMongo
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

def create_app():
    app = Flask(__name__)
    CORS(app)

    app.config.from_object('app.config.Config')

    mongo.init_app(app)
    jwt.init_app(app)

    from .routes import bp
    app.register_blueprint(bp)

    return app

mongo = PyMongo()
jwt = JWTManager()
