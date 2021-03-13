import React from 'react'

//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

//components
import Header from './layouts/Header'
import AddTodo from './todo/AddTodo'
import TodoList from './todo/TodoList'

class App extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <main>
                    <section className="jumbotron">
                        <div className="container d-flex flex-column align-items-center">
                            <h1 className="jumbotron-heading">Welcome!</h1>
                            <p className="lead text-muted">To get started, add some items to your list:</p>
                            <AddTodo/>
                        </div>
                    </section>
                    <TodoList/>
                </main>
            </>
        )
    }
}

export default App;
