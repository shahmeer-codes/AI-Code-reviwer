# 🤖 AI Code Reviewer (Full Stack MERN + Gemini AI)

An AI-powered code review tool that analyzes your code and provides **professional-grade feedback** using Google's Gemini API.  
Built with **React (frontend)** and **Node.js + Express (backend)**.

---

## 🚀 Features

- ✨ AI-powered code review using Gemini AI
- 🧠 Detailed feedback (bugs, performance, security, best practices)
- 💻 Real-time code editor
- 📄 Markdown-rendered AI responses
- ⚡ Loading states and error handling
- 🔒 Rate limiting protection (anti-spam)
- 🌐 REST API backend
- 🎯 Clean and responsive UI

---

## 🏗️ Tech Stack

### Frontend
- React.js
- Axios
- @uiw/react-textarea-code-editor
- react-markdown
- rehype-highlight
- highlight.js
- Tailwind CSS

### Backend
- Node.js
- Express.js
- Google Gemini AI API (@google/genai)
- dotenv
- express-rate-limit
- CORS

---

## 📂 Project Structure


AI-Code-Reviewer/
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── package.json
│
├── backend/
│ ├── controller/
│ │ └── ai.send.js
│ ├── routes/
│ │ └── ai.routes.js
│ ├── services/
│ │ └── ai_service.js
│ ├── server.js
│ └── package.json


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/ai-code-reviewer.git
cd ai-code-reviewer
2️⃣ Backend Setup
cd backend
npm install
Create .env file:
PORT=5000
GOOGLE_API_KEY=your_gemini_api_key_here
Run backend:
npm run dev
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
🌐 API Endpoint
🔥 POST /ai/send-code

Request Body:

{
  "code": "function sum(a, b) { return a + b }"
}

Response:

{
  "message": "Code review generated successfully",
  "data": "### Summary...\n### Issues...\n..."
}
🧠 How It Works
User writes code in editor
Frontend sends code to backend API
Backend sends code to Gemini AI
AI returns detailed code review
Frontend renders response in Markdown format
⚠️ Known Issues
Gemini free tier has request limits (429 errors after quota exceeded)
Requires valid Google API key
🔐 Rate Limiting

To prevent abuse:

Max 5 requests per minute per IP
Implemented using express-rate-limit
📸 UI Preview


👨‍💻 Author

Shahmeer Rana

GitHub: https://github.com/shahmeer-codes
LinkedIn: https://www.linkedin.com/in/shahmeer-arshad
📄 License

This project is open-source and free to use.