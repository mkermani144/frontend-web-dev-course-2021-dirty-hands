import React from 'react'
import {connect} from "react-redux";
import {addTodoToBottom, addTodoToTop} from "../../actions";

class AddTodo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputText: ''
        };
    }

    handleChange = (event) => {
        this.setState(state => ({
            ...state,
            inputText: event.target.value
        }));
    }

    handleAddToBottom = () => {
        this.props.addTodoToBottom(this.state.inputText);
        this.setState(state => ({
            ...state,
            inputText: ''
        }));
    }

    handleAddToTop = () => {
        this.props.addTodoToTop(this.state.inputText);
        this.setState(state => ({
            ...state,
            inputText: ''
        }));
    }

    render() {
        return (
            <>
                <div className="container d-flex flex-column align-items-center">
                    <div className="form-inline">
                        <form className="form-group">
                            <input type="text" className="form-control mx-sm-3"
                                   placeholder="i want to do ..."
                                   value={this.state.inputText} onChange={this.handleChange}/>
                            <button className="btn btn-dark mr-1" onClick={this.handleAddToBottom}>add to bottom
                            </button>
                            <button className="btn btn-dark" onClick={this.handleAddToTop}>add to top</button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodoToBottom: text => dispatch(addTodoToBottom(text)),
        addTodoToTop: text => dispatch(addTodoToTop(text)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);