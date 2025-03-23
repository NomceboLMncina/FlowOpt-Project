## **FlowOpt Documentation**

### **Overview**
FlowOpt is a web application designed to help users manage and optimize their workflows. It allows users to:
- Add tasks with details like name, time, dependencies, assignee, start time, and end time.
- Visualize tasks using a bar chart.
- Delete individual tasks or clear all tasks.
- Export and import workflows as JSON files.
- Enable or disable task reminders.


### **File Structure**
The app consists of the following files:

1. **`app.py`**:
   - The main Flask application file.
   - Handles routing, task management, and JSON file operations.

2. **`index.html`**:
   - The home page where users can add tasks, view the task list, and visualize workflows.

3. **`settings.html`**:
   - The settings page where users can export/import workflows and manage notification preferences.

4. **`script.js`**:
   - Handles frontend logic for the home page, including task management and chart updates.

5. **`settings.js`**:
   - Handles frontend logic for the settings page, including exporting/importing workflows and managing notifications.

6. **`styles.css`**:
   - Contains custom styles for the app.

7. **`workflows.json`**:
   - Stores the list of tasks in JSON format.


### **Features**

#### **1. Add Task**
- Users can add tasks using the form on the home page.
- Each task includes:
  - **Task Name**: Name of the task.
  - **Time Required**: Estimated time to complete the task (in hours).
  - **Dependencies**: Comma-separated list of dependent tasks.
  - **Assignee**: Name of the team member assigned to the task.
  - **Start Time**: Scheduled start time of the task.
  - **End Time**: Scheduled end time of the task.

#### **2. Task List**
- Displays all tasks in a table.
- Each task has a "Delete" button to remove it from the list.
- A "Clear All Tasks" button removes all tasks from the list.

#### **3. Workflow Visualization**
- Displays a bar chart of tasks using Chart.js.
- The x-axis represents task names, and the y-axis represents the time required.

#### **4. Export Workflow**
- Users can export the workflow as a JSON or CSV file from the settings page.

#### **5. Import Workflow**
- Users can import a workflow from a JSON file on the settings page.

#### **6. Notification Preferences**
- Users can enable or disable task reminders on the settings page.


### **API Endpoints**

#### **1. `GET /`**
- Renders the home page (`index.html`).

#### **2. `POST /add_task`**
- Adds a new task to the workflow.
- **Request Body**:
  ```json
  {
    "name": "Task 1",
    "time": 5,
    "dependencies": ["Task 2"],
    "assignee": "John",
    "startTime": "2023-10-01T09:00",
    "endTime": "2023-10-01T14:00"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Task added successfully!"
  }
  ```

#### **3. `GET /get_tasks`**
- Returns the list of tasks.
- **Response**:
  ```json
  [
    {
      "name": "Task 1",
      "time": 5,
      "dependencies": ["Task 2"],
      "assignee": "John",
      "startTime": "2023-10-01T09:00",
      "endTime": "2023-10-01T14:00"
    }
  ]
  ```

#### **4. `POST /delete_task`**
- Deletes a task by name.
- **Request Body**:
  ```json
  {
    "name": "Task 1"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Task deleted successfully!"
  }
  ```

#### **5. `POST /clear_tasks`**
- Clears all tasks.
- **Response**:
  ```json
  {
    "message": "All tasks cleared successfully!"
  }
  ```

#### **6. `POST /import_tasks`**
- Imports tasks from a JSON file.
- **Request Body**:
  ```json
  [
    {
      "name": "Task 1",
      "time": 5,
      "dependencies": ["Task 2"],
      "assignee": "John",
      "startTime": "2023-10-01T09:00",
      "endTime": "2023-10-01T14:00"
    }
  ]
  ```
- **Response**:
  ```json
  {
    "message": "Tasks imported successfully!"
  }
  ```


### **How to Use**

#### **1. Running the App**
1. Install the required dependencies:
   ```bash
   pip install flask
   ```
2. Run the Flask app:
   ```bash
   python app.py
   ```
3. Open your browser and navigate to `http://127.0.0.1:5000`.

#### **2. Adding Tasks**
1. Fill out the form on the home page.
2. Click "Add Task" to add the task to the list.

#### **3. Deleting Tasks**
1. Click the "Delete" button next to a task to remove it.

#### **4. Clearing All Tasks**
1. Click the "Clear All Tasks" button to remove all tasks.

#### **5. Exporting Workflows**
1. Go to the settings page.
2. Click "Export as JSON" or "Export as CSV" to download the workflow.

#### **6. Importing Workflows**
1. Go to the settings page.
2. Click "Choose File" to select a JSON file.
3. Click "Import Workflow" to load the data.

#### **7. Managing Notifications**
1. Go to the settings page.
2. Toggle the "Enable Task Reminders" switch to enable or disable reminders.

---

### **Code Examples**

#### **Adding a Task**
```javascript
fetch('/add_task', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "Task 1",
        time: 5,
        dependencies: ["Task 2"],
        assignee: "John",
        startTime: "2023-10-01T09:00",
        endTime: "2023-10-01T14:00"
    })
});
```

#### **Deleting a Task**
```javascript
fetch('/delete_task', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: "Task 1" })
});
```

#### **Clearing All Tasks**
```javascript
fetch('/clear_tasks', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
});
```


### **Future Enhancements**
1. **Task Editing**:
   - Allow users to edit existing tasks.
2. **User Authentication**:
   - Add user accounts to save workflows privately.
3. **Advanced Analytics**:
   - Provide insights into task completion times and dependencies.
