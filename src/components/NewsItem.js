import React, { Component } from "react";
import unable from "./unable.jpg";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, publishedAt, content, author, newsUrl } =
      this.props;

    // Check if any property is equal to "[Removed]"
    const isRemoved =
      title === "[Removed]" ||
      description === "[Removed]" ||
      content === "[Removed]" ||
      author === "[Removed]";

    // If any property is "[Removed]", skip rendering the entire card
    if (isRemoved) {
      return null;
    }
    return (
      <div className="container">
        <div
          className="card mb-3"
          style={{ maxWidth: "1500px", maxHeigth: "100px" }}
        >
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src={!imgUrl ? unable : imgUrl}
                className="img-fluid rounded-start"
                style={{ height: "100%" }}
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{content}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    By {author || "Unknown"} on{" "}
                    {new Date(publishedAt).toUTCString()}
                  </small>
                </p>
                <a
                  href={newsUrl}
                  target="_blank"
                  className="btn btn-success"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    marginBottom: "1rem",
                    marginRight: "1rem",
                  }}
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
