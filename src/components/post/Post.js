import { Link } from "react-router-dom";
import "./post.css";

 function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/">
              IOT
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/">
              EMBEDDED-SYSTEM
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/">
             FIGMA-APP-OUTLINE
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/" className="link">
            Smart pill box
          </Link>
        </span>
        <hr />
        <span className="postDate">In progress</span>
      </div>
      <p className="postDesc">
      Many medical errors are due to the fact that people in charge of patient or elder's medication have to deal with sorting huge amounts of pills
each day. This paper consists on the conception, design and creation of a pillbox prototype intended to solve this deficiency in the medical area
as it has the ability of sorting out the pills by itself as well as many other advanced features, with this device being intended to be used by
hospitals or retirement homes
      </p>
    </div>
  );
}

 function Post2({img}) {
    return (
      <div className="post">
        <img
          className="postImg"
          src={img}
          alt=""
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">
              <Link className="link" to="/">
                IOT
              </Link>
            </span>
            <span className="postCat">
              <Link className="link" to="/">
                EMBEDDED-SYSTEM
              </Link>
            </span>
            <span className="postCat">
              <Link className="link" to="/">
               FIGMA-APP-OUTLINE
              </Link>
            </span>
          </div>
          <span className="postTitle">
            <Link to="/" className="link">
              Detection of lora
            </Link>
          </span>
          <hr />
          <span className="postDate">In progress</span>
        </div>
        <p className="postDesc">
        The proposed idea is to create a device,which is used to detect Lora signal in
any area around its range to check whether any unauthorized
organisation is using this lora communication for negative purposes.
        </p>
      </div>
    );
  }

  export default function Post3({img}) {
    return (
      <div className="post">
        <img
          className="postImg"
          src={img}
          alt=""
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">
              <Link className="link" to="/">
                IOT
              </Link>
            </span>
            <span className="postCat">
              <Link className="link" to="/">
                EMBEDDED-SYSTEM
              </Link>
            </span>
            <span className="postCat">
              <Link className="link" to="/">
               FIGMA-APP-OUTLINE
              </Link>
            </span>
          </div>
          <span className="postTitle">
            <Link to="/" className="link">
              Garden App
            </Link>
          </span>
          <hr />
          <span className="postDate">In progress</span>
        </div>
        <p className="postDesc">
        This app is designed to educate and empower farmers and plant enthusiasts alike, by providing them with a wealth of information, resources, and tools to help them grow their plants and knowledge. With its comprehensive plant database, expert gardening tips, and community discussion forums, users can stay up-to-date on the latest trends and best practices in agriculture and home gardening.

        </p>
      </div>
    );
  }
  export {Post, Post2, Post3};