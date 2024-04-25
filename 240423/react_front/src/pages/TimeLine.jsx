import axios from "axios";
import { useEffect, useState } from "react";

const TimeLine = () => {
    const [posts, setPosts] = useState();
    const getPosts = async() =>{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`)
        if(res.data.code === 200) {
            setPosts(res.data.payload);
        }
    }

    useEffect(()=>{
        getPosts();
    },[]);
    return (
        <>
            <h1>타임라인</h1>
            <div>
                {
                    posts && posts.map(p=>(
                        <div>
                            <div>{p.user}</div>
                            <div>{p.content}</div>
                            <div>{p.img && <img src={"http://localhost:8000/"+p.img} width='20'></img>}</div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default TimeLine;