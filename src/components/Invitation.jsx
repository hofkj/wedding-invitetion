function Invitation() {
    const handleClick = () => {
        alert("축하해주셔서 감사합니다. 🥳")
    }

    return (
        <div>
            <h2>초대합니다.</h2>
            <p>
                "두 사람의 인연이 하나로 모여 결혼의 서약을 합니다.<br/>
                그 소중한 순간을 함께 해 주세요."<br/>

            </p>
            
            <div>
                <p>OOO OOO의 차남 <strong>이재욱</strong> </p>
                <p>OOO OOO의 차녀 <strong>황유진</strong> </p>
            </div>
            <button onClick={handleClick}>축하하기</button>
        </div>
    )
}

export default Invitation;