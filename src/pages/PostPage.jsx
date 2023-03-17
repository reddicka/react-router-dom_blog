import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const PostPage = () => {
    const {id} = useParams()

    const navigate = useNavigate()

    const [post, setPost] = useState(null)

    const goBack = () => navigate(-1)
    // const goBack = () => navigate('/')

    // если {replace: true}, то переходит и заменит запись в истории. Если нажать "назад", то перескочит
    // используется для автоматической переадресации
    const goHome = () => navigate('/', {replace: true})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(post => setPost(post))
    }, [id])

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            {/* так делать не стоит, есть Link */}
            <button onClick={goHome}>Go home</button>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`}>Edit this post</Link>
                </>
            )}
        </div>
    )
}