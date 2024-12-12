import React, { useState } from "react";
import "./CommentFandL.css";

const CommentF = ({ addReview }) => {
  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && Email && Password && reviewText && rating) {
      const newReview = { username, Email, Password, reviewText, rating };
      addReview(newReview);
      setUsername("");
      setEmail("");
      setPassword("");
      setReviewText("");
      setRating("");
    } else {
      alert("Please Fill Form !");
    }
  };

  const handelrating = (ratingvalue) => {
    setRating(ratingvalue)
  }

  return (
    <>
      <div className="comment">
        <form className="commentF-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="Email"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="Password"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <textarea
            placeholder="Write your review"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />

          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={`star ${rating >= star ? "filled" : ""}`} onClick={() => handelrating(star)}>
                &#9733;
              </span>
            ))}
          </div>
          <button className="button-86 " type="submit">Submit Form in Display UI</button>
        </form>
      </div>
    </>
  );
}

export default CommentF;
