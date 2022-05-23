export const certificates = [
    {
        type: 'Frontend',
        name: 'Responsive Web Design',
        provider: 'FreeCodeCamp',
        imgURL: '/dist/assets/images/certificates/fcc/certificate-fcc-rwd.jpg',
        logo: '/dist/assets/images/logo/fcc.png',
        description: 'I have completed Responsive Web Design Course from FreeCodeCamp on 2021. It consists with 300 hours of learning materials. Besides it I also learn the concepts of HTML5 and CSS3 from MDN and W3schools and doing a lot of projects. You can see the projects on my github account and also you can see the projects related to this course by following the link to the certificate. You can also verify the certificate from there.',
        issued: 'October 25, 2021',
        certificationId: '',
        certificationURL: 'https://freecodecamp.org/certification/asad_mujumder/responsive-web-design',
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
        type: ['frontend'],
        title: 'Balloon Structure Designing Tool',
        imgURL: '/dist/assets/images/portfolio/balloon-design-tool.jpg',
        link: 'https://asad13.github.io/Balloon-structure-design-tool/',
        githubLink: {
            frontend: 'https://github.com/Asad13/Balloon-structure-design-tool',
        },
        youtubeLink: '',
        desc: 'A balloon structure designing tool created for one of my client from Italy through Upwork. I have used HTML5, CSS3, SVG, SASS and Vanilla Javascript to create the project. It is a very complex Single Page Application(SPA) using Vanilla Javascript.',
    },
]