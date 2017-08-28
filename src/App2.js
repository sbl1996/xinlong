import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { ProductsList } from './products';

const App = () => (
    <Admin restClient={jsonServerRestClient('http://115.155.100.208:5000')}>
        <Resource name="products" list={ProductsList} />
    </Admin>
);

export default App;