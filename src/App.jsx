import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ProductsPage from './components/ProductsPage'
import Cart from "./components/Cart"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [productsData, setProductsData] = useState([]);
  const [filterData, setFilterData] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [noOfCartItems, setNoOfCartItems] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0
})

const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProductsData(data))
  }, [])

  useEffect(() => {
    setFilterData(productsData)
  }, [productsData])


  const handleCategory = (e) => {
    let catFC = e.target.innerHTML;
    let newProductData = productsData.filter((product) => {
      return product.category.toLowerCase().includes(catFC.toLowerCase());
    })
    setFilterData(newProductData);
  }

  const handleCategoryMen = (e) => {
    let catFC = e.target.innerHTML;
    let newProductData = productsData.filter((product) => {
      return product.category.toLowerCase() == catFC.toLowerCase();
    })
    setFilterData(newProductData);
  }

  const handleCategoryAll = () => {
    setFilterData(productsData)
  }

  const handleSearch = (e) => {
    let searchValue = e.target.value;
    let newProductData = productsData.filter((product) => {
      return product.title.toLowerCase().includes(searchValue.toLowerCase());
    })
  
    setFilterData(newProductData);
  }

  return (
    <>
      <Router>
        <Navbar handleSearch={handleSearch} />
        <Routes>
          <Route path='/' element={<ProductsPage productsData={productsData} filterData={filterData} handleCategory={handleCategory} handleCategoryMen={handleCategoryMen} handleCategoryAll={handleCategoryAll} cartItems={cartItems} setCartItems={setCartItems} noOfCartItems={noOfCartItems} setNoOfCartItems={setNoOfCartItems}  />}  />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} noOfCartItems={noOfCartItems} setNoOfCartItems={setNoOfCartItems} productsData={productsData} totalAmount={totalAmount} setTotalAmount={setTotalAmount} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
