import useCopyClipboard from "../hooks/useCopyClipboard"

function AccountInfo(){
    const groomAccount={
        name:"이재욱",
        bank:"국민은행",
        number:"123-456-789012"
    }

    const brideAccount={
        name:"황유진",
        bank:"국민은행",
        number:"098-765-432109"
    }



   const {copy, copied} = useCopyClipboard()

    return(
        <section>
            <h2>마음 전하실 곳</h2>
            <div style={{border:'1px solid #ccc', padding:'10px', marginBottom:'10px'}}>
                <p><strong>신랑 {groomAccount.name}</strong></p>
                <p>{groomAccount.bank} {groomAccount.number}</p>
                <button onClick={()=> copy(groomAccount.number)}>복사하기</button>
                {copied && <p style={{color:'green'}}>계좌번호가 복사되었습니다.</p>}
            </div>

            <div style={{border:'1px solid #ccc', padding:'10px', marginBottom:'10px'}}>
                <p><strong>신부 {brideAccount.name}</strong></p>
                <p>{brideAccount.bank} {brideAccount.number}</p>
                <button onClick={()=> copy(brideAccount.number)}>복사하기</button>
                {copied && <p style={{color:'green'}}>계좌번호가 복사되었습니다.</p>}
            </div>
        </section>
    )
}

export default AccountInfo;