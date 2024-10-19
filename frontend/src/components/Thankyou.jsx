import React from 'react';
import { useLocation } from 'react-router-dom';
import { RiCheckboxCircleFill } from "react-icons/ri";

export default function ThankYou() {
    const location = useLocation();
    const { packageData } = location.state; // Get package data from state

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-md shadow-md text-center max-w-lg">
                <RiCheckboxCircleFill size={64} color="green" className="mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-green-600 mb-4">
                    Thank you for booking the <strong>{packageData.name}</strong> package!
                </h2>
                <p className="text-lg mb-6">
                    We are excited to have you join us on this tour.
                </p>
                <p className="text-gray-600 mb-6">
                    You will receive a confirmation email shortly with all the necessary details.
                </p>
                <p className="text-gray-600">
                    Safe travels, and we look forward to seeing you soon!
                </p>
            </div>
        </div>
    );
}
