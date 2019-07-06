const url = 'https://randomuser.me/api/?results=20'

const image = document.getElementById('image')
const name = document.getElementById('name')
const material = document.getElementById('material')

function createNode(element){
    return document.createElement(element)
}
function append(parent,el){
    return parent.appendChild(el)
}

fetch(url)
  .then((resp) => resp.json())
  .then(function(data){
      let authors = data.results
      let html = ''
      
      return authors.map((author) => {
        //   console.log(author.name.first)
        //   console.log(author.name.last)
        //   console.log(author.picture.medium)
        // let img = createNode('img'),
        // firstname = createNode('h2')
        // firstname.innerHTML = author.name.first;

        // img.className = "circle responsive-img"
        
        // img.src = author.picture.medium;
        // append(image,img);
        // append(name,firstname);
        var fname = author.name.first;        
        var capital_fname = fname.toUpperCase()

        let card = `
            <div class="container">
                <div class="col s12 m8 offset-m2 l6 offset-l3">
                    <div class="card-panel #ffb74d orange lighten-2 z-depth-1">
                        <div class="row valign-wrapper">
                            <div class="col s4">
                                <div id="image">
                                    <img src="${author.picture.medium}" alt="" class="circle responsive-img">
                                </div>
                            </div>
                            <div class="col s8">
                                <span id="name">
                                    Name:<h4>${capital_fname}</h4>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
    `
    html += card
    material.innerHTML = html;
    })
})
  .catch(function(error){
      console.log(JSON.stringify(error))
  })