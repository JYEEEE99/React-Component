import React from "react";

// Title을 전달하기 위해 Context를 작성한다
const TitleContext = React.createContext('')

// Title 컴포넌트 안에서 Context 값을 참조한다
const Title = () => {
    // Consumer를 사용해 Context 값을 참조한다
    return (
        <TitleContext.Consumer>
            {(title) => {
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
} 
const Header = () => {
    return (
        <div>
            {/* Header에서 Title로는 아무런 데이터를 전달하지 않음 */}
        </div>
    )
}
// Page 컴포넌트 안에서 Context 값을 저달한다
const Page = () => {
    const title = 'React Book'
    // Provider를 사용해 Constext에 값을 설정한다.
    // Provider 이하의 컴포넌트로 부터 값을 참조할 수 있다
    return (
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    )
}
export default Page