import axios from 'axios'

// eslint-disable-next-line no-undef
const baseUrl = `${process.env.REACT_APP_BACKEND_URI}/api/login`

const login = async credentials => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

const logout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
}

const loginService = {
    login,
    logout
}

export default loginService