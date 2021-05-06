import React from 'react';
import {
    Card, CardHeader, Divider, Grid, CardContent
} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

export interface PanelProps {
    title?: string | null;
    subheader?: string | null;
    children: any;
}

const useStyles = makeStyles({
    card: {
        marginTop: '2rem'
    },
});

const Panel: React.FC<PanelProps> = ({ title, subheader, children }) => {
    const classes = useStyles();

    return <Card className={classes.card}>
        <CardHeader title={title ? title : ''} subheader={subheader ? subheader : ''} />
        <Divider />
        <CardContent>
            <Grid container spacing={2}>
                {children}
            </Grid>
        </CardContent>
    </Card>;
}

export default Panel;
