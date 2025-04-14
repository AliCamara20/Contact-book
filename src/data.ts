export interface Contact{
    id: number;
    name: string;
    phone: string;
    onDelete?: (id: number) => void;
}

export const contacts: Contact[] = [
    {id: 1, name: "John Doe", phone: "123-456-7890"},
    {id: 2, name: "Jane Smith", phone: "987-654-3210"},
    {id: 3, name: "Alice Johnson", phone: "555-123-4567"},
    {id: 4, name: "Bob Brown", phone: "444-555-6666"},
    {id: 5, name: "Charlie Davis", phone: "333-444-5555"},
    {id: 6, name: "Diana Prince", phone: "222-333-4444"}
]

 export const filterContacts = (contacts: Contact[], query: string) => {    
    if (!query) return contacts;
    query = query.toLowerCase();
    return contacts.filter(contact => 
        contact.name.toLowerCase().split(" ").some(name => name.startsWith(query)) 
        
    );
}