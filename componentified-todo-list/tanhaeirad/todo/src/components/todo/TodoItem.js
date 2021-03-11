import React from 'react'
import {connect} from "react-redux";
import {deleteTodo, editTodo} from "../../actions";

class TodoItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            text: this.props.text,
            isDone: this.props.isDone,
            editMode: false
        }
    }

    editClickHandler = event => {
        this.setState(pervState => ({
                ...pervState,
                editMode: true
            })
        )
    }

    okClickHandler = event => {
        this.props.editTodo(this.state.id, this.state.text, this.state.isDone)

        this.setState(pervState => ({
                ...pervState,
                editMode: false
            })
        )
    }

    inputHandler = event => {
        this.setState(pervState => ({
            text: event.target.value,
        }))
    }


    render() {
        //props
        this.id = this.props.id
        this.text = this.props.text;
        this.isDone = this.props.isDone;

        return (
            !this.state.editMode
                ?
                <div className="col-6 mb-2">
                    <div className="d-flex justify-content-between align-items-center border rounded p-3">
                        <div className="d-flex align-items-center">
                            <input type="checkbox" className="todoCheckbox" checked={this.isDone}
                                   onChange={() => this.props.editTodo(this.id, this.text, !this.isDone)}/>
                            <span>{this.text}</span>
                        </div>
                        <div>
                            <button type="button"
                                    className={`btn btn-info btn-sm ${this.isDone ? 'hide' : ''}`}
                                    onClick={this.editClickHandler}>edit
                            </button>
                            <button type="button" className="btn btn-danger btn-sm ml-1"
                                    onClick={() => this.props.deleteTodo(this.id)}>delete
                            </button>
                        </div>
                    </div>
                </div>
                :
                <div className="col-6 mb-2">
                    <div className="d-flex justify-content-between align-items-center border rounded p-3">
                        <div className="d-flex align-items-center">
                            <input value={this.state.text} onChange={this.inputHandler} className="form-control"/>
                        </div>
                        <div>
                            <button type="button"
                                    className={`btn btn-success btn-sm`}
                                    onClick={this.okClickHandler}>OK
                            </button>
                        </div>
                    </div>
                </div>

        )
    }

}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: id => dispatch(deleteTodo(id)),
        editTodo: (id, text, isDone) => dispatch(editTodo(id, text, isDone))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);