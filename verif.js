function verif()
{
if(F.ADR.value == '') {alert("sasir votre mail"); return false;}
else if((F.ADR.value.indexOf("@") == -1 )|| (F.ADR.value.indexOf(".") == -1 ))
 {alert("e-mail invalide"); return false;}
 if(F.mdp.value == ''){
    alert("password required"); return false;
 } 
}