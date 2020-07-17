import React from 'react'

// import Nav from './Shared/Nav'

export default function Header(props) {
    const { currentUser, handleLogout } = props;
    return (
        <div id="header">
            <ul className="bg-gray-400 flex sm:justify-evenly items-center py-4 text-xl text-orange-500 justify-evenly">
                {currentUser ? (
                    <>
                        <p>{currentUser.username}</p>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
<>
                        <li className=" text-2xl text-bold mb-5 items-center text-center flex justify-evenly">
                            <a href='/SignIn'>Login/Register</a>
                        </li>

                        <li className="text-2xl text-bold mb-5 items-center text-center flex justify-evenly">
                            <a href="/"><h1>Read&&Butter</h1></a>
                        </li>
                        <li className="text-2xl text-bold mb-5 items-center text-center flex justify-evenly">
                            <a href='/About'>About</a>
                        </li>
        </>
          )
                }
                <hr />
                {currentUser && (
                    <li>
                        <a href='/PostMaker'>Make a post</a>

                        <hr />
                    </li>
                )}
            </ul>
        </div>
    )
}