let change_img = document.getElementById('change_img');
let paramer = getParameterByName('paramer');
let text_on_p = document.getElementById('text_on_p');
let param = paramer;
let arr_text = [
    'Es el primer medio de comunicación ‘online’ a nivel mundial, independiente y con una actualización constante, especializado en tecnología dirigida a personas con discapacidad y personas mayores. El portal de noticias incorpora en la cabecera la posibilidad de personalizar la portada, de manera que los visitantes pueden elegir el tipo de información sobre el que están más interesados (por tipo de discapacidad: visual, auditiva, física, cognitiva u otras, o para personas mayores) y todas las noticias de portada cambian para mostrar aquellas que interesan al usuario.',
    'El portal de noticias incorpora en la cabecera la posibilidad de personalizar la portada, de manera que los visitantes pueden elegir el tipo de información sobre el que están más interesados (por tipo de discapacidad: visual, auditiva, física, cognitiva u otras, o para personas mayores) y todas las noticias de portada cambian para mostrar aquellas que interesan al usuario.',
    'Esta página realiza una recopilación de los establecimientos hosteleros fijándose en criterios de accesibilidad para personas con discapacidad, precios y su oferta gastronómica. Este proyecto, tiene como objetivo facilitar la búsqueda de alojamientos turísticos y restaurantes adaptados a determinadas condiciones de accesibilidad, además de ofrecer al usuario un abanico de establecimientos donde se detalla el menú, tipo de cocina y el precio aproximado.',
    'En este caso disponemos de una Web que conjuga dos opciones. Por un lado tenemos un diseño visual como corresponde a las personas sordas; y por otro tenemos accesibilidad en la web. Videos en lengua de signos, recursos visuales de aumento de texto y descripciones hacen que la web sea accesible.',
    'Este sitio se diseñó por un grupo de personas con discapacidad intelectual, donde ellos como que tuvieron  el apoyo de psicólogos y fuerzas de seguridad para obtener un recurso útil y adecuado para sus capacidades. Los contenidos se han creado de acuerdo a los principios de lectura fácil, con un cuerpo de letra mayor, vídeos sencillos con ilustraciones y audio de fácil comprensión.',
    'Esta página es de la Fundación CNSE que creó una página web para favorecer un uso adecuado de Internet y las redes sociales entre niñas y niños sordos a partir de tercer ciclo de Primaria. El acceso a la Red desde esta edad responde a un fin práctico, como un recurso complementario al aula.',
    'Esta página web fue adaptada por la Confederación de Personas con Discapacidad Física y Orgánica (COCEMFE), para ser totalmente accesible. En esa página dan información acerca de la integración laboral para las personas con discapacidad. ',
    'Esta página web muestra el reglamento para el examen de licencia de conducir. Lo que hicieron es adaptar la página en si para que las personas sordas pudieran entender el contenido por medio de ilustraciones.'
]
change_img.innerHTML = '<img src="../../img/pag' + param + '.png" alt="Esta imagen muestra una captura de un sitio web, utilizado como portal de noticias para informar a las personas con discapacidead de una manera accesible.">';
text_on_p.innerHTML = arr_text[param-1];
function change_l(){
    param--;
    f_param();
    change_param(param);
}
function change_r(){
    param++;
    f_param();
    change_param(param);
}
function change_param(param){
    console.log(param);
    
    switch(param){
        case 1:
            change_img.innerHTML = '<img src="../../img/pag1.png" alt="Esta imagen muestra una captura de un sitio web, utilizado como portal de noticias para informar a las personas con discapacidead de una manera accesible.">';
            text_on_p.innerHTML = 'Es el primer medio de comunicación ‘online’ a nivel mundial, independiente y con una actualización constante, especializado en tecnología dirigida a personas con discapacidad y personas mayores. El portal de noticias incorpora en la cabecera la posibilidad de personalizar la portada, de manera que los visitantes pueden elegir el tipo de información sobre el que están más interesados (por tipo de discapacidad: visual, auditiva, física, cognitiva u otras, o para personas mayores) y todas las noticias de portada cambian para mostrar aquellas que interesan al usuario.';
            break;

        case 2:
            change_img.innerHTML = '<img src="../../img/pag2.png" alt="Esta imagen muestra una captura de un ditio web, utilizado con un portal de noticias "personalizado" para cada usuario dependiendo de su discapacidad.>';
            text_on_p.innerHTML = 'El portal de noticias incorpora en la cabecera la posibilidad de personalizar la portada, de manera que los visitantes pueden elegir el tipo de información sobre el que están más interesados (por tipo de discapacidad: visual, auditiva, física, cognitiva u otras, o para personas mayores) y todas las noticias de portada cambian para mostrar aquellas que interesan al usuario.';
            break;
            
        case 3:
            change_img.innerHTML = '<img src="../../img/pag3.png" alt="Esta imagen muestra la captura de un sitio web que realiza una recopilación de hosteles quer va dirigido a las personas con discapacidad.">';
            text_on_p.innerHTML = 'Esta página realiza una recopilación de los establecimientos hosteleros fijándose en criterios de accesibilidad para personas con discapacidad, precios y su oferta gastronómica. Este proyecto, tiene como objetivo facilitar la búsqueda de alojamientos turísticos y restaurantes adaptados a determinadas condiciones de accesibilidad, además de ofrecer al usuario un abanico de establecimientos donde se detalla el menú, tipo de cocina y el precio aproximado.';
            break;
        
        case 4:
            change_img.innerHTML = '<img src="../../img/pag4.png" alt="Esta imagen muestra la captura de un sitio web que brinda accesibilidad web a personas sordas, por medio de videos en lengua de signos, recursos visuales de aumento de texto y descripciones">';
            text_on_p.innerHTML = 'En este caso disponemos de una Web que conjuga dos opciones. Por un lado tenemos un diseño visual como corresponde a las personas sordas; y por otro tenemos accesibilidad en la web. Videos en lengua de signos, recursos visuales de aumento de texto y descripciones hacen que la web sea accesible.';
            break;
            
        case 5:
            change_img.innerHTML = '<img src="../../img/pag5.png" alt="Esta imagen muestra una captura de un sitio web, que brinda recursos como lectura fácil, con un cuerpo de letra mayor, vídeos sencillos con ilustraciones y audio de fácil comprensión para personas con discapacidad.">';
            text_on_p.innerHTML = 'Este sitio se diseñó por un grupo de personas con discapacidad intelectual, donde ellos como que tuvieron  el apoyo de psicólogos y fuerzas de seguridad para obtener un recurso útil y adecuado para sus capacidades. Los contenidos se han creado de acuerdo a los principios de lectura fácil, con un cuerpo de letra mayor, vídeos sencillos con ilustraciones y audio de fácil comprensión.';
            break;
        
        case 6:
            change_img.innerHTML = '<img src="../../img/pag6.png" alt="Esta imagen muestra una captura de un sitio web que brinda accesibilidad para un uso adecuado en el internet y las redes sociuales para niños sordos.">';
            text_on_p.innerHTML = 'Esta página es de la Fundación CNSE que creó una página web para favorecer un uso adecuado de Internet y las redes sociales entre niñas y niños sordos a partir de tercer ciclo de Primaria. El acceso a la Red desde esta edad responde a un fin práctico, como un recurso complementario al aula.';
            break;
            
        case 7:
            change_img.innerHTML = '<img src="../../img/pag7.png" alt="Esta imagen muestra una captura de un sitio web que brinda información laboral para personas con discapacidad de una manera accesible.">';
            text_on_p.innerHTML = 'Esta página web fue adaptada por la Confederación de Personas con Discapacidad Física y Orgánica (COCEMFE), para ser totalmente accesible. En esa página dan información acerca de la integración laboral para las personas con discapacidad. ';
            break;
        
        case 8:
            change_img.innerHTML = '<img src="../../img/pag8.png" alt="Esta imagen muestra una captura de un sitio web que brinda el reglamento para el examen de licencia de conducir a personas con discapacidad, de una manera accesible.">';
            text_on_p.innerHTML = 'Esta página web muestra el reglamento para el examen de licencia de conducir. Lo que hicieron es adaptar la página en si para que las personas sordas pudieran entender el contenido por medio de ilustraciones.';
            break;
    }
}
function f_param(){
    if(param > 8){
        param = 1;
    }else if(param < 1){
        param = 8;
    }
}
/* Get parameter by name function */
function getParameterByName(name) {
    var res = new RegExp(
        // Parameter names always start after a ? or &.
        '[\?&]' +
  
        // Make sure any [ or ] are escaped in the name.
        name.replace(/\[/g, '\\\[').replace(/\]/g, '\\\]') +
  
        // Either match a =... or match an empty value.
        // Values can be terminated by an & a # or the end of the string ($).
        '(?:=([^&#]*))?(?:[&#]|$)'
    ).exec(window.location.search);
  
    return res ?
      (res[1] ? // res[1] will be undefined for a parameter without value.
        decodeURIComponent(res[1].replace(/\+/g, ' ')) : ''
      ) : null;
}