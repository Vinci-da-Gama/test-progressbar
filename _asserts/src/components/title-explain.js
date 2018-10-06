import React from 'react';
import { CardTitle, CardText } from 'reactstrap';

export default () => (
    <div>
        <CardTitle className="text-center fz2em">
            Progress Bar
        </CardTitle>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <CardText>
                    Choose progressbar via dropdown-list.
                </CardText>
            </li>
            <li className="list-group-item border-bottom">
                <CardText>
                    Add or minus value via buttons.
                </CardText>
            </li>
        </ul>
    </div>
);
