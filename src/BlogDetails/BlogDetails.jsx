import { useParams } from 'react-router-dom'
import './BlogDetails.css'
import useFetch from '../useFetchCustomHook'
import { useState } from 'react'
import Loader from '../Loader/Loader'
import NotFound from '../NotFound/NotFound'
const BlogDetails = () => {
	const { id } = useParams()
	const [blog, setBlog] = useState({ id: '', title: '', body: '', author: '' })
	const [isLoading, setIsLoading] = useState(true)
	const [errorMessage, setErrorMessage] = useState('')
	useFetch(
		`blogs/${id}`,
		(value) => {
			setBlog(value)
			setIsLoading(false)
			setErrorMessage('')
		},
		(err) => {
			setErrorMessage(err.message)
		},
		null
	)
	return (
		<>
			{errorMessage !== '' ? (
				<NotFound />
			) : isLoading ? (
				<Loader />
			) : (
				<div className="blog-details">
					<h1 className="title">Blog details</h1>
					<h2 className="blog-title">{blog.title}</h2>
					<hr className="content-seperator" />
					<p className="blog-body">{blog.body}</p>
					<p className="blog-author">{blog.author}</p>
				</div>
			)}
		</>
	)
}
export default BlogDetails
