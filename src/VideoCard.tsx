import DeleteBlock from "./DeleteBlock";
import LikeDislikeDisplay from "./LikeDislikeDisplay";

function VideoCard({ video, onDelete, onToggleLike, onToggleDislike }) {
  const { id, title, categories, likes, dislikes, isLiked, isDisliked } = video;

  return (
    <div className='video-card'>
      <DeleteBlock onDelete={() => onDelete(id)} />
      <h2>
        {video.title}
      </h2>
      <div>{video.categories.join(', ')}</div>
      <LikeDislikeDisplay likes={likes} dislikes={dislikes} onToggleLike={() => onToggleLike(id)} onToggleDislike={() => onToggleDislike(id)}/>
      <div className="button-group">
        <button onClick={() => onToggleLike(id)}>
          Like
        </button>
        <button onClick={() => onToggleDislike(id)}>
          Dislike
        </button>
      </div>    </div>
    
  );
}

export default VideoCard;
