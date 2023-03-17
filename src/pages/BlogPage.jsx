import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const BlogPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (<div>
        <h1>Posts</h1>
        <Link to='/posts/new'>Add new post</Link>
        <ul>
            {
                posts.map(post => (
                    <li>
                        <Link to={`/posts/${post.id}`} key={post.id}>
                            {post.title}
                        </Link>
                    </li>
                ))
            }
        </ul>

    </div>)
}
