import React from 'react'

const ModalComponent = ({ isOpen, onClose, userData }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal">
        <div className="modal-content px-10 py-10 text-base font-semibold border">
          <div className='text-center mb-3'>
          <h1 className='text-xl font-bold text-red-600'>User Information</h1>
          </div>
          <p className='pb-3'>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <div className='text-center mt-5'>
            <button className='px-[2rem] py-[0.5rem] rounded-xl bg-red-600 text-white font-semibold' onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  };

export default ModalComponent