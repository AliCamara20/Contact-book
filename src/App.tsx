import { useMemo, useReducer, useState } from "react"
import Header from "./Header.tsx"
import Tablinks from "./Tablinks.tsx"
import AddContactPage from "./AddContactPage.tsx";
import ViewContactPage from "./ViewContactPage.tsx";
import ContactForm from "./ContactForm";
import { contacts as initialContacts, filterContacts } from "./data.ts";
import ContactsPage from "./Contacts.tsx";
import ContactInfo from "./ContactInfo.tsx";
import EditForm from "./EditForm.tsx";
import { contactReducer } from "./ContactReducer.tsx";
export type InputChange = React.ChangeEvent<HTMLInputElement>;


if(!localStorage.getItem("contact book")){
  localStorage.setItem('contact book', JSON.stringify(initialContacts))
}

function App() {

  const storedContacts = () => {
    const contacts = localStorage.getItem('contact book');
    return contacts ?  JSON.parse(contacts) : [];
  }
  
  const [contacts, dispatch] = useReducer(contactReducer, storedContacts());

  /* */

  const[selectedContactId, setSelectedContactId] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [editedName, setEditedName] = useState("")
  const [editedPhone, setEditedPhone] = useState("");
  const[sucess, setSuccess] = useState(false);
  const [query, setQuery] = useState("");
  const [showUserPage, setShowUserPage] = useState(false);
  const [editStatus, setEditStatus] = useState<string | null>(null);
  const selectedContact = contacts.find( contact => contact.id === selectedContactId);
  let nextId = 7;
  let result = filterContacts(contacts, query);
  
  useMemo(()=> {
    localStorage.setItem('contact book', JSON.stringify(contacts))
  }, [contacts]);
  
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>  ) => {
    e.preventDefault();
    
    dispatch({
      type: 'add',
      id: nextId ++,
      name: name,
      phone: phone
     })
     setSuccess(true);
     setTimeout(() => {
      setSuccess(false);
      setName("");
      setPhone("");
    }
    , 2000);
     
  };


  const handleSubmitEditForm = (e: React.FormEvent) => {
    e.preventDefault();
    setEditStatus('edited');
    console.log("new name: " + editedName);
    console.log("new number: " + editedPhone);
     
    dispatch({
      type: 'edit',
      id: selectedContactId,
      name: editedName,
      phone: editedPhone
    })
    
  }

  const handleEditContact = () => {
    setEditStatus('editing');
  }

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
    
   dispatch({
    type: 'delete',
    id: id
   })

   console.log('deleted contact ID: ' +  id);
  }
  console.log(contacts);

  const handleSelectContact = (id: number) => {
    setSelectedContactId(id);
    setShowUserPage(true);
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
    {showUserPage === true ? 
    <ContactInfo 
    contact={selectedContact!} 
    onEdit={handleEditContact}  
    onShow={() => setShowUserPage(false)}
    onDelete={handleDelete}
    
  />:
    <ViewContactPage isActive = {activeIndex === 1} >
      <ContactsPage 
        contacts={result} 
        query= {query} 
        onQuery={ handleQueryChange} 
        onDelete={handleDelete} 
        onSelect={handleSelectContact} />
    </ViewContactPage>
    
    
    }
    <EditForm 
      name= {editedName} 
      phone={editedPhone} 
      onNameChange={(e) => setEditedName(e.target.value)} 
      onPhoneChange={(e) => setEditedPhone(e.target.value)}
      onSubmit={handleSubmitEditForm}
      editStatus={editStatus}
    />
         
  </>
  
 
)
  
}

export default App
