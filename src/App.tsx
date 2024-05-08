import Products from './comp/products';
import './app.css'  
import { useProduct } from './hooks/products';
import Loader from './comp/Loader';
import ErrorMessage from './comp/ErrorMessage';
import Model from './comp/Model';
import CreateProduct from './comp/CreateProduct';
import { useState } from 'react';
import { IProduct } from './models';
function App() {
  const {product, loading, error, addProduct} = useProduct()
  const [model, setModel] = useState(false)
  const createHendler = (product: IProduct) => {
    setModel(false)
    addProduct(product)
  }
  return (
    <div className='container'>
      {loading && <Loader />}
        {error && <ErrorMessage error={ error } />}
      {product.map(prod => <Products product={prod} key={prod.id}/>)}

      {model && <Model title='Create new product' onClose={() => setModel(false)}>
        <CreateProduct onCreate={createHendler}/>
      </Model>}
      <button className='add_product_button' onClick={() => setModel(true)}>
        +
      </button>
    </div>
  );
}

export default App;
