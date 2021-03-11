const baseURL = "http://localhost:3000/api/emission/"

export default{
    getEmissionFactor(){
        return fetch(baseURL)
        .then(res => res.json())
    },
    postEmissionFactor(payload){
        return fetch(baseURL, {
            methods: "POST",
            body: JSON.stringify(payload),
            headers: {"Content-Type":"application/json"}
        })
        .then(res => res.json())
    }
}