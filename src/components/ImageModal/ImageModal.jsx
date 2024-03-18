import Modal from 'react-modal'
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");
    
const ImageModal = ({ image, isOpen, onClose }) => {
    return (
        <Modal
            className={css.container}
            isOpen={isOpen}
            onRequestClose={onClose}
        >
            <div className={css.wrapper}>
                <img className={css.image}
                    src={image.src}
                    alt={image.alt}
                />
                <p>Likes: {image.likes}</p>
            </div>
        </Modal>
    );
};

export default ImageModal;