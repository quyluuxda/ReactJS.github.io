import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index'


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
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
    this.props.onSearch(this.state.keyword)
  };
  render() {
    return (
        <div className="input-group">
            <input name="keyword" type="text" value={this.state.keyword} onChange={this.handleChange} className="form-control" placeholder="Nhập từ khóa..." />
            <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.handleSearch}>
                    <span className="fa fa-search mr-5" />Tìm
            </button>
            </span>
        </div>
    );
  }
}

const mapStateToProps =(state)=>{
  return  {
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      dispatch(actions.searchTask(keyword))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Search);
