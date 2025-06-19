import './carousel.css'

export default function Carousel() {

    return (
        <>
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"/>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://static.netshoes.com.br/bnn/l_netshoes/2025-06-12/5279_Data-Cloud-Sportstyle_1920x504.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="https://static.netshoes.com.br/bnn/l_netshoes/2025-06-14/6353_FULLDESK-desejados.gif" class="d-block w-100" alt="./"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </>
    );
}