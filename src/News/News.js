import React, { useEffect, useState } from 'react'
import './News.css'

const News = () => {
    const [myNews, setMyNews] = useState([]);

    const fetchData = async () => {
        
        let response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=9dbda4ab0df04a0d8286821f49a6c827")

        let data = await response.json();

        setMyNews(data.articles)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        
        <>
        <div className="mainDiv">
            {
                myNews.map((ele) => {
                    return (
                                 
                            
                            <div className="card" style={{ width: "350px", height: "400px", marginLeft:"7.2rem", marginTop: "3rem" }}>

                                <img src={ele.urlToImage == null ? "https://cdn.ndtv.com/common/images/ogndtv.png" : ele.urlToImage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{ele.title}</h5>
                                    <a href={ele.url} target="_blank" className="btn btn-primary">Read more</a>
                                </div>
                            </div>
                           
                        
                    )
                })
            }
         </div>
        </>
    )
}

export default News

