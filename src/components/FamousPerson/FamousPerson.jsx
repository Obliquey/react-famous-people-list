import { useState, useEffect } from 'react';

function FamousPerson(prop) {
    const [famousPersonName, setFamousPersonName] = useState('');
    const [famousPersonRole, setFamousPersonRole] = useState('');
    const [famousPersonKey, setFamousPersonKey] = useState('');
    
    useEffect(() => {
        setFamousPersonKey(prop.id);
        setFamousPersonRole(prop.role);
        setFamousPersonName(prop.name);
    }, []);

    return (
        <>
            <li key={famousPersonKey}>{famousPersonName} is famous for {famousPersonRole}</li>
        </>
    )
}

export default FamousPerson;