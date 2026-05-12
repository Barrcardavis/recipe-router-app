📘 Recipe Router App
🧩 Overview
The Recipe Router App is a Remix‑based project that demonstrates dynamic routing, component composition, and state management in a modern React environment.
Users can browse a recipe gallery, view detailed recipe pages, and navigate seamlessly using a responsive NavBar.

🚀 Features
Dynamic Routing: Each recipe has its own route (/recipe/:id) for clean navigation.

Reusable Components: NavBar and Gallery components maintain consistent layout and styling.

Local Image Assets: Recipes use locally stored images served from the /public/images/recipes/ directory.

Responsive Design: Grid layout adapts to different screen sizes.

Clean UI: Centered headings, balanced spacing, and optimized image sizing for readability.

🧠 Tech Stack
Category	Tools
Framework	Remix
Language	JavaScript (ES6)
Styling	Inline CSS + Remix defaults
Environment	Node.js
Version Control	Git + GitHub


🧩 Project Structure
recipe-router-app/
│
├── app/
│   ├── components/
│   │   └── NavBar.jsx
│   ├── data/
│   │   └── recipes.js
│   ├── routes/
│   │   ├── _index.jsx
│   │   ├── gallery.jsx
│   │   └── recipe.$id.jsx
│   └── root.tsx
│
├── public/
│   └── images/
│       └── recipes/
│           ├── beef-tacos.jpg
│           ├── chocolate-cake.jpg
│           └── pancakes.jpg
│
├── package.json
├── remix.config.js
├── README.md
└── .gitignore

Installation & Setup
Clone the repository:
git clone https://github.com/Barrcardavis/recipe-router-app.git

Navigate into the project folder:
cd recipe-router-app

Install dependencies:
npm install

Start the development server:
npm run dev

Open your browser at
http://localhost:5173

🧩 Usage
Click a recipe card in the gallery to view its details.

Use the NavBar to navigate between pages.

Each recipe page displays an image, ingredients, and instructions.

Images are optimized for readability and layout balance.

🧩 Credits
Developed by David A. Davis  
North Seattle College — AD350 Application Development
Instructor: (Add instructor name if required)

🧩 License
This project is for educational purposes under North Seattle College coursework.
No commercial use intended.

