import PropTypes from 'prop-types';
const { Link } = require('react-router-dom')

const ArticleItem = ({ title, id }) => {
    const link = '/movies/' + id;

    return (
        <li>
            <Link to={link}>{title}</Link>
        </li>
    )
}

ArticleItem.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number,
  };

export default ArticleItem