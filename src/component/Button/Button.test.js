import React from 'react';
import {findByTestAttribute, checkProps} from '../../../Utils/testUtils';
import Button from './Button';
import { shallow } from 'enzyme';

describe('Shared Button Component', () => {
    describe('Checking props', () => {
        it('should not throw warnings', () => {
            const expectedProps = {
                buttonText: 'Text',
                onClickHandler: () => {}
            }

            const propsError = checkProps(Button, expectedProps);
            expect(propsError).toBeUndefined();
        })
    });

    describe('Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Text',
                onClickHandler: () => {}
            }
            wrapper = shallow(<Button {...props}/>);
        })

        it('Should render a button', () => {
            const button = findByTestAttribute(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        })
    });
    
    
});
