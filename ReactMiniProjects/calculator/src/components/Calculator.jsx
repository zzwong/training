import React from 'react';
import math from 'mathjs';

const Display = props => {
  const { data } = props;

  return <div className="display">{data}</div>;
};

const Button = props => {
  return (
    <div
      className={`calc-button ${props.operator ? 'operator' : ''} ${props.hasOwnProperty('dark') ? 'dark-button' : ''}`}
      onClick={() => (!!props.onClick ? props.onClick(props.children) : null)}
    >
      {props.children}
    </div>
  );
};

class Calculator extends React.Component {
  state = {
    operator: [],
    numbers: [],
    currentNumberIndex: 0,
    shouldClearOnNumberEnter: false,
    lastOperationBuffer: ''
  };

  handleCalculatorInput = val => {
    if (val === '×') val = '*';
    if (val === '÷') val = '/';

    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].includes(val)) {
      this.handleNumericClick(val);
    } else {
      this.handleOperatorClick(val);
    }
  };

  handleAllClear() {
    this.setState({
      numbers: [],
      operator: [],
      lastOperationBuffer: ''
    });
  }

  handleSignToggleClick = () => {
    // updates sign on top most number
    let numbers = [...this.state.numbers];
    if (numbers.length > 0) {
      let number = numbers.pop();
      if (number.includes('-')) {
        number = number.slice(1);
      } else {
        number = '-' + number;
      }
      this.setState({
        numbers: [...numbers, number]
      });
    }
  };

  handleClearEntry() {
    let numbers = [...this.state.numbers];
    numbers.pop();
    this.setState({
      numbers
    });
  }

  handleNumericClick = val => {
    // simply push the first value
    const { numbers, currentNumberIndex, shouldClearOnNumberEnter } = this.state;
    if (numbers.length <= 0 || shouldClearOnNumberEnter) {
      if (val === '.') {
        val = '0.';
      }
      this.setState({
        numbers: [val],
        shouldClearOnNumberEnter: false
      });
    } else {
      // append to the top element of number stack
      if (currentNumberIndex === numbers.length - 1) {
        console.log(currentNumberIndex, numbers);
        let _numbers = [...numbers];
        let currentVal = _numbers.pop();

        // Handle multiple '.' inputs
        if (val === '.' && currentVal.includes('.')) {
          // could handle some error state here
          return;
        }
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

    this.setState(
      {
        operator: [val],
        currentNumberIndex: this.state.currentNumberIndex + 1,
        shouldClearOnNumberEnter: false
      },
      () => {
        if (['+', '-'].includes(val) && this.state.numbers.length >= 2) {
          // evaluate
          this.handleEval(true);
        }
      }
    );
  };

  handlePercentClick = () => {
    let numbers = [...this.state.numbers];
    if (numbers.length > 0) {
      let number = numbers.pop();
      number /= 100;
      this.setState({
        numbers: [...numbers, number]
      });
    }
  };

  /**
   * Handles evaluation of operands with operator.
   * sumOrDiff is used in considering the following input sequence: '9 x 9 +'
   * to best replicate the way OSX calculator works in that it evaluate and the expression state will look like: '81 + '
   *
   * @param {boolean} sumOrDiff - true if we should keep the operator
   */
  handleEval = sumOrDiff => {
    if (this.state.numbers.length <= 1) {
      // handle operationBuffer ie number + 3 was the last operation, should continue +3 on result
      if (
        this.state.numbers.length === 1 &&
        !!this.state.lastOperationBuffer &&
        this.state.lastOperationBuffer.length > 0
      ) {
        let evalExpression = `${this.state.lastOperationBuffer} ${this.state.numbers[0]}`;
        const result = math.format(math.eval(evalExpression), { precision: 14 });
        this.setState({
          currentNumberIndex: 0,
          numbers: [result],
          shouldClearOnNumberEnter: true
        });
      }
      // handle single operand to evaluate operator on itself
      //   ex. '2 + =' --> 2 + 2; '2 * =' --> 2 * 2
      else if (this.state.numbers.length === 1 && this.state.operator.length === 1) {
        const operand = this.state.numbers[0];
        const op = this.state.operator[0];
        let evalExpression = `${operand} ${op} ${operand}`;
        const result = math.format(math.eval(evalExpression), { precision: 14 });
        this.setState({
          operator: [],
          currentNumberIndex: 0,
          numbers: [result],
          shouldClearOnNumberEnter: false,
          lastOperationBuffer: `${operand} ${op}`
        });
      }

      return;
    }

    const [operand1, operand2] = this.state.numbers;
    const operatorStack = [...this.state.operator];
    const op = operatorStack.shift();
    let evalExpression = `${operand1} ${op} ${operand2}`;

    const result = math.format(math.eval(evalExpression), { precision: 14 });
    this.setState({
      lastOperationBuffer: `${operand2} ${op}`,
      currentNumberIndex: 0,
      numbers: [result],
      shouldClearOnNumberEnter: true,
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
    // debugging
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
            <Button dark onClick={this.handleClear}>
              {this.state.numbers.length > 0 ? 'C' : 'AC'}
            </Button>
            <Button dark onClick={this.handleSignToggleClick}>
              +/-
            </Button>
            <Button dark onClick={this.handlePercentClick}>
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
