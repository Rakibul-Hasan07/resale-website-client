import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState('')
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin)
                // console.log(data.isAdmin);
                setAdminLoading(false)
            })
    }, [email])
    return [isAdmin, adminLoading]
}

export default useAdmin;