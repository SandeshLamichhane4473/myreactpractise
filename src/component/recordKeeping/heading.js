import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
export default function Heading() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState([{ name: "Sandesh", email: "SLC4473@gmail.com" }, { name: "Sandesh", email: "SLC4473@gmail.com" }]);
    const [form, setForm] = useState({});

    const addData = () => {

        let newData = { name: name, email: email };
        setData(
            [
                ...data,
                newData
            ]
        );

        setForm(form);
        setName("");
        setEmail("");
    }
    function deleteIndex(index) {
        let arr = data;
        arr.splice(index, 1);
        setData([...arr]);
    }
    function handleName(e) {
        setName(e);
    }
    function handleEmail(e) {
        setEmail(e)

    }



    return (
        <div className='flex '>
            <div className="mt-10">
                <TextField value={name} onChange={(event) =>
                    setForm({ ...form, name: event.target.value })
                } id="filled-basic" className='h-6 m-5' label="name" variant="outlined" />
                <TextField value={email} onChange={(event) => setForm({ ...form, email: event.target.value })} id="filled-basic" className='h-6 m-5' label="email" variant="outlined" />
                <Button color="success" onClick={addData} >Button</Button>

                <div>
                    {
                        data.map((element, index) => {
                            return (
                                <div key={index} className='mt-4 '>
                                    <hr></hr>
                                    <div key={index} >{element.name + index}</div>
                                    <div key={index} >{element.email}</div>
                                    <button onClick={() => deleteIndex(index)}>Delete Me </button>

                                </div>
                            );

                        })
                    }

                </div>


            </div>
        </div>
    )
}
