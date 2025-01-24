from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    user_type = "buyer"  # default user type
    if request.method == 'POST':
        user_type = request.form.get('user_type')
    
    return render_template('index.html', user_type=user_type)

if __name__ == "__main__":
    app.run(debug=True)
