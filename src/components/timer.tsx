"use client";
import { useEffect, useState } from 'react';

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2024-11-06T18:30:00');
        const updateCountdown = () => {
            const now = new Date().getTime();
            const targetTime = targetDate.getTime();
            const difference = targetTime - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        const timerId = setInterval(updateCountdown, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="flex justify-center items-center p-2 bg-red-900 text-white rounded-md">
            <div className="text-center text-amber-400">
                <p className="text-sm font-bold lg:text-lg">Lançamento em:</p>
                <div className="flex justify-between text-center space-x-2 sm:space-x-4 flex-wrap">
                    <div className="flex items-center">
                        <span className="text-lg sm:text-2xl font-bold">{timeLeft.days}</span>
                        <span className="ml-1 text-sm sm:text-base">dias</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-lg sm:text-2xl font-bold">{timeLeft.hours}</span>
                        <span className="ml-1 text-sm sm:text-base">horas</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-lg sm:text-2xl font-bold">{timeLeft.minutes}</span>
                        <span className="ml-1 text-sm sm:text-base">minutos</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-lg sm:text-2xl font-bold">{timeLeft.seconds}</span>
                        <span className="ml-1 text-sm sm:text-base">segundos</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timer;
