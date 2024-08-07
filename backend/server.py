from flask import Flask

app = Flask(__name__)

# Members API Route
@app.route('/api/members')
def members():
    return {'members': ['Member1', 'Member2', 'Member3']}

@app.route('/')
def serve_static():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(debug=True)