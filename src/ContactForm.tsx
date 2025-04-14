type ContactFormProps = {
    name: string;
    phone: string;
    sucess: boolean
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;   
    handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
    handlePhoneChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const ContactForm = (props:ContactFormProps) => {
    return(
        
        <section id="add-page" className="page active " >
                {props.sucess &&
                <div className="success-message" id="success-message">
                    Contact added successfully!
                </div>}
                <div className="card">
                    <h2>Add New Contact</h2>
                    <form id="contact-form" onSubmit={props.handleSubmit}>            
                        <div className="form-group">
                            <label  htmlFor="name">Name</label>
                            <input type="text" value={props.name} id="name" name="name" placeholder="Enter full name" onChange={ e => props.handleNameChange(e)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" value={props.phone} id="phone" name="phone" placeholder="Enter phone number" required onChange={ e => props.handlePhoneChange(e)} />
                        </div>
                        <button type="submit">Add Contact</button>
                    </form>
                </div>
            </section>
    )
}

export default ContactForm;