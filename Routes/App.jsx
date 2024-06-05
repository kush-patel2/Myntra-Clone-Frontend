import './App.css'
import Footer from '../Myntra-Clone/src/Components/Footer'
import Header from '../Myntra-Clone/src/Components/Header'
import { Outlet } from 'react-router-dom'
import FetchItems from '../Myntra-Clone/src/Components/FetchItems'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../Myntra-Clone/src/Components/LoadingSpinner'


function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);  return (
    <>
    <Header/>
    <FetchItems/>
    {fetchStatus.currentlyFetching ? <LoadingSpinner/> : <Outlet />}
    
    <Footer/>
    </>
  )
}

export default App
