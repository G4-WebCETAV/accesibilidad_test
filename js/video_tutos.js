let vid_description = document.getElementById('vid_description');
let vids = document.getElementById('vids');
let change_title = document.getElementById('change_title');
var videos_num = 1, text = '', embed_vids ='', title = '';

function l_vid(){
    videos_num--;
    lets_see();
    console.log(videos_num);
    change_vids_and_text();
    change_content();
}

function r_vid(){
    videos_num++;
    lets_see();
    console.log(videos_num);
    change_vids_and_text();
    change_content();
}

function change_vids_and_text(){
    
    switch(videos_num){
        case 1:
            title = 'Ejemplos de problemas de accesibilidad';
            text = '<p><b>En este vídeo veremos tres ejemplos de barreras de accesibilidad que podemos encontrar en las páginas web.</b>Los ejemplos que vamos a analizar afectan principalmente a los usuarios con discapacidad visual, motora y auditiva.​</p>';
            embed_vids = '<iframe width="640" height="360" src="https://www.youtube.com/embed/2Tm0zZhIxKU" frameborder="0" allow="autoplay; encrypted-media"  allowfullscreen></iframe>';
            break;
        case 2:
            title = '¿Nuestra web es accesible para personas con discapacidad?';
            text = '<p><b>Arturo Vaillard Martinez</b>Este video ejemplifica a través de una comparación entre la página web del Conapred <br/>-que tiene el máximo nivel de accesibilidad-- y otra que está en el nivel más bajo.</p>';
            embed_vids = '<iframe width="640" height="360" src="https://www.youtube.com/embed/yJcFHhObqmU" frameborder="0"allowfullscreen></iframe>';
            break;
        case 3:
            title = '¿Cómo hacer un front para todos? ';
            text = '<p><b>Accesibilidad Web, Juanjo Montiel.</b>En esta charla nos proporcionan las herramientas y las referencias necesarias no solo para que podamos abordar de forma efectiva un desarrollo accesible, sino también para que podamos comprobar si lo hemos hecho bien, utilizando las aplicaciones que usan los distintos perfiles de discapacidad.</p>';
            embed_vids = '<iframe width="640" height="360" src="https://www.youtube.com/embed/TZX8AXng0sM" frameborder="0" allow="autoplay; encrypted-media"  allowfullscreen></iframe>';
            break;
        case 4:
            title = 'Accesibilidad Web: Formularios';     
            text = '<p><b>Del curso: "Introducción al desarrollo web".</b>Agrupa semánticamente los controles de un formulario, identifica semánticamente las etiquetas de los controles, define los controles obligatorios con required, identifica los controles que reciben el foco de manera adecuada.</p>';
            embed_vids = '<iframe width="640" height="360" src="https://www.youtube.com/embed/yxDweV1tGfQ" frameborder="0" allow="autoplay; encrypted-media"  allowfullscreen></iframe>';
            break;
        case 5:
            title = 'HTML y CSS: Accesibilidad para personas con baja visión';
            text = '<p><b>Del curso: "Introducción al desarrollo web".</b>Consejos para que las páginas web sean accesibles a personas con baja visión, visión periférica (personas que solo ven por la periferia del campo visual), visión con reducción del campo visual (personas que tienen su campo visual reducido por lo que no ven por la periferia).</p>';
            embed_vids = '<iframe width="640" height="360" src="https://www.youtube.com/embed/xV-kV_2rlh8" frameborder="0" allow="autoplay; encrypted-media"  allowfullscreen></iframe>';
            break;
    }
}
function change_content(){
    vid_description.innerHTML = text;
    vids.innerHTML = embed_vids;
    change_title.innerHTML = title;
}
function lets_see(){
    if(videos_num == 0){
        videos_num = 5;
    }else if(videos_num == 6){
        videos_num = 1;
    }
}