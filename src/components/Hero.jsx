function Hero(){
    return (
        <main className="heroSection container">
        <div className="heroContainer">
            <div className="heroContent">
                <h1 className="title">Uplift your wardrobe with us</h1>
                <p className="subTitle">We stitch your imagination. Shop from our thrilling collection</p>
            
            <div className="heroButtons">
                <button>Shop Now</button>
                <button className="secbtn">Catalogue</button>
            </div>
            </div>
            <div className="heroImage">
                <img src="/images/hero.png" alt="hero"/>
            </div>
        </div>
        </main>
    )
}
export default Hero;