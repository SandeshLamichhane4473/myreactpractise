import { Button } from '@mui/material';
import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
export default function TestEffect() {

    const [state, setState] = useState(1);
    const [myData, setData] = useState([]);
    useEffect(() => {
        getData();

    }, [state]);

    async function getData() {

        const get = await fetch('https://hub.dummyapis.com/employee?noofRecords=' + state + '&idStarts=1001');
        const response = await get.json();
        setData(response);
        console.log(response);

    }
    document.title = state;


    return (
        <div>

            <Button onClick={() => setState(state + 1)}>OnClick+{state}</Button>

            <h1 className='text-6xl'>
                {
                    myData.map((element, index) => {
                        return (
                            <Link to={'/home/' + element.id + ''}> <div key={index} className='flex p-3 justify-between text-2xl'>
                                <h4>
                                    {
                                        element.firstName
                                    }
                                </h4>
                                <img src={element.imageUrl} alt="image" />
                                <h4>
                                    {
                                        element.lastName
                                    }
                                </h4>
                                <h4>
                                    {
                                        element.email
                                    }
                                </h4>
                            </div>
                            </Link>

                        );
                    })
                }
            </h1>
            <Outlet />
        </div>
    )
}
