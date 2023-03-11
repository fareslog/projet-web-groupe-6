
function verifinscrit(){
    e = f.email.value
    pass = f.password.value
    num = f.number.value
    adr= f.adr.value
    city = f.city.value
    ce = f.ce.value
    sexe = f.flexRadioDefault.value
    if(e ==''|| pass =='' || num =='' ||
    adr =='' || city =='' || ce ==''  ||
    sexe ==''){
        alert('all fields are required')
    }
}