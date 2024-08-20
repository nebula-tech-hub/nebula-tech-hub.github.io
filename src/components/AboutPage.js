import React from 'react';
import NebulaBackground from '../components/NebulaBackground';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="aboutpage">
      <NebulaBackground />  {/* Nebula background should be behind everything */}
      <div className="content">
        <h1>About Us</h1>
        <p>This is the about page.</p>
      </div>
    </div>
  );
};

export default AboutPage;



/*

nebula-tech-hub.github.io/
├── .git/
├── node_modules/
├── public/
│   ├── 404.html
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
├── src/
│   ├── assets/
│   │   ├── nebula_logo.png
│   │   ├── nebula.ico
│   │   ├── nebula.jpg
│   │   ├── nebulaLogo.png
│   │   ├── nebulaqrcode.png
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── ContactPage.js
│   │   ├── HomePage.js
│   │   ├── AboutPage.js
│   │   ├── NotFound.js
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── ContactPage.css
│   │   ├── HomePage.css
│   │   ├── AboutPage.css
│   │   ├── App.css
│   │   ├── index.css
│   ├── App.test.js
│   ├── App.js
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md


*/