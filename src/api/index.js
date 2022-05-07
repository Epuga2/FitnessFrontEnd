
// const baseURL = 'https://floating-wave-37737.herokuapp.com/api'
const baseURL = 'http://fitnesstrac-kr.herokuapp.com/api/'


// export const makeHeaders = () => {
//     let token = localStorage.getItem("token", token);
//     console.log(token)
//     if (token !== 'undefined' && token !== null){
//         const headersObject = 
//                     {'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${token}`}  
        
//         return headersObject;
//     }
//         else {const headersObject = {
//             headers: {'Content-Type': 'application/json'}
//         }
//             return headersObject;
//     }
// };

export const registerUser = async (user) => {

    const url = `${baseURL}/users/register`;
    try {
        const response = await fetch(url,{
            method:"POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        const json = await response.json();
        console.log(json)
        const token = json.data.token;
        localStorage.setItem("token", token);
        console.log(token)
    }catch(error){
        console.error(error);
    };

};

export const loginUser = async (user) => {
        const url = `${baseURL}/users/login`;
    try{
        const response = await fetch(url,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(user)
        }
         );
         console.log(response)
         const json = await response.json();
         console.log(json)
         const token = json.token;
         localStorage.setItem("token", token);
         return json;

    }
    catch(error){
        console.error(error);
    }
};

export const getActivities = async () => {
    const url = `${baseURL}/activities`;
    try{
        const response = await fetch (url, {
            headers: {
                'Content-Type' : 'application/json',
            }
        });
        const json = await response.json();
        return json;

    }catch (error){
        console.error(error);
    }
}

export const userRoutines = async (username) => {
    const url = `${baseURL}/users/${username}/routines`;
    try{
        const response = await fetch (url, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
        const json = await response.json()
        return json;
    } catch(error){
        console.error(error);
    };
};

export const getRoutines = async (user) => {
    const url = `${baseURL}/routines`;
    try{
        const response = await fetch (url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const json = await response.json()
        return json;
    } catch(error){
        console.error(error);
    }

}

export const getCurrentUser = async () => {
    const url = `${baseURL}/users/me`;
    try{
        const response = await fetch(url, {
            method:"GET",
         headers:makeHeaders()   
        })
        const json = await response.json();
        return json;
    }
    catch(error){
        console.error(error);
    }
};

export const createNewActivity = async (activityObj) => {
    const url = `${baseURL}/activities`;
    try{
        const response = await fetch(url, {
            methos: "POST",
            body: JSON.stringify(activityObj)
        })
        const json = await response.json();
        return json;
    }catch(error){
        console.error(error)
    }
}

export const updateActivity = async (activityId,activityObj) => {
    const url = `${baseURL}/activities/${activityId}`
    try{
        const response = await fetch(url, {
            method: "PATCH",
            body: JSON.stringify(activityObj)
        })
    }catch(error){
        console.error(error)
    }
};

export const getPubRoutineWithActivity = async (activityId) => {
    const url = `${baseURL}/activities/${activityId}/routines`;
    try{
        const response = await fetch(url, {
            headers:{
                'Content-Type' : 'application/json',
            },
        })
    }catch(error){
        console.error(error)
    }
};

export const createRoutine = async (newRoutineObj) => {
    const url = `${baseURL}/routines`;
    try{
        const response = await fetch (url, {
            method : "POST",
            body: JSON.stringify(newRoutineObj)
        })
    }catch(error){
        console.error(error)
    }
};

