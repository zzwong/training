import React from 'react';
import math from 'mathjs';

const Display = props => {
  const { data } = props;

  return <div className="display">{data}</div>;
};

const Button = props => {
  console.log(props.children);

  return (
    <div className={`calc-button ${props.operator ? 'operator' : ''}`} onClick={() => props.onClick(props.children)}>
      {props.operator ? props.operator : props.children}
    </div>
  );
};

class Calculator extends React.Component {
  state = {
    input: '',
    operators: [],
    numbers: [],
    currentNumberIndex: 0
  };

  handleAppendToInput = val => {
    if (val === '×') val = '*';
    if (val === '÷') val = '/';
    this.setState({
      input: this.state.input + val
    });

    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(val)) {
      this.handleNumericClick(val);
    } else {
      this.handleOperatorClick(val);
    }
  };

  handleNumericClick = val => {
    // simply push the first value
    const { numbers, currentNumberIndex } = this.state;
    console.log(numbers, currentNumberIndex);
    if (numbers.length <= 0) {
      // this.numbers.push(val);
      this.setState({
        numbers: [val]
      });
    } else {
      // append to the top element
      if (currentNumberIndex === numbers.length - 1) {
        let _numbers = [...numbers];
        let currentVal = _numbers[currentNumberIndex];
        currentVal += val;
        this.setState({
          numbers: [..._numbers, currentVal]
        });
      } else {
        this.setState({
          numbers: [...numbers, val]
        });
      }
    }
  };

  handleOperatorClick = val => {
    console.log(val);
    console.log(val === '×');
    if (val === '×') val = '*';
    if (val === '÷') val = '/';

    let ops = [...this.state.operators];
    this.setState({
      operator: [...ops, val]
    });
  };

  handleEval = () => {
    this.setState({
      input: math.format(math.eval(this.state.input), { precision: 14 }),
      currentNumberIndex: 0
    });
  };

  handleClear = () => {
    // TODO: implement
    // All Cancel vs Clear Entry
    this.setState({
      input: ''
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="calculator">
        <Display data={this.state.input || 0}> </Display>
        <div className="buttons">
          <div className="row">
            <Button onClick={this.handleClear}>C</Button>
            <Button>+/-</Button>
            <Button operator={'%'} onClick={this.handleAppendToInput}>
              %
            </Button>
            <Button operator={'/'} onClick={this.handleAppendToInput}>
              ÷
            </Button>
          </div>
          <div className="row">
            <Button onClick={this.handleAppendToInput}>7</Button>
            <Button onClick={this.handleAppendToInput}>8</Button>
            <Button onClick={this.handleAppendToInput}>9</Button>
            <Button operator={'x'} onClick={this.handleAppendToInput}>
              ×
            </Button>
          </div>
          <div className="row">
            <Button onClick={this.handleAppendToInput}>4</Button>
            <Button onClick={this.handleAppendToInput}>5</Button>
            <Button onClick={this.handleAppendToInput}>6</Button>
            <Button operator={'-'} onClick={this.handleAppendToInput}>
              -
            </Button>
          </div>
          <div className="row">
            <Button onClick={this.handleAppendToInput}>1</Button>
            <Button onClick={this.handleAppendToInput}>2</Button>
            <Button onClick={this.handleAppendToInput}>3</Button>
            <Button operator={'+'} onClick={this.handleAppendToInput}>
              +
            </Button>
          </div>
          <div className="row">
            <Button onClick={this.handleAppendToInput}>0</Button>
            <Button />
            <Button onClick={this.handleAppendToInput}>.</Button>
            <Button operator={'='} onClick={this.handleEval}>
              =
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

// display should show the last number in the number stack
// after eval (hitting =), the number stack should have one number
// entering number state = true should append to the top most number on number click
//
//

// numbers ['123', '2']
// operators ['*']
