import { changeFilter } from "../../redux/filtersSlice";
import styles from "../ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.form}>
      <label className={styles.label}>
        <span>Find contacts by name</span>
        <input
          type="text"
          className={styles.input}
           onChange={e=> dispatch(changeFilter(e.target.value))}
          placeholder="Search contact"
        />
      </label>
    </div>
  );
};
export default SearchBox;
