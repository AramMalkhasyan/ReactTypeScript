import React from 'react';

interface ErrorMessageProps{
    error: string
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {

    return (
        <p className='error_message'>{ error }</p>
    );
}

export default ErrorMessage;

