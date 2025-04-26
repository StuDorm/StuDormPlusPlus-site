import React, { useState, useRef } from 'react';
import Header from "./header.jsx";
import Footer from "./footer.jsx";

export default function SecretSection() {
    const [showVideo, setShowVideo] = useState(false);
    const videoRef = useRef(null);

    const showRickRollVideo = () => {
        setShowVideo(true);

        // Нужно подождать пока элемент появится
        setTimeout(() => {
            if (videoRef.current && videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current && videoRef.current.webkitRequestFullscreen) {
                videoRef.current.webkitRequestFullscreen(); // Safari
            } else if (videoRef.current && videoRef.current.mozRequestFullScreen) {
                videoRef.current.mozRequestFullScreen(); // Firefox
            } else if (videoRef.current && videoRef.current.msRequestFullscreen) {
                videoRef.current.msRequestFullscreen(); // IE/Edge
            }
        }, 100); // Короткая задержка, чтобы React успел отрендерить видео
    };

    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-3xl font-bold mb-4">Поздравляем! Вы нашли секретный раздел!</h1>
                <p className="text-lg mb-4">Нажмите кнопку ниже, чтобы посмотреть документалку о проекте:</p>
                <button
                    className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded"
                    onClick={showRickRollVideo}
                >
                    Посмотреть видео
                </button>

                {showVideo && (
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        loop
                        controls
                        className="w-full h-full object-cover absolute top-0 left-0"
                        style={{ zIndex: 9999 }}
                    >
                        <source
                            src="/media/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4"
                            type="video/mp4"
                        />
                        Ваш браузер не поддерживает видео.
                    </video>
                )}
            </main>
            <Footer />
        </div>
    );
}
