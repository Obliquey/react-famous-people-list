import { useState } from 'react';

function FamousPerson(prop) {
    const [famousPersonName, setFamousPersonName] = useState('');
    const [famousPersonRole, setFamousPersonRole] = useState('');
    const [famousPersonKey, setFamousPersonKey] = useState('');
    
    

    return (
        <>
            <li key={(prop) => setFamousPersonKey(prop.key)}>{}</li>
        </>
    )
}

export default FamousPerson;