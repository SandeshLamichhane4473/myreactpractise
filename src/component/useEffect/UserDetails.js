import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function UserDetails() {

    const [state, setState] = useState(2);
    const [data, setData] = useState([]);
    const { userId } = useParams();
    useEffect(() => {
        getData();
        async function getData() {
            const get = await fetch('https://hub.dummyapis.com/employee?noofRecords=1&idStarts=' + userId);
            const response = await get.json();
            setData(response[0]);
            console.log(response);
        }
    }, []);
    return (
        <div>
            <h1>User Details</h1>
            <h2>{data.id}</h2>
            <h2>{data.imageUrl}</h2>
            <h2>{data.lastName}</h2>
            <h2>{data.email}</h2>
            <h2>{data.contactNumber}</h2>
            <h2>{data.age}</h2>

        </div>
    )
}
