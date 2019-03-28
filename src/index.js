import React from 'react';
import ReactDOM from 'react-dom';
import FAQs from './components/FAQs/';
import data from './components/FAQs/data';

import './styles.css';

function App() {
    return (
        <div className="App">
            <h1>I want to...</h1>
            <p>Choose a section to view tips</p>
            <FAQs data={data} />
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
