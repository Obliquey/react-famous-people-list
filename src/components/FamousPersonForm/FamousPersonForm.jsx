import { useState } from 'react';
import axios from 'axios';

function FamousPersonForm(prop) {
    const[postedName, setPostedName] = useState('');
    const[postedRole, setPostedRole] = useState('');

    const postPerson = (event) => {
        event.preventDefault();

        axios({
            method: 'POST',
            url: '/people',
            data:{name:postedName, role:postedRole}
        }).then(() => {
            console.log('Successfully POSTed new person');
            setPostedName('');
            setPostedRole('');
            prop.fetch();
        }).catch(() => {
            console.log("Error connecting to db");
        })
    }

    return (
        <>
            <div>
                <form onSubmit={postPerson}>
                    <input 
                        type="text" 
                        placeholder="Name"
                        value={postedName}
                        onChange={(event) => {setPostedName(event.target.value)}} />
                    <input 
                        type="text" 
                        placeholder="Role"
                        value={postedRole}
                        onChange={(event) => {setPostedRole(event.target.value)}} />
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default FamousPersonForm;