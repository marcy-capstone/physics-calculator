# MY Original Code
from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__, template_folder='templates')
from flask_sqlalchemy import SQLAlchemy # type: ignore
from datetime import datetime, timezone
import os
import psycopg2  # type: ignore

# Members API Route
@app.route('/api/members')
def members():
    return {'members': ['Member1', 'Member2', 'Member3']}

@app.route('/')
def serve_static():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(debug=True)


# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:marcy882@localhost/capstone'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# db = SQLAlchemy(app)

# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(50))
#     email = db.Column(db.String(100), unique=True)
#     date_joined = db.Column(db.Date, default=lambda: datetime.now(timezone.utc))

#     def __repr__(self):
#         return '<User %r>' % self.username

# with app.app_context():
#     db.create_all()

