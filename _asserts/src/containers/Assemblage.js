import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Card, CardImg, CardBody,
    FormGroup, Label, Col, Row
} from 'reactstrap';

import { ConstNumbers } from '../consts/Numbers';
import { getPbs } from '../actions';
import Spinner from '../components/spinner';
import TitleExplain from '../components/title-explain';
import Progressbars from '../components/Progressbars';
import ProgressbarSelector from '../components/Progressbar-selector';
import ButtonsContainer from '../components/Buttons';

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
        const bars = nextProps.bars.map((elem, idx) => {
            return {
                pbId: `pb${idx + ConstNumbers.ONE}`,
                val: elem
            };
        });
        this.setState({
            bars
        });
    }

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
                                        <FormGroup>
                                            <Label for="progressbAs-select0" className="text-brand">
                                                Select Progressbar
                                            </Label>
                                            <ProgressbarSelector bars={ this.state.bars }
                                                hasSelectedPb={ this.state.chosenBar }
                                                selectPbById={
                                                    (event) => {
                                                        this.selectPorgressbarById(event);
                                                }}/>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={8}>
                                        <FormGroup>
                                            <Label for="progressbAs-select" className="text-brand">
                                                Add or Minus
                                            </Label>
                                            <div className="text-center equalspace-flex">
                                                { this.props.btns.map((elem, idx) => (
                                                    <ButtonsContainer elem={elem} key={elem + idx}
                                                        hasSelectedPb={ this.state.chosenBar }
                                                        updateBarVal={
                                                            (number = ConstNumbers.ZERO) => {
                                                                this.updateBarVal(number);
                                                            }
                                                        } />
                                                )) }
                                            </div>
                                        </FormGroup>
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

const mapStateToProps = (state) => ({
    btns: state.pbs.buttons,
    bars: state.pbs.bars,
    limit: state.pbs.limit
});

export default connect(mapStateToProps, { getPbs })(Assemblage);
