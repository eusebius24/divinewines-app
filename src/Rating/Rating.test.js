import React from 'react';
import ReactDom from 'react-dom';
import Rating from './Rating';



describe('Rating Component', () => {
    const rating = 3;
    it('renders without crashing', () => {
    
        
        const div = document.createElement('div');
        ReactDom.render(
                <Rating rating={rating}/>
        , div);
        ReactDom.unmountComponentAtNode(div);
    })
});