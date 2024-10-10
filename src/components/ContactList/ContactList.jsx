import { selectContacts } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import { useMemo } from "react";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const contactName = useSelector(selectNameFilter);

  const filteredData = useMemo(() => {
    if (!contactName) return contacts; 
    return contacts.filter((contact) =>
      contact.contactName
        .toLowerCase()
        .includes(contactName.toLowerCase().trim())
    );
  }, [contacts, contactName]);

  return (
    <ul>
      {filteredData.length > 0 ? (
        filteredData.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <p>No contacts available</p>
      )}
    </ul>
  );
};

export default ContactList;