from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__, template_folder='templates')

# Members API Route
@app.route('/api/members')
def members():
    return {'members': ['Member1', 'Member2', 'Member3']}

@app.route('/')
def serve_static():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(debug=True)