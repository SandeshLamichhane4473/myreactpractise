import React from 'react'
import PropTypes from 'prop-types'

function Comp(props) {
    return (
        <div className='text-9xl'>
            {"Nested" + props.name}
        </div>
    )
}

Comp.propTypes = {}

export default Comp
