import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
    const [numberOfItems, setNumberOfItems] = useState(0);

    function handleAddRoCart() {
        setNumberOfItems(numberOfItems + 1);
    }

    return (
        <>
            <Header numberOfItems={numberOfItems} />
            <Main addToCart={handleAddRoCart} />
        </>
    );
}

export default App;
