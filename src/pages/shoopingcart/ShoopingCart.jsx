import React from 'react'
import '../../style/pages/Cart/Cart.sass'
import { AppProvider } from '../../App'

const ShoopingCart = () => {
    const{slectedItem,setSlectedItem} = React.useContext(AppProvider)

    const  [num, setNum]=React.useState(1);
    // addHandler
    const addHandler = ()=>{
      setNum(num+1); 
    }
    // minusHandler
    const minusHandler = ()=>{
      if(num>1){
        setNum(num-1);
      }
    }

    // remove
    const remove =(nam)=>{
      const elem = slectedItem.filter(item=> item.name !== nam);
      setSlectedItem([...elem]);
    }
    return (
      <>
        {
          slectedItem.length>0?
          slectedItem.map(items=>{
            return(
              <div className='itemCard' key={items.price}>
            <div className='imagediv'>
              <img src={items.img} alt="" />
            </div>
            <div className='iteminfo'>
              <header>
                  <h1>{items.name}</h1>
                  <h1>{(items.price) * num}$</h1>
             </header>
             <footer>
              <div className='boxes'>
                <div className='firstdiv'>    
                    <p className='sign' onClick={minusHandler}>-</p>
                    <p className='num'>{num}</p>
                    <p className='sign'onClick={addHandler}>+</p>
                </div>
              </div>
              <div className="remove" onClick={()=>{remove(items.name)}}><p>X</p></div>
             </footer>
              
            </div> 
          </div>
            )
          
          })
          : <h1> Cart is empty</h1>
        }
      </>
    
  )
}

export default ShoopingCart