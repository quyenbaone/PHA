import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <div className={styles.searchContainer}>
            <form onSubmit={handleSearch} className={styles.searchForm}>
                <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton}>
                    <FiSearch size={20} />
                </button>
            </form>
        </div>
    );
}

export default Search; 