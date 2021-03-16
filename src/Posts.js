import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./Posts.css"

const Posts = () => {
	
	const [data, setData] = useState({})
	const [delay, setDelay] = useState(false)
	useEffect(() => {
		axios
		.get('http://localhost:3001/articles')
		.then(response => {
			
			console.log(response)
			setData(response.data)
			setDelay(true)
		})
	}, [])
	console.log(delay)

	if(delay === false)
		return <h1> loading... </h1>

	return (
			<div className = "Posts">
				{data.map((post, i) => 
						<div key = {i}>
						<h1 > {post.title} </h1>
						<p > {post.author} </p>
						<p> {post.subject} </p>
						<p > {post.content} </p>
						<hr/>
						</div>
					)}
			</div>	
		)
}

export default Posts;