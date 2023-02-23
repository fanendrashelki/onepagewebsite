import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light shadow-sm'>
            <div className='container-fluid'>
                <a className='navbar-brand'> Title</a>
                <div className=''>
                    <ul className='navbar-nav me-auto mb-2 '>
                        <li className='nav-item ms-3'>
                            <a className='nav-link text-dark' href='#'>Home</a>
                        </li>
                        <li className='nav-item ms-3'>
                            <a className='nav-link text-dark' href='#'>About</a>
                        </li>
                        <li className='nav-item ms-3'>
                            <a className='nav-link text-dark' href='#'>Blog</a>
                        </li>
                        <li className='nav-item ms-3'>
                            <a className='nav-link text-dark' href='#'>contact</a>
                        </li>
                        <li className='nav-item ms-3'>
                           <button type='button' className='btn btn-outline-primary'>Button</button>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar