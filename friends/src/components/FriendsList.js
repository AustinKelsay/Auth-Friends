import React, {useState, useEffect} from "react";
import axios from "axios";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import "./Friends.css";

class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        //get request
        //add the token to the authoriation header
        const token = window.localStorage.getItem('token')
        axiosWithAuth()
        .get("/api/friends", )
        .then((res) => {
            console.log(res)
            this.setState({friends: [...res.data]});
        })
        .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
            {
                this.state.friends.length ?
                this.state.friends.map((friend) => {
                    return(
                        <div className="friends">
                            <h2>{friend.name}</h2>
                            <h3>{friend.age}</h3>
                            <h4>{friend.email}</h4>
                        </div>
                        )
                })
                :
                null
            }
        </div>
    )
}
}

export default FriendsList;