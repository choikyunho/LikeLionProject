import { useState } from 'react';

function Target(){

    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setCheckboxChecked(event.target.checked);
    };

    const [mcheckboxChecked, msetCheckboxChecked] = useState(false);
    const mhandleCheckboxChange = (event) => {
        msetCheckboxChecked(event.target.checked);
    };

    const [echeckboxChecked, esetCheckboxChecked] = useState(false);
    const ehandleCheckboxChange = (event) => {
        esetCheckboxChecked(event.target.checked);
    };

    const [etccheckboxChecked, etcsetCheckboxChecked] = useState(false);
    const etchandleCheckboxChange = (event) => {
        etcsetCheckboxChecked(event.target.checked);
    };

    const [ocheckboxChecked, osetCheckboxChecked] = useState(false);
    const ohandleCheckboxChange = (event) => {
        osetCheckboxChecked(event.target.checked);
    };


    return(
        <div>
            <div className="  mb-1 max-w-screen-xl mx-auto h-[15px] ">
                <div className='mt-5 ml-8 font-semibold'>
                    1. 선생님께 첨삭받은 목표 정보 입력
                </div>
            </div>

        <div>
            <header className=" mt-6 mb-1 max-w-screen-xl mx-auto h-62">
            <div>

            <div className="max-w-[1220px] mb-2 pt-3 pb-3 rounded-xl bg-gray-200 mx-auto grid grid-cols-7 items-center font-semibold">
                <input className=" text-center" type="checkbox" style={{ marginLeft: '80px',width: '17px', height: '17px' }} />
                <div className=" text-center ml-2"style={{ marginLeft: '2px' }}>메타마스크 지갑주소</div>
                <div className=" text-center ml-2 "style={{ marginLeft: '2px' }}>과목</div>
                <div className=" text-center ml-2"style={{ marginLeft: '2px' }}>세부목표</div>
                <div className="text-center ml-2"style={{ marginLeft: '2px' }}>시작일</div>
                <div className=" text-center ml-2"style={{ marginLeft: '2px' }}>종료일</div>
                <div className="text-center ml-2"style={{ marginLeft: '2px' }}>등록</div>
            </div>


            <div className="relative max-w-[1220px] h-60 rounded-lg border border-gray-300 flex items-center mx-auto">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <form className="grid grid-cols-7 ">
                    <input type="checkbox" className="w-4 h-4 mt-1 bg-red-300 ml-20 "checked={checkboxChecked} onChange={handleCheckboxChange} />
                    <input type="text"placeholder="0xE9D51e48860960c4bD32431EB5AF7943A286B5C6"className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!checkboxChecked}/>
                    <input type="text"placeholder="국어" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!checkboxChecked} />
                    <input type="text"placeholder="국어 80점 받기" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!checkboxChecked} />
                    <input type="text"placeholder="목표 정보 입력일" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!checkboxChecked} />
                    <input type="{text}"placeholder="달성 정보 입력일" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!checkboxChecked} />
                    <button className="mr-1 ml-1 hover:bg-gray-300  rounded-lg font-bold" readOnly={!checkboxChecked} >
                            등록
                    </button>
                </form>

                <div>
                <form className="grid grid-cols-7 mt-5 ">
                    <input type="checkbox" className="w-4 h-4 mt-1 bg-red-300 ml-20 "checked={mcheckboxChecked} onChange={mhandleCheckboxChange} />
                    <input type="text"className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!mcheckboxChecked}/>
                    <input type="text"placeholder="수학" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!mcheckboxChecked} />
                    <input type="text" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!mcheckboxChecked} />
                    <input type="text" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!mcheckboxChecked} />
                    <input type="text" className="text-center "style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!mcheckboxChecked} />
                    <button className="mr-1 ml-1 hover:bg-gray-300  rounded-lg font-bold" readOnly={!mcheckboxChecked}>
                            등록
                    </button>
                </form>
                </div>

                <div>
                <form className="grid grid-cols-7 mt-5 ">
                    <input type="checkbox" className="w-4 h-4 mt-1 bg-red-300 ml-20 "checked={echeckboxChecked} onChange={ehandleCheckboxChange} />
                    
                    <input type="text"className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!echeckboxChecked}/>
                    <input type="text"placeholder="영어" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!echeckboxChecked} />
                    <input type="text" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!echeckboxChecked} />
                    <input type="text" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!echeckboxChecked} />
                    <input type="text" className="text-center "style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!echeckboxChecked} />
                    <button className="mr-1 ml-1 hover:bg-gray-300  rounded-lg font-bold" readOnly={!echeckboxChecked}>
                            등록
                    </button>
                </form>
                </div>

                <div>
                <form className="grid grid-cols-7 mt-5 ">
                    <input type="checkbox" className="w-4 h-4 mt-1 bg-red-300 ml-20 "checked={etccheckboxChecked} onChange={etchandleCheckboxChange} />
                    <input type="text"className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!etccheckboxChecked}/>
                    <input type="text"placeholder="기타" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!etccheckboxChecked} />
                    <input type="text" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!etccheckboxChecked} />
                    <input type="text" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!etccheckboxChecked} />
                    <input type="text" className="text-center "style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!etccheckboxChecked} />
                    <button className="mr-1 ml-1 hover:bg-gray-300  rounded-lg font-bold" readOnly={!etccheckboxChecked}>
                            등록
                    </button>
                </form>
                </div>

                <div>
                <form className="grid grid-cols-7 mt-5 ">
                    <input type="checkbox" className="w-4 h-4 mt-1 bg-red-300 ml-20 "checked={ocheckboxChecked} onChange={ohandleCheckboxChange} />
                    <input type="text"className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!ocheckboxChecked}/>
                    <input type="text"placeholder="대외활동" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!mcheckboxChecked} />
                    <input type="text" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!ocheckboxChecked} />
                    <input type="text" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!ocheckboxChecked} />
                    <input type="text" className="text-center "style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} readOnly={!ocheckboxChecked} />
                    <button className="mr-1 ml-1 hover:bg-gray-300  rounded-lg font-bold" readOnly={!ocheckboxChecked}>
                            등록
                    </button>
                </form>
                </div>

            </div>
        </div>

            </div> 
            </header>
        </div>
        </div>
    );
}
export default Target

