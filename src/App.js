import './App.css';
import Routes from "./AllRoutes/AllRoutes";
import {Provider} from 'react-redux';
import rootReducer from './Services/Reducers/index';
import {legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer,composedEnhancer);

function App() {  
  return (
      <Provider store={store}>
        <div className="App">
          <Routes />
        </div>
      </Provider>
      
    
    
  );
}

export default App;
