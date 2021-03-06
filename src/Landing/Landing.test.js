import React from 'react';
import ReactDom from 'react-dom';
import Landing from './Landing';
import { BrowserRouter } from 'react-router-dom';

describe('Landing Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<BrowserRouter><Landing /></BrowserRouter>, div);
        ReactDom.unmountComponentAtNode(div);
    })
});