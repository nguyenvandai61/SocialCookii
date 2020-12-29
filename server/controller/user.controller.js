// const userService = require('../services/user.service');
var UserService = require('../services/user.service');
var jwt = require('jsonwebtoken');
var ExtractJwt = require('passport-jwt').ExtractJwt;



const getAllUser = (req, res) => {
    UserService.getAllUser().then((data, err) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(data);
    });
}
const getUser = (req, res) => {
    console.log(req.params);
    let query = { _id: req.params.id };
    return UserService.getUser(query).then((data, err) => {
        if (err)
            return res.status(500).json(err)
        return res.status(200).json(data);
    });
}
const getUserInfo = (req, res) => {
    console.log("GET USER INFO");
    console.log(req.params.id)
    return UserService.getUserInfo(req.params.id).then((data, err) => {
        console.log(data);
        if (err)
            return res.status(500).json(err)
        return res.status(200).json(data[0]);
    });
}
const createUser = (req, res) => {
    let user = req.body;
    return UserService.createUser(user).then((newUser, err) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(newUser);
    });
}
const updateUser = (req, res) => {
    return UserService.updateUser(req, res);
}

const deleteUser = (req, res) => {
    let query = req.body.query;
    return UserService.deleteUser(query).then(
        (data, err) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(data);
        }
    );
}

const deleteAllUsers = (req, res) => {
    return UserService.deleteAllUsers().then((data, err) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(data);
    })
}
const checkLogin = (req, res) => {
    // console.log("Auth.config", path.join(__dirname, 'strategies', 'local-strategy'))
    console.log("login")
    // return UserService.getUser(req.query).then((user, err) => {
    //     if (user.length == 0)
    //         return res.status(401).json("Login failed");
    //     console.log(user);
    //             return res.status(200).json(user);

    //     })
    console.log(req.body);
    if (req.body.username && req.body.password) {
        var { username, password } = req.body;
    }
    var user = UserService.getUserByName(username).then((user, err) => {

        console.log(user);
        if (!user) {
            return res.status(401).json({ message: "no such user found" });
        }
        console.log(user.password);
        console.log(password);

        if (user.password === password) {
            var opts = {}
            opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
            opts.secretOrKey = 'secret';
            opts.issuer = 'accounts.examplesoft.com';
            opts.audience = 'yoursite.net';

            var payload = { id: user.id };
            var token = jwt.sign(payload, opts.secretOrKey)
            console.log("token" + token);
            return res.status(200).json({ message: "ok", _id: user._id, token: token, role: user.role });
        } else {
            return res.status(401).json({ message: "invalid credentials" });
        }
    });
}


const checkRegister = async (req, res) => {
    const { username } = req.body;
    req.query = { username: username }
    console.log(req.query)
    const newUser = req.body
    return UserService.getUser(req.query).then((user, err) => {
        console.log(user);
        if (user.length > 0)
            return res.status(401).json("Username existed");
        else {
            return UserService.createUser(newUser).then((newUser, err) => {
                if (err) return res.status(500).send(err);
                return res.status(200).json(newUser);
            });
        }
    })
}

const follow = (req, res) => {
    let followObj = req.body;
    console.log(followObj);
    const { follower, followed } = followObj;
    UserService.getUserById(follower).then(doc => {
        console.log(doc);
        let followingState = doc.following.includes(followed);
        if (!followingState) {
            const followingPromise = UserService.following(followObj.follower, followObj.followed)
            const followedPromise = UserService.followed(followObj.follower, followObj.followed)

            return Promise.all([followingPromise, followedPromise])
                .then((result) => {
                    return res.status(200).json(result)
                }).catch(err => {
                    return res.status(400).json(err);
                })
        }

        const unfollowingPromise = UserService.unfollowing(followObj.follower, followObj.followed)
        const unfollowedPromise = UserService.unfollowed(followObj.follower, followObj.followed)
        return Promise.all([unfollowingPromise, unfollowedPromise])
            .then((result) => {
                // console.log(result);
                return res.status(200).json(result)
            }).catch(err => {
                return res.status(400).json(err);
            })
    })
    // const followingPromise = UserService.following(followObj.follower, followObj.followed)
    // const followedPromise = UserService.followed(followObj.follower, followObj.followed)


}

const search = (req, res) => {
    console.log(req.params);
    UserService.searchName(req.params.searchValue).then((doc, err) => {
        if (!doc)
            return res.status(400).json("Error");
        return res.status(200).json(doc);
    })
}

module.exports = {
    getAllUser,
    getUser,
    getUserInfo,
    createUser,
    updateUser,
    deleteUser,
    deleteAllUsers,
    checkLogin,
    checkRegister,
    follow,
    search
}
