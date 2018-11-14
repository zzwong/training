import React from 'react';
import math from 'mathjs';

const Display = props => {
  const { data } = props;

  return <div className="display">{data}</div>;
};

const Button = props => {
  return (
    <div className={`calc-button ${props.operator ? 'operator' : ''}`} onClick={() => props.onClick(props.children)}>
      {props.operator ? props.operator : props.children}
    </div>
  );
};

class Calculator extends React.Component {
  state = {
    operator: [],
    numbers: [],
    currentNumberIndex: 0
  };

  handleCalculatorInput = val => {
    if (val === '×') val = '*';
    if (val === '÷') val = '/';

    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(val)) {
      this.handleNumericClick(val);
    } else {
      this.handleOperatorClick(val);
    }
  };

  handleAllClear() {
    this.setState({
      numbers: [],
      operator: []
    });
  }

  handleClearEntry() {
    let numbers = [...this.state.numbers];
    numbers.pop();
    this.setState({
      numbers
    });
  }

  handleNumericClick = val => {
    // simply push the first value
    const { numbers, currentNumberIndex } = this.state;
    if (numbers.length <= 0) {
      this.setState({
        numbers: [val]
      });
    } else {
      // append to the top element
      if (currentNumberIndex === numbers.length - 1) {
        console.log(currentNumberIndex, numbers);
        let _numbers = [...numbers];
        let currentVal = _numbers.pop();
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
    if (val === '×') val = '*';
    if (val === '÷') val = '/';

    let ops = [...this.state.operator];
    this.setState(
      {
        operator: [...ops, val],
        currentNumberIndex: this.state.currentNumberIndex + 1
      },
      () => {
        if (['+', '-'].includes(val) && this.state.numbers.length >= 2) {
          // evaluate
          this.handleEval(true);
        }
      }
    );
  };

  /**
   * Handles evaluation of operands with operator.
   * sumOrDiff is used in considering the following input sequence: '9 x 9 +'
   * to best replicate the way OSX calculator works in that it evaluate and the expression state will look like: '81 + '
   *
   * @param {boolean} sumOrDiff - true if we should keep the operator
   */
  handleEval = sumOrDiff => {
    const [operand1, operand2] = this.state.numbers;
    const operatorStack = [...this.state.operator];
    const op = operatorStack.shift();
    let evalExpression = `${operand1} ${op} ${operand2}`;

    const result = math.format(math.eval(evalExpression), { precision: 14 });
    this.setState({
      currentNumberIndex: 0,
      numbers: [result],
      operator: sumOrDiff ? operatorStack : []
    });
  };

  handleClear = () => {
    if (this.state.numbers.length > 0) {
      // Clear current entry
      this.handleClearEntry();
    } else {
      // clear everything
      this.handleAllClear();
    }
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const numbers = this.state.numbers;
    const d = numbers.length > 0 ? numbers[numbers.length - 1] : 0;
    return (
      <div className="calculator">
        <Display data={d}> </Display>
        <div className="buttons">
          <div className="row">
            <Button onClick={this.handleClear}>{this.state.numbers.length > 0 ? 'C' : 'AC'}</Button>
            <Button>+/-</Button>
            <Button operator={'%'} onClick={this.handleCalculatorInput}>
              %
            </Button>
            <Button operator={'/'} onClick={this.handleCalculatorInput}>
              ÷
            </Button>
          </div>
          <div className="row">
            <Button onClick={this.handleCalculatorInput}>7</Button>
            <Button onClick={this.handleCalculatorInput}>8</Button>
            <Button onClick={this.handleCalculatorInput}>9</Button>
            <Button operator={'x'} onClick={this.handleCalculatorInput}>
              ×
            </Button>
          </div>
          <div className="row">
            <Button onClick={this.handleCalculatorInput}>4</Button>
            <Button onClick={this.handleCalculatorInput}>5</Button>
            <Button onClick={this.handleCalculatorInput}>6</Button>
            <Button operator={'-'} onClick={this.handleCalculatorInput}>
              -
            </Button>
          </div>
          <div className="row">
            <Button onClick={this.handleCalculatorInput}>1</Button>
            <Button onClick={this.handleCalculatorInput}>2</Button>
            <Button onClick={this.handleCalculatorInput}>3</Button>
            <Button operator={'+'} onClick={this.handleCalculatorInput}>
              +
            </Button>
          </div>
          <div className="row">
            <Button onClick={this.handleCalculatorInput}>0</Button>
            <Button />
            <Button onClick={this.handleCalculatorInput}>.</Button>
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
