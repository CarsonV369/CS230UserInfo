import react from 'react'

const Add = () => {
    const [user,setUser] = useState({
        name:"",
        age:null,
        country:"",
        position:"",
        wage:null,
    });

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setUser(porev=>({...ProgressEvent, [e.target.name]: e.target.value}))
    }

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("./", user)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    console.log(user)
    return(
        <div className='form'>
        <h1>Add New User</h1>
        <input type="text" placeholder='name' onChange={handleChange} name="name"/>
        <input type="number" placeholder='age' onChange={handleChange} name="age"/>
        <input type="text" placeholder='country' onChange={handleChange} name="country"/>
        <input type="text" placeholder='position' onChange={handleChange} name="position"/>
        <input type="number" placeholder='wage' onChange={handleChange} name="wage"/>

        <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default Add