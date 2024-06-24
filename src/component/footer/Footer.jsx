import React from 'react'

const Footer = () => {
    return (
        <div className='flex  flex-col  bg-gray-800 text-white' id='footer'>
            <hr />
            <div className="flex justify-center space-x-8 w-[100%] p-10">
                <div className="">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+99-999-9999</li>
                        <li>contact@test.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="flex justify-center pt-2 pb-4">Copyright 2024 © Like-food.com All Right Reserved.</p>
        </div>
    )
}

export default Footer