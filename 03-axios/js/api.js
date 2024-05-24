
const API_URL="https://api.tvmaze.com"
const getShows = async (q) => {
    const res=await axios(`${API_URL}/search/shows?q=${q}`);
    const data=res.data;
    return data;
};

export {getShows};
