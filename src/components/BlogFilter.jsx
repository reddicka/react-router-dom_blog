import {useState} from "react";


export const BlogFilter = ({postQuery, latest, setSearchParams}) => {
    const [search, setSearch] = useState(postQuery)
    const [checked, setChecked] = useState(latest)

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        // доставание введенных параметров из формы
        const query = form.search.value
        const isLatest = form.latest.checked

        // объект для пихания в параметры
        const params = {}
        // наполнение объекта параметров
        if (query.length) params.post = query
        if (isLatest) params.latest = true

        // пихаем в адресную строку параметр
        setSearchParams(params)
    }

    const onSearchChange = (event) => {
        setSearch(event.target.value)
    }

    const onLatestChange = (event) => {
        setChecked(event.target.checked)
    }

    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <input
                type='search'
                name='search'
                value={search}
                onChange={onSearchChange}
            />

            <label style={{padding: '0 1rem'}}>
                New only
                <input
                    type='checkbox'
                    name='latest'
                    checked={checked}
                    onChange={onLatestChange}
                />
            </label>

            <input type='submit' value='Search'/>
        </form>
    )
}