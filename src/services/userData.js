const baseURL = "http://localhost:3000/api/userData"

export default{
  getUserData(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  postUserData(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  updateUserData(emissions) {
    return fetch(baseURL + emissions._id, {
      method: 'PUT',
      body: JSON.stringify(emissions),
      headers:{ 'Content-Type': 'application/json'}
    }) 
    .then(res => res.json());
  },

  deleteUserData(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }
}