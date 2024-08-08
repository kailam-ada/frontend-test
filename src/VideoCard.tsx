import DeleteBlock from "./DeleteBlock";
import LikeDislikeDisplay from "./LikeDislikeDisplay";

type Video = {
  id: number;
  title: string;
  categories: string[];
  likes: number;
  dislikes: number;
}

type VideoCardProps = {
  video: Video;
  onDelete: (id: number) => void;
  onToggleLike: (id: number) => void;
  onToggleDislike: (id: number) => void;
}

function VideoCard({ video, onDelete, onToggleLike, onToggleDislike }: VideoCardProps) {
  const { id, title, categories, likes, dislikes } = video;

  return (
    <div className="video-card">
      <DeleteBlock onDelete={() => onDelete(id)} />
      <h2>{title}</h2>
      <div>{categories.join(", ")}</div>
      <LikeDislikeDisplay
        likes={likes}
        dislikes={dislikes}
      />
      <div className="button-group">
        <button onClick={() => onToggleLike(id)}>Like</button>
        <button onClick={() => onToggleDislike(id)}>Dislike</button>
      </div>{" "}
    </div>
  );
}

export default VideoCard;
