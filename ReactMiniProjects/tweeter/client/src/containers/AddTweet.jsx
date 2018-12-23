import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTweet } from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  onSubmit: tweet => dispatch(addTweet(tweet))
});

class AddTweet extends React.Component {
  state = {
    text: ''
  };

  inputRef = React.createRef();

  onInputChange = () => {
    const { value } = this.inputRef.current;
    this.setState({
      text: value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    if (!this.inputRef.current.value.trim()) return;

    this.props.onSubmit({
      text: this.state.text,
      createdAt: new Date(),
      likes: 0,
      id: Math.floor(Math.random() * 1000)
    });

    this.inputRef.current.value = '';
    this.setState({
      text: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref={this.inputRef} onChange={this.onInputChange} />
          <button type="submit" disabled={this.state.text.length <= 0}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

AddTweet.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddTweet);
