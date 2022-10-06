

function readClient(){
//funcion get
//alert('llamar a boton');
document.getElementById("demo").innerHTML = "Hello World";
    $.ajax({ 
        url : 'https://gb253c377f83133-reto1g2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'GET',
        dataType : 'json',
        success : function(json) {
            console.log(json)
            //console.log(json.count)
            let arreglo = json.items;
            //console.log(arreglo.find(name))
            $("#listarClientes").empty();
            for(i=0;i<arreglo.length;i++){
                $("#listarClientes").append(arreglo[i].id+"<b>"+ arreglo[i].name+"</b> "+ arreglo[i].email+" "+arreglo[i].age);
                $("#listarClientes").append("<button onclick= 'borrarCliente("+arreglo[i].id+")'>Borrar</button><br>");
               // document.getElementById("listarClientes").append( <p> + arreglo[i].name+</p>);
                $("#listarClientes").append();
               // document.getElementById("listarClientes").append(<p> + arreglo[i].email+</p>);
            }
        },
        error : function(xhr, status) {
       // alert('ha sucedido un problema');
        },
        //complete : function(xhr, status) {
        //alert('Petición realizada');
       // }
       complete: function(){
        readClient();
       }
        });
}


function saveClient(){

    let id=$("#idCliente").val();
    let Nombre=$("#NombreCliente").val();
    let Email=$("#EmailCliente").val();
    let Edad=$("#EdadCliente").val();

    let data={
        id:id,
        name:Nombre,
        email:Email,
        age:Edad
    };
    let datosEnviar=JSON.stringify(data);
    console.log(datosEnviar);
    $.ajax({ 
        url : 'https://gb253c377f83133-reto1g2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'POST',
        //dataType : 'json',
        data: datosEnviar,
        contentType: 'application/json',
        success : function(json) {
                $("#idCliente").val("");
                $("#NombreCliente").val("");
                $("#EmailCliente").val("");
                $("#EdadCliente").val("");   
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        //},
       // complete : function(xhr, status) {
        //alert('Petición realizada');
        },
        complete: function(){
            readClient();
           }
       });
}

function editarCliente(){

    let id=$("#idCliente").val();
    let Nombre=$("#NombreCliente").val();
    let Email=$("#EmailCliente").val();
    let Edad=$("#EdadCliente").val();

    let data={
        id:id,
        name:Nombre,
        email:Email,
        age:Edad
    };
    let datosEnviar=JSON.stringify(data);
    console.log(datosEnviar);
    $.ajax({ 
        url : 'https://gb253c377f83133-reto1g2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'PUT',
        //dataType : 'json',
        data: datosEnviar,
        contentType: 'application/json',
        success : function(json) {
                $("#idCliente").val("");
                $("#NombreCliente").val("");
                $("#EmailCliente").val("");
                $("#EdadCliente").val("");   
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        //},
       // complete : function(xhr, status) {
        //alert('Petición realizada');
        },
        complete: function(){
            readClient();
           }
       });
}

function borrarCliente(id){

    let data={
        id:id,
    };
    let datosEnviar=JSON.stringify(data);
    console.log(datosEnviar);
    $.ajax({ 
        url : 'https://gb253c377f83133-reto1g2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'DELETE',
        //dataType : 'json',
        data: datosEnviar,
        contentType: 'application/json',
        success : function(json) {
                $("#idCliente").val("");
                $("#NombreCliente").val("");
                $("#EmailCliente").val("");
                $("#EdadCliente").val("");   
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        //},
       // complete : function(xhr, status) {
        //alert('Petición realizada');
        },
        complete: function(){
            readClient();
           }
       });
}