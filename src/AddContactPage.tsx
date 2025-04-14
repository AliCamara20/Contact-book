import React from 'react';
const AddContactPage = (props: {children: React.ReactNode, isActive: boolean}) => {
 return (
    props.isActive && (<div className='add-contact-page container'>{props.children}</div>)
 )
  
}
export default AddContactPage;