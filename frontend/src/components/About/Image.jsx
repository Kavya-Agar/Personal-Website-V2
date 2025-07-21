import React from "react";
import profilePic from './../../assets/Kavya.jpeg';

export const Image = () => {
    return (
        <img
            src={profilePic}
            alt="Kavya Agar"
            className="w-64 h-64 rounded-full cursor-pointer"
        />
    );
}