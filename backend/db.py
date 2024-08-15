from server import app
from flask_sqlalchemy import SQLAlchemy # type: ignore
from datetime import datetime, timezone
import os
import psycopg2  # type: ignore

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:marcy882@localhost/capstone'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    email = db.Column(db.String(100), unique=True)
    date_joined = db.Column(db.Date, default=lambda: datetime.now(timezone.utc))

    def __repr__(self):
        return '<User %r>' % self.username
    
class Result(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    equation = db.Column(db.String(50))
    variable = db.Column(db.String(100), unique=True)
    time_submitted = db.Column(db.Date, default=lambda: datetime.now(timezone.utc))

    def __repr__(self):
        return '<Result %r>' % self.equation

with app.app_context():
    db.create_all()