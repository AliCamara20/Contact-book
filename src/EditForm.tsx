import React from "react"
import { InputChange } from "./App"
interface EditFormProps{
    name?: string,
    phone?: string,
    editStatus: string | null,
    onSubmit : (e:React.FormEvent) => void
    onNameChange: (e: InputChange) => void,
    onPhoneChange: (e: InputChange) => void
    
}

const EditForm = (props: EditFormProps) => {
    return(

        props.editStatus === 'editing' &&
        <div className="modal-container">
            <div className="container">
                <div className="card">
                    <h2>Edit Contact</h2>
                    <form id="contact-form" onSubmit={ (e: React.FormEvent) => props.onSubmit(e)}>            
                        <div className="form-group">
                            <label  htmlFor="name">Name</label>
                            <input type="text" value={props.name} id="name" name="name" placeholder="Enter full name" required onChange={ e => props.onNameChange(e)}  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" value={props.phone} id="phone" name="phone" placeholder="Enter phone number" required  onChange={ e => props.onPhoneChange(e)} />
                        </div>
                        <button type="submit">Edit Contact</button>
                    </form>
                </div>
            </div>
            
                  
        </div> 
        
    )
}
export default EditForm