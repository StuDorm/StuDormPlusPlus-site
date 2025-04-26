import React, { useState } from 'react';
import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="header">
            <div className="logo">
                <a href="/"><img src="/media/logo-pro.webp" alt="Логотип" width="50" height="auto" /></a>
                <span>StuDorm++</span>
            </div>

            <div className="burger" onClick={toggleMenu}>
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>

            <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="/">Главная</a></li>
                    <li><a href="/profile">Профиль</a></li>
                    <li><a href="/findneighhor">Поиск соседа</a></li>
                    <li><a href="/auth">Авторизация</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
