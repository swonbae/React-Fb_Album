import React from 'react';
import { deleteFile } from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {
    const handleClick = (e) => {
        // if (e.target.classList.contains('backdrop')) {   // close modal by only clicking background
        setSelectedImg(null);
        // }
    }

    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img src={selectedImg.url} alt="enlarged picture"
                initial={{ y: "-10vh" }}
                animate={{ y: 0 }}
            />
            <label onClick={() => deleteFile(selectedImg.id)}>
                <span>-</span>
            </label>
        </motion.div>
    )
}

export default Modal;