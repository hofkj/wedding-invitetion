function Gallery() {
    const images=[
        "/photo1.png",
        "/photo2.png",
        "/photo3.png",
    ]

    return (
        <div>
            <h2>우리의 추억</h2>
            <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`기념사진 ${index+1}`}
                    width="150"
                />

            ))}
            </div>
        </div>
    )
}

export default Gallery;