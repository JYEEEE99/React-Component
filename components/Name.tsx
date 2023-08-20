import React from "react";

const Name = () => {
    // input 요소의 onchange 이벤트에 대한 콜백 함수를 정의
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 입력된 텍스트를 콘솔에 표시한다
        console.log(e.target.value)
    }
    return (
        // style 객체의 키는 카멜 케이스가 된다
        <div style={{padding: '16px', backgroundColor: 'gray'}}>
            {/* for 대신 htmlFor를 사용한다 */}
            <label htmlFor="name">이름</label>
            {/* class나 onchange 대신 className이나 onChange를 사용한다 */}
            <input id="name" className="input-name" onChange={onChange} type="text" />
        </div>
        )
}
export default Name