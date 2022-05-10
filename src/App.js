import React, {useState} from "react";
import Counter from "./Components/Counter";
import PostItem from '../src/Components/PostItem';
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";

function App() {

    const [posts,setPosts] = useState([
        {id:1,title:'JavaScript 1',body:'Description'},
        {id:2,title:'JavaScript 2',body:'Description'},
        {id:3,title:'JavaScript 3',body:'Description'}
        ]
        );


    const [body,setBody] = useState('');

    const createPost = (newPost)=>{
        setPosts([...posts,newPost])
    }

    const removePost = (post)=>{
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className='App'>
            <PostForm create={createPost}/>
            {posts.length !== 0
                ?
                <PostList remove={removePost} posts={posts} title={'Posts about JS'}/>
                :
                <h1 style={{textAlign: 'center'}}>Posts not found!</h1>
            }
        </div>
    );
}

export default App;
