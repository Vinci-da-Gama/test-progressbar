import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Card, CardImg, CardBody,
    Col, Row
} from 'reactstrap';

import { ConstNumbers } from '../consts/Numbers';
import { getPbs } from '../actions';
import Spinner from '../components/spinner';
import TitleExplain from '../components/title-explain';
import Progressbars from '../components/Progressbars';
import ProgressbarSelector from '../components/Progressbar-selector';
import ButtonList from '../components/Button-list';

export class Assemblage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bars: [{
                pbId: '',
                val: ConstNumbers.ZERO
            }],
            chosenBar: ''
        };
    }

    componentWillMount() {
        this.props.getPbs();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            bars: nextProps.bars
        });
    }
    /* static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.bars !== prevState.bars) {
            return {
                bars: nextProps.bars
            };
        }
        return null;
    } */

    selectPorgressbarById(e) {
        const chosenBar = e.target.value;
        this.setState(() => ({ chosenBar }));
    }

    updateBarVal(num) {
        const allPbIds = Object.keys(this.props.bars).map((elem, idx) => {
            return `pb${idx + ConstNumbers.ONE}`;
        });
        // const targetBar = this.state.bars.find((elem) => elem.pbId === this.state.chosenBar);
        if (allPbIds.indexOf(this.state.chosenBar) !== ConstNumbers.MINUSONE) {
            const bars = this.state.bars.map((elem) => {
                const newVal = (elem.val + num) < ConstNumbers.ZERO
                    ? ConstNumbers.ZERO : elem.val + num;
                if (elem.pbId === this.state.chosenBar) {
                    return {
                        pbId: elem.pbId,
                        val: newVal
                    };
                }
                return elem;
            });
            this.setState({
                bars
            });
        }
    }

    render() {
        if (!this.props.btns || !this.props.bars || !this.props.limit) {
            return (
                <Spinner />
            );
        }
        return (
            <div className="row">
                <div className="col-12">
                    <Card className="centered-container">
                        <CardImg top className="img-fluid w-50 mx-auto mt-3"
                            src="../../img/bmplogo.svg" alt="logo" />
                        <CardBody>
                            <TitleExplain />
                            <div className="mb-3">
                                <Progressbars bars={ this.state.bars } limit={ this.props.limit } />
                            </div>
                            <div className="mb-3">
                                <Row>
                                    <Col sm={4}>
                                        <ProgressbarSelector bars={ this.state.bars }
                                            hasSelectedPb={ this.state.chosenBar }
                                            selectPbById={
                                                (event) => {
                                                    this.selectPorgressbarById(event);
                                            }} />
                                    </Col>
                                    <Col sm={8}>
                                        <ButtonList hasChoosen={ this.state.chosenBar }
                                            btns={ this.props.btns }
                                            updateBarState={
                                                (number = ConstNumbers.ZERO) => {
                                                    this.updateBarVal(number);
                                                }
                                            } />
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

Assemblage.propTypes = {
    bars: PropTypes.array,
    chosenBar: PropTypes.string
};

const mapStateToProps = (state) => ({
    btns: state.pbs.buttons,
    bars: state.pbs.bars,
    limit: state.pbs.limit
});

export default connect(mapStateToProps, { getPbs })(Assemblage);
