
import React from 'react';
import { type Service } from '../types';

const services: Service[] = [
  { name: 'GoRide', icon: <i className="fa-solid fa-motorcycle text-xl"></i>, color: 'text-gojek-green' },
  { name: 'GoCar', icon: <i className="fa-solid fa-car text-xl"></i>, color: 'text-gojek-green' },
  { name: 'GoFood', icon: <i className="fa-solid fa-utensils text-xl"></i>, color: 'text-gojek-red' },
  { name: 'GoSend', icon: <i className="fa-solid fa-box-open text-xl"></i>, color: 'text-gojek-green' },
  { name: 'GoMart', icon: <i className="fa-solid fa-store text-xl"></i>, color: 'text-gojek-red' },
  { name: 'GoPulsa', icon: <i className="fa-solid fa-mobile-screen-button text-xl"></i>, color: 'text-gojek-blue' },
  { name: 'GoClub', icon: <i className="fa-solid fa-star text-xl"></i>, color: 'text-purple-500' },
  { name: 'Lainnya', icon: <i className="fa-solid fa-ellipsis text-xl"></i>, color: 'text-gray-500' },
];

const ServiceIcon: React.FC<{ service: Service }> = ({ service }) => (
  <div className="flex flex-col items-center space-y-2 text-center">
    <div className={`w-12 h-12 flex items-center justify-center rounded-full ${service.color}`}>
      {service.icon}
    </div>
    <span className="text-xs font-medium text-gray-700">{service.name}</span>
  </div>
);

const ServiceGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-y-6">
      {services.map((service) => (
        <ServiceIcon key={service.name} service={service} />
      ))}
    </div>
  );
};

export default ServiceGrid;
