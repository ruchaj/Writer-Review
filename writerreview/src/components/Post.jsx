import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./Post.css";
import Review from "./Review"

const Post = ({ post: { title, body,
imgUrl, author }, index }) => {
return (
	<div className="post-container">
	<h1 className="heading">{title}</h1>
	<img className="image" src={imgUrl} alt="post" />
	<p>{body}</p>
	<div className="info">	
		<h4>Written by: {author}</h4>
	</div>
	<BrowserRouter>
					<div>
						<div>
							<Link to ="/Review">Review</Link>
						</div>
						<Routes>
							<Route path="/Review" component={Review}/>
						</Routes>
					</div>
				</BrowserRouter>
	</div>
	
);
};

export default Post;
