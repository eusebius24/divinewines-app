import React from 'react';
import ReactDom from 'react-dom';
import Footer from './Footer';



describe('Home Component', () => {
    it('renders without crashing', () => {
    
        
        const div = document.createElement('div');
        ReactDom.render(
                <Footer />
        , div);
        ReactDom.unmountComponentAtNode(div);
    })
});