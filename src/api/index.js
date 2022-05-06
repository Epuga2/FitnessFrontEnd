// const baseURL = 'https://floating-wave-37737.herokuapp.com/api'
const baseURL = 'http://fitnesstrac-kr.herokuapp.com/api/'



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
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(user)
        }
         );
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