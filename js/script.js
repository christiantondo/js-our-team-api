// Funzione che aggiunge la card
function getMemberCard(name, role, img) {

  return `<div class="card col-4">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${role}</p>
            </div>
           </div>`;
}

// Recupero l'elemento dalla pagina
const listElement = document.getElementById("team-container");

// Uso axios per recuperare i dati dall'API fornito
axios.get("https://boolean-teachers.github.io/mock/api/members/").then(response => {

  const members = response.data
  let listHTML = "";

  // Stampo la lista dei memberi per maggior chiarezza e per verificare che i dati che sto ricevendo siano corretti
  console.log("Questo è il dato ricevuto: la lista dei membri", members)

  // Nuova versione con il forEach al posto del ciclo for
  const addElement = members.forEach(member => listHTML += (getMemberCard(member.name, member.role, member.img)))

  // Scrivo in pagina
  listElement.innerHTML = listHTML;
})

