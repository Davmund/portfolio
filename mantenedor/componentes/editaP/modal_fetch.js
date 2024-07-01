//archivo para enviar modificaciones al PHP
function mandaDatos (a,b,c){
    fetch("componentes/modal/edita_proyecto.php", {
        method: "POST",
        body: JSON.stringify({
        id: a,
        nombre: b,
        descripcion: c
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .then(alert(a+' - '+b+' - '+c));
}
