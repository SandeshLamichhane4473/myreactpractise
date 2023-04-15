import React, { useEffect } from 'react'
import { useState } from 'react'
import { TailSpin, ThreeCircles } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export default function Loader() {

    const notify = () => toast("Wow so easy!");

    const [loading, setLaoding] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {


        async function getData() {
            setLaoding(true)
            const res = await fetch("https://hub.dummyapis.com/employee?noofRecords=50&idStarts=1001")
            const finalRes = await res.json();
            setData(finalRes)
            setLaoding(false);
        }
        getData();
    }, [])

    return (


        <div className='flex justify-center align-center'>
            <ThreeCircles />

            <TailSpin />

            {

                loading ?
                    <TailSpin />
                    :
                    data.map((e, i) => {
                        return (<div className='flex flex-col'>
                            <p> {e.email}</p>
                            <p> {e.email}</p>
                            <button onClick={notify}>Notify!</button>
                        </div>
                        );
                    })
            }
        </div>


    )
}
