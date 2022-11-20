from flask import Flask, request
from flask_cors import CORS
from diseases import label_prognosis_map
import pickle

app = Flask(__name__)

CORS(app)


# Prediction API Route
@app.route("/prediction", methods=["POST"], strict_slashes=False)
def prediction():
    return


if __name__ == "__main__":
    app.run(debug=True)
