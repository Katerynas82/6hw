import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";



const App = () => {
  

  return (
    <div>
      <h1>Phone book</h1>
      <ContactForm  />
      <SearchBox  />
      <ContactList  />
    </div>
  );
};

export default App;
