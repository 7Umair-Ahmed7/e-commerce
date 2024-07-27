import React from 'react'

const ProductsPage = ({ productsData, filterData, handleCategory, handleCategoryMen, handleCategoryAll, cartItems, setCartItems, noOfCartItems, setNoOfCartItems }) => {


    const cartAddition = (id) => {
        setNoOfCartItems(prev => ({ ...prev, [id]: prev[id] + 1 }))
        let newCart = productsData.filter(product => {
            return product.id == id;
        })

        if (cartItems.includes(newCart[0]) == false) {
            setCartItems([...cartItems, newCart[0]])

        }

    }

    return (
        <>
            <div className='bg-[#7C7CE8] p-3'>
                <div className='category-section flex items-center justify-around gap-2 mb-3'>
                    <h2 className='font-semibold text-lg'>Categories:</h2>
                    <div className="categories flex gap-2">
                        <div onClick={handleCategoryAll} className='active:bg-[#6d6de6] cursor-pointer category border border-black p-2'>All</div>
                        <div onClick={(e) => handleCategoryMen(e)} className='active:bg-[#6d6de6] cursor-pointer category border border-black p-2'>Men's Clothing</div>
                        <div onClick={(e) => handleCategory(e)} className='active:bg-[#6d6de6] cursor-pointer category border border-black p-2'>Women's Clothing</div>
                        <div onClick={(e) => handleCategory(e)} className='active:bg-[#6d6de6] cursor-pointer category border border-black p-2'>Jewelery</div>
                        <div onClick={(e) => handleCategory(e)} className='active:bg-[#6d6de6] cursor-pointer category border border-black p-2'>Electronics</div>
                    </div>
                </div>
                <hr />
                <div className="cards mt-2 flex flex-wrap items-center justify-center gap-2">
                    {filterData.map((product, index) => {
                        return <div key={index} className='flex flex-col items-center justify-center p-3 card bg-white w-[330px] h-[470px] border-black border'>
                            <div className="image w-[255px] h-[300px] overflow-hidden border flex items-center justify-center ">
                                <img width={200} src={product.image} alt="" />
                            </div>
                            <h3 className='font-semibold self-start'>{product.title.slice(0, 40)}...</h3>
                            <div className="description">
                                {product.description.slice(0, 75)}...
                            </div>
                            <div className='m-2 flex gap-12'>
                                <button className='bg-red-600 p-1'>
                                    {product.price}$
                                </button>
                                <button onClick={() => cartAddition(product.id)} className='active:bg-slate-300 border border-black rounded-md p-1'>
                                    {noOfCartItems[product.id] > 0 ? `Added to Cart (${noOfCartItems[product.id]})` : "Add to Cart"}
                                </button>
                            </div>
                        </div>

                    })}
                </div>
            </div>
        </>
    )
}

export default ProductsPage
