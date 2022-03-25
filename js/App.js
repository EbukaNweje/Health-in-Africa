const Hamburger = document.querySelector('.fa-solid.fa-bars');
const navLinks = document.querySelector('.nav-link');
const close = document.querySelector('.fa-solid.fa-xmark');

function pop() {
  navLinks.classList.toggle('show');
}
Hamburger.addEventListener('click', pop);

function vanish() {
  navLinks.classList.toggle('show');
}
close.addEventListener('click', vanish);

const link = document.querySelectorAll('.kin-link');
link.forEach((link) => {
  link.addEventListener('click', vanish);
});

const Speakers = [
  {
    name : "Dr. Amadou-Sall",
    qut : "Dr Amadou A Sall is the CEO of Institut Pasteur de Dakar in Senegal.",
    content : "Director of the WHO Collaborating Center for Arboviruses and Viral Hemorrhagic Fever. He has been chairman of the Global Outbreak Alert and Response Network and a member of the Coalition for Epidemic Preparedness and Innovation (CEPI) Scientific Advisory Board.",
    image : "./Images/1.jpg",
    background: "./Images/checkbox.jpg"
  },
  {
    name : "Dr.Ernest-Darkoh",
    qut : "Expert on health systems strengthening and large-scale program implementation.",
    content : "He is on the Board of the Schwab Foundation for Social Entrepreneurship and has been recognized by New African Magazine as one of the 100 most influential Africans and named one of eighteen “Global Health Heroes” by TIME Magazine.",
    image : "./Images/2.jpg",
    background: "./Images/checkbox.jpg"
  },
  {
    name : "Dr.Yvonne-Mburu",
    qut : "Founder of Nexakili, a growing network of African health professionals and scientists.",
    content : "Her academic research at the Curie Institute in Paris and at the University of Pittsburgh, PA originally focused on the immunology and immunotherapy of cancer. Her work also spans health systems and policies, with a key focus on integrating breakthrough technologies to accelerate the pace of innovative medicine especially in Africa.",
    image : "./Images/3.jpg",
    background: "./Images/checkbox.jpg"
  },
  {
    name : "Professor-Tom-Kariuki",
    qut : "Prof Thomas Kariuki is Executive Director of the Science for Africa (SFA) Foundation.",
    content : "Dr Kariuki previously served as the Director of Programmes for the Alliance for Accelerating Excellence in Science in Africa (AESA) and Director of a Biomedical facility, the Institute of Primate Research / National Museums of Kenya where he established his infectious immunology research group.",
    image : "./Images/4.jpg",
    background: "./Images/checkbox.jpg"
  },  
  {
    name : "Professor-Helen-ReesDr.",
    qut : "Professor Helen Rees is the Founder and Executive Director of Wits RHI, the largest research Institute at Wits University.",
    content : "Professor Rees chairs the Board of the South African Health Products Regulatory Authority and also Chairs the World Health Organisation’s AFRO Region Immunization Technical Advisory Group. Also a member of WHO’s Scientific and Technical Advisory Group on Infectious Hazards.",
    image : "./Images/5.jpg",
    background: "./Images/checkbox.jpg"
  },
  {
    name : "Dr.-Yvonne-Mburu",
    qut : "Dr. Vera Songwe is the Under-Secretary-General of the United Nations and Executive Secretary of the Economic Commission for Africa (ECA).",
    content : "Upon her appointment, she became the first woman to lead the institution in its 60-year history. She was listed as one of Africa’s 50 most powerful women by Forbes in 2020 and named as one of the ‘100 Most Influential Africans’ by Jeune Afrique in 2019. In 2017.",
    image : "./Images/6.jpg",
    background: "./Images/checkbox.jpg"
  },
]

// const myshows = document.querySelector(".List-speakers")
const showItem = Speakers.map((props)=>{
  return`
  <div class="speakers-Left">
  <div class="speakers-Image">
      <img src="${props.background}" class="check" alt="">
      <img src="${props.image}" class="image" alt="">
  </div>
  <div class="speakers-Text">
      <h3>${props.name}</h3>
      <span>${props.qut}</span>
      <p>${props.content}</p>
  </div>
</div>
  `
})

myshows.innerHTML = showItem