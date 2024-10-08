// import { selectContacts } from "../../redux/contactsSlice";
// import Contact from "../Contact/Contact";
// import { useSelector } from "react-redux";
// import { selectNameFilter } from "../../redux/filtersSlice";

// const ContactList = () => {
//   const contacts = useSelector(selectContacts);
//   const contactName = useSelector(selectNameFilter);
//   const filteredData = contacts.filter((contact) =>
//     contact.contactName.toLowerCase().includes(contactName.toLowerCase().trim())
//   );

//   return (
//     <>
//       <ul>
//         {filteredData.length > 0 ? (
//           filteredData.map((contact) => (
//             <Contact key={contact.id} contact={contact} />
//           ))
//         ) : (
//           <p> No contacts available</p>
//         )}
//       </ul>
//     </>
//   );
// };

// export default ContactList;

import { selectContacts } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const contactName = useSelector(selectNameFilter);

  const filteredData = contacts.filter((contact) =>
    contact.contactName.toLowerCase().includes(contactName.toLowerCase().trim())
  );

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