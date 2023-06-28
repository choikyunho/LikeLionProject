import React, { useState } from 'react';
function DownHeader() {

    return(
        <div>
            <header className="mt-2 mb-2 max-w-screen-xl mx-auto h-[50px]">
                <div className='flex justify-between'>
                    <div className='flex mb-5 pl-2 font-semibold '>
                        <button className='ml-5 mt-2 hover:bg-white rounded-lg pt-2 pb-2 pr-1.5 pl-1.5' style={{ fontSize: '16px' }}>
                            <a href ='#MAKE ME'>
                                MAKE ME소개 
                            </a>
                        </button>

                        
                        <button className='ml-5 mt-2 hover:bg-gray-300 rounded-lg pt-2 pb-2 pr-1.5 pl-1.5 'style={{ fontSize: '16px' }}>
                              <a href="/student" rel="noopener noreferrer">
                                목표 설정
                              </a>
                        </button>
                        

                        <button className='ml-5 mt-2 hover:bg-gray-300 rounded-lg pt-2 pb-2 pr-1.5 pl-1.5 'style={{ fontSize: '16px' }}>
                            <a href="/student" rel="noopener noreferrer">
                                목표 달성
                            </a>
                        </button>
                        
                        <button className='ml-5 mt-2 hover:bg-blue-100 rounded-lg pt-2 pb-2 pr-1.5 pl-1.5 'style={{ fontSize: '16px' }}>
                                <a href="/teacher" rel="noopener noreferrer">   
                                블록정보확인
                                </a>
                        </button>  

                        <button className='ml-5 mt-2 hover:bg-blue-100 rounded-lg pt-2 pb-2 pr-1.5 pl-1.5 'style={{ fontSize: '16px' }}>
                             <a href="/teacher" rel="noopener noreferrer">   
                                Imag&MataData 입력
                            </a>
                        </button>              
                      
                    </div>
                    <button className='flex ml-5 mt-2 pt-2 pb-2 pr-12 pl-2 font-semibold'style={{ fontSize: '16px' }}>
                        다른 친구들이 설정한 목표가 궁금하다면?
                    </button>      
                </div>
            </header>
        </div>
    );
}
export default DownHeader;