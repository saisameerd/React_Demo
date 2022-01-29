import { Component } from 'react';
import './App.css';
// import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
// import Counter from './components/Counter';


const intialDetailsList = [
  {
    uniqueKey:1,
    name:" Sai Sameer",
    img:"https://static.toiimg.com/thumb/msid-82275756,width-800,height-600,resizemode-75,imgsize-131302,pt-32,y_pad-40/82275756.jpg",
    role:"Software Developer"
  },
  {
    uniqueKey:2,
    name:" Boina Vinay",
    img:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    role:"Web  Developer"
  },
  {
    uniqueKey:3,
    name:" Sai Neelish",
    img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/Pawan_Kalyan_in_quarantine_Cov_1200x768.jpeg?GSZ9K9Pr9Ugy0930TOFNqzPXKKNkxvhM&size=1200:675",
    role:"Backend Developer"
  },
  {
    uniqueKey:4,
    name:" King Satya",
    img:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    role:"Software Engineer"
  }

]

class App extends Component{
  state = {
    searchInput:"",
    userDetailsList:intialDetailsList,
  }

  changedInput = (event) =>{
  this.setState({searchInput:event.target.value})
  }

  deleteUser = (uniqueKey) => {
    const {userDetailsList} = this.state
    const filteredList = userDetailsList.filter(each => each.uniqueKey != uniqueKey) 
    this.setState({userDetailsList:filteredList})
  }


  render(){
    const {searchInput,userDetailsList} = this.state
    const searchList = userDetailsList.filter(each => each.name.includes(searchInput))
    return (
      <div className='App'>
      {/* <Counter /> */}
      {/* <Auth /> */}
      
       <h1>User's List</h1>
       <input type="search"
        onChange={this.changedInput}
        value={searchInput}
       />
      <ul>
       {searchList.map((eachItem) => (
          <UserProfile userDetails={eachItem} key={eachItem.uniqueKey} deleteUser={this.deleteUser} />
        ))} 
  
      </ul> 
  
      </div>
    );
  }
  
}

export default App;
