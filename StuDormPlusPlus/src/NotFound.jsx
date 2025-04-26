import React from "react";
import { Link } from "react-router-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center text-center p-4">
            <Header />
            <main>

            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-6">Страница не найдена</p>
            <Link
                to="/"
                className="text-blue-400 hover:text-white border border-blue-400 px-4 py-2 rounded transition"
            >
                Вернуться на главную
            </Link>
            </main>
            <Footer />
        </div>
    );
};

export default NotFound;
