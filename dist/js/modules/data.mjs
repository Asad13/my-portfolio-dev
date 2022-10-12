export const certificates = [
    {
        type: 'Frontend',
        name: 'Responsive Web Design',
        provider: 'FreeCodeCamp',
        imgURL: '/dist/assets/images/certificates/fcc/certificate-fcc-rwd.jpg',
        logo: '/dist/assets/images/logo/fcc.png',
        description: 'I completed the Responsive Web Design Course from FreeCodeCamp in 2021. It consists of 300 hours of learning materials. Besides it I also learn the concepts of HTML5 and CSS3 from MDN and W3schools , YouTube, etc and have done a lot of projects. You can see the projects on my github account and also you can see the projects related to this course by following the link to the certificate. You can also verify the certificate from there. My projects are also listed in the Project Section here and you can visit them by following the link provided with them.',
        issued: 'October 25, 2021',
        certificationId: '',
        certificationURL: 'https://freecodecamp.org/certification/asad_mujumder/responsive-web-design',
    },
    {
        type: 'Frontend',
        name: 'JavaScript Algorithms and Data Structures',
        provider: 'FreeCodeCamp',
        imgURL: '/dist/assets/images/certificates/fcc/certificate-fcc-js.jpg',
        logo: '/dist/assets/images/logo/fcc.png',
        description: 'I completed the JavaScript Algorithms and Data Structures Course from FreeCodeCamp in 2022. It consists of 300 hours of learning materials. Besides it I also learn the concepts of Javascript and its various libraries from MDN, W3schools, YouTube, etc and have done a lot of projects. You can see the projects on my GitHub account and also you can see the projects related to this course by following the link to the certificate. You can also verify the certificate from there. My projects are also listed in the Project Section here and you can visit them by following the link provided with them.',
        issued: 'July 8, 2022',
        certificationId: '',
        certificationURL: 'https://www.freecodecamp.org/certification/asad_mujumder/javascript-algorithms-and-data-structures',
    },
    {
        type: 'Backend',
        name: 'Back End Development and APIs',
        provider: 'FreeCodeCamp',
        imgURL: '/dist/assets/images/certificates/fcc/certificate-fcc-backend.jpg',
        logo: '/dist/assets/images/logo/fcc.png',
        description: 'I completed the Back End Development and APIs Course from FreeCodeCamp in 2022. It consists of 300 hours of learning materials. Besides it I also learn the concepts of Node.js, Express.js etc from their respective documentation, MDN, YouTube, etc and have done a lot of projects. You can see the projects on my GitHub account and also you can see the projects related to this course by following the link to the certificate. You can also verify the certificate from there. My projects are also listed in the Project Section here and you can visit them by following the link provided with them.',
        issued: 'July 17, 2022',
        certificationId: '',
        certificationURL: 'https://www.freecodecamp.org/certification/asad_mujumder/back-end-development-and-apis',
    },
];

export const projects = [
    {
        type: ['fullstack','mern','react','node'],
        title: 'Memories Social Media App',
        imgURL: '/dist/assets/images/portfolio/memories-social-media-app.jpg',
        link: 'http://am-memories.herokuapp.com',
        githubLink: {
            frontend: 'https://github.com/Asad13/memories-frontend',
            backend: 'https://github.com/Asad13/social-media-app-backend',
        },
        youtubeLink: '',
        desc: 'A social media app to create and share memories. The frontend of the app is created using React. Node and Express have been used to create the backend and the API. MongoDB (with Mongoose as ODM) has been used to store the user and post data.',
    },
    {
        type: ['frontend','javascript','svg'],
        title: 'Balloon Structure Designing Tool',
        imgURL: '/dist/assets/images/portfolio/balloon-design-tool.jpg',
        link: 'https://asad13.github.io/Balloon-structure-design-tool/',
        githubLink: {
            frontend: 'https://github.com/Asad13/Balloon-structure-design-tool',
        },
        youtubeLink: '',
        desc: 'A balloon structure designing tool created for one of my client from Italy through Upwork. I have used HTML5, CSS3, SVG, SASS and Vanilla Javascript to create the project. It is a very complex Single Page Application(SPA) using Vanilla Javascript.',
    },
    {
        type: ['frontend','next','react','Tailwind'],
        title: 'Tech Blog Using Next.js',
        imgURL: '/dist/assets/images/portfolio/nextjs-blog-markdown.jpg',
        link: 'https://nextjs-blog-markdown-bay.vercel.app/',
        githubLink: {
            frontend: 'https://github.com/Asad13/nextjs-blog-markdown',
        },
        youtubeLink: '',
        desc: 'A Blog using Next.js and Tailwind CSS. Blog Articles are stored as Markdown Files and webpages are generated dynamically using them.',
    },
]