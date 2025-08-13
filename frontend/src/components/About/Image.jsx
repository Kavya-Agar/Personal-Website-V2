import React from "react";
import profilePic from './../../assets/Kavya.jpeg';
import confetti from "canvas-confetti";

export const Image = () => {
    const handleConfetti = () => {
        confetti({
            particleCount: 250,
            spread: 360,
            origin: { y: 0.5 },
        });
    };

    return (
        <img
            src={profilePic}
            alt="Kavya Agar"
            className="w-64 h-64 rounded-full cursor-pointer"
            onClick={handleConfetti}
        />
    );
}