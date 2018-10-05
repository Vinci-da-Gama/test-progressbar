import React, { Component } from 'react';
import { Button } from 'reactstrap';

import { ConstNumbers } from '../consts/Numbers';

class ButtonsContainer extends Component {
    clickToUpdate() {
        this.props.updateBarVal(this.props.elem);
    }

    render() {
        return (
            <Button
                className={`height-3rem rounded-0 mb-2
                    ${this.props.hasSelectedPb !== '' ? 'btn-outline-info' : 'btn-light'}`}
                disabled={ !this.props.hasSelectedPb }
                onClick={ () => {
                    this.clickToUpdate();
                } }>
                {
                    (Math.sign(this.props.elem) === ConstNumbers.ONE) ? '+' : ''
                }
                { this.props.elem }
            </Button>
        );
    }
}

export default ButtonsContainer;
