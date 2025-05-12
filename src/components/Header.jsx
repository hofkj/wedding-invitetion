import { useState, useEffect, useRef } from "react";

function Header() {

    const [isVisible, setIsVisible] = useState(true)
    let lastScrollY = useRef(window.scrollY)

    useEffect(()=> {
        const handleScroll=()=>{
            if(window.scrollY> lastScrollY.current){
                setIsVisible(false)
            } else{
                setIsVisible(true)
            }
            lastScrollY.current=window.scrollY
        }

        window.addEventListener('scroll', handleScroll)
        return ()=>window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header style={{
            position:'sticky',
            top:0,
            backgroundColor:'white',
            transform:isVisible?'translateY(0)':'translateY(-100%)',
            zIndex:1000,
            padding:'20px 0',
            textAlign:'center',
            boxShadow:'0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
            <h1>황유진 🤍 이재욱</h1>
            <p>2025년 6월 15일 오후 1시</p>
            <p>그랜드 호텔 서울</p>
        </header>
    )
}

export default Header;