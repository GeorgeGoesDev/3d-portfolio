import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    HackTogether,
    MemoryGame,
    OldPortfolio,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "works",
        title: "Works",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Web Developer",
        icon: web,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },

];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I would highly recommend George as a web developer. Their passion for web development is remarkable, and their attention to detail ensures high-quality work. George has consistently met deadlines and demonstrated a strong work ethic.",
        name: "Theo K.",
        designation: "DevOps Engineer",
        company: "TomTom",
        image: "src/assets/theo.jpeg",

    },

];

const projects = [
    {
        name: "Hack Together",
        description:
            "Web-based platform that allows users to create projects and search for developers, or join projects.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Firebase",
                color: "green-text-gradient",
            },
            {
                name: "Node.js",
                color: "pink-text-gradient",
            },
            {
                name: "Three.js",
                color: "orange-text-gradient",
            },
        ],
        image: HackTogether,
        source_code_link: "https://github.com/GeorgeGoesDev/hack-together",
        // link: "",
    },
    {
        name: "Memory Game",
        description:
            "A simple memory game built with React.js. The goal of the game is to find as many pairs as you can.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Firebase",
                color: "green-text-gradient",
            },

        ],
        image: MemoryGame,
        source_code_link: "https://github.com/GeorgeGoesDev/memoryGame",
        link: "https://memorygame-9de72.web.app/",
    },
    {
        name: "George's Portfolio",
        description:
            "My old portfolio website built with React.js Material UI",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Firebase",
                color: "green-text-gradient",
            },
            {
                name: "Material UI",
                color: "pink-text-gradient",
            },
        ],
        image: OldPortfolio,
        source_code_link: "https://github.com/GeorgeGoesDev/portfolio",
        link: "https://portfolio-24310.web.app/",
    },
];

export { services, technologies, experiences, testimonials, projects };