import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (<div className="row mt-15">
                <div className="col-md-6">
                    <Search
                    onClickHandleSearch={this.props.onClickSearch}
                    />
                </div>
                <div className="col-md-6">
                    <Sort
                    onClickSort={this.props.onClickSort}
                    sortBy={this.props.sortBy}
                    sortValue={this.props.sortValue}
                    />
                </div>
            </div>
        );
    }
}

export default Control;