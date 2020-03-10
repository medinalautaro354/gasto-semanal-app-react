import React, { Component } from "react";
import PropTypes from "prop-types";

class ExpenseForm extends Component {
  expenseRef = React.createRef();
  quantityRef = React.createRef();

  createExpense = e => {
    e.preventDefault();

    let expense = {
      name: this.expenseRef.current.value,
      quantity: this.quantityRef.current.value
    };

    this.props.addExpense(expense);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.createExpense}>
        <h2>Agrega tus gastos aqui</h2>
        <div className="field">
          <label>Nombre Gasto</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Ej. Transporte"
            ref={this.expenseRef}
          />
        </div>

        <div className="field">
          <label>Cantidad</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Ej. 300"
            ref={this.quantityRef}
          />
        </div>

        <input
          className="button-primary u-full-width"
          type="submit"
          value="Agregar"
        />
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  addExpense: PropTypes.func.isRequired
};

export default ExpenseForm;
