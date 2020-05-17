import React from 'react';

const DivineWinesContext = React.createContext({
    records: [],
    getAllRecords: () => {},
    updateItemRequest: () => {},
    deleteRecord: () => {}
})

export default DivineWinesContext;