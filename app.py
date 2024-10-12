# import flast module
from flask import Flask, render_template

# instance of flask application
app = Flask(__name__)

# home route that returns below text when root url is accessed
@app.route("/")
def hello_world():
    return "<h1>Hello, World!</h1>"
@app.route("/lols")
def hello_worldo():
    return render_template('frontend.html')

if __name__ == '__main__':  
   app.run()