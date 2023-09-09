import { ContactsList, NumList, DeleteBtn } from "./ContactList.styled"

export const ContactList  = ({items, onDelete}) =>{

    return <>
        <ContactsList>
           { 
           items.map(({name, number, id})=>(
           <li key={id}>{name}:
           <NumList>{number}</NumList><DeleteBtn  onClick={()=>onDelete(id)}>Delete</DeleteBtn ></li>))}

        </ContactsList>
       </>

  
}