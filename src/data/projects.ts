import { Project } from "../types/Project";

export const projects: Project[] = [
	{
		id: 1,
		title: 'AI Chatbot',
		description: `Website with a chat window for talking to an AI bot 🤖. It uses the Google Gemini AI-Chatbot API to make conversations smooth and easy to use.

💡 What I Built:
• A simple and responsive chat interface
• Connection with AI for real-time communication
• Works well on different devices

🛠️ Features:
• Chat with an AI bot 🤖
• Choose emojis 😜 to add personality to your messages
• Attach images 🌆 for a more interactive conversation
• Clean and easy-to-use design`,
		image: 'images/ai-chatbot.png',
		stack: ['React', 'Firebase', 'Gemini API', 'Tailwind CSS'],
		githubLink: 'https://github.com/XOFFF/ai-chatbot',
	},
	{
		id: 2,
		title: 'Portfolio Website',
		description: `This portfolio website is the result of my first deeply collaborative project with ChatGPT 🤖 — from planning to debugging, I worked side by side with the AI to build a modern, responsive, and well-structured showcase of my frontend skills.

💡 What I Built:
• A clean, minimal portfolio layout
• Dynamic project cards with modal popups
• Fully responsive design for all screen sizes

🛠️ Features:
• View project details in a popup window 🔍
• Visit live demos 🌐 and GitHub repositories 🐱
• Mobile-friendly and accessible design 📱
• Built with TypeScript for better code quality ✔️`,
		image: 'images/portfolio.png',
		stack: ['TypeScript', 'React', 'Tailwind', 'ChatGPT', 'GitHub', 'Firebase'],
		liveLink: 'https://portfolio-a81c2.web.app/',
		githubLink: 'https://github.com/XOFFF/my-portfolio'
	},
	{
		id: 3,
		title: 'To-Do List',
		description: `I've developed a fully functional To-Do List Web App to showcase my skills in frontend development. This app is a user-friendly tool for organizing tasks and managing time effectively.

💡 What I Used:
• Firebase for hosting and real-time data updates
• CSS3 for responsive and clean design

🛠️ Features:
• Add, edit, and delete tasks seamlessly
• Responsive design for mobile and desktop
• Persistent data for a smooth user experience`,
		image: 'images/todo.png',
		stack: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Firebase'],
		liveLink: 'https://todo-69969.web.app/',
		githubLink: 'https://github.com/XOFFF/todo',
	},
	{
		id: 4,
		title: 'E-commerce App',
		description: 'A modern e-commerce web application built with React, TypeScript, and Tailwind CSS, featuring a clean user interface, reusable components, and responsive design. This project showcases core e-commerce functionalities like product listing and dynamic routing.',
		image: 'images/web-shop.png',
		stack: ['React', 'TypeScript', 'Tailwind'],
		githubLink: 'https://github.com/XOFFF/E-commerce_App'
	},
	{
		id: 5,
		title: 'Crypto market',
		description: `A web application that provides users with real-time cryptocurrency data, including prices, trading volumes, and market capitalization for various cryptocurrencies. Integrated a third-party API to get cryptocurrency information. To build responsive UI- used Ant Design and react-chartjs-2. `,
		image: 'images/crypto-app.png',
		stack: [
			"React",
			"JavaScript",
			"Ant Design",
			"react-chartjs-2",
			"RESTful API",
			"GitHub"
		  ]
		  ,
		githubLink: 'https://github.com/XOFFF/react-crypto-app'
	},
	{
		id: 6,
		title: 'Exchange Rate Calculator',
		description: `React Project Website using FreecurrencyAPI. It was developed by me to get and calculate the current exchange rate with other currencies.`,
		image: 'images/exchange-rate-calculator.png',
		stack: ["React",
  "Microservices",
  "RESTful API",
  "OOP",
  "GitHub",
			"Firebase"],
		liveLink: 'https://exchange-rate-calculator-2817e.web.app/',
		githubLink: 'https://github.com/XOFFF/Exchange-Rate-Calculator'
	}
];
