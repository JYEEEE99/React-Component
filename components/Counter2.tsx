import React, { useReducer } from "react";

// reducer가 받은 action 타입을 정의한다
type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

// 현재 상태와 actoin에 기반해 다음 상태를 반환한다
const reducer = (currentCount: number, aciton: Action) => {
    switch (aciton) {
        case 'INCREMENT':
            return currentCount + 1
        case 'DECREMENT':
            return currentCount - 1
        case 'DOUBLE':
            return currentCount * 2
        case 'RESET':
            return 0
        default:
            return currentCount
        }
}

type CounterProps = {
    initialValue: number
}
const Counter2 = (props: CounterProps) => {
    const { initialValue } = props
    const [count, dispatch] = useReducer(reducer, initialValue)

    return (
        <div>
            <p>Count: {count}</p>
            {/* dispatch 함수에 action을 전달해 상태를 업데이트 한다 */}
            <button onClick={() => dispatch('DECREMENT')}>-</button>
            <button onClick={() => dispatch('INCREMENT')}>+</button>
            <button onClick={() => dispatch('DOUBLE')}>x2</button>
            <button onClick={() => dispatch('RESET')}>reset</button>
        </div>
    )
}
export default Counter2