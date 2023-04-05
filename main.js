const $list = document.getElementById('color')

const colors = ['red', 'blue', 'green', 'yellow', 'black']
const items = []

for (const color of colors) {
    items.push(`<li class = "c1" >${color}</li>`)
  }
  
  const list = `
  <ul>
    ${items.join('')}
  </ul>`
  
  $list.innerHTML = $list.innerHTML + list