from flask import Flask # type: ignore
from flask_sqlalchemy import SQLAlchemy # type: ignore
from datetime import datetime
import os
import psycopg2  # type: ignore

app = Flask(__name__)
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

# Members API Route
@app.route('/api/members')
def members():
    return {'members': ['Member1', 'Member2', 'Member3']}

@app.route('/')
def serve_static():
    return app.send_static_file('index.html')


if __name__ == '__main__':
    app.run(debug=True)