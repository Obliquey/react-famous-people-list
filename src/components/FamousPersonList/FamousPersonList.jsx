import { useState, useEffect } from 'react';
import axios from 'axios';
import FamousPerson from '../FamousPerson/FamousPerson';

function FamousPersonList() {
    const[peopleArray, setPeopleArray] = useState([]);

    useEffect(() => {
        fetchPeople();
    }, []);

    const fetchPeople = () => {
        axios({
          method: 'GET',
          url: '/people',
        }).then((response) => {
          console.log("DBRes: ", response.data);
          setPeopleArray(response.data);
        }).catch((error) => {
          console.log('Error retrieving db info', error)
        })
      }

    return (
        <>
            <header>
                <FamousPersonForm />
            </header>
            <ul>
                {
                    peopleArray.map(person => {
                        return <FamousPerson 
                                    key={person.key}
                                    name={person.name}
                                    role={person.role}
                                />
                    })
                }
            </ul>
        </>
    )
}

export default FamousPersonList;