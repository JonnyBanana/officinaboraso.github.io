$(function() {
$("#contatti").validate ({
rules:{
'nome':{
required: true,
minlength: 3
},
'email':{
required: true,
email: true
},
'messaggio':{
required: true,
minlength: 10
}
},
messages:{
'nome':{
required: "Il campo nome è obbligatorio!",
minlength: "Inserisci un nome di almeno 3 lettere!"
},
'email':{
required: "L' email è obbligatoria!",
email: "L'Email inserita non è valida!"
},
'messaggio':{
required: "Il campo messaggio è obbligatorio!",
minlength: "Insersci un messaggio di almeno 10 caratteri!"
}
},
submitHandler : function(form) {
form.submit();
}
});
});