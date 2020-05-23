import React from 'react';
import ReactDom from 'react-dom';
import Landing from './Landing';

describe('Landing Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<Landing />, div);
        ReactDom.unmountComponentAtNode(div);
    })
});