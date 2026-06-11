
let carousel_started = false

function createEventCardCarousel(html){
    html = html.replace("width: 30%;", "width: 100%;")
    html = html.replace("aspect-ratio: 1750 / 3000;", "")
    const container = document.getElementById('event-carousel');
    let active = "active"
    if(carousel_started){
        active = ""
    }
    if(container){
        const new_html = `
        <div class="carousel-item ${active}">
            <div class="container-fluid">
                <div class="d-flex justify-content-center">` + html +  "</div></div></div></div>"


        container.innerHTML += new_html
        carousel_started = true
        
    }
    
}


function createEventCard(title, msg, link, date, img_src){
    const card_html = `<div class="card rounded-5 mx-3" style="width: 30%; aspect-ratio: 1750 / 3000;">
                    <img src="${img_src}" 
                    class="card-img-top fixed_size_card_image rounded-top-5" alt="...">

                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-green"><b>${title}</b> </h5>
                        <p class="card-text text-gray text-small" text-small>${msg}</p>
                        <a href="${link}" class="card-link orange_text text-tiny mt-auto">SAIBA MAIS</a>
                    </div>
                    <div class="card-footer bg-transparent text-gray text-tiny text-center">${date}</div>
                </div>`

    const container = document.getElementById('event-container');
    container.innerHTML += card_html

    createEventCardCarousel(card_html)
}



createEventCard(
    "BOSQUE – DIA DAS MÃES", 
    "O Bosque da Esperança convida você e sua família para a programação especial de Dia das Mães, com um momento",
    "#",
    "27 de abril de 2026 ⋅ 15:31",
    "assets/BOSQUE-POSTS-CAMPANHA-DIA-DAS-MAES-26-22-1-1.png"
)

createEventCard(
    "Missa de Páscoa", 
    "Neste tempo em que a saudade encontra a esperança, o Bosque da Esperança Cemitério e Crematório convida você e sua",
    "#",
    "8 de abril de 2026 ⋅ 16:05",
    "assets/BannerSite_4-1.png"
)

createEventCard(
    "Calendário de Missas 2026", 
    "Prezamos pelo acolhimento e organização em nossos eventos, por isso, informamos que o nosso calendário de missas para 2026 foi",
    "#",
    "5 de janeiro de 2026 ⋅ 14:16",
    "assets/BannerSite_3.png"
)




