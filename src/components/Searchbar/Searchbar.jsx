import PropTypes from "prop-types"
import "./Searchbar.css"

const Searchbar = ({ handleSubmit, value, onChange }) => {
    return(
        <form onSubmit={handleSubmit}>
            <input
                className="searchbar__input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search Film..."
                value={value}
                onChange={(evt) => onChange(evt.target.value)}
            />
            <button className="searchbar__button" type="submit">Search</button>
        </form>
    )
}

Searchbar.propTypes = {
    handleSubmit: PropTypes.func
}

export default Searchbar