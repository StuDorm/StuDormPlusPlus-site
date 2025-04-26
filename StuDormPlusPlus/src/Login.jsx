import React, { useState } from 'react';
import './Auth.css';
import Header from "./header.jsx";
import Footer from "./footer.jsx";

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        remember: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error('Ошибка входа');

            const result = await res.json();
            console.log('Успешный вход', result);
        } catch (err) {
            console.error(err);
            alert('Неверный логин или пароль');
        }
    };

    return (
        <div><Header /><main>

        <div className="login-card">
            <h1>Вход в систему</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Логин</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Введите ваш логин"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Введите ваш пароль"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="remember-me">
                    <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                        checked={formData.remember}
                        onChange={handleChange}
                    />
                    <label htmlFor="remember">Запомнить меня</label>
                </div>

                <button type="submit">Войти</button>

                <div className="links">
                    <a href="#contact">Забыли пароль?</a>
                    <span className="divider"> | </span>
                    <a href="/auth">Регистрация</a>
                </div>
            </form>
        </div></main>
        <Footer />
        </div>
    );
};

export default Login;
