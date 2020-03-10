import React, { Component } from "react";
import Expense from "./Expense";
import PropTypes from "prop-types";

class Expenses extends Component {
  render() {
    return (
      <div className="expenses-made">
        <h2>Gastos</h2>

        {Object.keys(this.props.expenses).map(key => (
          <Expense key={key} expense={this.props.expenses[key]} />
        ))}
      </div>
    );
  }
}

Expenses.propTypes = {
  expenses: PropTypes.object.isRequired
};

export default Expenses;
