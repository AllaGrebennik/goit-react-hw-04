import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal'
import { fetchImages } from '../image-api';
import './App.module.css';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [isModal, setIsModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});

  useEffect(() => {
    if ((!query)) {
      return;
    }

    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        setShowBtn(false);
        const { data, total_pages } = await fetchImages(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
        setShowBtn(data.length > 0 && total_pages !== page);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false); 
      }
    };
    getData();
  }, [query, page]);
 
  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const openModal = (src, alt, likes) => {
    setIsModal(true);
    setSelectedImage({ src, alt, likes });
  };
 
  const closeModal = () => {
    setIsModal(false);
    setSelectedImage({});
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (<ImageGallery items={images} openModal={openModal} />)}
      {isLoading && <Loader />}
      {showBtn && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal isOpen={isModal} onClose={closeModal} image={selectedImage} />
    </>
  )
};

export default App;