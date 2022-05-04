import React, {useState} from "react";
import Counter from "./Components/Counter";
import PostItem from '../src/Components/PostItem';
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";

function App() {

    const [posts,setPosts] = useState([
        {id:1,title:'JavaScript 1',body:'Description'},
        {id:2,title:'JavaScript 2',body:'Description'},
        {id:3,title:'JavaScript 3',body:'Description'}
        ]
        );

    const [title,setTitle] = useState('');

    const addNewPost = (e)=>{
        e.preventDefault()
        console.log(title)
    }

    return (
        <div className='App'>
            <form>
                <MyInput
                    onChange={e=>setTitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder='Posts Title'/>
                <MyInput type="text" placeholder='Posts Description'/>
                <MyButton onClick={addNewPost}>Create Post</MyButton>
            </form>
           <PostList posts={posts}  title={'Posts about JS'}/>
        </div>
    );
}

export default App;
