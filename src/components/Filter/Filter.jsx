import { Contacts, SearchField } from "./Filter.styled"

export const Filter  = ({onChangeFilter, filter}) =>{

    return <Contacts>
        <SearchField type="text" 
        value={filter} 
        placeholder="Search contacts..."
        onChange={e => onChangeFilter(e.target.value)}/>
       </Contacts>

  
}