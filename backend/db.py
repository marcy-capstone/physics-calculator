from server import app
from flask_sqlalchemy import SQLAlchemy # type: ignore
from datetime import datetime
import os
import psycopg2  # type: ignore

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:marcy882@localhost/capstone'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    email = db.Column(db.String(100), unique=True)
    date_joined = db.Column(db.Date, default=datetime.utcnow())

    def __repr__(self):
        return '<User %r>' % self.username

with app.app_context():
    db.create_all()