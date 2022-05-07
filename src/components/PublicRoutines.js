import React from "react";
import { useState, useEffect } from "react";
import { 
    userRoutines, 
} from "../api";

const PublicRoutines = () => {
    const [publicRoutines, setPublic] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const publicRoutines = await userRoutines(username)
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

export default PublicRoutines;