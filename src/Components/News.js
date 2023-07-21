import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);
    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        props.setProgress(100);
        setLoading(false);
    }
    useEffect(() => {
        updateNews();
    document.title = `iQNEWS - ${props.category[0].toUpperCase() + props.category.slice(1,)}`

        // eslint-disable-next-line
    },[]);

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults);
        setPage(page + 1)
        console.log(totalResults);
        console.log(articles.length);
    }
    return (
        <div className=' container d-flex flex-column' >
            <h1 className='text-center' style={{marginTop:'5%'}}> iQNEWS - Top Headlines From {props.title[0].toUpperCase() + props.title.slice(1,)} Category </h1>
            {
                console.log(articles)
            }
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<h4><Spinner /></h4>}
            >
                <div className="container">
                    <div className="row my-4 d-flex justify-content-between">
                        {articles.map((element) => {
                            return <div key={element.url} className="col-md-4 my-4 ">
                                <NewsItem title={element.title} lastUpdated={element.publishedAt} description={element.description} imageUrl={element.urlToImage} author={element.author} source={element.source.name} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    );
}

News.defaultProps = {
    category: "general",
    country: "in",
    pageSize: 15,
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News;