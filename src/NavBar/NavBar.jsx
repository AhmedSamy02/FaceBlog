import { Link } from 'react-router-dom'
import './NavBar.css'
function NavBar() {
	return (
		<div className="top-nav">
			<Link className="nav-title" to = "/">FaceBlog</Link>
			<hr/>
			<Link className="nav-items" to="/">
				Home
			</Link>
			<Link className="nav-items" to="/new-blog">
				New Blog
			</Link>
		</div>
	)
}
export default NavBar
