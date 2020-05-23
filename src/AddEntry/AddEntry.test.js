import React from 'react';
import ReactDom from 'react-dom';
import AddEntry from './AddEntry';

describe('AddEntry Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<AddEntry />, div);
        ReactDom.unmountComponentAtNode(div);
    })
});