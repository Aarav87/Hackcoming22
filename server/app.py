from flask import Flask, request
from flask_cors import CORS
from diseases import label_prognosis_map
import pickle

app = Flask(__name__)
CORS(app)

# Load Random Forest Classifier model
model = pickle.load(open('model.pkl', 'rb'))


# Prediction API Route
@app.route("/prediction", methods=["POST"], strict_slashes=False)
def prediction():
    symptoms = request.get_json()['symptoms']
    diagnosis = model.predict([symptoms])

    return label_prognosis_map[diagnosis[0]]


if __name__ == "__main__":
    app.run(debug=True)
