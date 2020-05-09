import React from "react";
import SearchBox from "./SearchBox";

class Gallery extends React.Component {
  fetchGif = (search) => {
    if (search.trim().length > 0) {
      fetch(
        `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=X8oKb5Tpms58uaWXxfKyqfoD9A9PYL9A`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  handleClick = (url) => {
    this.setState({ imageUrl: url });
  };

  render() {

    return (
      <div className="parent-container">
        <div className="header">
          <h2 className="title">Gif Search</h2>
        </div>
        <SearchBox fetchGif={this.fetchGif} />
      </div>
    );
  }
}

export default Gallery;
