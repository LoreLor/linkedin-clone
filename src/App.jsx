import { useSelector } from 'react-redux'
import './App.css'
import Feed from './components/feed/Feed'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Login from './components/user/Login'
import Widgets from './components/widgets/Widgets'




function App() {
  
  const user = useSelector((state) => state.user.user);


  // useEffect(() => {
  //   try {
  //     auth.onAuthStateChanged((userAuth) => {
  //       if (userAuth){
  //         // user is logged in
  //         dispatch(login(userAuth.email, userAuth.password, userAuth.userData))
  //       } else {
  //         // user is logged out
  //         dispatch(logout())
  //       }
  //     })
      
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }, [])

  return (
    <>
      <div className='app'>
        {/* Header */}
        <Header />
        {!user ? (<Login />) : 
          (
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          )
        }
      </div>
    </>
  )
}

export default App
