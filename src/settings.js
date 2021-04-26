import store from "./store/index";
export const SERVER = "https://dev-api.redlineinventory.com";

export const REFRESH_TOKENS = async () => {
    try{
        console.log("REFRESHING TOKENS");
        const refresh = await fetch(SERVER+"/users/refresh",{
            method: "POST",
            body: JSON.stringify({refreshToken: store.state.user.refresh_token})
        });
        if(!refresh.ok)
            throw new Error(refresh);

        const parsed = await refresh.json();
        console.log("REFRESH_TOKEN",parsed);
        store.dispatch('loginUser', parsed);
        return true;
    }
    catch(error){
        store.dispatch('logoutUser');
        return Promise.reject(error);
    }
}

export const API_CALL = async (uri,method="GET",data = null,attempts=0) => {
    try{
        if(attempts > 3)
            return Promise.reject("Errors occurred three times");

        const res = await fetch(SERVER+"/"+uri,{
            method,
            body: data ? JSON.stringify(data) : null,
            headers: {
                Authorization: "Bearer "+store.state.user.token
            }
        });

        if(res.status === 401){
            await REFRESH_TOKENS();
            return API_CALL(uri,method,data,attempts++);
        }

        return await res.json();
    }
    catch(error){
        return Promise.reject(error);
    }
}