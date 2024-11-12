// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg sm:text-sm font-semibold">Food Delicious</h2>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Politica de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-white">Termos de Serviço</a>
            <a href="#" className="text-gray-400 hover:text-white">Contatos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
