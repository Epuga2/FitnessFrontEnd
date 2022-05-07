//const baseURL = 'https://floating-wave-37737.herokuapp.com/api/'
const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api/';

export const userRoutines = async (user) => {
    const url = `${baseURL}/users/:username/routines`;
    try{
        const response = await fetch (url, {
        method: "GET",
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