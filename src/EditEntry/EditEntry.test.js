import React from 'react';
import ReactDom from 'react-dom';
import EditEntry from './EditEntry';
import { BrowserRouter } from 'react-router-dom';

describe('EditMusic Component', () => {
    it('renders without crashing', () => {
        const record = {
            id: 1,
            name: "Test name",
            vintner: "Test vintner"
        }
        const div = document.createElement('div');
        ReactDom.render(
                <BrowserRouter>
                    <EditEntry location={{state: {record}}} record={record} />
                </BrowserRouter>
            , div);
        ReactDom.unmountComponentAtNode(div);
    })
});