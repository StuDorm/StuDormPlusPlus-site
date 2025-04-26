import React, { useState, useEffect } from 'react';
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import './Auth.css';

function Profile() {
    const savedData = JSON.parse(localStorage.getItem('user')) || {};
    const [formData, setFormData] = useState(savedData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        localStorage.setItem('user', JSON.stringify(formData));
        alert('Профиль обновлён!');
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        alert('Вы вышли из аккаунта');
        window.location.href = '/login';
    };

    return (
        <div>
            <Header />
            <div className="registration-card">
                <main className="auth-container">
                    <h1>Профиль пользователя</h1>
                    <form className="form" onSubmit={e => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="username">Логин</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username || ''}
                                onChange={handleInputChange}
                                className="input-field"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Фамилия</label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                value={formData.lastname || ''}
                                onChange={handleInputChange}
                                className="input-field"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstname">Имя</label>
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                value={formData.firstname || ''}
                                onChange={handleInputChange}
                                className="input-field"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="middlename">Отчество</label>
                            <input
                                type="text"
                                id="middlename"
                                name="middlename"
                                value={formData.middlename || ''}
                                onChange={handleInputChange}
                                className="input-field"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="course">Курс</label>
                            <input
                                type="number"
                                id="course"
                                name="course"
                                value={formData.course || ''}
                                onChange={handleInputChange}
                                className="input-field"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="birthdate">Дата рождения</label>
                            <input
                                type="date"
                                id="birthdate"
                                name="birthdate"
                                value={formData.birthdate || ''}
                                onChange={handleInputChange}
                                className="input-field"
                            />
                        </div>
                        <div className="form-group">
                            <label>Пол</label>
                            <div className="radio-group">
                                <label className="radio-option">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={formData.gender === 'male'}
                                        onChange={handleInputChange}
                                    /> Мужчина
                                </label>
                                <label className="radio-option">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={formData.gender === 'female'}
                                        onChange={handleInputChange}
                                    /> Женщина
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="hobby">Хобби</label>
                            <textarea
                                id="hobby"
                                name="hobby"
                                value={formData.hobby || ''}
                                onChange={handleInputChange}
                                rows="3"
                                className="input-field"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bedtime">Время отхода ко сну</label>
                            <input
                                type="time"
                                id="bedtime"
                                name="bedtime"
                                value={formData.bedtime || ''}
                                onChange={handleInputChange}
                                className="input-field"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="waketime">Время подъема</label>
                            <input
                                type="time"
                                id="waketime"
                                name="waketime"
                                value={formData.waketime || ''}
                                onChange={handleInputChange}
                                className="input-field"
                            />
                        </div>
                        <button type="button" className="submit-btn" onClick={handleSave}>Сохранить</button>
                        <button type="button" className="submit-btn logout" onClick={handleLogout}>Выйти из системы</button>
                    </form>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
