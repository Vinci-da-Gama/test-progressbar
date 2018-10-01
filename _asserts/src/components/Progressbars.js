import React, { Component } from 'react';
import { Progress } from 'reactstrap';

import ConstNumbers from '../consts/Numbers';

export class Progressbars extends Component {
    renderBars() {
        return this.props.bars.map((elem, idx) => (
            <div key={elem.pbId + idx}>
                <div className="text-center middle-percent">
                    {elem.val}%
                </div>
                <Progress animated color={`${elem.val > this.props.limit ? 'danger' : 'info'}`}
                    className="height-3rem rounded-0"
                    value={ elem.val } />
            </div>
        ));
    }

    render() {
        return (
            <div>
                { this.renderBars() }
            </div>
        );
    }
};

export default Progressbars;
