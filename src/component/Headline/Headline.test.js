import React from 'react';
import {shallow} from 'enzyme';
import Headline from './Headline';
import {findByTestAttribute, checkProps} from '../../../Utils/testUtils';
import checkPropTypes from 'check-prop-types';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
}


describe('Headline Component', () => {


    describe('Checking proptypes', () => {

        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test',
                desc: 'Test',
                tempArr: [{
                    fName: 'Test',
                    lName: 'Test',
                    email: 'Test',
                    age: 1,
                    onlineStatus: true
                }]
            }

            const propErr = checkProps(Headline, expectedProps);
            expect(propErr).toBeUndefined();
        })

    })

    describe('Have props', () => {

        let component;

        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test description'
            }

            component = setUp(props);
        })

        it('Should render without errors', () => {
            const wrapper = findByTestAttribute(component, 'HeadlineComponent');
            expect(wrapper.length).toBe(1);
        });


        it('Should render h1', () => {
            const wrapper = findByTestAttribute(component, 'header');
            expect(wrapper.length).toBe(1);
        });

        it('Should render desc', () => {
            const wrapper = findByTestAttribute(component, 'desc');
            expect(wrapper.length).toBe(1);
        });
    });

    describe('Have no props', () => {
        
        let component;
        beforeEach(() => {
            component    = setUp();
        });

        it('Should not render', () => {
            const wrapper = findByTestAttribute(component, 'HeadlineComponent');
            expect(wrapper.length).toBe(0);
        })

    });
    
    
})
