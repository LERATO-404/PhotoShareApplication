import React from 'react'
import './Post.css';
//import Avatar from "@material-ui/core/Avatar";

function Post({username, caption, imageUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <h3>{username}</h3>
            </div>
            
            {/*header -> avator + username */}
            <img 
            className="post__image" 
            src="https://images.unsplash.com/photo-1637227049386-ce9ba314060c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            />

            <h4 className="post__text"><strong>{username}</strong>{caption}</h4>
        </div>
    )
}

export default Post



