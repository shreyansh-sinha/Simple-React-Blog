import React, { useState, useEffect } from "react";

import "./Posts.css"

// const Child = (props) => {
// 	console.log(props)

// 	return (
// 			<div>  </div>
// 		)
// }

const Posts = () => {
	const [data, setData] = useState(null
		);

	const dummy = {
		title: "dummy",
		author: "dummy",
		subject: "dummy",
		content: 'dummy'}

	const [count, setCount] = useState(0)

	useEffect(() => {
		async function fetchAPI() {
		let response = await fetch("https://simple-blog-4d17b.firebaseio.com/posts.json")
		response = await response.json();
		
		console.log(response)
		setData(response)
	}
	fetchAPI()
	}, [])


	setTimeout(
	  () => setCount(count + 1),
	  1000
	)

	const string = JSON.stringify(data)
	
	if(count == 0) {
		return (
			<div className = "Posts"> 
				{dummy.title}	
			 </div>
				 
			
			
			)
	}
	else {
		if({string} === "null") {
			return (
				<div></div>
			)
		}
		else 
		return (
			<div className = "Posts"> {data[Object.keys(data).sort().pop()].body} </div>

		)
	}
}

export default Posts;