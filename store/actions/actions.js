export function addPc(make, model, id) {
    return {type: 'ADD_PC', make: make, model: model, id: id};
  }
  export function showAll() {
    return {type: 'SHOW_ALL'};
  }
  export function deletePc(id) {
    return {type: 'DELETE_PC', id: id};
  }
  export function editPc(make, model,id) {
    return {type: 'EDIT_PC',make: make, model: model, id: id};
  }