function Location() {
    return(
        <section>
            <h2>오시는 길</h2>
            <p><strong>그랜드 호텔 서울</strong></p>
            <p>서울특별시 어쩌구 저쩌로 1234</p>

            <div>
                <iframe title="구글맵" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.5558096685813!2d126.93172471124281!3d37.589076071916054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c986a45705bb5%3A0x224be1d558aa33!2z7Iqk7JyE7IqkIOq3uOuenOuTnCDtmLjthZQg7ISc7Jq4!5e0!3m2!1sko!2skr!4v1743995296109!5m2!1sko!2skr" 
                width="600" 
                height="450" 
                style={{border: '1px solid #ccc'}} 
                allowFullscreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"/>
            </div>

            <h3>대중교통</h3>
            <ul>
                <li>지하철 2호선 신림역 3번 출구 도보 5분</li>
                <li>버스 152번, 5516번, 5522B번 하차 후 도보 5분</li>
            </ul>

            <h3>자가용</h3>
            <p>호텔 주차장 이용 가능(3시간 무료)</p>
        </section>
    )
}

export default Location;