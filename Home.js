// new file to be created 10/6

import { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [allCode, setAllCode] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/code')
            .then((response) => {
                console.log(response.data);
                setAllCode(response.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    return (
        <div className="container">
            <div className="header">
                <h1>CODING CONTINUER</h1>
            </div>
        </div>
    )
}

export default Home;