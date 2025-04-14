import { Contact } from "./data";
import ContactCard from "./ContactCard";
const ContactCards = (props:{ contact: Contact[], onDelete: (id: number) => void} ) => {

  return (
    <div className="contact-list">
      {props.contact.map((contact) => (
        <ContactCard 
          key={contact.id} 
          id={contact.id}
          name={contact.name}
          phone={contact.phone}
          onDelete={() => props.onDelete(contact.id)}
          
          
        />))}
    </div>
  );
}

export default ContactCards;