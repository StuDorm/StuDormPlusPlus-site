import React, { useState } from 'react';
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import './Auth.css'; // Добавим стили в отдельный файл

function Auth() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        lastname: '',
        firstname: '',
        patronim: '',
        course: '',
        birthdate: '',
        gender: '',
        hobby: '',
        bedtime: '',
        waketime: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Пароли не совпадают!');
            return;
        }

        try {
            const response = await fetch(ip_server + '/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Регистрация успешна!');
                localStorage.setItem('user', JSON.stringify(formData));
            } else {
                alert('Ошибка регистрации');
            }
        } catch (error) {
            alert('Ошибка соединения с сервером');
        }
    };

    return (
        <div>
        <Header />
        <div className="registration-card">

            <main className="auth-container">
                <h1>Регистрация</h1>
                <form onSubmit={handleSubmit} className="form">
                    {/* Учетные данные */}
                    <div className="form-section">
                        <h2>Учетные данные</h2>
                        <h2><a href={"/login"}>Логинизация</a></h2>
                        <div className="form-group">
                            <label htmlFor="username" className="required-field">Логин</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                required
                                placeholder="Придумайте логин"
                                className="input-field"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="required-field">Пароль</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                                placeholder="Создайте пароль"
                                className="input-field"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirm_password" className="required-field">Подтвердите пароль</label>
                            <input
                                type="password"
                                id="confirm_password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                                placeholder="Повторите пароль"
                                className="input-field"
                            />
                        </div>
                    </div>

                    {/* Личная информация */}
                    <div className="form-group">
                        <label htmlFor="lastname" className="required-field">Фамилия</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleInputChange}
                            required
                            placeholder="Введите фамилию"
                            className="input-field"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="firstname" className="required-field">Имя</label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleInputChange}
                            required
                            placeholder="Введите имя"
                            className="input-field"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="middlename">Отчество</label>
                        <input
                            type="text"
                            id="middlename"
                            name="middlename"
                            value={formData.middlename}
                            onChange={handleInputChange}
                            placeholder="Введите отчество (если есть)"
                            className="input-field"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="course" className="required-field">Курс</label>
                        <input
                            type="number"
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleInputChange}
                            min="1"
                            max="10"
                            required
                            placeholder="1-10"
                            className="input-field"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="birthdate" className="required-field">Дата рождения</label>
                        <input
                            type="date"
                            id="birthdate"
                            name="birthdate"
                            value={formData.birthdate}
                            onChange={handleInputChange}
                            required
                            className="input-field"
                        />
                    </div>

                    <div className="form-group">
                        <label className="required-field">Вы мужчина или женщина?</label>
                        <div className="radio-group">
                            <label className="radio-option">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={handleInputChange}
                                    required
                                /> Мужчина (М)
                            </label>
                            <label className="radio-option">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={handleInputChange}
                                /> Женщина (Ж)
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="hobby">Ваше хобби?</label>
                        <textarea
                            id="hobby"
                            name="hobby"
                            value={formData.hobby}
                            onChange={handleInputChange}
                            rows="3"
                            placeholder="Расскажите о своих увлечениях"
                            className="input-field"
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="bedtime" className="required-field">Когда обычно ложитесь спать?</label>
                        <input
                            type="time"
                            id="bedtime"
                            name="bedtime"
                            value={formData.bedtime}
                            onChange={handleInputChange}
                            required
                            className="input-field"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="waketime" className="required-field">Когда обычно встаёте?</label>
                        <input
                            type="time"
                            id="waketime"
                            name="waketime"
                            value={formData.waketime}
                            onChange={handleInputChange}
                            required
                            className="input-field"
                        />
                    </div>

                    <button type="submit" className="submit-btn">Зарегистрироваться</button>
                </form>
            </main>

        </div><Footer /></div>
    );
}

export default Auth;
