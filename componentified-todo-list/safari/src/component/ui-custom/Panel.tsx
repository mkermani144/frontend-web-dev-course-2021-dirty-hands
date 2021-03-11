import React from 'react';
import {
    Card, CardHeader, Divider, Grid, CardContent
} from '@material-ui/core';

export interface PanelProps {
    title?: string | null;
    subheader?: string | null;
    children: any;
}

const Panel: React.FC<PanelProps> = ({ title, subheader, children }) => {
    return <Card style={{ marginTop: '2%' }}>
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
