import React from 'react'
import './style/App.sass'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import ProductDisc from './pages/ProductDisc'
import './style/responsiveness/Responsiveness.sass'
import MenuPage from './pages/MenuPage'
import ShoopingCart from './pages/shoopingcart/ShoopingCart'
import Login from './pages/Login/Login'
export const AppProvider = React.createContext();
const App = () => {

  // to get the slectedprodct from product Descreption page
  const [slectedItem, setSlectedItem] = React.useState([])

  //number of item selected 
  const [numbitem, setNumbitem] = React.useState(0)

  //  total amount for checkout
  const[subTotal, setSubTotal] = React.useState(0)

  return (
    <AppProvider.Provider value={{slectedItem,setSlectedItem,numbitem,setNumbitem,subTotal, setSubTotal}}>
      <Router>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
            <Route index element={<Home/>}/>
            <Route path='/:itemName' element={<ProductDisc/>}></Route>
            <Route path='menu' element={<MenuPage></MenuPage>}></Route>
            <Route path='cart' element={<ShoopingCart></ShoopingCart>}></Route>
            <Route path='sign-up' element={<Login></Login>}></Route>
            
            <Route path="category" element={<HostLayout/>}>
            </Route>           
            
          </Route>
          
        </Routes>
      </Router>
    </AppProvider.Provider>
  )
} 

export default App