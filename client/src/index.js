import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './App';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';


const initialState = {
  movies: [
    { id: 1, title: 'A River Runs Through It', release_year: 1992, synopsis: "The Maclean brothers, Paul (Brad Pitt) and Norman (Craig Sheffer), live a relatively idyllic life in rural Montana, spending much of their time fly fishing. The sons of a minister (Tom Skerritt), the boys eventually part company when Norman moves east to attend college, leaving his rebellious brother to find trouble back home. When Norman finally returns, the siblings resume their fishing outings, and assess both where they've been and where they're going.", score: 0 },
    { id: 2, title: 'Se7en', release_year: 1995, synopsis: "When retiring police Detective William Somerset (Morgan Freeman) tackles a final case with the aid of newly transferred David Mills (Brad Pitt), they discover a number of elaborate and grizzly murders. They soon realize they are dealing with a serial killer (Kevin Spacey) who is targeting people he thinks represent one of the seven deadly sins. Somerset also befriends Mills' wife, Tracy (Gwyneth Paltrow), who is pregnant and afraid to raise her child in the crime-riddled city.", score: 0 },
    { id: 3, title: 'Inception', release_year: 2010, synopsis: "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move.", score: 0 }
  ]
};

const store = createStore(rootReducer, initialState);



ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
