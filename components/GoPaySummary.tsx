
import React from 'react';

const ActionButton: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <div className="flex flex-col items-center space-y-2">
    <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
        <i className={`fa-solid ${icon} text-gojek-blue text-xl`}></i>
    </div>
    <span className="text-xs font-semibold text-white">{label}</span>
  </div>
);

const GoPaySummary: React.FC = () => {
  return (
    <div className="bg-gojek-blue rounded-xl p-4 flex flex-col space-y-4 shadow-lg -mt-14 z-20 relative">
      <div className="flex justify-between items-start">
        <div className="bg-white p-3 rounded-lg flex items-center space-x-2">
            <i className="fa-brands fa-google-pay text-2xl text-gojek-blue"></i>
            <div>
                <p className="font-bold text-gray-800 text-sm">Rp120.789</p>
                <p className="text-xs text-blue-500 font-semibold">Klik & cek riwayat</p>
            </div>
        </div>
        <img src="https://lelogama.go-jek.com/component/gopay-logo/gopay-logo-white-2.svg" alt="GoPay" className="h-4"/>
      </div>
      <div className="flex justify-around pt-2">
        <ActionButton icon="fa-arrow-up" label="Bayar" />
        <ActionButton icon="fa-plus" label="Top Up" />
        <ActionButton icon="fa-rocket" label="Eksplor" />
      </div>
    </div>
  );
};

export default GoPaySummary;
