import { useState, useEffect } from "react"
import ArticleItem from "./ArticleItem"
import PropTypes from 'prop-types';

const MainPage = () => {
    const KEY = "6cd416a210a971fc6ba2d58e4253069e"
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`
    
    const [articles, setArticles ] = useState([])

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setArticles(data.result);
            } catch(error) {
                console.error(error)
            }
        }
        fetchArticles()
      }, [URL]);
    
    return(
        <div>
            <h2>Trending today</h2>
            <ul>
                {/* {articles.map(article => (
                    <ArticleItem
                        key={article.id}
                        title={article.title}
                        id={article.id}
                    />
                ))} */}
            </ul>
        </div>
    )
}

MainPage.propTypes = {
    articles: PropTypes.array,
  };

export default MainPage