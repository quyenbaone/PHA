import React from 'react';
import { createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
    const value = {
        toast
    };

    return (
        <div>
            <ToastContext.Provider value={value}>
                {children}
                <ToastContainer />
            </ToastContext.Provider>
        </div>
    );
};

export default ToastProvider;
