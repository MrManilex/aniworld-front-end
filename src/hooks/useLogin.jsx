export const useLogin = (email) => {
    const login = async (email) => {
        fetch('api/users/login', {
            method: 'POST',
        })
        .then(res => console.log(res.json))
    }
    return { login }
}