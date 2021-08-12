import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

let rerenderEntireTree = () => {
   ReactDOM.render(
      <BrowserRouter>
         <App
            store={store}
            state={store.getState()}
            dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>, document.getElementById('root'))
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
   let state = store.getState();
   rerenderEntireTree(state);
});

// 0т 41 урока