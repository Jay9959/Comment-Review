import React from "react";
import "./CommentFandL.css";

const CommentL = ({ reviews }) => {
  return (
    <div className="commentL-list">
      {reviews.map((review, index) => (
        <div key={index} className="commentL-card">
          <h3>Username : {review.username}</h3>
          <h3>Email : {review.Email}</h3>
          <h3>Password : {review.Password}</h3>
          <p>Review : {review.reviewText}</p>
          <p>Select Star : {"⭐".repeat(review.rating)}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentL;
