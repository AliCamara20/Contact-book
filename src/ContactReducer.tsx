import { Contact } from "./data"
interface Action{
    type: string
    id?: number,
    name?: string,
    phone?: string
}
 export const contactReducer = (state: Contact[], action: Action): Contact[] => {
    switch(action.type){
        case 'add':{ 
          if(state.length === 0) {
              return [...state, {id: action.id!, name: action.name!, phone: action.phone!}];
          }

          const contactExists = state.some(s => s.phone === action.phone);
          if(contactExists) {
            alert('contact already exists');
            return state;
          }

          return [...state, {id: action.id!, name: action.name!, phone: action.phone!}];
        }
        case 'edit':
            return state.map( s => {
                if(s.id === action.id) return {...s, name: action.name!, phone: action.phone!}
                else return s
            })
        case 'delete' :
            return state.filter(s => s.id !== action.id);

        default:
            throw `${action.type} is unknown`
    }
}
