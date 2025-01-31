import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
    const [numberOfItems, setNumberOfItems] = useState(10);

    return (
        <>
            <Header numberOfItems={numberOfItems} />
            <Main />
        </>
    );
}

export default App;
