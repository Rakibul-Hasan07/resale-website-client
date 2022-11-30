import React from 'react';

const DeleteModal = ({ modalData, message, title, closeModal, successModal }) => {
    return (
        <div>
            <input type="checkbox" id="my-confirmation" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successModal(modalData._id)} htmlFor="my-confirmation" className="btn btn-xs btn-error">delete</label>
                        <label onClick={closeModal} htmlFor="my-confirmation" className="btn btn-xs btn-primary">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;