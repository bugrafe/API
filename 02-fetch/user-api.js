const API_URL="https://664e406dfafad45dfadf8a3d.mockapi.io/api/v1";

const getAllUsers = async () => { 
    const res= await fetch(`${API_URL}/users`);
    if(!res.ok) throw new Error("Something went wrong");
    const data =await res.json();
    return data;
}

const getUserById = async (id) => { 
    const res= await fetch(`${API_URL}/users/${id}`);
    if(!res.ok) throw new Error("Something went wrong");
    const data =await res.json();
    return data;
}

const deleteUser= async (id)=>{
    const res=await fetch(`${API_URL}/users/${id}`,{
        method:"DELETE"
    });
    if(!res.ok) throw new Error("Something went wrong");
    const data =await res.json();
    return data;
}

const createUser = async (user) => {
    const res=await fetch(`${API_URL}/users`,{
        method:"POST" ,
        body:JSON.stringify(user),
        headers:{
            "Content-Type":"application/json",
        },
    });
    if(!res.ok) throw new Error("Something went wrong");
    const data =await res.json();
    return data;
};

const updateUser = async (id, user) => {
    const res = await fetch(`${API_URL}/users/${id}`, {
        method: "put",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) throw new Error("Something went wrong");
    const data = await res.json();
    return data;
};
export{getAllUsers,getUserById,deleteUser,createUser,updateUser}