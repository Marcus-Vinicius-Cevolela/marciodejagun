"use client";
import { useEffect, useState } from 'react';

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2024-10-31T00:00:00');
        const updateCountdown = () => {
            const now = new Date();
            const difference = targetDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        const timerId = setInterval(updateCountdown, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="flex justify-center items-center p-4 bg-red-900 text-white">
            <div className="text-center space-x-4">
                <span className="text-2xl font-bold">{timeLeft.days}</span> dias
                <span className="text-2xl font-bold">{timeLeft.hours}</span> horas
                <span className="text-2xl font-bold">{timeLeft.minutes}</span> minutos
                <span className="text-2xl font-bold">{timeLeft.seconds}</span> segundos
            </div>
        </div>
    );
};

export default Timer;
