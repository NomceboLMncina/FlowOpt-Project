# **FlowOpt Documentation**

## **Table of Contents**
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [Usage](#usage)
6. [Customization](#customization)
7. [Troubleshooting](#troubleshooting)
8. [Future Enhancements](#future-enhancements)

---

## **1. Introduction**
**FlowOpt** is a web-based workflow optimization app designed to help users analyze and optimize their daily workflows or processes. It allows users to input tasks, estimate time requirements, visualize workflows, and identify bottlenecks or inefficiencies. The app is built using **HTML**, **CSS**, **JavaScript**, and **Python Flask**, with **Chart.js** for data visualization.

---

## **2. Features**
- **Task Management**:
  - Add tasks with details like name, time, dependencies, assignee, start time, and end time.
  - View tasks in a table.
- **Workflow Visualization**:
  - Visualize tasks and timelines using a bar chart.
- **Background Customization**:
  - Change the background color or set a gradient background.
  - Upload a background image.
- **Dark Mode**:
  - Toggle between dark and light themes.
- **Task Reminders**:
  - Receive browser notifications 1 hour before a task is due.
- **Export Workflow**:
  - Export the workflow as a CSV file.
- **Share Workflow**:
  - Generate a shareable link for the workflow.

---

## **3. Technologies Used**
- **Frontend**:
  - HTML, CSS, JavaScript
  - Bootstrap (for styling)
  - Chart.js (for data visualization)
  - Font Awesome (for icons)
- **Backend**:
  - Python Flask (for data processing)
- **Database**:
  - Local Storage (for saving tasks and settings)
- **Hosting**:
  - GitHub Pages or Heroku (for deployment)

---

## **4. Setup Instructions**

### **Prerequisites**
- Python 3.x
- Git
- A code editor (e.g., VS Code)

### **Steps**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/FlowOpt.git
   cd FlowOpt
   ```

2. **Install Dependencies**:
   Install Flask and other required packages:
   ```bash
   pip install flask
   ```

3. **Run the App**:
   Start the Flask server:
   ```bash
   python app.py
   ```

4. **Access the App**:
   Open your browser and go to:
   ```
   http://127.0.0.1:5000
   ```

---

## **5. Usage**

### **Home Page**
- **Add Task**:
  - Fill out the form to add a new task.
  - Click **Add Task** to save the task.
- **Task List**:
  - View all tasks in the table.
- **Workflow Visualization**:
  - See a bar chart of tasks and their time requirements.

### **Settings Page**
- **Background Customization**:
  - Choose a gradient background or upload an image.
- **Dark Mode**:
  - Toggle between dark and light themes.
- **Export Workflow**:
  - Export the workflow as a CSV file.
- **Share Workflow**:
  - Generate a shareable link for the workflow.

---

## **6. Customization**

### **Change Background**
1. Go to the **Settings** page.
2. Choose two colors for a gradient background or upload an image.
3. Click **Apply Gradient** or **Apply Image**.

### **Enable Dark Mode**
1. Go to the **Settings** page.
2. Toggle the **Dark Mode** switch.

### **Export Workflow**
1. Go to the **Settings** page.
2. Click **Export as CSV** to download the workflow.

### **Task Reminders**
- The app will automatically send a browser notification 1 hour before a task is due.

---

## **7. Troubleshooting**

### **Common Issues**
1. **Tasks Not Saving**:
   - Ensure the `data/workflows.json` file exists and is writable.
   - Check the browser console for errors.

2. **Chart Not Displaying**:
   - Ensure `Chart.js` is loaded correctly.
   - Verify that tasks have valid time values.

3. **Dark Mode Not Working**:
   - Ensure the `theme` key is saved in `localStorage`.
   - Check the browser console for errors.

### **Debugging Tips**
- Use `console.log()` in JavaScript to debug issues.
- Check the Flask server logs for backend errors.

---

## **8. Future Enhancements**
- **User Authentication**:
  - Allow users to create accounts and save workflows.
- **Real-Time Collaboration**:
  - Enable multiple users to collaborate on the same workflow.
- **Advanced Analytics**:
  - Add machine learning for predictive analytics.
- **Mobile App**:
  - Develop a mobile version of the app using React Native.

---

## **Conclusion**
**FlowOpt** is a powerful yet simple tool for optimizing workflows. With its intuitive interface and robust features, it’s perfect for individuals and small teams looking to improve productivity. Feel free to customize and extend the app to suit your needs!
