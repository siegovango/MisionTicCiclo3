

function readMessage(){
//funcion get
//alert('llamar a boton');
//document.getElementById("demo").innerHTML = "Hello World";
    $.ajax({ 
        url : 'https://gb253c377f83133-reto1g2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        type : 'GET',
        dataType : 'json',
        success : function(json) {
            console.log(json)
            //console.log(json.count)
            let arreglo = json.items;
            //console.log(arreglo.find(name))
            $("#listarMessage").empty();
            for(i=0;i<arreglo.length;i++){
                $("#listarMessage").append(arreglo[i].id+"<b>"+ arreglo[i].messagetext+"</b> ");
                $("#listarMessage").append("<button onclick= 'borrarMessage("+arreglo[i].id+")'>Borrar</button><br>");
                $("#listarMessage").append();
            }
        },
        error : function(xhr, status) {
       // alert('ha sucedido un problema');
        },
        //complete : function(xhr, status) {
        //alert('Petición realizada');
       // }
       complete: function(){
        //readComputer();
       }
        });
}


function saveMessage(){

    let id=$("#idMessage").val();
    let Name=$("#NameMessage").val();

    let data={
        id:id,
        messagetext:Name,
    };
    let datosEnviar=JSON.stringify(data);
    console.log(datosEnviar);
    $.ajax({ 
        url : 'https://gb253c377f83133-reto1g2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        type : 'POST',
        //dataType : 'json',
        data: datosEnviar,
        contentType: 'application/json',
        success : function(json) {
                $("#idMessage").val("");
                $("#NameMessage").val("");   
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        //},
       // complete : function(xhr, status) {
        //alert('Petición realizada');
        },
        complete: function(){
            readMessage();
           }
       });
}

function editarMessage(){

    let id=$("#idMessage").val();
    let Name=$("#NameMessage").val();

    let data={
        id:id,
        messagetext:Name,
    };
    let datosEnviar=JSON.stringify(data);
    console.log(datosEnviar);
    $.ajax({ 
        url : 'https://gb253c377f83133-reto1g2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        type : 'PUT',
        //dataType : 'json',
        data: datosEnviar,
        contentType: 'application/json',
        success : function(json) {
            $("#idMessage").val("");
            $("#NameMessage").val("");   
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        //},
       // complete : function(xhr, status) {
        //alert('Petición realizada');
        },
        complete: function(){
            readMessage();
           }
       });
}

function borrarMessage(id){

    let data={
        id:id,
    };
    let datosEnviar=JSON.stringify(data);
    console.log(datosEnviar);
    $.ajax({ 
        url : 'https://gb253c377f83133-reto1g2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        type : 'DELETE',
        //dataType : 'json',
        data: datosEnviar,
        contentType: 'application/json',
        success : function(json) {
            $("#idMessage").val("");
            $("#NameMessage").val("");
            $("#BrandMessage").val("");
            $("#ModelMessage").val("");   
            $("#CategoryMessage").val("");   
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        //},
       // complete : function(xhr, status) {
        //alert('Petición realizada');
        },
        complete: function(){
            readMessage();
           }
       });
}