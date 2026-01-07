import  { useEffect, useState } from 'react'

type Product = {
    id : number,
    price : number,
    category : string,
    images : string,
}

const LoadMoreData = () => {
    const [count,setCount] = useState<number>(0);
    const [loading,setLoading] = useState<boolean>(false)
    const [products,setProducts] = useState<Product[]>([])
    const [error,setError] = useState<string>("")

    const fetchProducts = async()=>{
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=${20}&skip=${count === 0 ? 0 : count*20}`)
            const data = await response.json()
            if(data && data.products && data.products.length){
                setProducts(prev=>[...prev,...data.products])
            }
            
        } catch (error) {
            if(error instanceof Error ){
                setError(error.message)
            }else{
                setError("something went wrong")
            }
            
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[count])
    // console.log(products);
    
  return (
    <div className="w-screen min-h-screen p-10 bg-gray-100">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products &&
          products.length > 0 &&
          products.map((pr) => (
            <div
              key={pr.id}
              className="p-4 transition bg-white rounded-lg shadow hover:shadow-md"
            >
              <img
                src={pr.images[0]}
                alt={pr.category}
                className="object-cover w-full h-40 mb-3 rounded"
              />

              <div className="text-sm text-gray-500">{pr.category}</div>
              <div className="mt-1 text-lg font-semibold text-gray-800">
                ₹ {pr.price}
              </div>
            </div>
          ))}
      </div>
      {products.length < 100 && <button onClick={()=>setCount(prev=>prev+1)} className='p-2 mt-2 ml-40 text-white bg-black rounded-full' >Load More..</button> }
      
    </div>
  )
}

export default LoadMoreData