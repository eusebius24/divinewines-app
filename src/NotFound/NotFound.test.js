import React from 'react';
import ReactDom from 'react-dom';
import NotFound from './NotFound';



describe('Home Component', () => {
    it('renders without crashing', () => {
    
        
        const div = document.createElement('div');
        ReactDom.render(
                <NotFound />
        , div);
        ReactDom.unmountComponentAtNode(div);
    })
});