
import React from 'react';

const promos = [
  { id: 1, image: 'https://picsum.photos/seed/promo1/400/200', title: 'Diskon Kilat 90%' },
  { id: 2, image: 'https://picsum.photos/seed/promo2/400/200', title: 'Cashback GoPay 50%' },
  { id: 3, image: 'https://picsum.photos/seed/promo3/400/200', title: 'Gratis Ongkir GoFood' },
];

const PromoCarousel: React.FC = () => {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 mb-3">Promo menarik buatmu</h2>
      <div className="flex overflow-x-auto space-x-4 pb-2 -mx-4 px-4">
        {promos.map((promo) => (
          <div key={promo.id} className="flex-shrink-0 w-3/4 md:w-1/2">
            <img src={promo.image} alt={promo.title} className="w-full h-auto rounded-xl shadow-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoCarousel;
