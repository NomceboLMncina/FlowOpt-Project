import os
from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

# Path to the JSON file
DATA_FILE = os.path.join(os.path.dirname(__file__), 'data', 'workflows.json')

# Ensure the data directory exists
if not os.path.exists(os.path.dirname(DATA_FILE)):
    os.makedirs(os.path.dirname(DATA_FILE))

# Load workflows from JSON file
def load_workflows():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r') as file:
            try:
                return json.load(file)
            except json.JSONDecodeError:
                return []  # Return an empty list if the file is empty or invalid
    return []

# Save workflows to JSON file
def save_workflows(workflows):
    with open(DATA_FILE, 'w') as file:
        json.dump(workflows, file, indent=4)

# Home route
@app.route('/')
def home():
    return render_template('index.html')

# API to add a task
@app.route('/add_task', methods=['POST'])
def add_task():
    data = request.json
    print("Received task:", data)  # Debugging line
    workflows = load_workflows()
    workflows.append(data)
    save_workflows(workflows)
    return jsonify({"message": "Task added successfully!"})

# API to get all tasks
@app.route('/get_tasks', methods=['GET'])
def get_tasks():
    workflows = load_workflows()
    print("Current workflows:", workflows)  # Debugging line
    return jsonify(workflows)

@app.route('/settings')
def settings():
    return render_template('settings.html')

if __name__ == '__main__':
    app.run(debug=True)
