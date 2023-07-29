import { useEffect, useState } from "react"

const useUsers = email => {
    const [isUsers, setIsUsers] = useState('')
    const [usersLoading, setUsersLoading] = useState(true)
    useEffect(() => {
        fetch(`https://resale-website-server.vercel.app/api/v1/users/all-user?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setIsUsers(data)
                console.log(data);
                setUsersLoading(false)
            })
    }, [email])
    return [isUsers, usersLoading]
}

export default useUsers;