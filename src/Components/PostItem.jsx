import React from 'react';
import '../Styles/App.css'
const PostItem = () => {
    return (

            <div className='post'>
                <div className='post__content'>
                    <strong>1.Java Script - top on the top</strong>
                </div>
                <div>
                    <button className='post_btns'>Delete</button>
                </div>
            </div>

    );
};

export default PostItem;