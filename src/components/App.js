import React, { Component } from "react";
import "../css/App.css";
import Header from "./Header";
import Form from "./Form";
import Expenses from "./Expenses";
import { validateBudget } from "../helper";
import BudgetControl from "./BudgetControl";

class App extends Component {
  state = {
    budget: "",
    remaining: "",
    expenses: {}
  };

  componentDidMount() {
    this.getBudget();
  }

  getBudget = () => {
    let budget = prompt("Cual es tu presupuesto?");

    let result = validateBudget(budget);

    if (result) {
      this.setState({
        budget,
        remaining: budget
      });
    } else {
      this.getBudget();
    }
  };

  addExpense = expense => {
    ///con este operador hacemos una copia del objeto.
    const expenses = { ...this.state.expenses };

    expenses[`expense${Date.now()}`] = expense;

    this.subtractBudget(expense.quantity);

    this.setState({
      expenses
    });

    console.log(expenses);
  };

  subtractBudget = amountOfExpenditure => {
    let subtract = Number(amountOfExpenditure);

    let remaining = this.state.remaining;

    remaining -= subtract;

    remaining = String(remaining);

    this.setState({
      remaining
    });
  };

  render() {
    return (
      <div className="App container">
        <Header tittle="Gasto semanal" />

        <div className="core-content content">
          <div className="row">
            <div className="one-half column">
              <Form addExpense={this.addExpense} />
            </div>
            <div className="one-half column">
              <Expenses expenses={this.state.expenses} />
              <BudgetControl
                budget={this.state.budget}
                remaining={this.state.remaining}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
