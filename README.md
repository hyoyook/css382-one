## Project Information

| Field | Details |
|-------|---------|
| **NetID** | hyoyook |
| **Name** | Hyobin Yook |
| **GitHub Repository** | https://github.com/hyoyook/css382-one |
| **Deployed Site** | https://yook-css382-one.netlify.app/ |
| **Idea** | An arcade-style dodging game where players control a circle at the bottom of the screen and avoid falling blocks of varying widths and random pastel colors. The game scores players based on survival time in seconds, with collision detection determining game over. Built with HTML5 Canvas, JavaScript, and deployed on Netlify. |

---

# Dodge the Falling Blocks

A fun, interactive web game built for **UWB CSS382** class project.

## 🎮 Game Overview

In this arcade-style game, control a player circle at the bottom of the screen and dodge falling blocks of varying widths. Each block is rendered in a unique random pastel color for visual appeal. The longer you survive, the higher your score!

### Game Features
- **Player Control**: Move left and right using arrow keys or mouse movement
- **Dynamic Obstacles**: Blocks fall from the top with random widths (30-70px) and speeds
- **Pastel Colors**: Each block features a unique, randomly generated pastel color
- **Score System**: Your score is based on survival time in seconds
- **Game Over Detection**: Collision with any block ends the game
- **Restart Option**: Play again with a single click

## 🚀 Live Demo

**Play the game now:** [https://yook-css382-one.netlify.app/](https://yook-css382-one.netlify.app/)

The game is deployed on Netlify and runs entirely in your browser!

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Canvas API)
- **Backend**: Python Flask (for local development)
- **Deployment**: Netlify (static site hosting)
- **Font**: Google Fonts - Poppins (trendy, blocky typography)

## 📁 Project Structure

```
css382-one/
├── public/                 # Static site (Netlify deployment)
│   ├── index.html
│   ├── css/style.css
│   └── js/game.js
├── templates/              # Flask templates (local development)
│   └── index.html
├── static/                 # Static assets (local development)
│   ├── css/style.css
│   └── js/game.js
├── app.py                  # Flask application
├── requirements.txt        # Python dependencies
└── netlify.toml           # Netlify configuration
```

## 🎯 How to Play

1. Visit [https://yook-css382-one.netlify.app/](https://yook-css382-one.netlify.app/)
2. Use **LEFT/RIGHT arrow keys** or **move your mouse** to control the blue circle
3. Avoid the falling blocks
4. Your score increases with each second you survive
5. Click **RESTART** to play again

## 💻 Local Development

### Prerequisites
- Python 3.8+
- pip (Python package manager)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/hyoyook/css382-one.git
cd css382-one
```

2. Create a virtual environment:
```bash
python3 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the Flask app:
```bash
python app.py
```

5. Open your browser and navigate to `http://localhost:5000`

## 🚀 Deployment

The project is configured for Netlify deployment. The `netlify.toml` file specifies that the `public/` directory is the publish folder.

To deploy your own version:
1. Push to a GitHub repository
2. Connect the repository to Netlify
3. Netlify will automatically deploy from the `public/` directory

## ✨ Created with GitHub Copilot

This entire project was created **almost exclusively using GitHub Copilot**, including:
- Game logic and mechanics
- HTML structure and styling
- CSS design (including Poppins font integration)
- JavaScript canvas rendering
- Flask backend setup
- Deployment configuration

Copilot provided intelligent code suggestions, completions, and structure guidance throughout the development process, making this a showcase of AI-assisted web game development.

## 📝 Course Information

**Course**: CSS 382 A Sp 26: Introduction To Artificial Intelligence  
**Institution**: University of Washington, Bothell  
**Semester**: Spring 2026  
**Professor**: Dr. Yusuf Pisan

## 📄 License

This project is created as a class assignment for educational purposes.

---

**Enjoy the game and happy dodging!** 🎮✨