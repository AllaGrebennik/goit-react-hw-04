import { AiOutlineSearch } from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
    const handleSubmit = e => {
        e.preventDefault();
        const searchQuery = e.target.elements.searchQuery.value;
        if (!searchQuery.trim()) {
            toast.error('Please enter a search query!');
        return;
        }
        onSearch(searchQuery);
    };

    return (
        <header className={css.container}>
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    className={css.input}
                    type="text"
                    name="searchQuery"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit" className={css.btn}>
                    <AiOutlineSearch />
                </button>
            </form>
            <Toaster position="top-right" />    
        </header>
    );
};

export default SearchBar;