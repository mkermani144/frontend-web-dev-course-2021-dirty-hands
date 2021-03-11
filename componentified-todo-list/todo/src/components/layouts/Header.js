import React from 'react'

class Header extends React.Component {

    render() {
        return (
            <header>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container d-flex justify-content-between">
                        <p className="navbar-brand d-flex align-items-center">
                            <strong>Todo App</strong>
                        </p>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;