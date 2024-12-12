import React, { useState } from "react";
import "./App.css";
import CommentF from './component/CommentF';
import CommentL from './component/CommentL';

function App() {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <>
      <h1>Comment And Review</h1>
      <div className="app">
        <CommentF addReview={addReview} />
        <CommentL reviews={reviews} />
      </div></>
  );
}

export default App;
