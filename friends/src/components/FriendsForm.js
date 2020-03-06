import React from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

class FriendsForm extends React.Component {
    state = {
        friend: {
            id: Date.now(),
            name: '',
            age: null,
            email: ''
        }
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        });
    };

    post = (e) => {
        e.preventDefault();
        console.log(this.state.friend)
        //make a post request and send the credentials object to the API
        axiosWithAuth()
        .post('/api/friends', this.state.friend)
        .then((res) => {
            console.log(res);
            this.props.history.push('/friends')
        })
        .catch(err => console.log(err))
    };

    render() {
        return(
            <div>
                <h1>Add a new friend</h1>
                <form onSubmit={this.post}>
                    <label>Name</label>
                    <input type='text' name='name' value={this.state.friend.name} onChange={this.handleChange} />
                    <label>age</label>
                    <input type='number' name='age' value={this.state.friend.age} onChange={this.handleChange} />
                    <label>Email</label>
                    <input type='text' name='email' value={this.state.friend.email} onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
};

export default FriendsForm;