import React from 'react'
import {connect} from 'react-redux'
import {showAll, showCompleted, showUnCompleted} from "../../actions";
import {SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED} from "../../actions/actionType";

class TodoNav extends React.Component {
    render() {

        let todo = this.props.todo
        let completedTodo = todo.filter(item => item.isDone)
        let uncompletedTodo = todo.filter(item => !item.isDone)

        let mode = this.props.showMode;
        return (
            <nav className="col-6 mb-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <p className={`nav-item nav-link font-weight-bold ${mode === SHOW_ALL ? 'active' : ''}`}
                       onClick={this.props.showAll}>
                        all <span className="badge badge-secondary">{todo.length}</span>
                    </p>
                    <p className={`nav-item nav-link font-weight-bold ${mode === SHOW_UNCOMPLETED ? 'active' : ''}`}
                       onClick={this.props.showUncompleted}>
                        undone <span className="badge badge-warning">{uncompletedTodo.length}</span>
                    </p>
                    <p className={`nav-item nav-link font-weight-bold ${mode === SHOW_COMPLETED ? 'active' : ''}`}
                       onClick={this.props.showCompleted}>
                        done <span className="badge badge-success">{completedTodo.length}</span>
                    </p>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        todo: state.todos,
        showMode: state.showMode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showAll: () => dispatch(showAll()),
        showCompleted: () => dispatch(showCompleted()),
        showUncompleted: () => dispatch(showUnCompleted())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoNav);