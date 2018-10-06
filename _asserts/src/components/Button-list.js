import React, {
	Component
} from 'react';
import { FormGroup, Label } from 'reactstrap';

import { ConstNumbers } from '../consts/Numbers';
import ButtonsContainer from './Buttons';

export class ButtonList extends Component {
	render() {
		return (
            <FormGroup>
                <Label for="progressbAs-select" className="text-brand">
                    Add or Minus
                </Label>
                <div className="text-center equalspace-flex">
                    { this.props.btns.map((elem, idx) => (
                        <ButtonsContainer elem={elem} key={elem + idx}
                            hasSelectedPb={ this.props.hasChoosen }
                            updateBarVal={ this.props.updateBarState } />
                    )) }
                </div>
            </FormGroup>
		);
	}
}

export default ButtonList;
