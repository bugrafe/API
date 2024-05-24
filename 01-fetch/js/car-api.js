const API_URL ="https://carrental-v3-backend.herokuapp.com";

const fetchAllCars=(cb)=>{
    fetch(`${API_URL}/car/visitors/all`) //API bu asamada backend deki ilgili endpoint e request gönderir.
    .then((res)=> res.json()) //API dan donen cevap res icine gelir. res.json() ile cevap json formatına cevrilir. ve sonraki then e aktarılır.
    .then((data)=> cb(data) );
}

const fetchCarById= (id,cb)=>{
    fetch(`${API_URL}/car/visitors/${id}`)
    .then(res=> res.json())
    .then(data=>cb(data));
};

export {fetchAllCars , fetchCarById}