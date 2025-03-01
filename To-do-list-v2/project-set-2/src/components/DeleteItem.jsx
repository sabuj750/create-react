function DeleteItem({item , ItemDate , onButtonDelete}){
  return <div class="container">
  <div class="row my-row">
    <div class="col-6">
      {item}
    </div>
    <div class="col-4">{ItemDate}</div>
    <div class="col-2">
    <button type="button" className="btn btn-danger my-button" onClick={() => onButtonDelete(item)}>Delete</button>
    </div>
  </div>
  </div>
}
export default DeleteItem;