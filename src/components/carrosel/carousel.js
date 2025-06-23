import './carousel.css'

export default function Carousel() {

    return (
        <>
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"/>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://static.netshoes.com.br/bnn/l_netshoes/2025-06-12/5279_Data-Cloud-Sportstyle_1920x504.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://static.netshoes.com.br/bnn/l_netshoes/2025-06-14/6353_FULLDESK-desejados.gif" className="d-block w-100" alt="./"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    );
}