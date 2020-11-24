const initialState = {
    pcs: [],
  };
  
  export const pcReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SHOW_ALL':
        return {
          pcs: [...state.pcs],
        };
      case 'ADD_PC':
        return {
          pcs: [
            ...state.pcs,
            {
              make: action.make,
              model: action.model,
              id: action.id,
            },
          ],
        };
        case 'EDIT_PC':
          const index1 = state.pcs.findIndex((pc) => pc.id === action.id);
         // console.log(index1);
            return Object.assign({}, state, {
              pcs: state.pcs.map(pc => {
                if (pc.id !== action.id) {
                  return pc
                }
      
                return Object.assign({}, pc, {
                  make: action.make,
                  model: action.model,
                  id: action.id,
                })
              })
            })
        
      case 'DELETE_PC':
        const index = state.pcs.findIndex((pc) => pc.id === action.id);
        return {
          pcs: [...state.pcs.slice(0, index), ...state.pcs.slice(index + 1)],
        };
      default:
        return state;
    }
  };