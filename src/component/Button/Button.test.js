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
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                buttonText: 'Text',
                onClickHandler: mockFunc
            }
            wrapper = shallow(<Button {...props}/>);
        })

        it('Should render a button', () => {
            const button = findByTestAttribute(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });

        it('Should emmit callback on click event', () => {
            const button = findByTestAttribute(wrapper, 'buttonComponent');
            button.simulate('click');
            const callBack = mockFunc.mock.calls.length;
            expect(callBack).toBe(1);
        })
    });
    
    
});
