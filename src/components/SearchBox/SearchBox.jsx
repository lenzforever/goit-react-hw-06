import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filters.value);

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(updateFilter(value));
  };

  return (
    <div className={styles.searchContainer}>
      <h3 className={styles.title}>Search Contacts</h3>
      <input
        className={styles.inputField}
        onChange={handleChange}
        type="text"
        placeholder="Search by name..."
        value={filterValue}
      />
    </div>
  );
};

export default SearchBox;
