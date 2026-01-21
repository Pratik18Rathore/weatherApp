# 🌦️ React Weather App

A modern **Weather Application** built with **React + Vite** that displays real-time weather data using the **OpenWeather API**.

---

## 🚀 Features

- 🔍 Search weather by city name  
- 🌡️ Temperature in Celsius  
- ☁️ Weather conditions & description  
- 🎥 Animated video background  
- ⚡ Fast performance with Vite  
- 📱 Responsive design  

---

## 🛠️ Tech Stack

- ⚛️ React  
- ⚡ Vite  
- 🌐 OpenWeather API  
- 📦 Axios  
- 🎨 Tailwind CSS  

---

## 📂 Project Structure

src/
├── components/
│ ├── SearchBar.jsx
│ └── WeatherCard.jsx
├── App.jsx
├── main.jsx
├── index.css
└── video.mp4
.env
index.html


---

## 🔑 Environment Variable Setup

Create a `.env` file in the **project root** and add:

VITE_OPENWEATHER_API_KEY=your_api_key_here


⚠️ Important:
- Must start with `VITE_`
- No quotes
- Restart the dev server after adding

---

## ▶️ Run the Project

Install dependencies:

npm install


Start the development server:

npm run dev


Open in browser:

http://localhost:5173


---

## ❗ Common Issues

- ❌ **401 Unauthorized** → API key not activated yet (wait 10–15 minutes)
- ❌ **appid=undefined** → `.env` not loaded or server not restarted

---

## 🌍 API Used

- OpenWeather API

---

## 📸 Preview

✨ Clean UI with animated background and real-time weather data.

---

## 🙌 Author

Made with ❤️  

Happy Coding! 🚀
