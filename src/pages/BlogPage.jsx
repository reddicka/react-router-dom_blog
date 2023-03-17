import {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {BlogFilter} from "../components/BlogFilter";

export const BlogPage = () => {
    const [posts, setPosts] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    // достанет "qwe" из asd.ru/posts?post=qwe&data=zxc
    const postQuery = searchParams.get('post') || ''
    // достаем последние 20 из 100 (boolean)
    const latest = searchParams.has('latest')
    const startsFrom = latest ? 80 : 1

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h1>Posts</h1>

            <BlogFilter
                postQuery={postQuery}
                latest={latest}
                setSearchParams={setSearchParams}
            />

            <Link to='/posts/new'>Add new post</Link>

            <ul>
                {
                    // сначала фильтруем на совпадение в адресной строке
                    posts.filter(
                        post => post.title.includes(postQuery) && post.id >=startsFrom
                    ).map(post => (
                        <li key={post.id}>
                            <Link to={`/posts/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
