import React, { Component } from "react";
import PropTypes from "prop-types";

class Expense extends Component {
  render() {
    const { name, quantity } = this.props.expense;
    return (
      <li className="expenses">
        <p>
          {name}
          <span className="expense"> $ {quantity} </span>
        </p>
      </li>
    );
  }
}

Expense.propTypes = {
  expense: PropTypes.object.isRequired
};

export default Expense;
