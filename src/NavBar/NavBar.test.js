import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './NavBar';



describe('Home Component', () => {
    it('renders without crashing', () => {
    
        
        const div = document.createElement('div');
        ReactDom.render(
                <NavBar />
        , div);
        ReactDom.unmountComponentAtNode(div);
    })
});