import "./Review.css";
const Review = ({ post: { body, author }, index }) => {
     
    const handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    const handleSubmit = () => {
        alert("submitted");
    }

    return (
        <div className="post-container">
        <h1 className="heading">Write a Review</h1>
        <form onSubmit={this.handleSubmit}>
            <label>
                Review: <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </label>
        </form>
        <p>{body}</p>
        <div className="info">	
            <h4>Written by: {author}</h4>
        </div>
        </div>
        
    );
    };
export default Review;