# Website Chatbot

## Overview
This repository provides a chatbot implementation designed to be deployed in a web application using Flask. The chatbot can either be integrated directly into a Flask application using Jinja2 templates or served as a standalone API, allowing frontend applications to interact with it.

### Deployment Options
1. **Full Integration with Flask**: The chatbot operates within a Flask web application, utilizing Jinja2 templates to dynamically render the frontend.
2. **Standalone API Service**: The chatbot is served as a REST API endpoint, allowing independent frontend applications to interact with it via HTTP requests.

## Features
- **Interactive Chat Interface**: Enables real-time user interaction.
- **Customizable Intent Recognition**: Uses `intents.json` to define specific chatbot behaviors.
- **Machine Learning Integration**: Implements natural language processing for intent recognition.
- **Scalable and Deployable**: Can be hosted on cloud platforms like Heroku, AWS, or Vercel.

## Installation

### Prerequisites
Ensure you have the following installed:
- Python 3.8+
- pip (Python package manager)
- Virtual environment (optional but recommended)

### Clone the Repository
```bash
git clone https://github.com/pascalspencer/website-chatbot.git
cd website-chatbot
```

### Create and Activate a Virtual Environment
```bash
python3 -m venv env
source env/bin/activate  # On Windows, use 'env\Scripts\activate'
```

### Install Dependencies
```bash
pip install -r requirements.txt
```

## Training the Model
Before running the chatbot, the model needs to be trained using the predefined intents.
```bash
python train.py
```
This will process `intents.json` and generate a trained model stored as `data.pth`.

## Running the Application
To launch the Flask web application, execute:
```bash
python app.py
```
The application will be accessible at `http://127.0.0.1:5000/`.

## API Endpoints
If running as an API-only service, the following endpoints are available:
- `POST /predict` – Accepts user input and returns chatbot responses.

## Directory Structure
```
website-chatbot/
│── app.py             # Flask application entry point
│── chat.py            # Chat handling logic
│── model.py           # Neural network model definition
│── nltk_utils.py      # NLP utilities
│── train.py           # Training script
│── intents.json       # Predefined chatbot intents
│── static/            # Static files (CSS, JS)
│── templates/         # HTML templates
```

## Customization
- **Modifying Intents**: Edit `intents.json` to add new categories, responses, or intents.
- **Changing the UI**: Modify files in `templates/` and `static/` to update the chatbot’s frontend.

## Deployment
### Deploying with Gunicorn (Production)
```bash
pip install gunicorn
```
Run the Flask app with Gunicorn:
```bash
gunicorn --bind 0.0.0.0:5000 wsgi:app
```

### Deploying on Heroku
1. Install the Heroku CLI and log in.
2. Create a `Procfile` with the following content:
   ```
   web: gunicorn --bind 0.0.0.0:$PORT wsgi:app
   ```
3. Push the application to Heroku.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch.
3. Commit and push changes.
4. Submit a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

