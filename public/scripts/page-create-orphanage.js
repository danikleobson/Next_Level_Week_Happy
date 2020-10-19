//create map
var map = L.map('mapid').setView([-22.8926167,-43.3191616], 14);

//create tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],

})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon layer 
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat,lng], {icon} ).addTo(map);
})
    

// addPhotoField
function addPhotoField(){
    //pick the photo #images container
    const container = document.querySelector('#images')
    //pick the container to duplicate .new-images
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //clone the last added image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //check if field is empty, and not add if it is
    const input = newFieldContainer.children[0]

    if(input == ""){
        return
    }
    //clean the field before add image
    input.value = ""
    //add the clone to the #images container
    container.appendChild(newFieldContainer);
}

function deleteField(event){
    const span = event.currentTarget

    const fieldContainer = fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldContainer.length < 2){
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove()
}

//select yes or no

function toggleSelect(event){
    // retirar a classe .active dos botões
    document.querySelectorAll('.button-select button')
    .forEach(function(button)  {
        button.classList.remove('active')
    });
    // colocar a classe .active nos botões
    const button = event.currentTarget
    button.classList.add('active')


    // atualizar meu input hidden com o valor selecionado 
    const input = document.querySelector('[name="open_on_weekends"]')
    console.log(input)

    // verificar se sim ou não
    input.value = button.dataset.value
    

}

function validate(event){
    //validar se lat e lng estão preenchidos
    const needsLatAndLng = false
    if(needsLatAndLng){
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    } else {return}
}