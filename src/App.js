import './App.css';
import Auth from './components/Auth';
// import UserProfile from './components/UserProfile';
// import Counter from './components/Counter';


// const userDetailsList = [
//   {
//     uniqueKey:1,
//     name:" Sai Sameer",
//     img:"https://static.toiimg.com/thumb/msid-82275756,width-800,height-600,resizemode-75,imgsize-131302,pt-32,y_pad-40/82275756.jpg",
//     role:"Software Developer"
//   },
//   {
//     uniqueKey:2,
//     name:" Boina Vinay",
//     img:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
//     role:"Web  Developer"
//   },
//   {
//     uniqueKey:3,
//     name:" Sai Neelish",
//     img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/Pawan_Kalyan_in_quarantine_Cov_1200x768.jpeg?GSZ9K9Pr9Ugy0930TOFNqzPXKKNkxvhM&size=1200:675",
//     role:"Backend Developer"
//   },
//   {
//     uniqueKey:4,
//     name:" King Satya",
//     img:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
//     role:"Software Engineer"
//   }

// ]

function App() {
  return (
    <div className='App'>
    {/* <Counter /> */}
    <Auth />
    </div>
  );
}

/* <h1>User's List</h1> */
    /* <ul> */
    /* {userDetailsList.map((eachItem) => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueKey} />
      ))} */

    /* </ul> */

export default App;
