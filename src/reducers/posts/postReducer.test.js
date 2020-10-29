import {types} from '../../actions/types';
import {postReducer} from './postReducer';

describe('Post Reducer', () => {
    it('should return default state', () => {
        // type didn't matched and it should return some default piece of state
        // The first argument in this case is the initial state
        const newState = postReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('should return new state if recieving type', () => {
        const posts = [{title: 'Test 1'}, {title: 'Test 2'}, {title: 'Test 3'}];
        const newState = postReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);
    })
})