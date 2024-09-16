import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from '../../redux/contactsSlice';
import css from './SearchBox.module.css';

function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.contacts.filterValue);

  const handleFilter = (event) => {
    dispatch(setFilterValue(event.target.value));
  };

  return (
    <label className={css.searchWrapper}>
      <span className={css.label}>Find contacts by name</span>
      <input
        className={css.searchBar}
        type="text"
        placeholder="Type..."
        value={filterValue}
        onChange={handleFilter}
      />
    </label>
  );
}

export default SearchBox;
