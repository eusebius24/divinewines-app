import React from 'react';
import ReactDom from 'react-dom';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';


describe('Home Component', () => {
    it('renders without crashing', () => {
        const records =  [
                {
                    id: 1,
                    name: "test name",
                    vintner: "test vintner",
                    tasting_notes: "test notes"
                },
                {
                    id: 2,
                    name: "test name 2",
                    vintner: "test vintner 2",
                    tasting_notes: "test notes 2"
                }
            ]
        
        const div = document.createElement('div');
        ReactDom.render(
            <BrowserRouter>
                <Home records={records}/>
            </BrowserRouter>
        , div);
        ReactDom.unmountComponentAtNode(div);
    })
});