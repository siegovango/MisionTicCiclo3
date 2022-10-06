

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
            for(i=0;i<arreglo.length;i++){
                $("listarClientes").append("<h2>" + arreglo[i].name+"</h2>");
                document.getElementById("listarClientes").innerHTML = "<h2>" + arreglo[i].name+"</h2>";
                $("listarClientes").append(arreglo[i].email);
                document.getElementById("listarClientes").innerHTML = "<h3>" + arreglo[i].email+"</h3>";
            }
        },
        error : function(xhr, status) {
        alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
        alert('Petición realizada');
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
        dataType : 'json',
        data: datosEnviar,
        contentType: 'application/json',
        success : function(json) {
            
        }//,
        //error : function(xhr, status) {
        //alert('ha sucedido un problema');
        //},
       // complete : function(xhr, status) {
        //alert('Petición realizada');
        //}
        });
}