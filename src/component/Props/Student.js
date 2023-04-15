import React from 'react'
import propTypes from 'prop-types'

// export default function Student(props) {
//     return (
//         <div className='text-9xl'>{props.name}
//             <h1>{props.age}</h1>
//         </div>
//     )
// }

import Comp from './Comp'
export default function Student(props) {
    return (
        <div className='text-9xl'>{props.age}
            <Comp name={props.name} />
        </div>
    )
}

Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number
}

