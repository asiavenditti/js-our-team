const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];



// funzione per creare una card dinamica


let members = ''

const divEl = document.getElementById('team')

const cardMaker = (teamMembers) => {


  for (let i = 0; i < teamMembers.length; i++) {

    const member = teamMembers[i]

    const card = `
    <div class="col-md-4 mb-4">
    <div class="card" style="max-width: 540px;">
    <div class="row g-0">
    <div class="col-md-4">
            <img src="${member.img}" class="img-fluid object-fit-cover rounded-start h-100" alt="member">
            </div>
          <div class="col-md-8">
            <div class="card-body text-bg-dark h-100">
              <h5 class="card-title mb-1">${member.name}</h5>
              <p class="description mb-1">${member.role}</p>
              <span class="email mb-1">${member.email}</span>
              </div>
              </div>
            </div>
            </div>
            </div>`
    members += card
  }

  return members
}
divEl.innerHTML = cardMaker(teamMembers)

