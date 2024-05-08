import React from 'react';

interface ModelProps {
    children: React.ReactNode
    title: string
    onClose: () => void
}

const Model = ( { children, title, onClose }: ModelProps) => {
    return (
        <>
        <div 
        className='model'
        onClick={onClose}
        />
        <div className='model_content'>
            <h3 style={{
                textAlign: 'center',
                marginBottom: '2px'
            }}>
                { title }
            </h3>

        { children }    
        </div>
        </>
    );
}

export default Model;
