import React from 'react'
import '../../style/pages/Cart/Cart.sass'

const ShoopingCart = () => {
    const [itempresent, setItemPresent] = React.useState(true)
    return (
    <div className='cart'>
        {
            itempresent &&(<div> helllow </div>)
        }
    </div>
  )
}

export default ShoopingCart