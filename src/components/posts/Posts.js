import Post3, { Post, Post2 } from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://circuitdigest.com/sites/default/files/projectimage_mic/Medicine-Reminder-Using-Arduino.jpg" />
      <Post2 img="https://i.pinimg.com/originals/2f/fa/b7/2ffab75b71475d09c4f7420c03fa2f16.png" />
      <Post3 img="https://www.netzings.com/wp-content/uploads/Gardening-App.jpg" />
  
    </div>
  );
}