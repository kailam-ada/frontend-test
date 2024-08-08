import VideoCard from "./VideoCard";
import "./App.css";
import { useState, useEffect } from "react";
import Filter from "./Filter";
import Pagination from "./Pagination";

const videos = [
  { id: 1, title: 'Video 1', categories: ['Action', 'Adventure'], likes: 10, dislikes: 2, isLiked: false, isDisliked: false },
  { id: 2, title: 'Video 2', categories: ['Comedy', 'Romance'], likes: 5, dislikes: 1, isLiked: false, isDisliked: false },
  { id: 3, title: 'Video 3', categories: ['Drama', 'Romance'], likes: 15, dislikes: 3, isLiked: false, isDisliked: false },
  { id: 4, title: 'Video 4', categories: ['Sci-Fi', 'Action'], likes: 20, dislikes: 4, isLiked: false, isDisliked: false },
  { id: 5, title: 'Video 5', categories: ['Horror', 'Thriller'], likes: 8, dislikes: 5, isLiked: false, isDisliked: false },
  { id: 6, title: 'Video 6', categories: ['Documentary', 'Educational'], likes: 12, dislikes: 2, isLiked: false, isDisliked: false },
  { id: 7, title: 'Video 7', categories: ['Animation', 'Comedy'], likes: 18, dislikes: 1, isLiked: false, isDisliked: false },
  { id: 8, title: 'Video 8', categories: ['Fantasy', 'Adventure'], likes: 25, dislikes: 3, isLiked: false, isDisliked: false },
  { id: 9, title: 'Video 9', categories: ['Mystery', 'Thriller'], likes: 14, dislikes: 4, isLiked: false, isDisliked: false },
  { id: 10, title: 'Video 10', categories: ['Musical', 'Romance'], likes: 22, dislikes: 2, isLiked: false, isDisliked: false },
  { id: 11, title: 'Video 11', categories: ['War', 'Drama'], likes: 16, dislikes: 3, isLiked: false, isDisliked: false },
  { id: 12, title: 'Video 12', categories: ['Western', 'Action'], likes: 11, dislikes: 4, isLiked: false, isDisliked: false },
  { id: 13, title: 'Video 13', categories: ['Crime', 'Drama'], likes: 19, dislikes: 2, isLiked: false, isDisliked: false },
  { id: 14, title: 'Video 14', categories: ['Historical', 'Drama'], likes: 13, dislikes: 5, isLiked: false, isDisliked: false },
  { id: 15, title: 'Video 15', categories: ['Sports', 'Documentary'], likes: 21, dislikes: 1, isLiked: false, isDisliked: false },
  { id: 16, title: 'Video 16', categories: ['Family', 'Comedy'], likes: 17, dislikes: 3, isLiked: false, isDisliked: false },
  { id: 17, title: 'Video 17', categories: ['Biography', 'Drama'], likes: 10, dislikes: 6, isLiked: false, isDisliked: false },
  { id: 18, title: 'Video 18', categories: ['Music', 'Documentary'], likes: 23, dislikes: 2, isLiked: false, isDisliked: false },
  { id: 19, title: 'Video 19', categories: ['Film-Noir', 'Crime'], likes: 18, dislikes: 4, isLiked: false, isDisliked: false },
  { id: 20, title: 'Video 20', categories: ['Short', 'Animation'], likes: 12, dislikes: 5, isLiked: false, isDisliked: false },
];

function App() {
  const [videosList, setVideosList] = useState(videos);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const allCategories = [...new Set(videos.flatMap(video => video.categories))];
    setCategories(allCategories);
  }, []);

  useEffect(() => {
    let filtered = [...videos];
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(video =>
        !selectedCategories.some(category => video.categories.includes(category))
      );
    }
    setVideosList(filtered);
  }, [selectedCategories]);

  const handleDelete = (id : number) => {
    const videosCopy = [...videosList];
    const videosCopyUpdated = videosCopy.filter((video) => video.id !== id);
    setVideosList(videosCopyUpdated);
    const allCategories = [...new Set(videosCopyUpdated.flatMap(video => video.categories))];
    setCategories(allCategories);
  };

  const handleToggleLike = (id : number) => {
    const videosCopy = [...videosList];
    const updatedVideosCopy = videosCopy.map(video => {
      if (video.id === id) {
        if (video.isLiked) {
          return { ...video, likes: video.likes - 1, isLiked: false };
        } else {
          return {
            ...video,
            likes: video.likes + 1,
            isLiked: true,
            isDisliked: false,
            dislikes: video.isDisliked ? video.dislikes - 1 : video.dislikes
          };
        }
      }
      return video;
    });
    setVideosList(updatedVideosCopy);
  };

  const handleToggleDislike = (id : number) => {
    const videosCopy = [...videosList];
    const updatedVideosCopy = videosCopy.map(video => {
      if (video.id === id) {
        if (video.isDisliked) {
          return { ...video, dislikes: video.dislikes - 1, isDisliked: false };
        } else {
          return {
            ...video,
            dislikes: video.dislikes + 1,
            isDisliked: true,
            isLiked: false,
            likes: video.isLiked ? video.likes - 1 : video.likes
          };
        }
      }
      return video;
    });
    setVideosList(updatedVideosCopy);
  };

  const handleCategoryChange = (selected: string[]) => {
    setSelectedCategories(selected);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentVideos = videosList.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="App">
      <Filter categories={categories} selectedCategories={selectedCategories} onCategoryChange={handleCategoryChange} />
      <div className="video-list">
        {currentVideos.map((video) => (
          <VideoCard 
          key={video.id} 
          video={video}
          onDelete={handleDelete}
          onToggleLike={handleToggleLike}
          onToggleDislike={handleToggleDislike}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={videosList.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />    
    </div>
  );
}

export default App;
