import React, { Component } from "react";
import { reviewBudget } from "../helper";
import PropTypes from "prop-types";

class Remaining extends Component {
  render() {
    const budget = this.props.budget;
    const remaining = this.props.remaining;

    return (
      <div className={reviewBudget(budget, remaining)}>
        Restante: $ {this.props.remaining}
      </div>
    );
  }
}

Remaining.propTypes = {
  budget: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired
};

export default Remaining;
