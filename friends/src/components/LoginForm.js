import React from "react"
import {Redirect} from "react-router-dom";
import {axiosWithAuth} from "../utils/axiosWithAuth";

class LoginForm extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        //make a post request and send the credentials object to the API
        axiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then((res) => {
            console.log(res);
            if (!window.localStorage.getItem('token')) {
                window.localStorage.setItem('token', res.data.payload)
                //navigate the user to the /protectedRoute (whatever landing page you have for login)
                this.props.history.push('/friends')
            } else {
                this.props.history.push('/friends')
            }
        })
        .catch(err => console.log(err))
    };

    render() {
        return(
            <div>
                <form onSubmit={this.login}>
                    <input type='text' name='username' value={this.state.credentials.username} onChange={this.handleChange} />

                    <input type='password' name='password' value={this.state.credentials.password} onChange={this.handleChange} />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
};

export default LoginForm;