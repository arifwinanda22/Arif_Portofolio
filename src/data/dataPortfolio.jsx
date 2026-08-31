import portfolio1 from '../assets/portfolio1.png'
// import portfolio2 from '../assets/image.png' /* Import ini dibiarkan jika file image.png memang ada, jika tidak ada, hapus baris ini */
import figmaPort1 from '../assets/figmaPort(2).png'
import figmaPort3 from '../assets/figmaPort(3).png'
import portfolio3 from '../assets/android.png'
import androidPortfolio from '../assets/androidPortfolio.png'
import figmaPortfolio from '../assets/figma.png'
import laravelPortfolio from '../assets/laravel.png'
import portfolio4 from '../assets/portfolio4.png'
import portfolio5 from '../assets/portfolio5.png'
import portfolio6 from '../assets/portfolio6.png'
import webPorto from '../assets/WebPorto.png'
import iotProject from '../assets/IoTProject.png'
import mqttApp from '../assets/MQTTApp.png'
import iotProject2 from '../assets/IoTProject2.png'
import cvImage from '../assets/cv_image.png'
import portfolioUIUX from '../assets/portfolioUIUX.png'
import portofolioResearch from '../assets/Research_Melanoma.jpg'
import portofolioSanditel from '../assets/Sanditel.png'
import sanditelProject from '../assets/sanditelProject.jpg'
import lilyCatering from '../assets/lilyCatering.jpg'
import lilyCatering2 from '../assets/lilyCatering2.jpg'
import b2bWebsite from '../assets/b2b-web.jpg'

export const portfolioList = [
    {
        id:'1',
        title:'Website Portofolio #1',
        thumbnail:laravelPortfolio,
        detailImage:webPorto,
        skill: 'reactjs, html, css, express, php, laravel, mysql, git, github',
        Description: ' A comprehensive web-based platform designed to help students and professionals discover competitions and workshops. Features include user authentication, a skill management system to track personal growth, and a dynamic dashboard for event organizers to manage listings efficiently '
    },
     {
        id:'2',
        title: 'My UI/UX Project #2',
        thumbnail:figmaPortfolio,
        detailImage:portfolioUIUX,
        detailImage2:figmaPort1,
        detailImage3:figmaPort3,
        skill: 'Figma, Web Design, UI/UX Design',
        Description: 'A comprehensive UI/UX showcase featuring two distinct approaches: product creation and experience optimization. This project includes the end-to-end design of the SmartComp mobile ecosystem and a strategic redesign of the Mobile JKN application. The redesign process was driven by deep UX analysis and rigorous usability testing with real users to identify pain points and validate the improved interface.'
    },
     {
        id:'3',
        title: 'My Android Mobile Smartcomp Project #3',
        thumbnail:portfolio3,
        detailImage:androidPortfolio,
        skill:'Flutter, Firebase Firestore Database, GIT, GitHub, Mobile App Development, UI/UX Design, Dart Programming Language',
        Description: 'A mobile application developed using Flutter and Firebase, designed to facilitate competition and workshop discovery for students and professionals. The app features user authentication, a skill management system, and a dynamic dashboard for event organizers to efficiently manage their listings.'
    },
     {
        id:'4',
        title: 'My Java Web Application Project',
        thumbnail:portfolio4,
        detailImage:portfolio4,
        skill:'Java, Apache Tomcat, Object Oriented Programming (OOP), Java EE (Jakarta EE), Spring Framework, SQL, JDBC, Java Persistence API (JPA)',
        Description: ' '
    },
     {
        id:'5',
        title: 'IoT Project with ESP32 and MQTT Protocol',
        thumbnail:iotProject2,
        detailImage:iotProject,
        detailImage2:mqttApp,
        skill:'C++, ESP32, MQTT Protocol, Mobile App Development, IoT Systems',
        Description: '  This project involves the development of an IoT system using ESP32 microcontrollers and the MQTT protocol for efficient communication. The system includes sensor data collection, real-time monitoring, and control functionalities through a dedicated mobile application. The project demonstrates the integration of hardware and software components to create a seamless IoT experience.' 
    },
    {
        id:'6',
        title: 'Melanoma Detection Research using ReXNet-150',
        thumbnail: cvImage,
        detailImage: portofolioResearch,
        skill: 'Python, PyTorch, ReXNet-150, Grad-CAM, Academic Writing, Scientific Research, Data Analysis',
        Description: 'Conducted rigorous research on Melanoma Skin Cancer classification utilizing the ReXNet-150 Deep Learning architecture. The study integrated Explainable AI (Grad-CAM) to enhance diagnostic transparency. This project culminated in the authorship of a scientific paper, documenting the methodology, experimental results, and contributions to efficient Computer-Aided Diagnosis (CAD) systems.',
        gitLink: 'https://github.com/arifwinanda22/project_MelanomaDetection',
    },
    {
        id: '7',
        title: 'Sanditel: Asset Management & Employee Reporting System', 
        thumbnail: sanditelProject,
        detailImage: portofolioSanditel, 
        skill: 'ReactJS, Laravel, PHP, MySQL/PostgreSQL, REST API, Docker, Git, GitHub',
        Description: 'Developed a comprehensive internal management system for the Telecommunications Section of the West Java Provincial Secretariat (Sanditel Sekda Jabar). This platform integrates two core modules: an Inventory Management System for tracking state assets and logistics, and a Daily Employee Reporting System (Laporan Harian) to monitor staff productivity. Key features include real-time asset tracking, automated report generation, and role-based dashboards for efficient bureaucratic administration.',
        demoLink: 'https://fe-sanditel-blush.vercel.app/',    
    },
    {
    id: '8',
    title: 'My B2B Catering Website Project', 
    thumbnail: b2bWebsite,
    detailImage: lilyCatering,
    detailImage2: lilyCatering2,
    skill: 'Next.js, React.js, Tailwind CSS, Node.js, Express.js, MongoDB, REST API, Git, GitHub',
    Description: ' B2B Catering Management Platform: Developed a full-stack B2B catering web solution designed to streamline corporate meal orders, client management, and operational workflows. Engineered a robust backend architecture using Node.js and Express.js paired with a scalable MongoDB database, while delivering a responsive, high-performance user interface with React.js and Tailwind CSS. This platform effectively optimizes bulk order processing and enhances client-vendor communication.',
    demoLink: 'https://lily-catering-seven.vercel.app/',
    }
]