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

export{getAllUsers,getUserById,deleteUser}