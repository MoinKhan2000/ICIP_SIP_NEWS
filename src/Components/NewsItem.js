import React from 'react';

const NewsItem=(props)=>   {
        let { title, description, imageUrl, newsUrl, lastUpdated, author ,source} =  props;
        return (<div className="card" >
            <img src={(imageUrl != null) ? imageUrl : "https://img.freepik.com/free-vector/realistic-news-studio-background_23-2149985600.jpg?w=2000"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{(title !== null) ? title.slice(0, 100) + "..." : " "}</h5>
                <p className="card-text">{(description !== null) ? description.slice(0, 200) + "..." : " "}.</p>
                <p className="card-text"><small className="text-muted font-weight-bold"> By {author ? author : "Unknown"}At {new Date(lastUpdated).toGMTString()}</small></p>
                <br />
                <h5 className="font-weight-bold card-title text-info weight-bold">Source : {source?source : "Unknown "}</h5>
                <a href={newsUrl} className="btn btn-dark">Read More...</a>
            </div>
        </div>
        );
}
export default NewsItem;