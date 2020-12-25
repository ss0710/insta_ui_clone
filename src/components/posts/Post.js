import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';

const Post = (props) => {
    return(
        <div>
            {
                props.post.map((user, i)=>{
                    return(
                        <div className="post-div" key={i}>

                        <div className="post-container">
                            <div className="user-imfo">
                                <div className="user-detail">
                                <Avatar alt="profile" src={user.profile} /><p className="user-name">{user.name}</p>
                                </div>
                            </div>
                            <div className="options">
                                <MoreHoriz />
                            </div>
                        </div>

                        <div className="content">
                            <img className="postimg" src={user.post} alt="upload"/>
                        </div>

                        <div className="react-options">
                            <div className="react"> 
                                <FavoriteBorder/>
                                <ChatBubbleOutlineRoundedIcon/>
                                <SendRoundedIcon/>
                            </div>
                            <div className="save">
                                <BookmarkBorderRoundedIcon/>
                            </div>
                        </div>

                        <div className="total-likes">
                            <p className="likes">130k likes</p>
                        </div>

                        <div className="caption">
                            <div className="user-name">
                                {user.name}
                            </div>
                            <div className="caption-line">
                                {user.caption}
                            </div>
                        </div>

                        <div className="view-comments">
                            <p className="all-comments">View all comments</p>
                        </div>

                        <div className="comment-box">
                            <div className="input-field"> 
                                <input type="text" placeholder="Add a comment..."/>
                            </div>
                            <div className="post-button">
                                <p>Post</p>
                            </div>
                        </div>

                        </div>
                    )
                })
            }
        </div>
    );
}

export default Post;