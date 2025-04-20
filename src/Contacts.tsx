import ContactCards from "./ContactCards";
import SearchBar from "./SearchBar";
import { Contact } from "./data";


const ContactsPage = (props: {query: string, onQuery : (e: React.ChangeEvent<HTMLInputElement>) => void, contacts: Contact[], onDelete: (id: number) => void, onSelect: (id: number) => void} ) => {    
    return (
        <div className="card">
            <h2>Contacts</h2>
            <SearchBar query={props.query} setQuery={(e) => { props.onQuery(e);}} />  
            <ContactCards contact={props.contacts} onDelete={(id) => props.onDelete(id)} onSelect={(id) => props.onSelect(id)}  />
        </div>
    );
}

export default ContactsPage;