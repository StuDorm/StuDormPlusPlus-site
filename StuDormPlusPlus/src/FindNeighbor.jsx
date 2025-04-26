import React, { useState, useEffect } from 'react';
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import './FindNeighbor.css'

const FindNeighbor = () => {
    const [rooms, setRooms] = useState([]);
    const [filters, setFilters] = useState({
        gender: 'all',
        course: 'all',
        nationality: 'all',
        sleep: 'all',
        occupancy: 'all',
        building: 'all',
        floor: 'all',
        status: 'all',
        search: ''
    });

    useEffect(() => {
        // Функция для получения данных с сервера
        const fetchRooms = async () => {
            try {
                const response = await fetch(ip_server);
                const data = await response.json();
                setRooms(data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchRooms();
    }, []);

    const handleFilterChange = (e) => {
        const { id, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [id]: value
        }));
    };

    const filteredRooms = rooms.filter(room => {
        return (
            (filters.gender === 'all' || room.gender === filters.gender) &&
            (filters.course === 'all' || room.course === filters.course) &&
            (filters.nationality === 'all' || room.nationality === filters.nationality) &&
            (filters.sleep === 'all' || room.sleep === filters.sleep) &&
            (filters.occupancy === 'all' || room.occupancy === filters.occupancy) &&
            (filters.building === 'all' || room.building === filters.building) &&
            (filters.floor === 'all' || room.floor === filters.floor) &&
            (filters.status === 'all' || room.status === filters.status) &&
            (room.roomNumber.toString().includes(filters.search) || room.residents.some(r => r.name.toLowerCase().includes(filters.search.toLowerCase())))
        );
    });

    return (
        <div><Header /><main>
        <div className="container">
            <h1>Список комнат общежития</h1>
            <p>Просмотр и выбор доступных комнат</p>

            <div className="filters">
                <select id="gender" value={filters.gender} onChange={handleFilterChange}>
                    <option value="all">Любой пол</option>
                    <option value="male">Мужчины</option>
                    <option value="female">Женщины</option>
                </select>

                <select id="course" value={filters.course} onChange={handleFilterChange}>
                    <option value="all">Любой курс</option>
                    <option value="1">1 курс</option>
                    <option value="2">2 курс</option>
                    <option value="3">3 курс</option>
                    <option value="4">4 курс</option>
                </select>

                <select id="sleep" value={filters.sleep} onChange={handleFilterChange}>
                    <option value="all">Любой</option>
                    <option value="early">Ранние пташки (до 23:00)</option>
                    <option value="late">Совы (после 23:00)</option>
                </select>

                <select id="occupancy" value={filters.occupancy} onChange={handleFilterChange}>
                    <option value="all">Любые</option>
                    <option value="occupied">С жильцами</option>
                    <option value="empty">Без жильцов</option>
                    <option value="partial">Частично заселены</option>
                </select>

                <input
                    type="text"
                    id="search"
                    placeholder="Поиск по номеру или фамилии"
                    value={filters.search}
                    onChange={handleFilterChange}
                />
            </div>

            <table>
                <tbody>
                {filteredRooms.map((room) => (
                    <tr key={room.roomNumber}>
                        <td>{room.roomNumber}</td>
                        <td>{room.building}</td>
                        <td>{room.floor}</td>
                        <td>{room.status}</td>
                        <td>
                            {room.residents.length === 0 ? 'Нет жильцов' : room.residents.map((resident, index) => (
                                <div key={index}>
                                    <strong>{resident.name}</strong> ({resident.course} курс)
                                </div>
                            ))}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div></main><Footer /></div>
    );
};

export default FindNeighbor;
