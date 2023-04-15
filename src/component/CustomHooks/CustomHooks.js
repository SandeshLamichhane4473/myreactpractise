import React, { useEffect, useState } from 'react'
import ReusableCustom from './ReusableCustom';

export default function CustomHooks() {

    const [data] = ReusableCustom("https://hub.dummyapis.com/employee?noofRecords=5&idStarts=1001");


    return (
        <div>
            <h1> I m in the custom hooks</h1>

            {
                data.map((e, i) => {
                    return <h1>{e.firstName}</h1>
                })
            }

        </div>
    )
}
