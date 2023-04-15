import incdecReducer from './reducer/ReducerIndex';

import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        number: incdecReducer,

    }
});