import React from 'react'
import '../../style/pages/Cart/Cart.sass'
import { AppProvider } from '../../App'

const ShoopingCart = () => {
    const{slectedItem,setSlectedItem,setSubTotal,  numbitem, setNumbitem} = React.useContext(AppProvider)

   
    // const addHandler = ()=>{
    //   setNum((prev) => prev+1); 
    // }
    // const minusHandler = ()=>{
    //   if(num>1){
    //     setNum((prev)=> prev-1);
    //   }
    // }


    // Calculate the total amount whenever slectedItem changes
    React.useEffect(() => {
      const total = slectedItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setSubTotal(total);
    }, [slectedItem]);
  
 // addHandler
    const addHandler = (item) => {
      setSlectedItem((prevItems) =>
        prevItems.map((it) =>
          it.name === item.name ? { ...it, quantity: it.quantity + 1 } : it
        )
      );
      setSubTotal(item.quantity*item.price)
    };

    // minusHandler  
    const minusHandler = (item) => {
      if (item.quantity > 1) {
        setSlectedItem((prevItems) =>
          prevItems.map((it) =>
            it.name === item.name ? { ...it, quantity: it.quantity - 1 } : it
          )
        );
      setSubTotal(item.quantity*item.price)

      }
    };
    // remove
    const remove =(nam)=>{
      setNumbitem(  numbitem -1)
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
                  <h1>{(items.price) * (items.quantity)}$</h1>
             </header>
             <footer>
              <div className='boxes'>
                <div className='firstdiv'>    
                    <p className='sign' onClick={() => minusHandler(items)}>-</p>
                    <p className='num'>{items.quantity}</p>
                    <p className='sign' onClick={() => addHandler(items)}>+</p>
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