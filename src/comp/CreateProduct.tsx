import React, { useState } from 'react';
import { IProduct } from '../models';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';

const productData: IProduct = {
        title: '',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
            rate: 42,
            count: 10
        }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

const CreateProduct = ({ onCreate }: CreateProductProps) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHendler = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        if(value.trim().length === 0){
            setError('Please enter a valid title')
            return
        }
        productData.title = value

        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(response.data)
    }
    const changeHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
       <form onSubmit={submitHendler}>
            <input 
            type='text'
            className='create_product_input'
            placeholder='Enter product title ...'
            value={value}
            onChange={changeHendler}
            />
            {error && <ErrorMessage error={error}/>}
            <button 
            type='submit'
            className='create_product_button'
            >
                Create
            </button>
       </form>
    );
}

export default CreateProduct;
