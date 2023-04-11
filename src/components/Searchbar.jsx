const Searchbar = ({  handleSubmit }) => {
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                autoComplete="off"
                autoFocus
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default Searchbar