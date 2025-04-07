import { useState, useEffect } from "react";
//useState : 상태를 관리, 변화를 기억 해야하는 것들을 저장
//useEffect : 컨포넌트가 시작될 때 실행하고 싶은 거, 값이 바뀔 때
// useState: 상태 값의 저장과 변경
// useEffect: 컴포넌트의 생성, 업데이트, 종료 시 부수 효과를 처리

function Countdown() {
    const [days, setDays] = useState(0)

    useEffect(()=> {
        const weddingDate = new Date('2025-06-15T13:00:00')
        const today = new Date();
        const timeDiff = weddingDate - today;
        const d = Math.ceil(timeDiff/(1000*60*60*24))
        setDays(d)

    }, [])
    //[]은 한 번만 실해해

    return (
        <div>
            <h2>결혼식까지 남은 시간</h2>
            <p>{days}일 남았습니다.</p>
        </div>
    )
}

export default Countdown;