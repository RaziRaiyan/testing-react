import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttribute, checkProps} from '../../../Utils/testUtils';
import ListItem from './ListItem';

describe('ListItem component', () => {
    describe('Checking PropTypes', () => {
        
        it('Should not throw a waring', () => {
            const expectedProps = {
                title: 'test title',
                desc: 'Some description'
            }

            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        })
    });

    describe('Component describe', () => {
        let wrapper;

        beforeEach(() => {
            const props = {
                title: 'Test title',
                desc: 'Test desc'
            }

            wrapper = shallow(<ListItem {...props}/>)
        });

        it('Should render without error', () => {
            const component = findByTestAttribute(wrapper, 'ListItemComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a title', () => {
            const title = findByTestAttribute(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        });

        it('Should render a description', () => {
            const title = findByTestAttribute(wrapper, 'componentDescription');
            expect(title.length).toBe(1);
        })
    });

    describe('Should NOT render', () => {
        let wrapper;

        beforeEach(() => {
            const props = {
                title: 'Test title',
                desc: 'Test desc'
            }

            wrapper = shallow(<ListItem/>)
        });

        it('Component is not rendered', () => {
            const component = findByTestAttribute(wrapper, 'ListItemComponent');
            expect(component.length).toBe(0);
        })
    })
    
    
});
