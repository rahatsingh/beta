from flask import *

app = Flask(__name__)


@app.route("/form")
def form():
    return render_template('form.html')


@app.route('/result/', methods = ['POST', 'GET'])
def result():
    if request.method == 'GET':
        return f"The URL /result is accessed directly. Try going to '/form' to submit form"
    if request.method == 'POST':
        form_result = request.form
        return render_template('result.html',r = form_result)


if __name__ == "__main__":
    app.run(debug=True)

    