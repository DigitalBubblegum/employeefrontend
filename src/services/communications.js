import axios from 'axios'
const baseUrl = '/api/records'

const getAll = () =>{
    return axios.get(baseUrl)
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