import { meta, shopify, starbucks, webdevcert, tscourse } from "../assets/images";
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
    threejs
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
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
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
        id: 4,
        title: "Soft Skills",
        description: [
            "Communication, communication and communication",
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
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];