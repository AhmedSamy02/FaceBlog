import PropTypes from 'prop-types'
import './BlogList.css'
import { Link } from 'react-router-dom'
function BlogList(props) {
	return (
		<>
			<ul className="blogs-list">
				{props.blogs.map((blog) => {
					return (
						<div key={blog.id} className="list-item">
							<Link
								
								to={`/blogs/${blog.id}`}
								className="blog-link"
							>
								<h2 className="list-item-title">{blog.title}</h2>
								<p className="written-identity">
									Written by <b className="writer">{blog.author}</b>
								</p>
								
							</Link>
							<button
									className="btn-delete-blog"
									onClick={() => {
										props.deleteHandler(blog.id)
									}}
								>
									Delete Blog
								</button>
						</div>
					)
				})}
			</ul>
		</>
	)
}
export default BlogList
BlogList.propTypes = {
	blogs: PropTypes.array,
	deleteHandler: PropTypes.func,
}
