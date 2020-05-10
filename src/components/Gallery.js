import React from "react";
import SearchBox from "./SearchBox";
import GifPreview from "./GifPreview";
import GifFullView from './GifFullView';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  fetchGif = (search) => {
    if (search.trim().length > 0) {
      fetch(
        `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=X8oKb5Tpms58uaWXxfKyqfoD9A9PYL9A`
      )
        .then((res) => res.json())
        .then((data) => {
          const gifs = data.data.map((gifInfo) => {
            return {
              gifUrl: gifInfo.images.preview_gif.url,
              focusUrl: gifInfo.images.original.url,
              fixed_height: gifInfo.images.fixed_height_still.url,
              title: gifInfo.title,
              key: gifInfo.id,
            };
          });
          this.setState({ gifs });
        });
    }
  };

  handleClick = (url) => {
    this.setState({ imageUrl: url });
  };

  displayGifs = () => {
    const { gifs } = this.state;
    const gifContainer = [];

    gifs.forEach((gif) => {
      gifContainer.push(
        <GifPreview
          handleClick={this.handleClick}
          url={gif.gifUrl}
          focusUrl={gif.focusUrl}
          key={gif.key}
        />
      );
    });

    return <div className="gif-container">{gifContainer}</div>;
  };

  render() {
    const { gifs, imageUrl } = this.state;
    if (imageUrl) {
      return <GifFullView handleClick={this.handleClick} url={imageUrl} />;
    }

    return (
      <div className="parent-container">
        <SearchBox fetchGif={this.fetchGif} />
        {gifs ? this.displayGifs() : null}
      </div>
    );
  }
}

export default Gallery;
