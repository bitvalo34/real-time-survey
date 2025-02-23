# real-time-survey
Lab 05 of real time survey.

# Interactive Survey Application

This is an interactive survey application built with React, Vite, and Bootstrap. It features real-time validation and dynamic progress updates. The application uses Vite for a fast development experience.

## Features

- **Real-time validation:** Form fields validate as you type.
- **Dynamic progress tracking:** A progress bar updates as you complete the form.
- **Interactive UI:** Built with React and styled using Bootstrap.
- **Form Submission:** The form can only be submitted once all required fields are valid.

## Getting Started

### Prerequisites

- **Node.js** (version 14 or above)
- **npm**

### Installation

1. **Clone the Repository:**

   git clone https://github.com/bitvalo34/real-time-survey
   cd real-time-survey

Install Dependencies:

Install Vite as a Dev Dependency:

npm install --save-dev vite

Project Structure
Make sure your project has the following structure:

/real-time-survey
├── index.html         # Entry point HTML file
├── package.json       # Project configuration and scripts
├── /src
│   ├── index.js       # React entry point file (renders the App)
│   ├── App.js         # Main App component
│   ├── components/    # React components (e.g., SurveyForm, SurveyProgressBar)
└── /node_modules      # Installed dependencies

Running the Application with Vite
Start the Development Server:

Run the following command to launch the Vite development server:

npm run dev

You should see output similar to:

VITE v6.x  ready in 500ms
➜  Local:   http://localhost:5173/
➜  Network: http://192.168.x.x:5173/

Open Your Browser:

Navigate to http://localhost:5173/ to view the application.

Make sure your `package.json` includes the following scripts:

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}

