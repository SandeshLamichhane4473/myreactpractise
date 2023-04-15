import React, { useState, useEffect } from 'react'

export default function ReusableCustom(url) {
    const [data, setData] = useState([]);


    useEffect(() => {

        async function getData() {
            const response = await fetch(url);
            const jsonresp = await response.json();
            setData(jsonresp);
        }

        getData()
    }, []);

    return [data];


}
