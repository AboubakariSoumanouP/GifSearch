import React from "react";

class App extends React.Component {
  
  render() {

    return (
      <div className="parent-container">
        <div className="header">
          <h2 className="title">Gif Search</h2>
        </div>

        <div className="input-container">
          <input
            id="gif-search-input"
          />
          <button id="gif-search-submit" onClick={this.fetchGif}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default App;

