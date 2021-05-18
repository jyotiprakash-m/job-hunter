import React, { useEffect, useState } from 'react'

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
                        <div key={post.id} className="post">
                        </div>

                    )
                }
                )}

            </div>
        </div>
    )
}

export default Result
