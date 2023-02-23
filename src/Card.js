import React from 'react'

const card = (props) => {
    return (
        <>
         <div className='text-center p-2 mt-5'>
            <h1>classes</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        
        <div className='card col-8' style={'width:18rem'}>
            <img src={props.img} className='card-img-top' alt=''></img>
            <div className='card-body'>
                <h5 className='card-title'>{props.name}</h5>
                <p className='card-text'> {props.short}</p>
                <a href='#' className='btn btn-light'>View</a>

            </div>
        </div>
        </>
       
    )
}

export default card