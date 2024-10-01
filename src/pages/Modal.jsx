// src/components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-md p-6 relative max-w-md w-full">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
