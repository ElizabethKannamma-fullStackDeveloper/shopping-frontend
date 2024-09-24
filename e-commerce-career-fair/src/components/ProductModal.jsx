import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
           <CloseIcon fontSize="large"/>
        </button>
        <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4 rounded" />
        <h2 className="text-2xl font-bold mb-2"> {product.title}</h2>
        <p className="text-gray-600 mb-2"> {product.description}</p>
        <p className="font-bold text-lg"> ${product.price.toFixed(2)}</p>
        <p className="text-gray-500">Available Quantity: {product.quantity}</p>
      </div>
    </div>
  );
};

export default ProductModal;
