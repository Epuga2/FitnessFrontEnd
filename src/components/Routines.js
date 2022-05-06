import React from "react";
import { useState, useEffect } from "react";
import { getRoutines } from "../api";






const Routines = () => {
    const [routines, setRoutines] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const routines = await getRoutines()
            setRoutines(routines)
        }
        fetchData();
    }, [])

    const handleRoutines = async (event) => {
        const test = await getRoutines()
        console.log(test);
    }
    return (
        <>
        <button type="routines" onClick={handleRoutines}>routines</button>
        <div>
            {routines.map((routine) => {
              return  <div key={routine.id}>
                    <h3>{routine.name}</h3>
                    <p>{routine.creatorName}</p>
                    <p>{routine.goal}</p>
                </div>
            })
            }
        </div>
        </>
 
    )
}

export default Routines;