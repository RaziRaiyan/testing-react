import App from './App';
import {shallow} from 'enzyme';
import React from 'react';
import {findByTestAttribute, testStore} from "../Utils/testUtils";

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store}/>).childAt(0).dive();
    // console.log(wrapper.debug());
    return wrapper;
}

describe('App Component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [
                {
                    id: 1,
                title: 'Example title 1',
                body: 'Some text'
                },
                {
                    id: 2,
                    title: 'Example title 2',
                    body: 'Some text'
                },
                {
                    id: 3,
                    title: 'Example title 3',
                    body: 'Some text'
                },

            ]
        };

        wrapper = setUp(initialState);
    });
    it('Should render without errors', () => {
        const component = findByTestAttribute(wrapper, "AppComponent");
        expect(component.length).toBe(1);
    })
})