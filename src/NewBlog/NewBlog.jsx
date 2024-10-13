import { useState } from 'react'
import './NewBlog.css'
import Loader from '../Loader/Loader'
import { useNavigate } from 'react-router-dom'
const NewBlog = () => {
	const [title, setTitle] = useState('')
	const [message, setMessage] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()
	const submitFormHandler = () => {
		setIsLoading(true)
		setErrorMessage('')
		fetch('http://localhost:3000/blogs', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				title: title,
				body: message,
				author: 'Ahmed Samy',
			}),
		})
			.then((value) => {
				setIsLoading(false)
				console.log(value.statusText)
				navigate('/')
			})
			.catch((err) => {
				setErrorMessage(err.message)
			})
	}
	return (
		<>
			<h1 className="title">Add New Blog!</h1>
			<form
				className="colorful-form"
				onSubmit={(e) => {
					e.preventDefault()
					submitFormHandler()
				}}
			>
				<div className="form-group">
					<label className="form-label" htmlFor="title">
						Title:
					</label>
					<input
						required
						placeholder="Enter the title"
						className="form-input"
						type="text"
						id="title"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value)
						}}
					/>
				</div>
				<div className="form-group">
					<label className="form-label" htmlFor="message">
						Message:
					</label>
					<textarea
						placeholder="Enter your message"
						className="form-input"
						name="message"
						id="message"
						onChange={(value) => {
							setMessage(value.target.value)
						}}
					></textarea>
				</div>
				<button className="form-button" type="submit">
					Submit
				</button>
			</form>
			{errorMessage === '' ? null : isLoading ? (
				<Loader />
			) : (
				<p className="error-message">
					<b>Error: </b>
					{errorMessage}{' '}
				</p>
			)}
		</>
	)
}
export default NewBlog
