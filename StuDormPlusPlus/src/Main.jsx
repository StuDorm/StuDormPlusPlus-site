// Main.jsx
import React from 'react';
import './App.css';
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import './normalize.css'
import './index.css'

function Main() {
    return (
        <div className="App">
            <Header />
                <main>
                     <h1>StuDorm++</h1>
                    <p>Выберете себе комноту в общаге по сосдям</p>
                </main>
            <Footer />
        </div>
    );
}

export default Main; // Экспортируем компонент по умолчанию
