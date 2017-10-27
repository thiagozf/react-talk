import { LOCATION_CHANGE } from 'react-router-redux';
import { routeReducer } from '../reducers';

describe('routeReducer tests', () => {
  it('should redirect on LOCATION_CHANGE', () => {
    const payload = { location: '/' };
    const changeLocation = { type: LOCATION_CHANGE, payload };
    const state = routeReducer(undefined, changeLocation);
    expect(state.get('location').toJS()).toEqual(payload);
  });
});
