from flask import Flask, render_template, request, jsonify
from chat import get_response
import json
from train import train_model




app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/custom')
def custom():
    return render_template("custom.html")

@app.post('/information')
def information():
    try:
        # Extract form data
        tags = request.form.get('tags')
        # Get patterns and responses as string, split them correctly
        patterns = request.form.get('patterns', '').split('/')
        responses = request.form.get('responses', '').split('/')

        # Ensure all fields are provided
        if not all([tags, patterns, responses]):
            return jsonify({'error': 'Missing tags, patterns, or responses'}), 400

        # File path
        file_path = 'intents.json'

        # Load existing data
        with open(file_path, 'r') as file:
            data = json.load(file)

        # Append new intent
        new_intent = {
            'tag': tags,
            'patterns': [pattern.strip() for pattern in patterns],
            'responses': [response.strip() for response in responses]
        }
        print(new_intent)
        data['intents'].append(new_intent)

        # Save back to file
        with open(file_path, 'a') as file:
            json.dump(data, file, indent=4)

        # Successful return
        return jsonify(new_intent), 200

    except json.JSONDecodeError:
        return jsonify({'error': 'Failed to parse JSON data'}), 500
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

@app.route("/train")
def train():
    # Train the model
    train_model()

    # Successful return
    return render_template("base.html")



@app.post("/predict")
def predict():
    text = request.get_json().get("message")

    #check valid text
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)



if __name__ == "__main__":
    app.run(debug=True)