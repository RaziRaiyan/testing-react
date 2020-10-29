import React from 'react';
import Header from './Header';
import {shallow} from 'enzyme';
import {findByTestAttribute} from '../../../Utils/testUtils';

const setUp = (props={}) => {
    const component = shallow(<Header {...props}/>);
    return component;
}


describe('Header Component', () => {

    let component;

    beforeEach(() => {
        component = setUp();
    })

    it('Should render without errors', () => {
        const wrapper = findByTestAttribute(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        const wrapper = findByTestAttribute(component, 'logoIMG');
        expect(wrapper.length).toBe(1);
    })
})

