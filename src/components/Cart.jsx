import React, { useEffect, useState } from 'react'

const Cart = ({ cartItems, setCartItems, noOfCartItems, setNoOfCartItems, productsData, totalAmount, setTotalAmount }) => {

  const [note, setNote] = useState(false)
  const cartRemoval = (id) => {
    setNoOfCartItems(prev => ({ ...prev, [id]: 0 }))
    let newCartItems = cartItems.filter(product => {
      return product.id != id;
    })
    setCartItems(newCartItems)
  }

  const decrementFun = (id) => {
    setNoOfCartItems(prev => ({ ...prev, [id]: prev[id] > 1 ? prev[id] - 1 : prev[id] }))
  }

  const incrementFun = (id) => {
    setNoOfCartItems(prev => ({ ...prev, [id]: prev[id] + 1 }))

  }
  const totalCal = () => {
    if (cartItems.length == 0) {
      setTotalAmount(0)
    }
    else {
      let individualTotal = cartItems.map((product, ind) => {
        return product.price * noOfCartItems[product.id];
      })

      if (individualTotal.length == 1) {
        setTotalAmount(individualTotal);
      }

      else if (individualTotal.length >= 2) {
        setTotalAmount(individualTotal.reduce((a, b) => {
          return a + b
        }))

      }
    }

  }
  const noteFun = () => {
    setNote((prev)=>!prev)
  }

  useEffect(() => {
    totalCal()
  }, [cartItems, noOfCartItems])



  return (
    <>
      <div className='bg-[#7C7CE8] p-4 min-h-[88vh]'>
        <div className="cards min-h-[50vh] flex flex-wrap items-center justify-center gap-2">

          {cartItems.length == 0 ? <><div className='font-bold text-xl'>No Cart Items Available</div></> : cartItems.map((product, index) => {
            return <div key={index} className='flex flex-col items-center justify-center p-3 card bg-white w-[330px] h-[470px] border-black border'>
              <div className="image w-[255px] h-[300px] overflow-hidden flex items-center justify-center ">
                <img width={200} src={product.image} alt="" />
              </div>
              <h3 className='font-semibold self-start'>{product.title.slice(0, 40)}...</h3>
              <div className="description">
                {product.description.slice(0, 75)}...
              </div>
              <div className='m-2 flex gap-6'>
                <button className='bg-red-600 p-1'>
                  {product.price}$
                </button>
                <div className='flex items-center justify-center'>
                  <button onClick={() => decrementFun(product.id)} className='border border-black w-10 bg-slate-300'>-</button>
                  <input className='pl-1 border border-black w-10 bg-slate-300' type="number" name="" value={noOfCartItems[product.id]} id="" />
                  <button onClick={() => incrementFun(product.id)} className='border border-black w-10 bg-slate-300'>+</button>
                </div>
                <button onClick={() => cartRemoval(product.id)} className='border border-black text-sm w-[80px] rounded-md p-1'>
                  Remove From Cart
                </button>
              </div>
            </div>
          })}
        </div>

        <span className="totalBill mt-2 font-semibold bg-blue-500 w-[100%] rounded-lg p-2 ">Total Amount : {totalAmount.length > 4 ? totalAmount.toFixed(2) : totalAmount}$</span>
        <br />
        <button onClick={() => noteFun()} className="totalBill font-semibold bg-blue-500  rounded-lg p-2 mt-4">Checkout</button>
        {note && <div>Checkout not available yet</div>}
      </div>
    </>
  )
}

export default Cart
