type DeleteBlockProps = {
  onDelete: () => void;
}

function DeleteBlock({ onDelete } : DeleteBlockProps) {
  return (
    <div className="delete-block">
      <button onClick={onDelete} className="delete-button">X</button>
    </div>
  );
}

export default DeleteBlock;
