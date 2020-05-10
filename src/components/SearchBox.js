import React from "react";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleKeyPress = (e) => {
    if (e.key == "Enter") {
      this.props.fetchGif(this.state.search);
    }
  };
  render() {
    const { search } = this.state;
    return (
      <div className="input-container">
        <input
          id="gif-search-input"
          value={search}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button
          id="gif-search-submit"
          onClick={() => this.props.fetchGif(search)}
        >
          Search
        </button>
      </div>
    );
  }
}

export default SearchBox;
