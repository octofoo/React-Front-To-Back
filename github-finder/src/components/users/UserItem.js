import React, { Component } from "react";

class UserItem extends Component {
    // state
    state = {
        id: "id",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
    }

    // output
    render() {
        // state variables
        const { login, avatar_url, html_url } = this.state;

        return (
            <div className="card text-center">
                <img src={avatar_url} alt={login} className="round-img" style={{ width: "60px" }} />

                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
                </div>
            </div>
        )
    }
}

export default UserItem
