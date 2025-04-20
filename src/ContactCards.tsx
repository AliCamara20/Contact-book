import { Contact } from "./data.ts";
import ContactCard from "./ContactCard.tsx";
const ContactCards = (props:{ contact: Contact[], onDelete: (id: number) => void, onSelect: (id: number) => void} ) => {

  return (
    <div className="contact-list">
      {props.contact.map((contact) => (
        <ContactCard 
          key={contact.id} 
          id={contact.id}
          name={contact.name}
          phone={contact.phone}
          onDelete={() => props.onDelete(contact.id)}
          onSelect={() => props.onSelect(contact.id)}
          
          
        />))}
    </div>
  );
}

export default ContactCards;