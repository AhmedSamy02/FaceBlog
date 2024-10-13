import Home from './Home/Home'
import NavBar from './NavBar/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NewBlog from './NewBlog/NewBlog'
import BlogDetails from './BlogDetails/BlogDetails'
import NotFound from './NotFound/NotFound'
function App() {
	return (
		<Router>
			<div className="App">
				<NavBar></NavBar>
				<div className="content">
					<Routes>
						<Route path="/" Component={Home} />
						<Route exact path="/new-blog" Component={NewBlog} />
						<Route path="/blogs/:id" Component={BlogDetails} />
						<Route path="*" Component={NotFound} />
					</Routes>
				</div>
			</div>
		</Router>
	)
}

export default App
