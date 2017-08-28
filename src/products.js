import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const ProductsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="retailPrice" />
            <TextField source="category" />
        </Datagrid>
    </List>
);