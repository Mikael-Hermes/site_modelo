navbar_template = `<nav class="navbar navbar-expand-lg tema_verde sticky-top">
        <div class="container-fluid justify-content-between">

            <a class="navbar-brand" href="#">
                <img src="assets/SALTY_15agosto24_LG_WALTER_ABREU_TXT_OK-02.png" alt="Bosque da Esperança" width="178">
            </a>

            <div class="ps-4 ms-4">
                <b class="text-white">(31) 2116-0990</b>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
            aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active text-white" aria-current="page" href="#">Início</a>
                </li>


                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Serviços
                    </a>
                <ul class="dropdown-menu bg-success">
                    <li><a class="dropdown-item text-white" href="#">Planos funerários</a></li>
                    <li><a class="dropdown-item text-white" href="#">Jazigos</a></li>
                    <li><a class="dropdown-item text-white" href="#">Flora</a></li>
                    <li><a class="dropdown-item text-white" href="#">Velório Online</a></li>
                    <li><a class="dropdown-item text-white" href="#">Memorial</a></li>
                </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Eventos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Contato</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Contratos</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
`

footer_template = `<footer class="cor_footer1 text-white">
        <div class="container-fluid pt-3">
            <div class="row px-3">
                <div class="col">
                    <img class="img-fluid p-3" src="assets/SALTY_15agosto24_LG_WALTER_ABREU_TXT_OK-02.png">
                    <div class="p-2">
                        R. Aldemiro Fernandes Tôrres, 1500
                        Jaqueline, Belo Horizonte - MG
                        31748-025, Brasil
                    </div>
                    <div class="p-2">
                        Avenida do Contorno, 6190 -
                        Savassi – Belo Horizonte – MG
                    </div>

                </div>
                <div class="col">
                    <div class="p-2">Horários de Atendimento</div>
                    <div class="p-2">Atendimento a óbito: disponível 24 horas por dia.</div>
                    <div class="p-2">Visitação ao cemitério e aos jazigos: todos os dias, das 7h às 17h.</div>
                    <div class="p-2">Assuntos administrativos: de segunda a sexta-feira, das 8h às 17h. </div>
                </div>
                <div class="col">
                    <div class="p-2">Contato</div>
                    <div class="p-2">Celular 31 2116-0990</div>
                    <div class="p-2">Whatsapp: 31 2116-0990</div>
                </div>
                <div class="col">
                    <div class="p-2">Links</div>
                    <div class="p-2">2ª via de boleto</div>
                    <div class="p-2">Trabalhe conosco</div>
                    <div class="p-2">Política de Privacidade</div>
                </div>
            </div>
            <div class="row">
                <div class="col cor_footer2">
                    <div class="p-3 text-center">
                        Todos os direitos reservados © 2026 - Bosque da Esperança Cemitério Parque por Melt Comunicação
                    </div>
                </div>
            </div>
        </div>
    </footer>`


function createEventCardCarousel(html){
    card = html.querySelector(".card")
    card.style.width = "100%"
    card.style.aspectRatio = null

    const item = document.createElement("div")

    carousel = document.getElementById("event-carousel")
    if(carousel){

        item.classList.add("carousel-item")
        if(!carousel.querySelector(".active")){
            item.classList.add("active")
        } 
        const container = document.createElement("div")
        container.classList.add("container-fluid")

        const dflex = document.createElement("div")
        dflex.classList.add("d-flex") 
        dflex.classList.add("justify-content-center")


        dflex.append(card)
        container.append(dflex)
        item.append(container)

        
        carousel.append(item)        
    }
    

    
    
}

function createEventCard(title, msg, link, date, img_src){
    const template = document.getElementById('card-eventos');
    const clone = template.content.cloneNode(true);
    
    const img = clone.querySelector('.card-img-top');
    img.src = img_src;
    img.alt = title;
    
    const titleEl = clone.querySelector('.card-title b');
    titleEl.textContent = title;
    
    const msgEl = clone.querySelector('.card-text');
    msgEl.textContent = msg;
    
    const linkEl = clone.querySelector('.card-link');
    linkEl.href = link;
    
    const dateEl = clone.querySelector('.card-footer');
    dateEl.textContent = date;
    
    createEventCardCarousel(clone.cloneNode(true))
    document.getElementById('event-container').appendChild(clone);
    
}


function addDepoimento(msg1, author1, date1, msg2 = null, author2 = null, date2 = null){
    template = document.getElementById("Depoimentos-template")
    depo = template.content.cloneNode(true)



    depo.getElementById("depoMsg1").textContent = msg1
    depo.getElementById("depoAuthor1").textContent = author1
    depo.getElementById("depoDate1").textContent = date1

    if(msg2 != null && author2 != null && date1 != null){
        depo.getElementById("depoMsg2").textContent = msg2
        depo.getElementById("depoAuthor2").textContent = author2
        depo.getElementById("depoDate2").textContent = date2
    } else{
        depo.getElementById("depo2").classList.add("d-none")
    }
    const carousel = document.getElementById("inner-carouselDepoimentos")

    if(!carousel.querySelector(".active")){
        depo.querySelector(".carousel-item").classList.add("active")
    } 
    carousel.append(depo)

}



function addFooter() {
    const element = document.getElementById("insert-footer")
    element.insertAdjacentHTML("afterbegin", footer_template)
}

function addNavbar() {
    const element = document.getElementById("insert-navbar")
    element.insertAdjacentHTML("beforebegin", navbar_template)
}

function displayPage(){
    const body = document.getElementById("pageBody")
    body.style.display = "block"

    const pos = sessionStorage.getItem('scrollPos');
    if (pos !== null) {
        window.scrollTo(0, parseInt(pos, 10));
    }
}


function initialize(){
    history.scrollRestoration = 'manual';

    window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('scrollPos', window.scrollY);
    });

    addNavbar()

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

    addDepoimento(`Realizei, ontem, a difícil tarefa de enterrar um ente querido; mas, 
        aí da assim, tivemos a grata satisfação de observar um ambiente acolhedor, de 
        pessoas extremamente empenhadas em proporcionar o melhor tratamento possível, 
        tanto a administração quanto no velório; vocês estão de parabéns é contagiante 
        o profissionalismo.`, "Antonio Cota", "Agosto de 2018",
         
        `Mensagem: Boa noite, só gostaria de agradecer e parabenizar os funcionários do 
        cemitério pela delicadeza e atenção no trabalho. Minha avó foi sepultada ontem, 
        a funcionária Natália nos acolheu muito bem. O momento final em que o rapaz tocou 
        a música no violoncelo foi muito especial. Não tivemos a oportunidade de agradecê-los 
        ontem, então fica por aqui. Muito obrigada.`, "Natália Rosa", "Agosto de 2018")
        
    addDepoimento(`Gostaria de parabenizar a equipe do Bosque da Esperança pelo cuidado com os 
        entes queridos dos que estão sepultados no cemitério, no dia de finados. Foram detalhistas 
        nos cuidados para confortar os corações dos que tem saudades dos que partiram. Gratidão!`, 
        "Rosalia Marques", "Novembro de 2021",

        `Esclareci todas as minhas duvidas pelo chat , e cheguei a conclusão de que é muito 
        importante ter um jazigo, o representante me mostrou o melhor custo beneficio pra mim 
        e minha família. Comprei um jazigo para uso futuro e o melhor que fiz tudo pelo chat
        mesmo não precisei ir a empresa.`, "Bruno Amorin", "Janeiro de 2017")


    addFooter()

    displayPage()

}

initialize()
