import React from "react";
import "./Posts.css";
import Post from "../components/Post";
  
const Posts = () => {
  const blogPosts = [
    {
      title: "Lei Falls",
      body: `A year it's been since I stepped foot into Lei Falls.

      How much can change in a year? I can tell you this, my name isn't Camden Keating. My face isn't my face.
      
      I have a history with this town, but not a soul remembers me. 
      
      I was once a best friend of many. Now I separate myself from everyone.
      
      Lei Falls is not the town I thought it was growing up. The past year has taught me that.
      
      `,
      author: "Rucha Joshi",
      imgUrl:
        "https://d.wattpad.com/story_parts/572997811/images/15374a921c6de1e4279432645337.jpg",
        
    },
    {
      title: "THE CHOSEN TRIO AND THE MAGIC REALM",
      body: `We put down our stuff, take hold of the Cristal, and I start reciting, “For most this spell is hidden for its results are forbidden.”

      Jax continues, “But for me nothing is banned, as Chosen One I’m in Command.”
      
      “It will bring me great joy,” Maddie says and we join in for the last line, focusing our magic into the specific word we chose to focus on at the end, “To turn Phillip into a real Kanay boy.”
      
      `,
      author: "Voltra Damascus",
      imgUrl:
        "https://i.ytimg.com/vi/4fiISQgYriU/hqdefault.jpg",
    },
    {
      title: "Supernature",
      body: `I come from the year 3500. The universe I live in is the opposite of what it was 1500 years ago. No longer is Earth grouped of hundreds of nations, many warring against each other, even more in abject poverty. In 2250, a super volcano erupted in Yellowstone National Park, destroying what was once known as the Americas. Without the formerly greatest world power to maintain balance, the world became chaotic. Finally, three leaders rose up and united what was left of the world into Terra.  `,
      author: "Luarytza Bui",
      imgUrl:
        "https://i.pinimg.com/originals/ae/df/1a/aedf1ad892fe7036b97f0552ca0ae9e6.png",
    },
    {
      title: "Worlds Collide 2",
      body: `We take hold of the scepter and I channel the transportation through the scepter. We land in a tense battle and immediately begin functioning with our other halves. Eve and Jay managed to join as well, and the combined firepower is enough to subdue Jekyll.  `, 
      author: "Viv Grenouille",
      imgUrl:
        "https://i.pinimg.com/originals/0d/6e/8e/0d6e8e74b6265034cdca1583ca2d5d24.jpg",
    },
  ];
  
  return (
    <div className="posts-container">
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
};
  
export default Posts;
