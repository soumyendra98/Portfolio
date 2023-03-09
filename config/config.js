
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Satyendra",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Satyendra Shrivastava",
	description: "I am a passionate software developer, currently enrolled in a Master's program in Information Technology at Arizona State University.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1ZugKaCiwj8Yv6cBcXMmbFk2mSHOgxtis/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I am currently enrolled in a Master's program in Information Technology at Arizona State University.",
		"As a Full stack developer, I'm constantly blown away by the sheer awesomeness of computers and the infinite possibilities they bring to the table! My love for technology knows no bounds and I'm always up for a good coding challenge! The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals.",
		"When I’m not programming, I focus on my hobbies which are: Engaging in physical exercise, which is an integral part of my routine, and I particularly enjoy strength training at the gym as a means of maintaining my physical wellbeing. I also love to meet and hang out with new people.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Web Development",
			description: "I create responsive websites using the MERN (Mongo, Express, Reactjs, Nodejs) stack. I also have expereience with frameworks like Nextjs.",
			icons: null,
		},
		{
			title: "Machine Learning and AI",
			description: "My professional experience encompasses the fields of machine learning and artificial intelligence, with a particular passion for computer vision and natural language processing. ",
			icons: null,
		},
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Weather App",
			description: "The weather application provides users with comprehensive information on a range of meteorological variables, including but not limited to temperature, wind speed, and humidity.",
			icons: [
				// {
				// 	icon: faAppStore,
				// 	link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
				// },
				// {
				// 	icon: faGithub,
				// 	link: "https://github.com/hashirshoaeb/star_book",
				// },
			]
		},
		{
			title: "Portfolio",
			description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
			icons: [
			// 	{
			// 		icon: faGithub,
			// 		link: "https://github.com/satyendra1010/Portfolio",
			// 	},
			]
		},
		{
			title: "Sentiment Analysis Tool",
			description: "Created a sentiment analysis tool with the primary objective of identifying the presence of polarizing language within a given text document, such as a news article.",
			// icons: [
			// 	{
			// 		icon: faAppStore,
			// 		link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
			// 	},
			// 	{
			// 		icon: faGooglePlay,
			// 		link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
			// 	},
			// ]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at satyendra1010@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:satyendra1010@gmail.com",
			isPrimary: true,
		},
		// {
		// 	title: "Schedule Meeting",
		// 	link: "",
		// 	isPrimary: false,
		// },
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Satyendra Shrivastava | Software Engineer | Reactjs Developer",
	description: "I create responsive static websites using Reactjs. I am a passionate software developer, currently enrolled in a Master's program in Information Technology at Arizona State University.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "Satyendra Shrivastava",
	description: "Software Engineer | Reactjs Developer",
	cards: [
		{
			title: "My website",
			link: "https://hashirshoaeb.com/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/satyendra1010",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/satyendra-shrivastava-7519831b4/",
		},
	]
}