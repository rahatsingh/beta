from flask import Flask, render_template, request


app = Flask(__name__)

@app.route('/', methods=["GET", "POST"])
def feedback():
    if request.method == "POST":
        first_name = request.form.get("fname")
        L_name = request.form.get("lname")
        M_name = request.form.get("mname")
        email = request.form.get("email")
        rating = request.form.get("star")
        result_head = "Thank You "+first_name + " For Your feedback"
        result_data = "Name:-"+first_name + " "+L_name+"Email: -"+email+" < br > "+"Rating: - "+rating
        return " "+result_head+" <br> "+result_data
    return render_template('index.html')
    
if __name__=="__main__":
    app.run(debug=True)
