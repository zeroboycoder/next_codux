import { useState } from 'react';
import styles from './App.module.scss';
import { NavBar } from './components/nav-bar/nav-bar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
