import React, { useContext } from 'react';

const DivineWinesContext = React.createContext({
    addRecord: () => {},
})

export const useAppContext = () => {
    useContext(DivineWinesContext)
}

export default DivineWinesContext;