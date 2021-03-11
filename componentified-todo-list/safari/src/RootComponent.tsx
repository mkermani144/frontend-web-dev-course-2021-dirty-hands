import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TaskApp from "./component/TaskApp";

function RootComponent() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="xl">
                <TaskApp/>
            </Container>
        </React.Fragment>
    )
}

export default RootComponent;
