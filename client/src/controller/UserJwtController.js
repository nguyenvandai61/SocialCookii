import JwtParser from "../utils/JwtParser";


let token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).token : "";
let headerObject = {
    'Content-Type': 'application/json',
    'Authorization': 'bearer '+token
}

const fetchDetaiInfoUser = async (id) => {
    
        
}

export function fetchFollow(follower, followed) {
    const url = '/api/user/follow'
        console.log(url)
    return fetch(url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            follower: follower,
            followed: followed,
        })
    }).then(res => {
        if (res.status == 200) {
            res.json().then(data => {
                console.log(data)

                return data;
            })
        }
        else {

        }
    })
}

export function getIdFromJwtToken() {
    if (!JwtParser.parseJwt(token)) return; 
    let id = JwtParser.parseJwt(token).id;
    return id;
}

export function getDetailInfoUser() {
    console.log("getdetail")
    let id = getIdFromJwtToken();
    return fetch('api/user/userInfo/' + id, {
        method: "GET",
        headers: headerObject,
    })
        .then(res => {
            if (res.status == 200) {
                res.json().then(data => {
                    console.log(data)
                    return data;
                })
            }
            else {
    
            }
        })
}