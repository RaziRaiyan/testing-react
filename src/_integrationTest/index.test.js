import moxios from 'moxios';
import {testStore} from "../../Utils/testUtils";
import {fetchPost} from "../actions/postAction/postAction";

describe('fetchpost action', () => {
    beforeEach(() => {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();
    });

    it('Store is updated correctly', () => {
        const expectedState = [
            {
            title: 'Example title 1',
            body: 'text'
            },
            {
                title: 'Example title 2',
                body: 'text'
            }
        ];

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            });
        })

        return store.dispatch(fetchPost())
            .then(() => {
                const newState = store.getState().posts;
                expect(newState).toBe(expectedState);
            })
    })
})