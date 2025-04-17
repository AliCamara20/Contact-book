import { useMemo, useState } from "react"
import Header from "./Header"
import Tablinks from "./Tablinks"
import AddContactPage from "./AddContactPage";
import ViewContactPage from "./ViewContactPage";
import ContactForm from "./ContactForm";
import { contacts as initialContacts, Contact, filterContacts } from "./data";
import ContactsPage from "./Contacts";

if(!localStorage.getItem("contact book")){
  localStorage.setItem('contact book', JSON.stringify(initialContacts))
}

function App() {
  
  const [contacts, setContacts] = useState<Contact[]>(() => {
    const contacts = localStorage.getItem('contact book');
    return contacts ? JSON.parse(contacts) : [];
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const[sucess, setSuccess] = useState(false);
  const [query, setQuery] = useState("");
  let nextId = 7;
  let result = filterContacts(contacts, query);
  
  useMemo(()=> {
    localStorage.setItem('contact book', JSON.stringify(contacts))
  }, [contacts]);



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>  ) => {
    e.preventDefault();
    setContacts([...contacts, {id: nextId++, name: name, phone: phone}]);
     setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setName("");
      setPhone("");
    }
    , 2000);
  };

  type InputChange = React.ChangeEvent<HTMLInputElement>;
  const handleNameChange = (e: InputChange) => {
    setName(e.target.value);
  };
  const handlePhoneChange = (e: InputChange) => {
    setPhone(e.target.value);
  };

  const handleQueryChange = (e: InputChange) => { 
    setQuery(e.target.value);
  }

  const handleDelete = (id: number) => {
    setContacts(contacts.filter(contact => contact.id !== id));
    console.log(contacts[id])  
  }
return(
    
  <>
    <Header />
    <Tablinks activeIndex={activeIndex} onActive={ index => setActiveIndex(index)} />
    <AddContactPage isActive = {activeIndex === 0}>
      <ContactForm 
        name={ name} 
        phone={phone} 
        sucess = {sucess} 
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
        handleSubmit={handleSubmit} />
    </AddContactPage>
    <ViewContactPage isActive = {activeIndex === 1} >
      <ContactsPage contacts={result} query= {query} onQuery={ handleQueryChange} onDelete={handleDelete}    />
    </ViewContactPage>
  </>
  
)
  
}

export default App
