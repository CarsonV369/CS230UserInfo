import react from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect (()=>{
        const fetchAllUsers = async ()=>{
            try{
                const res = await axios.get("./")
                console.log(res)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllUsers()
    },[])

    const handleDelete = async (id) =>{
        try{
            await axios.delete("./" + id)
            window.location.reload()
        }catch (err){
            console.log(err)
        }
    }

    return(
        <div>
            <h1> Employee Database</h1>
            <div className="users">
                {users.map(user=>(
                    <div className="user" key = {user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.age}</p>
                        <p>{user.country}</p>
                        <p>{user.position}</p>
                        <p>{user.wage}</p>
                        <button className="delete" onCLick={()=>handleDelete(user.id)}>Delete</button>
                        <button className="update"><Link to={`/update/${book.id}`}>Update</Link></button>
                        </div>
                ))}
            </div>
            <button><Link to="/add">Add New User</Link></button>
        </div>
    )
}

export default Users