import { useEffect } from 'react'

const useFetch = (
	endpoint,
	onSucessOccur,
	onErrorOccur,
	body,
	method = 'GET',
	dependancies = []
) => {
	useEffect(() => {
		fetch(`http://localhost:3000/${endpoint}`, {
			method: method,
			body: body,
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((res) => {
				if (!res.ok) {
					throw Error(
						`Server Failed with code ${res.status} which means ${res.statusText}`
					)
				}
				return res.json()
			})
			.then(onSucessOccur)
			.catch((err) => {
				if (err.name === 'AbortError') {
					console.log('Fetch Aborted')
				} else {
					onErrorOccur(err)
				}
				
			} )
		return () => {console.log('Cleaned Up')}
	}, dependancies)
}
export default useFetch
