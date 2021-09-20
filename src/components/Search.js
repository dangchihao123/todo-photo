import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      listArr: [],
    };
  }
  onChangeInput = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({ [name]: value });
  };

  onSearch = async (event) => {
    event.preventDefault();
    let { query } = this.state;
    let res = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query },
      headers: {
        Authorization: "Client-ID Jc15S8R1hhmdMFNVro7yI4r3ppLZ65hYmiWb4-0729w",
      },
    });

    console.log(res.data.results);

    this.setState({ listArr: res.data.results });
  };
  render() {
    let { query, listArr } = this.state;
    return (
      <div className="container">
        <div>
          <h1>Tìm hình ảnh</h1>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            name="query"
            value={query}
            onChange={(e) => this.onChangeInput(e)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={(event) => this.onSearch(event)}
            >
              Button
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            {listArr &&
              listArr.length > 0 &&
              listArr.map((item, index) => {
                return (
                  <img
                    src={item.urls.small}
                    alt={item.alt_description}
                    className=""
                    style={{ width: "100%" }}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
