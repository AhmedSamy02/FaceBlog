import { useState } from 'react'
import BlogList from '../BlogList/BlogList'
import Loader from '../Loader/Loader'
import useFetch from '../useFetchCustomHook'
function Home() {
	const [blogs, setBlogs] = useState([{ id: '', quote: '', author: '' }])
	const [isPending, setIsPending] = useState(true)
	const [errorMessage, setErrorMessage] = useState(null)
	useFetch(
		'blogs',
		(value) => {
			setBlogs(value)
			setIsPending(false)
		},
		(err) => {
			console.log(err.message)
			setErrorMessage(err.message)
		},
		null
	)
	const deleteBlogHandler = (id) => {
		
		fetch(`http://localhost:3000/blogs/${id}`, {
			method: 'DELETE',
		})
			.then((value) => {
				setBlogs(blogs.filter((blog) => blog.id !== id))
				console.log(value.statusText)
			})
			.catch((err) => {
				setErrorMessage(err.message)
			})
	}
	return (
		<>
			<h1 className="title">All Blogs!</h1>

			{errorMessage ? (
				<p className="error-message">
					<b>Error: </b>
					{errorMessage}
				</p>
			) : isPending ? (
				<Loader />
			) : (
				<BlogList blogs={blogs} deleteHandler={deleteBlogHandler}></BlogList>
			)}
		</>
	)
}
export default Home
