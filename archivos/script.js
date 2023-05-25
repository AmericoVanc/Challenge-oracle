// Función para encriptar 
function Encriptar()
{
  const Texto = document.getElementById('input-Entrada').value;
  const Clave = parseInt(document.getElementById('Clave').value);
  if(Clave!=="")
  {
    if(Number.isInteger(Clave))
    {
    document.getElementById('mensaje').innerHTML=encrypt(Texto, Clave, "Encrip");
    alert("Texto Encriptado");
    var textarea = document.getElementById('input-Entrada');
    /* Limpiar el contenido del textarea */
      textarea.value = "";
    }
  else{alert("La clave que ingreso no es numerica")}
  }
  else{alert("Por favor ingrese una clave numerica")}
  
}

// Función para Desencriptar
function Desencriptar()
{
  const Texto = document.getElementById('input-Entrada').value;
  const Clave = parseInt(document.getElementById('Clave').value);
  if(Clave!=="")
  {
    if(Number.isInteger(Clave))
    {
    document.getElementById('mensaje').innerHTML=encrypt(Texto, Clave, "DESEncrip");
    alert("Texto Desencriptado");
    var textarea = document.getElementById('input-Entrada');
    /* Limpiar el contenido del textarea */
      textarea.value = "";
    }
  else{alert("La clave que ingreso no es numerica")}
  }
  else{alert("Por favor ingrese una clave numerica")}
    
}
function ValidacionDeClave (Clave)
{
  var Validacion=0;
  
  return Validacion;
}
// Función para encriptar un texto utilizando cifrado de sustitución
function encrypt(text, key, Encrip) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
      // Obtener el carácter en la posición actual
      const char = text[i];
  
      // Obtener el código ASCII del carácter
      const charCode = char.charCodeAt(0);
  
      // Aplicar la clave de sustitución
      var encryptedCharCode
      if(Encrip=="Encrip")
      {
        encryptedCharCode= charCode + key;
      }
      else
      {
        encryptedCharCode= charCode - key;
      }
      // Obtener el nuevo carácter encriptado
      const encryptedChar = String.fromCharCode(encryptedCharCode);
  
      // Agregar el carácter encriptado al resultado
      encryptedText += encryptedChar;
    }
    return encryptedText;
  }

  function Copy()
  {
    var copyText = document.getElementById('mensaje');

    /* Seleccionar el texto dentro del elemento de entrada de texto */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* Para dispositivos móviles */

    /* Copiar el texto al portapapeles */
    document.execCommand("copy");

    /* Alerta o mensaje de éxito */
    alert("Texto copiado");

    /* Alerta o mensaje de éxito */
    document.getElementById('mensaje').innerHTML="";
  }