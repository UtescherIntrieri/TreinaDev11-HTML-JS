let result = document.getElementById('result')

async function printData(){

  let res = await fetch('https://randomuser.me/api/?results=5')
  let data = await res.json()
  console.log(data.results);

  contactList.forEach(contact => {
    let li = document.createElement('li')
    li.innerHTML = `
    <div>
      <img width="180" src="${contact.picture}" alt="${contact.name}">
      <h2>${contact.name}</h2>
      <span>${contact.email}</span>
      <p>${contact.city} | ${contact.state}</p>
      <button>${contact.country}</button>
    </div>`
    result.appendChild(li)
  })
}

let contactList = [
  {
    'name' : 'Maria Silva',
    'email' : 'maria@gmail.com',
    'city' : 'Cajamar', 
    'state' : 'SP',
    'country' : 'Brasil',
    'picture': 'https://randomuser.me/api/portraits/women/43.jpg'
  },
  {
    'name' : 'Roberta Silva',
    'email' : 'roberta@gmail.com',
    'city' : 'São Paulo', 
    'state' : 'SP',
    'country' : 'Brasil',
    'picture': 'https://randomuser.me/api/portraits/women/45.jpg'
  },
  {
    'name' : 'Dalva Silva',
    'email' : 'dalva@gmail.com',
    'city' : 'São Roque', 
    'state' : 'SP',
    'country' : 'Brasil',
    'picture': 'https://randomuser.me/api/portraits/women/46.jpg'
  },
]