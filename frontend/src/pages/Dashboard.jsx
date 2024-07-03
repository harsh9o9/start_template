// import { useEffect } from "react";

import { useEffect, useState } from 'react';

export default function Dashboard() {
    const [response, setResponse] = useState({});

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await fetch(
                `${import.meta.env.VITE_SERVER_URI}users/data`
            );

            const json = await response.json();

            setTimeout(() => setResponse(json.data), 1500);
        }
        fetchData();
    }, []);

    return (
        <>
            <h2>Dashboard</h2>
            <p>Month: {response?.month? response.month: ''}</p>
            <p>Time: {response?.time? response.time: ''}</p>
        </>
    );
}