import React, { useState } from "react";

type CounterProps = {
    initialValue: number
}

const Counter = (props: CounterProps) => {
    const { initialValue } = props
    // 카운트를 유지하는 첫 번째 상태를 useState()로 선언 한다. 인수에 초깃값을 지정.
    // count가 현재 상태, setCount가 상태를 업데이트하는 함수!
    const [count, setCount] = useState(initialValue)

    return (
        <div>
            <p>Count: {count}</p>
            {/* setCount를 호출해서 상태를 업데이트 한다 */}
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}></button>
        </div>
    )
}
export default Counter