let change_img = document.getElementById('change_img');
let paramer = getParameterByName('paramer');
let param = paramer;
change_img.innerHTML = '<img src="../../img/pag' + param + '.png" alt="">';
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
            change_img.innerHTML = '<img src="../../img/pag1.png" alt="">';
            break;

        case 2:
            change_img.innerHTML = '<img src="../../img/pag2.png" alt="">';
            break;
            
        case 3:
            change_img.innerHTML = '<img src="../../img/pag3.png" alt="">';
            break;
        
        case 4:
            change_img.innerHTML = '<img src="../../img/pag4.png" alt="">';
            break;
            
        case 5:
            change_img.innerHTML = '<img src="../../img/pag5.png" alt="">';
            break;
        
        case 6:
            change_img.innerHTML = '<img src="../../img/pag6.png" alt="">';
            break;
            
        case 7:
            change_img.innerHTML = '<img src="../../img/pag7.png" alt="">';
            break;
        
        case 8:
            change_img.innerHTML = '<img src="../../img/pag8.png" alt="">';
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