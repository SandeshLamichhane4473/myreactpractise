import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
export default function Error

    () {

    const navigate = useNavigate();
    return (
        <div> <h1>Error on the page</h1>
            <Button onclick={() => navigate('order-summary')}>Go back
            </Button>

        </div>
    )
}
