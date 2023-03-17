import {useParams} from "react-router-dom";

export const EditPost = () => {
    const {id} = useParams()

    return (
        <h1>EDIT POST {id}</h1>
    )
}