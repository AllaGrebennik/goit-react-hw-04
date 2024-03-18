import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items, openModal }) => {
   
    return (
        <ul className={css.container}>
            {items.map((item) => (
                <li
                    key={item.id}
                    className={css.item}
                    onClick={() => {
                        openModal(item.urls.regular, item.description, item.likes)
                    }}
                >
                    <ImageCard image={item} />
                </li>))}
        </ul>
    );
};

export default ImageGallery;