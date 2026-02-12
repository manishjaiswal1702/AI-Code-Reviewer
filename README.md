# 🤖 AI Code Reviewer

AI-powered code reviewer that gives instant, intelligent feedback on your JavaScript code — built using Google Gemini, Express.js, and React.js.

---

## 🚀 Features

- 🧠 Uses **Google Gemini API** to review JavaScript code
- 🔍 Detects errors, bad practices, and optimization opportunities
- 🖥️ Real-time syntax-highlighted code editor (PrismJS + React Simple Code Editor)
- 📋 Markdown-formatted AI feedback
- 🔄 Full-stack architecture (React + Node.js + Express)

---

## 🛠 Tech Stack

| Frontend     | Backend          | AI Integration        |
|--------------|------------------|-----------------------|
| React.js     | Node.js, Express | Google Gemini API     |

---

## 📦 Project Structure

```
AI-Code-Reviewer/
│
├── frontend/   → React app
├── Backend/    → Express server
└── README.md
```

---

## ⚙️ Local Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/ai-code-reviewer.git
cd ai-code-reviewer
```

---

### 2️⃣ Setup Backend

```bash
cd Backend
npm install
```

Create a `.env` file inside Backend folder:

```
GOOGLE_GEMINI_KEY=your_google_cloud_api_key
PORT=3000
```

Start backend:

```bash
npm start
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

Backend requires:

```
GOOGLE_GEMINI_KEY=your_google_cloud_api_key
```

Make sure:

- Gemini API is enabled
- Billing is attached (if required)

---

## 📌 Deployment Status

🚧 Currently not deployed.  
Run locally using the instructions above.

---

## 💡 Future Improvements

- Add authentication system
- Support multiple programming languages
- Add review history storage
- Implement request rate limiting
- Improve UI/UX and loading states

---

## 🧑‍💻 Author

Built with ❤️ by Manish Kumar Jaiswal
