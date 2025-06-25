import portfolio1 from '../assets/portfolio1.png'
import portfolio2 from '../assets/image.png'
import portfolio3 from '../assets/Android.png'
import androidPortfolio from '../assets/androidPortfolio.png'
import figmaPortfolio from '../assets/figma.png'
import laravelPortfolio from '../assets/laravel.png'
import portfolio4 from '../assets/portfolio4.png'
import portfolio5 from '../assets/portfolio5.png'
import portfolio6 from '../assets/portfolio6.png'
import webPorto from '../assets/WebPorto.png'

export const portfolioList = [
    {
        id:'1',
        title:'Website Portofolio #1',
        thumbnail:laravelPortfolio,
        detailImage:webPorto,
        skill: 'reactjs, html, css, express, php'
    },
     {
        id:'2',
        title: 'My Figma Project #2',
        thumbnail:figmaPortfolio,
        detailImage:portfolio2,
        skill: 'Figma'
    },
     {
        id:'3',
        title: 'My Mobile Smartcomp Project #3',
        thumbnail:portfolio3,
        detailImage:androidPortfolio,
        skill:'Flutter, Firebase Firestore Database, GIT'
    },
     {
        id:'4',
        title: 'My Java Web Application Project',
        thumbnail:portfolio4,
        detailImage:portfolio4,
        skill:'Java, Apache Tomcat, Object Oriented Programming (OOP), Java EE (Jakarta EE), Spring Framework, SQL, JDBC, Java Persistence API (JPA)'
    },
     {
        id:'5',
       // title: 'My Java Web Application Project',
        image:portfolio5
    },
     {
        id:'6',
        image:portfolio6
    },
]