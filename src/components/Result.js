import React, { useEffect, useState } from 'react'
import { format } from "timeago.js";
function Result({ darkMode }) {
    const [term, setTerm] = useState("node")
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch(`/positions.json?search=${term}`)
            .then((response) => response.json())
            .then((json) => setPosts(json))
    }, [term]);
    console.log(darkMode)
    console.log(posts)
    return (
        <div className="result">
            <div className="result__InputContainer">
                <div className="result__Input">
                    <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
                </div>
                <div className="result__InputLogo">
                    <img src="./searchlogo.png" />
                </div>
            </div>
            <div className="posts">
                {posts.map((post, index) => {
                    return (
                        index < 20 &&
                        <div className="post__container">
                            <a href={post.url} target="_blank">
                                <div key={post.id} className={darkMode ? "post darkbg2" : "post lightbg2"}>
                                    <div className="post__top">
                                        <div className="post__logo">
                                            <img src={post.company_logo} />
                                        </div>
                                        <div className="post__type">
                                            <div className={post.type == "Full Time" ? "typeCircle green" : "typeCircle orange"}></div><p className={darkMode ? "darkText2" : "lightText2"}>{post.type}</p>
                                        </div>
                                        <div className="time">
                                            <p className={darkMode ? "darkText2" : "lightText2"}>{format(post.created_at)}</p>
                                        </div>

                                    </div>
                                    <div className="post__middile">
                                        <h2 className={darkMode ? "heading darkText1" : "heading lightText1"}>{post.title}</h2>
                                        <h3 className={darkMode ? "company darkText2" : "company lightText2"}>Company Name: {post.company}</h3>
                                        <h3 className={darkMode ? "companyurl darkText2" : "companyurl lightText2"}>Url: {post.company_url}</h3>
                                    </div>
                                </div>
                            </a>
                            <div className={darkMode ? "officialsite darkbg2" : "officialsite lightbg2"}>
                                <div>
                                    {post.company_url && <a className={darkMode ? "darkbg1 darkText2" : "lightbg1 lightText2"} href={post.company_url} target="_blank">Vist Official site</a>}

                                </div>
                            </div>
                        </div>

                    )
                }
                )}

            </div>
        </div>
    )
}

export default Result
