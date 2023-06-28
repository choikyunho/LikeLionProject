//npm install @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
//npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
//npm i react-router-dom
//npm install react-modal

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function Header({account,setAccount}) {

    const onClickAccount = async(e)=>{
        e.preventDefault();
        try{
         const accounts = await window.ethereum.request({
            method:"eth_requestAccounts",
         });
         console.log(accounts);
         setAccount(accounts[0]);

        }catch(error){
            console.error(error);
        }
    };

    const onClickLogOut=()=>{
        setAccount("");
    };


    return(
        <div>
            <header className=" mb-1 max-w-screen-xl mx-auto h-[65px]">
            <div className="flex justify-between">
                    {/* /Logo 이미지/ */}
                    {/* <img className="h-[65px] ml-5" src="images/Logo.png" alt="mainimag" /> */}
                    <a href="/" rel="noopener noreferrer">
                        <img className="h-[65px] ml-5" src="images/Logo.png" alt="main image" />
                    </a>
                    {/* //////////// */}
                    
                    {account ?
                    (
                        <div className="mt-2 flex items-center mr-5">
                            <div className='mr-0  m-2 pl-5 pr-7 pt-3 pb-3 font-semibold'>
                                {`${account.substring(0, 4)}...${account.substring(account.length - 4)}님 MAKE ME 방문을 환영합니다.`}
                            </div>
                            
                            <div>
                            <button className="mr-0 hover:bg-gray-300 bg-gray-100 m-2 pl-5 pr-5 pt-3 pb-3 rounded-lg font-bold ">
                                주소확인
                            </button>
                            </div>

                            <button className="hover:bg-blue-500 bg-blue-600 m-2 pl-5 pr-5 pt-3 pb-3 rounded-lg font-semibold text-white" onClick={onClickLogOut}>
                                로그아웃
                            </button>
                        </div>
                    )
                    :
                    ( 
                         /* SoulBound토큰? + 로그인 + 회원가입 */ 
                        <div className="mt-2 flex items-center mr-5">
                         <div className="relative flex-grow">
                    
                            <input type="text"placeholder="SoulBound토큰이 무엇인가요?..."
                            className="pl-10 pr-3 py-2 rounded-lg border-2 border-black bg-white w-[350px]" style={{ caretColor: 'transparent', outline: 'none' }}/>

                            <button className="absolute right-0 top-0 bottom-0 px-4 py-2 rounded-lg text-black" onClick={() => window.location.href = 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763'} >
                                <FontAwesomeIcon icon={faSearch} color="black" />
                            </button>
                         </div>

                         <button
                         className="mr-0 hover:bg-gray-300 m-2 pl-5 pr-5 pt-3 pb-3 rounded-lg font-bold" 
                         onClick={() => (window.location.href = 'https://metamask.io')}>
                            회원가입
                        </button>
                        <button className="hover:bg-blue-500 bg-blue-600 m-2 pl-5 pr-5 pt-3 pb-3 rounded-lg font-semibold text-white" onClick={onClickAccount}>
                            로그인
                        </button>
                     </div>  
                    )}
                    {/*//////////////////////////////////*/}  
            </div>
            </header>
        </div>
    )
}
export default Header;