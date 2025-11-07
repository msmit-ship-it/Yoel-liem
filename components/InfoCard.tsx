
import React from 'react';

interface InfoCardProps {
    image: string;
    title: string;
    description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ image, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img src={image} alt={title} className="w-full h-32 object-cover" />
            <div className="p-4">
                <h3 className="font-bold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
                <button className="mt-3 text-sm font-bold text-gojek-green">
                    Cek Sekarang
                </button>
            </div>
        </div>
    );
}

export default InfoCard;
