import React, { Component } from "react";

class UserItem extends Component {

    // output
    render() {
        // state variables
        const { login, avatar_url, html_url } = this.props.user;

        return (
            <div className="card text-center">
                <img src={avatar_url} alt={login} className="round-img" style={{ width: "60px" }} />

                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1" target="_blank" rel="noopener noreferrer">More</a>
                </div>
            </div>
        )
    }
}

export default UserItem
