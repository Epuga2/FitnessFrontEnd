import React from "react";
import { useState, useEffect } from "react";
import { 
    userRoutines, 
    getRoutines 
} from "../api";

const PublicRoutines = () => {
    const [publicRoutines, setPublic] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const publicRoutines = await userRoutines()
            setPublic(publicRoutines)
        }
        fetchData();
    }, [])

    const handlePubRoutines = async (event) => {
        const test = await userRoutines()
        console.log(test)
    }
    return (
        <div>
        {publicRoutines.map((publicRoutine) => {
                return <div>
                    <h2>{publicRoutine.id}</h2>
                    <h2>{publicRoutine.creatorId}</h2>
                    <h2>{publicRoutine.isPublic}</h2>
                    <h2>{publicRoutine.name}</h2>
                    <h2>{publicRoutine.goal}</h2>
                    <h2>{publicRoutine.creatorName}</h2>
                    <h2>{publicRoutine.activities}</h2>
                </div>
        })
        }

        </div>
    )
}

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
                console.log(routine)
              return  <div key={routine.id}>
                    <h3>{routine.name}</h3>
                    <p>{routine.creatorName}</p>
                    <p>{routine.goal}</p>
                    <p>{routine.creatorId}</p>
                    <p>{routine.activity}</p>
                </div>
            })
            }
        </div>
        </>
 
    )
}

export default {
    PublicRoutines,
    Routines
};Routines
