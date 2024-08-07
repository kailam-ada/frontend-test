function LikeDislikeDisplay({ likes, dislikes, onToggleLike, onToggleDislike }) {
  const totalVotes = likes + dislikes;
  const likePercentage = (likes / totalVotes) * 100 || 0;
  const dislikePercentage = (dislikes / totalVotes) * 100 || 0;

  return (
    <div className="like-dislike-bar">
      <div className="like-bar" style={{ width: `${likePercentage}%` }}>
        {likes}
      </div>
      <div className="dislike-bar" style={{ width: `${dislikePercentage}%` }}>
        {dislikes}
      </div>
    </div>
  );
}

export default LikeDislikeDisplay;
