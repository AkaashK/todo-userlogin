import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension'
import reducer from './reducer'
import * as actionCreators from './actions'

const store = createStore(reducer, devToolsEnhancer({ actionCreators, serialize: true, trace: true }));

export default store

