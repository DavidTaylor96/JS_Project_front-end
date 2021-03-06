const baseURL = "http://localhost:3000/api/emissions/users"

export default{
  getUserData(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  postUserData(){
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

  deleteBooking(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }
}