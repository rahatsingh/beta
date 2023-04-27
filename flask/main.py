from flask import *

app = Flask(__name__)

@app.route('/setcookies')
def setcookie():
    resp = make_response("The cookie has been set")
    resp.set_cookie('Name','Sumit')
    return resp

@app.route('/getcookies')
def getcookie():
    result = request.cookies.get('Name')
    return f"The name is : {result}"

@app.route('/deletecookies')
def deletecookies():
    res = make_response("Cookie Removed")
    res.delete_cookie('Name')
    return res


if __name__ == '__main__':
    app.run(debug=True)


