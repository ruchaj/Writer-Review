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
			<h4>Write a Review</h4>
		</div>
		<div>
		
		</div>
	{/* <h1 className="heading">Write a Review</h1>
        <form onSubmit={this.handleSubmit}>
            <label>
                Review: <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </label>
        </form> */}
	
	{/* <BrowserRouter>
		<div>
			<div>
				<Link to ="/Review">Review</Link>
			</div>
				<Routes>
					<Route path="/Review" component={Review}
					/>
				</Routes>
		</div>
	</BrowserRouter> */}
	</div>
	
);
};

export default Post;
