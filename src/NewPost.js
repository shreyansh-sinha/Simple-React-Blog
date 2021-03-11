import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState} from 'react';
import './NewPost.css';

const NewPost = () => {

// 	const [newTitle, setNewTitle] = useState('');
// 	const [newAuthor, setNewAuthor] = useState('');
// 	const [newSubject, setNewSubject] = useState('');
// 	const [newContent, setNewContent] = useState('');

// 	const [data, setData] = useState([{
// 		title: 'sad reality',
// 		author: 'Shreyansh',
// 		subject: 'Professional',
// 		content: 'Lorem Epsum'
// 	}]);

// 	// const newData = {...data};

// 	const handleTitleDefault = (event) => {
// 		setNewTitle(event.target.value)
// 	}

// 	const handleAuthorDefault = (event) => {
// 		setNewAuthor(event.target.value)
// 	}

// 	const handleSubjectDefault = (event) => {
// 		setNewSubject(event.target.value)
// 	}
// 	const handleContentDefault = (event) => {
// 		setNewContent(event.target.value)
// 	}

// 	const addData = (event) => {
// 		event.preventDefault();

		

// 		const newObj = {
// 			"title": newTitle,
// 				"author": newAuthor,
// 				"subject": newSubject,
// 				"content": newContent}


				
// 		setData(data.concat(newObj))
// 		setNewTitle('');
// 		setNewAuthor('');
// 		setNewSubject('');
// 		setNewContent('');

// console.log(data)

// 	}


	

	const [data, setData] = useState({
		title: "",
		author: "",
		subject: "",
		content: ""
	})

	function handle(e) {
		const newData = {...data};
		newData[e.target.id] = e.target.value
		setData(newData);
		
	}

	function submit(e) {
		e.preventDefault();

		axios.post("https://simple-blog-4d17b.firebaseio.com/posts.json", {
			title: data.title,
			author: data.author,
			subject: data.subject,
			body: data.body
		})
  .then(function (response) {
    console.log(response);
  })
	}
	return (
			<div className = 'New-Post-Wrapper'>
				<h1 className = "New-Post-Title"> New Post </h1>
				<form onSubmit = {(e) => submit(e)}>
					Title: <input type="text" id = "title" value = {data.title} onChange = {(e) => handle(e)} placeholder = "Title" required minLength="3"/> 
					
					<br/>

					Author: <input type="text" id = "author" value = {data.author} onChange = {(e) => handle(e)} placeholder = "Title" required minLength="3"/>

					<br/>

					Subject: <input type="text" id = "subject" value = {data.subject} onChange = {(e) => handle(e)} placeholder = "Title" required minLength="3"/>

					<br/>
					<textarea type = "text" id = "body" placeholder="Content" onChange = {(e) => handle(e)} required minLength="20"  
			            value={data.body} 
             		/>		
             		<br/>		
					
             		<button className = "btn"> PUBLISH </button>

				</form>
				
				<Link to = "/posts" className = "btn"> POST </Link>
							
			</div>	
			
		)	
}

export default NewPost;