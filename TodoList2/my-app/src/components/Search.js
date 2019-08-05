import React, { Component } from 'react';
// import './App.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          strSearch:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }
    handleChange(event) {
      this.setState({strSearch: event.target.value});
    }
    handleSearch(){
      this.props.onClickSearch(this.state.strSearch)
    }
    render() {
        return (<div className="col-md-3">
        <div className="input-group mb-3">
          <input value={this.state.strSearch} onChange={this.handleChange} type="text" className="form-control" placeholder="Search for ..." aria-label="Search for ..." aria-describedby="button-addon2" />
          <div className="input-group-append">
            <button onClick={this.handleSearch} className="btn btn-outline-secondary" type="button" id="button-addon2">Go!</button>
          </div>
        </div>
      </div>
        );
    }
}


export default Search;