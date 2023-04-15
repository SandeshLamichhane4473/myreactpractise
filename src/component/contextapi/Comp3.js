import React from 'react';
import { useContext } from 'react';

import { contextData } from '../../App';
import { nameContexr } from '../../App';

export default function Comp3() {
    const contextData1 = useContext(contextData);
    const nameContexr1 = useContext(nameContexr);
    return (
        <div>
            <h1>  {
                contextData1.name.name
            }
            </h1>
            <h1>  {
                contextData1.name.age
            }
            </h1>
            <h1>  {
                contextData1.data
            }
            </h1>
            <h3>
                {
                    nameContexr1.name + nameContexr1.age
                }
            </h3>
        </div>
    )
}
