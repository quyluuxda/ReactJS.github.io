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
                    />
                </div>
                <div className="col-md-6">
                    <Sort
                    />
                </div>
            </div>
        );
    }
}

export default Control;