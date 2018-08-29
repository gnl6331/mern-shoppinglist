import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'Eieren' },
    { id: uuid(), name: 'Augurken' },
    { id: uuid(), name: 'Biefstukreepjes' },
    { id: uuid(), name: 'Keukenzout' },
    { id: uuid(), name: 'Hondenvoer' }
  ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
      case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payLoad)
      };
      case ADD_ITEM:
      return {
        ...state,
        items: [action.payLoad, ...state.items]
      }
    default:
      return state  
  }
}