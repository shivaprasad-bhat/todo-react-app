import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import { v4 as uuid } from 'uuid';
import About from './components/pages/About';

export class App extends Component {
    state = {
        todos: [],
    };

    //Toggle Complete
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.isCompleted = !todo.isCompleted;
                }
                return todo;
            }),
        });
    };
    delTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        });
    };
    addTodo = (title) => {
        const newTodo = {
            id: uuid(),
            title: title,
            isCompleted: false,
        };
        this.setState({
            todos: [...this.state.todos, newTodo],
        });
    };
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route
                            exact
                            path="/"
                            render={(props) => (
                                <React.Fragment>
                                    <AddTodo addTodo={this.addTodo} />
                                    <Todos
                                        todos={this.state.todos}
                                        markComplete={this.markComplete}
                                        delTodo={this.delTodo}
                                    />
                                </React.Fragment>
                            )}
                        />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
