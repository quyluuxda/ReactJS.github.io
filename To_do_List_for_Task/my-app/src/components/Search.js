import React, { Component } from 'react';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strSearch: ''
    }
  }
  handleChange=(event)=> {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSearch=()=>{
    this.props.onClickHandleSearch(this.state.strSearch)
  };
  render() {
    return (
        <div className="input-group">
            <input name="strSearch" type="text" value={this.state.strSearch} onChange={this.handleChange} className="form-control" placeholder="Nhập từ khóa..." />
            <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.handleSearch}>
                    <span className="fa fa-search mr-5" />Tìm
            </button>
            </span>
        </div>
    );
  }
}

export default Search;
