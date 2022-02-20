import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import App from "../App";
import "./Post.css";
import Review from "./Review"

const Post = ({ post: { title, body,
imgUrl, author }, index }) => {

	const handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    const handleSubmit = () => {
        alert("submitted");
    }

return (
	<div className="post-container">
		<h1 className="heading">{title}</h1>
		<img className="image" src={imgUrl} alt="post" />
		<p>{body}</p>
		<div className="info">	
			<h4>Written by: {author}</h4>
		</div>
		<div>
			<form>
				<h5>
				Leave a Review!
				<br></br>
					<input type="text"></input>
					<br></br>
				</h5>
				<button>Submit</button>

			</form>
		</div>
	</div>
	
);
};

export default Post;
