import "./index.css"

const UserProfile = (props) =>{
    const { userDetails,deleteUser} = props
    const {name,img,role,uniqueKey} = userDetails

   const ondeleteUser = () =>{
        deleteUser(uniqueKey);
    }
    return(
        <li className="card">
          <img src={img} alt="avatar"></img> 
          <div className="info"> 
              <h3 className="title">{name}</h3>
              <h6 className="role">{role}</h6>
          </div>      
          <button onClick={ondeleteUser}>
          <img src="https://assets.ccbp.in/frontend/react-js/cross-img.png" alt="cross" />
          </button>   
        </li>
    )
}

export default UserProfile