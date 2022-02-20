import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./Post.css";
import Review from "./Review"

const Post = ({ post: { title, body,
imgUrl, author }, index }) => {
	const writeReview = () => {
		//alert("review");
		<div>
			<Review />
		</div>
		// return (
		// <div>
		// 	<h1 className="heading">Write a Review</h1>
		//     <form onSubmit={this.handleSubmit}>
		//         <label>
		//             Review: <input type="text" value={this.state.value} onChange={this.handleChange}/>
		//             <button onClick={this.handleSubmit}>Submit</button>
		//         </label>
		//     </form>
		// </div>
		// );
	};

return (
	<div className="post-container">
	<h1 className="heading">{title}</h1>
	<img className="image" src={imgUrl} alt="post" />
	<p>{body}</p>
	<div className="info">	
		<h4>Written by: {author}</h4>
	</div>
	<button onClick={writeReview}>
              Review
            </button>
	</div>
	
);
};

export default Post;
