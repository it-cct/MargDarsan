import React,{useRef, useState} from 'react'
import useProducts from '../hooks/useProducts'
import { useParams,Link } from 'react-router-dom'
import '../style/pages/ProductDisc.sass'
import { AiOutlineArrowRight,AiOutlineArrowLeft } from "react-icons/ai";
import { AppProvider } from '../App';

const ProductDisc = () => {
    const para = useParams();
    const productList = useProducts();

    // gettin value from the contextProvider
    const {setSlectedItem,slectedItem,setNumbitem,numbitem}= React.useContext(AppProvider)

    // to get the exact product comming from para
    const [item] = productList.filter(i=> i.name === para.itemName);

    // for searching the matching product 
    const typeofProdutct = item.type.length>0? item.type[1]: item.type[0];
    const proudItems = productList.filter(i=>item.type.includes(typeofProdutct) === i.type.includes(typeofProdutct) && i.id>=6)
  //  console.log(typeofProdutct,proudItems)


    // for changing image
    const [img,setImg]= useState(item.img)
   
    
    // for total 
    const fvalue = item.price
    // for handling number of quantaty
    const [num, setNum] = useState(1);
    // minus handler
    const minusHandler = ()=>{
      if(num>1){
          setNum(num-1)
      }
    }
    // add handler
    const addHandler = ()=>{
      setNum(num+1)
      console.log(num)
    }
  

    // adding in shopping cart while clicking in add cart
    const addCartHandler = ()=>{
        setNumbitem(numbitem +1)
        if(slectedItem?.every(it => it?.name !== item.name )){
          setNumbitem(numbitem + 1)
          // creating object to store all the slected item in shooping cart
          //local storage for items
          const cartCollection = {
            name: item.name, 
            img: item.img,  
            price: item.price,
            quantity: num,  
            }
            setSlectedItem([...slectedItem,cartCollection])
          }
        else{
          const [h]= slectedItem.filter(it=> it.name === item.name)
          h.quantity = h.quantity + num
          // console.log(h.quantity)
        }
    }
        
        
      


    // horizontal scrolling
    // left
    const ref = useRef()
    const scroll= (scrollOffset)=>{
      ref.current.scrollLeft +=scrollOffset;
    }
  return (
    <div className='productionDetails'>
      <section className='upperPortion'>
        <div className='mainImage'>
          <div className='image'>
            <img src={img} alt="" />
          </div>
          <div className='subImages'>
            {item.allimg.map(images=>{
              return(
                <div key={images}>
                  <img src={images} onClick={(e)=>{setImg(e.target.src)}}  alt="" /> 
                </div>
              )
            })}
          </div>
        </div>

        <div className='productDiscreption'>
              <div className='itemname'>
              <h1>{item.name  }</h1>
              </div>

              <div className='itemdis'>
                <p>{item.dis}</p>
              </div>

              <div className='boxes'>
                <div className='quantity'><p>Quantity:</p></div> 
                <div className='firstdiv'>    
                    <p className='sign' onClick={minusHandler}>-</p>
                    <p className='num'>{num}</p>
                    <p className='sign'onClick={addHandler}>+</p>
                </div>

                <div><h3>{item.price * num}$</h3></div>
              </div>
              <div className='buttons'>
                <button onClick={addCartHandler}>ADD TO CART</button>
                <button>BUY NOW</button>
              </div>
        </div>
        
      </section>
      <section className='productProperties'>
      {item.properties.map((item, index) => (
          <div key={index}>
            <h1>{Object.keys(item)[0]}</h1>
            <p>{Object.values(item)[0]}</p>
          </div>
        ))}
      </section>
          
          {/* people aslo search for section */}
      <section className="trending">
            <div className="trending-top-section">
              <div className="heading-h1">
                <h1>People also search for </h1>
              </div>
              <div className="sliding-buttons">
                <div onClick={()=> scroll(-240)}><AiOutlineArrowLeft size={20} color="white"> </AiOutlineArrowLeft></div>
                <div onClick={()=> scroll(240)}><AiOutlineArrowRight size={20} color="white"> </AiOutlineArrowRight></div>
              </div>
            </div>
            <div className="trending-products" ref={ref}>
                {proudItems.map(item=>{
                  return(
                      <Link to={`/${item.name}`} key={item.id} onClick={()=>{setImg(item.img)}}>
                        <div  className="inner-box-products" >
                          <img src={item.img} alt="" />
                          <div>
                            <p>{item.name}</p>
                            <p className="price">{item.price}$</p>
                          </div>
                        </div>
                      </Link>
                   
                  )
                })
                  }
            </div>
          </section>

    </div>
  )
}

export default ProductDisc