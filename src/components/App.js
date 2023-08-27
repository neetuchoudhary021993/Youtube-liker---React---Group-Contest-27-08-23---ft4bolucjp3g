import React from 'react'
import '../styles/App.css';
import like from '../like.svg';

const App = () => {

  const LikeButton = () => {
  const [count,setCount] = React.useState();
  const [opacity, setOpacity] = React.useState(0);
     const toggleLike = () => {
    setCount(count + 1);
    setOpacity(opacity + 0.1);
  };
    const likeButtonStyle = {
    backgroundColor: `rgba(255, 0, 0, ${opacity})`,
    cursor: 'pointer',
  };
  }
  return (
    <div id="main">
      <img id="like-btn-img" src="like.svg" alt="Like" style={likeButtonStyle}  onClick={toggleLike}/>
      <h3>Likes: <span id="like-counter">{count}</span></h3>
    </div>
  )
}

export default App;
