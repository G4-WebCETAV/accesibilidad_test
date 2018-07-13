let slider = document.getElementById('slider');
let cambio = 1;

function siguiente(){
    cambio++;
    if(cambio > 10){
        cambio = 1;
    }
    slid();
    console.log(cambio);
}

function anterior(){
    cambio--;
    if(cambio < 1){
        cambio = 10;
    }
    slid();
    console.log(cambio);
}

function slid(){
    switch(cambio){
        case 1: 
            slider.innerHTML = 'Cuando se utilicen imágenes y animaciones utilizar el atributo “alt” para describir mediante texto dichas imágenes.';
            break;
        case 2:
            slider.innerHTML = 'Para los mapas de imagen se debe utilizar el elemento “map” y texto alternativo para las zonas activas.';
            break;
        case 3:
            slider.innerHTML = 'Cuando se utilicen recursos multimedia se deben de poner subtítulos y una descripción del vídeo.';
            break;
        case 4:
            slider.innerHTML = 'En los enlaces de hipertexto se deben utilizar textos que tengan relación con el enlace y evitar textos del tipo "Pulsar aquí".';
            break;
        case 5:
            slider.innerHTML = 'Utilizar encabezados, listas y estructuras para estructurar la página. Para la maquetación utilizar CSS siempre que sea posible.';
            break;
        case 6:
            slider.innerHTML = 'Figuras y diagramas: se deben describir (en la misma página o utilizando el atributo “longdesc”).';
            break;
        case 7:
            slider.innerHTML = 'Cuando se utilicen Scripts, applets y plug-ins se debe aportar contenido alternativo si estos no son accesibles.';
            break;
        case 8:
            slider.innerHTML = 'Cuando se utilicen tablas se debe facilitar la lectura línea a línea y resumir su contenido.';
            break;
        case 9:
            slider.innerHTML = 'Marcos (frames): se debe usar el elemento “noframes” y títulos con sentido.';
            break;
        case 10:
            slider.innerHTML = 'Revisión: hay que verificar que se cumple con las normas de accesibilidad. Para ello se pueden utilizar herramientas, puntos de comprobación y pautas.';
            break;
    }
}