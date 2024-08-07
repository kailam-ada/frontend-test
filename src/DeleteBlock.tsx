// import './DeleteBlock.css';

function DeleteBlock({ onDelete }) {
  return (
    <div className="delete-block">
      <button onClick={onDelete} className="delete-button">X</button>
    </div>
  );
}

export default DeleteBlock;
