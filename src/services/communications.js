import axios from 'axios'
const baseUrl = "http://localhost:3001/api/records";
//can't figure out why it's not working
const getAll = () =>{
    return axios.get(baseUrl).then((response) => response.data);
}

// const create = newObject => {
//     return axios.post(baseUrl,newObject)
// }

// const remove  = (id) => {
//     console.log(id)
//     return axios.delete(`${baseUrl}/${id}}`)
// }
// const modify = (id,changeObject) => {
//     return axios.put(`${baseUrl}/${id}`,changeObject)

// }

const communications = {
  getAll,
  //getAll,create,remove,modify
};
export default communications