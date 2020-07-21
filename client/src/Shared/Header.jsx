import React from 'react'


export default function Header(props) {
    const { currentUser, handleLogout } = props;
    return (
        <div id="header">
            <ul className="bg-gray-400 flex sm:justify-evenly items-center py-4 text-xl text-orange-500 space-evenly font-mono m-0 sm: rounded-lg flex flex-wrap justify-center lg:justify-between ">
                {currentUser ? (
                    <>
                        <p className=" text-2xl text-bold mb-5 items-center text-center flex justify-evenly shadow bg-orange-300 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">{currentUser.username}</p>
                      
                            <a className="text-2xl text-bold mb-5 items-center text-center flex justify-evenly shadow bg-orange-300 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" href="/">
                                <h1>Read&&Butter</h1>
                                </a>
                        <button className="text-2xl text-bold mb-5 items-center text-center flex justify-evenly shadow bg-orange-300 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" href='/'onClick={handleLogout}>Logout</button>
                    </>
                ) : (
<>
                        <li className=" text-2xl text-bold mb-5 items-center text-center flex justify-evenly shadow bg-orange-300 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                            <a href='/SignIn'>Login/Register</a>
                        </li>

                        <li className="text-2xl text-bold mb-5 items-center text-center flex justify-evenly shadow bg-orange-300 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                            <a href="/"><h1>Read&&Butter</h1></a>
                        </li>
                        <li className="text-2xl text-bold mb-5 items-center text-center flex justify-evenly shadow bg-orange-300 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                            <a href='/About'>About</a>
                        </li>
        </>
          )
                }
                <hr />
                {currentUser && (
                    <li>
                        <a className=" text-2xl text-bold mb-5 items-center text-center flex justify-evenly shadow bg-orange-300 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded no-underline" href='/PostMaker'>Make a post</a>

                        <hr />
                    </li>
                )}
            </ul>
        </div>
    )
}