import JwtParser from "../utils/JwtParser";


let token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).token : "";
let headerObject = {
    'Content-Type': 'application/json',
    'Authorization': 'bearer '+token}

const fetchDetaiInfoUser = (id) => {
    
    return fetch('api/user/userInfo/' + id, {
        method: "GET",
        headers: headerObject,
    })
        .then(res => {
            if (!res.ok) throw Error("Failed");
            return res.json()
        })
        .then(data => {
            console.log(data);
            return data;
        })
        .catch((err) => {
            console.log(err);
        })
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
    let id = JwtParser.parseJwt(token).id;
    return id;
}

export function getDetailInfoUser() {
    console.log("getdetail")
    let id = getIdFromJwtToken();
    return fetchDetaiInfoUser(id).then(detailInfoUser => {
        console.log(detailInfoUser);
        return detailInfoUser;
    }).catch(err => {
        console.log(err);
    });
}