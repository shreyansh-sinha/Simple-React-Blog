import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState} from 'react';
import './NewPost.css';

const NewPost = () => {

	const [newTitle, setNewTitle] = useState('');
	const [newAuthor, setNewAuthor] = useState('');
	const [newSubject, setNewSubject] = useState('');
	const [newContent, setNewContent] = useState('');
	const [data, setData] = useState({});

	const handleTitle = (event) => {
		setNewTitle(event.target.value)
	}

	const handleAuthor = (event) => {
		setNewAuthor(event.target.value)
	}

	const handleSubject = (event) => {
		setNewSubject(event.target.value)
	}
	const handleContent = (event) => {
		setNewContent(event.target.value)
	}
	



	function submitData(e) {

		e.preventDefault();

		const newPost = {
			id: data.length + 1,
			title: newTitle,
			author: newAuthor,
			subject: newSubject,
			content: newContent
		}

		axios
		.post(`http://localhost:3001/articles`, newPost)
		.then(response => {
			console.log(`promise fulfilled`)
			// setData(data.concat(newPost))
		})

			setNewTitle('')
			setNewAuthor('')
			setNewSubject('')
			setNewContent('')
	}

	return (
			<div className = 'New-Post-Wrapper'>
				<h1 className = "New-Post-Title"> New Post </h1>
				<form onSubmit = {submitData}>
					Title: <input type="text" id = "title" value = {newTitle} onChange = {handleTitle} placeholder = "Title" required minLength="3"/> 
					
					<br/>

					Author: <input type="text" id = "author" value = {newAuthor} onChange = {handleAuthor} placeholder = "Title" required minLength="3"/>

					<br/>

					Subject: <input type="text" id = "subject" value = {newSubject} onChange = {handleSubject} placeholder = "Title" required minLength="3"/>

					<br/>
					<textarea type = "text" id = "body" placeholder="Content" onChange = {handleContent} required minLength="20"  
			            value={newContent} 
             		/>		
             		<br/>		
					
             		<button className = "btn" type = "submit"> PUBLISH </button>

				</form>
				
				<Link to = "/posts" className = "btn"> POST </Link>
							
			</div>	
			
		)	
}

export default NewPost;