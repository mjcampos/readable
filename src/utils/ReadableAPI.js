const api = 'http://localhost:3001'

let token = localStorage.token

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getPosts = () => 
	fetch(`${api}/posts`, {headers})
	.then(res => res.json())
	.then(data => data)

export const getPostDetails = (post_id) =>
	fetch(`${api}/posts/${post_id}`, {headers})
	.then(res => res.json())
	.then(data => data)

export const getCommentsForPost = (post_id) =>
	fetch(`${api}/posts/${post_id}/comments`, {headers})
	.then(res => res.json())
	.then(data => data)

export const addPost = (post) =>
	fetch(`${api}/posts`, {
		method: 'POST',
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({...post})
	}).then(res => res.json())
	.then(data => data)

export const postVote = (id, option) =>
	fetch(`${api}/posts/${id}`, {
		method: "POST",
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({...option})
	}).then(res => res.json())
	.then(data => data)

export const editPost = (id, params) =>
	fetch(`${api}/posts/${id}`, {
		method: "PUT",
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({...params})
	}).then(res => res.json())
	.then(data => data)

export const addComment = (params) =>
	fetch(`${api}/comments`, {
		method: "POST",
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({...params})
	}).then(res => res.json())
	.then(data => data)

export const commentVote = (id, option) =>
	fetch(`${api}/comments/${id}`, {
		method: "POST",
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({...option})
	}).then(res => res.json())
	.then(data => data)

export const deleteComment = (id) =>
	fetch(`${api}/comments/${id}`, {
		method: "DELETE",
		headers: {
			...headers,
			'Content-Type': 'application/json'
		}
	}).then(res => res.json())
	.then(data => data)

export const editComment = (id, params) =>
	fetch(`${api}/comments/${id}`, {
		method: "PUT",
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({...params})
	}).then(res => res.json())
	.then(data => data)