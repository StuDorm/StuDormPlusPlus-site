import React, { useState } from 'react';
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import './Auth.css';

function Auth() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        lastname: '',
        firstname: '',
        patronymic: '',
        course: '',
        birthdate: '',
        gender: '',
        hobby: '',
        bedtime: '',
        waketime: ''
    });

    const formatDateTime = (time) => {
        if (!time) return ''; // Возвращаем пустую строку, если время не передано
        const [hours, minutes] = time.split(":");
        return `${hours}:${minutes}:00`; // Возвращаем в формате HH:MM:00
    };

    const handleInputChange = (e) => {}


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Пароли не совпадают!');
            return;
        }

        const payload = {
            username: formData.username,
            password: formData.password,
            firstname: formData.firstname,
            lastname: formData.lastname,
            patronymic: formData.patronymic || '',
            course: formData.course ? parseInt(formData.course, 10) : null, // Убедитесь, что курс это число
            birth_date: new Date(formData.birthdate).toISOString(),
            gender: formData.gender,
            hobby: formData.hobby || '',
            bed_time: formatDateTime(formData.bedtime),
            wake_up_time: formatDateTime(formData.waketime)
        };

        console.log(payload);

        try {
            const response = await fetch("http://prod-team-12-ecl1h2gh.hack.prodcontest.ru:443/register/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
                mode: 'no-cors'
            });

            console.log(response.statusText);
            if (response.ok) {
                alert('Регистрация успешна!');
                localStorage.setItem('user', JSON.stringify(payload));
                window.location.href = '/';
            } else {
                const errorData = await response.json();
                alert('Ошибка регистрации: ' + (errorData.detail || 'Неизвестная ошибка'));
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
                        <div className="form-section">
                            <h2>Учетные данные</h2>
                            <h2><a href="/login">Логинизация</a></h2>
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
                                <label htmlFor="confirmPassword" className="required-field">Подтвердите пароль</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Повторите пароль"
                                    className="input-field"
                                />
                            </div>
                        </div>
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
                            <label htmlFor="patronymic">Отчество</label>
                            <input
                                type="text"
                                id="patronymic"
                                name="patronymic"
                                value={formData.patronymic}
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
            </div>
            <Footer />
        </div>
    );
}

export default Auth;
