import React from 'react';
import '../Styles/App.css'
import MyButton from "./UI/button/MyButton";
const PostItem = (props) => {
    return (

            <div className='post'>
                <div className='post__content'>
                    <strong>{props.number}.{props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div>
                    <MyButton onClick={()=>props.remove(props.post)} className='post_btns'>Delete</MyButton>
                </div>
            </div>

    );
};

export default PostItem;