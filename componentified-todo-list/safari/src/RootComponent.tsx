import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TaskApp from "./component/TaskApp";
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

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
