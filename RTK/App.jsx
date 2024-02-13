// import React from 'react'
// import MainScreen from './src/screens/extraReducerFiles/MainScreen'
// import { Provider } from 'react-redux'
// import {store} from './src/RTK/extraReducer/store'

// const App = () => {

//   return (
//     <Provider store={store}>
//       <MainScreen/>
//     </Provider>

//   )
// }

// export default App

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/RTK/reducer/store';
import Home from './src/screens/reducerFiles/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
