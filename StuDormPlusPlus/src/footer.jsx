// src/components/Footer.jsx
import React from 'react';
import './footer.css'; // Подключаем стили
// import Button from '@mui/material/Button';

// const startCockroachAnimation = () => {
//     setIsRunning(true);
//     const animate = () => {
//         setPosition({
//             x: Math.random() * window.innerWidth,
//             y: Math.random() * window.innerHeight,
//         });
//
//         setTimeout(animate, Math.random() * 3000 + 1000); // случайные интервалы
//     };
//     animate();

function Footer() {
    return (
        <footer className="footer">
            <p id={"contact"}>Мы: fu@fu.flo</p>
            <p>&copy; 2025 StuDorm++. Все права защищены<a href={"/secretsection"}>.</a></p>

            {/*<Button variant="contained" onClick={startAnimation}>Таракан</Button>*/}

        </footer>
    );
}
export default Footer;
