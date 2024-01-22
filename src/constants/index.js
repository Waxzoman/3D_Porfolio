import { webdevcert, tscourse } from "../assets/images";
import {
    mongoose,
    bootstrap,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    threejs,
    campground,
    brain,
    pictureinpicture,
    darkmode,
    list,
    joke,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mongoose,
        name: "Mongoose.js",
        type: "ORM",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend"
    },
    {
        imageUrl: threejs,
        name: "Threejs",
        type: "Frontend"
    }
];
export const qualifications = [
    {
        id: 1,
        title: "The Web Developer Bootcamp 2024",
        instructor: "Colt Steele",
        platform: "Udemy",
        date: "November 2023",
        length: "74 total hours",
        certificateNumber: "UC-77050143-681d-4faa-8772-1ee5fb7f4e14",
        CertUrl: "https://www.ude.my/UC-77050143-681d-4faa-8772-1ee5fb7f4e14",
        img: webdevcert,
        description: [
            "The ins and outs of HTML5, CSS3, and Modern JavaScript for",
            "Create responsive, accessible, and beautiful layouts",
            "Create a complicated yelp-like application from scratch",
            "Create static HTML and CSS portfolio sites and landing pages",
            "Create complex HTML forms with validations",
            "Implement responsive navbars on websites",
            "Use CSS Frameworks including Bootstrap 5, TailwindCSS and Material-UI",
            "Use common JS data structures like Arrays and Objects",
            "Use JavaScript variables, conditionals, loops, functions, arrays, and objects",
            "Manipulate the DOM with vanilla JS",
            "Use Postman to monitor and test APIs",
            "Write complex web apps with multiple models and data associations",
            "Use Express and MongoDB to create full-stack JS applications",
            "Master the command line interface",
            "Understand the ins and outs of HTTP requests",
            "Implement user authentication",
            "Create single page applications with AJAX",
            "Make REAL web applications using cutting-edge technologies",
            "Recognize and prevent common security exploits like SQL-Injection & XSS",
            "Create a blog application from scratch using Node, Express, and MongoDB",
            "Deploy applications that work with cloud databases",
            "Implement full authentication from scratch",
            "Write Javascript functions, and understand scope and higher order functions",
            "Create full-stack web applications from scratch",
            "Write JavaScript based browser games",
            "Use NodeJS to write server-side JavaScript",
            "Use NPM to install all sorts of useful packages",
            "Create a beautiful, responsive landing page for a startup",
        ],
    },
 
    {
        id: 2,
        title: "Mastering TypeScript 2024 Edition",
        instructor: "Colt Steele",
        platform: "Udemy",
        date: "January 2024",
        length: "11 hours",
        certificateNumber: "UC-3b9045d8-4e25-48b6-9a9f-e5a3fbaef536",
        CertUrl: "https://www.ude.my/UC-3b9045d8-4e25-48b6-9a9f-e5a3fbaef536",
        img: tscourse,
        description: [
            "The ins and outs of ALL of TypeScript's syntax",
            "TypeScript Interfaces, Generics, Classes, Modules, and more",
            "Integrate TypeScript with Webpack",
            "Use TypeScript with ReactJS",
        ]
    },
];

export const sideSkills = [
    {
        id: 3,
        title: "What else I can do?",
        description: [
            "Set up RESTful APIs",
            "Create light/dark mode pages with dynamic UI elements using vanillajs",
            "Use Threejs library to create stunnig 3D elements in Javascript",
            "Use React-three-fiber and its ecosystem to create 3D components in Reactjs",
            "Import and optimize 3D files for faster rendering in Threejs canvas",
            "Implementing postprocessing methods in .jsx and .tsx files for 3D elements",
            "Implementing animations of 3D elements to work with UI",
            "Setting up Mongoose ODM in the back-end to work with Mongo Database",
            "Create schemas for noSQL databases",
            "Optimizing code for space/time complexity",
        ]
    },
    {
        id: 5,
        title: "Languages",
        description: [
            "Polish-Native",
            "Arabic-Native",
            "English-C1",
            "French-A2",
        ]
    },
    {
        id: 5,
        title: "Soft Skills",
        description: [
            "Communication- I'm able to convey technical and non-technical matters concisely to my team",
            "Honesty - Understanding my weaknesses, working on them and being open to criticism from my seniors and co-workers",
            "Problem-solving. I do not rest till the issue is resolved",
            "If I don't know something, I make sure I listen and learn",
            "Adaptability - Constant education and learning new technologies to be on top of trends",
            "Listening - I'm attentive to what my seniors and co-workers convey to me",
            "Open-minded - Always open to new ideas and opinions",
            "Emotional inteligence and composure",
        ]
    }
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: campground,
        theme: 'btn-back-red',
        name: 'YelpCamp',
        description: 'YelpCamp is a full CRUD web app with Mongo database running on mongoose ODM. Application has integrated user authentication and authorization with security measures to prevent cross-site scripting. YelpCamp features: full CRUD capability with Express and Mongodb in Nodejs environment, error handling and data validation, Express routing with session and cookies, authorization and authentication on Passportjs, image upload with Cloudinary API, configured Mapbox api, sanitization and security measures against XSS and Mongo injection. ',
        link: 'https://yelpcamp-y3ze.onrender.com/',
    },
    {
        iconUrl: brain,
        theme: 'btn-back-yellow',
        name: 'SummarizerGPT',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://summarizergpt.onrender.com/',
    },
    {
        iconUrl: list,
        theme: 'btn-back-orange',
        name: 'Redux Todo',
        description: 'A simple Todo application that implements redux with local storage',
        link: 'https://redux-todo-2mm8.onrender.com/'
    },
    {
        iconUrl: pictureinpicture,
        theme: 'btn-back-green',
        name: 'Picture-in-picture Chrome',
        description: 'Web-application for multi-tasking that generates picture-in-picture mode with Javascript.',
        link: 'https://waxzoman.github.io/Picture-in-picture/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Unsplash infinite scroll',
        description: 'Implementation of infinite scroll with unsplash API',
        link: 'https://waxzoman.github.io/Infinite-scroll/',
    },
    {
        iconUrl: darkmode,
        theme: 'btn-back-black',
        name: 'Light/Dark mode',
        description: 'Template website to present ligh/dark mode implementation with vanillajs and store user preferences in local storage',
        link: 'https://waxzoman.github.io/Light-and-dark-mode/',
    },
    {
        iconUrl: joke,
        theme: 'btn-back-blue',
        name: 'Joke-teller',
        description: 'Application that uses joke api and turns them into audio with VoiceRSS text-to-speech SDK',
        link: 'https://waxzoman.github.io/Joke-teller/'
    }
];