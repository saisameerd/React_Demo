import "./index.css"

const UserProfile = (props) =>{
    const { userDetails} = props
    const {name,img,role} = userDetails
    return(
        <li className="card">
          <img src={img} alt="avatar"></img> 
          <div className="info"> 
              <h3 className="title">{name}</h3>
              <h6 className="role">{role}</h6>
          </div>         
        </li>
    )
}

export default UserProfile