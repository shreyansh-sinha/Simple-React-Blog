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
				<h1> {data[data.length-1].title} </h1>
				<p> {data[data.length-1].author} {data[data.length-1].subject} </p>
				<p> {data[data.length-1].content} </p>
			</div>	
		)
}

export default Posts;