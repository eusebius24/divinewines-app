import React from 'react';
import wineStore from '../store.js';

const DivineWinesContext = React.createContext({
    addRecord: () => {},
    store: wineStore,
})



export default DivineWinesContext;