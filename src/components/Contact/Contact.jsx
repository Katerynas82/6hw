import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import style from "../Contact/Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { selectContacts } from "../../redux/contactsSlice";

const Contact = () => {
  const contact = useSelector(selectContacts);
  console.log(Contact);
  const dispatch = useDispatch();
  return (
    <>
      <li className={style.contactItem}>
        <span>
          <FaUser /> {contact.contactName}
        </span>
        <span>
          <FaPhone /> {contact.number}
        </span>

        <button
          onClick={() => dispatch(deleteContact(contact.id))}
          className={style.delBtn}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
