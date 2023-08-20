import React from "react";

// Hello는 클릭하면 얼럿을 나타내는 텍스트를 반환한다
const Hello = () => {
    // 클릭 시 호출되는 함수
    const onClick = () => {
        // 얼럿을 나타낸다
        alert('Hello')
    }

    const text = 'Hello, React';

    // 텍스트를 자식으로 갖는 div 요소를 반환
    return (
        // div의 onClick에 클릭 시의 콜백 함수를 반환
        <div onClick={onClick}>
            {text}
        </div>
    )
}

export default Hello;
