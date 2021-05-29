const input = document.querySelector('#txtTaskName');
input.addEventListener('keyup',eventHandler2);
var swear = ['word1','word2','word3','word4']
function eventHandler2(e){
    
    var a = String(e.target.value).toLowerCase('tr');

    for(let i = 0; i<swear.length;i++){

        if(a.includes(swear[i])){
           
            e.target.value = a.replace(swear[i],star(swear[i]))
        }
            
    }
}
function star(badWord){
    var yasak = '';
    for(let i = 0; i<badWord.length;i++){
        yasak = yasak + '*'
    }
    return yasak;
}




