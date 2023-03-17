import {Link, useMatch} from "react-router-dom";


export const CustomLink = ({children, to, ...props}) => {
    // проверяет, совпадает ли переданное значение настоящему пути
    // можно передать объект
    const match = useMatch(to)
    // вернет либо null, либо какой-то объект
    console.log({match})

    return (
        <Link
            to={to}
            style={{
                color: match ? 'var(--color-active)' : 'gray'
            }}
            {...props}
        >
            {children}
        </Link>
    )
}