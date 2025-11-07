
import React from 'react';
import Header from '../components/Header';
import GoPaySummary from '../components/GoPaySummary';
import ServiceGrid from '../components/ServiceGrid';
import PromoCarousel from '../components/PromoCarousel';
import InfoCard from '../components/InfoCard';

const HomeScreen: React.FC = () => {
  return (
    <div className="flex-grow bg-gray-50">
      <Header />
      <main className="p-4 space-y-6">
        <GoPaySummary />
        <ServiceGrid />
        <PromoCarousel />
        <InfoCard 
            image="https://picsum.photos/seed/gojek1/400/200"
            title="Aman, nyaman, dan cepat"
            description="Armada dan mitra driver tepercaya kami siap melayanimu."
        />
         <InfoCard 
            image="https://picsum.photos/seed/gojek2/400/200"
            title="Promo dadakan setiap hari!"
            description="Dapatkan diskon dan penawaran spesial untuk perjalanan dan pesananmu."
        />
      </main>
    </div>
  );
};

export default HomeScreen;
