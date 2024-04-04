import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const addToCartHandler=()=>{
    
  }
  return (
    <div className='home'>
      <section></section>
      <h1>Latest Products
        <Link to={"/search"} className='findmore'>More</Link>
      </h1>
      <main>
         <ProductCard productId='1232us' stock={34} name='apple macbook' photo={'https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UF1000,1000_QL80_.jpg'} price={303333} handler={addToCartHandler}/>
      </main>
    </div>
  )
}

export default Home