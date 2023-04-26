import { useState, useEffect } from 'react';

function FamousPerson(prop) {
    const [famousPersonName, setFamousPersonName] = useState('');
    const [famousPersonRole, setFamousPersonRole] = useState('');
    const [famousPersonKey, setFamousPersonKey] = useState('');
    
    useEffect(() => {
        setFamousPersonKey(prop.key);
        setFamousPersonRole(prop.role);
        setFamousPersonName(prop.name);
        let person = {
            name: famousPersonName,
            role: famousPersonRole,
            key: famousPersonKey
        }
        console.log('PersonObj', person);
    }, []);

    return (
        <>
            <li key={famousPersonKey}>{famousPersonName} is famous for {famousPersonRole}</li>
        </>
    )
}

export default FamousPerson;