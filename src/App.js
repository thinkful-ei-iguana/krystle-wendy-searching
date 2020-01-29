import React, { Component } from "react";
import search from "./Search";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lSearch: 0, bSearch: 0, item: null };
  }

  handleLinearSearch = e => {
    const { linearSearch } = search;
    e.preventDefault();
    console.log(this.state);
    const { data } = this.props;
    const { item } = this.state;
    let index = linearSearch(data, item);
    this.setState({ lSearch: index });
  };

  handleBinarySearch = e => {
    const { binarySearch } = search;
    e.preventDefault();
    console.log(this.state);
    const { data } = this.props;
    const { item } = this.state;
    let index = binarySearch(data, item);
    console.log(index);
    this.setState({ bSearch: index });
  };

  renderLinearResult() {
    const { lSearch, item } = this.state;
    return (
      <div>
        <h3>Linear Search Results</h3>
        <p>
          Value {item} found in {lSearch} tries.
        </p>
        <ul>
          Given array with data:
          {this.props.data.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    );
  }

  renderBinaryResult() {
    const { bSearch, item } = this.state;
    return (
      <div>
        <h3>Binary Search Results</h3>
        <p>
          Value {item} found in {bSearch} tries.
        </p>
        <ul>
          Given array with data:
          {this.props.data.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { lSearch, bSearch, item } = this.state;
    return (
      <div>
        <input
          type="number"
          onChange={e => this.setState({ ...this.state, item: e.target.value })}
        />
        <button onClick={this.handleLinearSearch}>Linear Search</button>
        {/* <input
          type="number"
          placeholder="binary search"
          onChange={e => this.setState({ ...this.state, item: e.target.value })}
        /> */}
        <button onClick={this.handleBinarySearch}>Binary Search</button>

        {!!lSearch && this.renderLinearResult()}
        {!!bSearch && this.renderBinaryResult()}
      </div>
    );
  }
}
export default App;
