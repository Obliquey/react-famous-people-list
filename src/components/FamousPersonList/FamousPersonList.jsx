import { useState, useEffect } from 'react';
import axios from 'axios';
import FamousPerson from '../FamousPerson/FamousPerson';
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm'

function FamousPersonList() {
    const[peopleArray, setPeopleArray] = useState([]);

    useEffect(() => {
        fetchPeople();
        console.log('People Array:', peopleArray);
    }, []);

    // function to get people from db. Will need to pass to FAMOUS-PERSON-FORM to be used after a new person is added.
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
                <FamousPersonForm 
                    fetch={fetchPeople}
                />
            </header>
            <ul>
                {
                    peopleArray.map(person => {
                        return <FamousPerson 
                                    key={person.id}
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