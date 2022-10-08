

function readComputer(){
//funcion get
//alert('llamar a boton');
//document.getElementById("demo").innerHTML = "Hello World";
    $.ajax({ 
        url : 'https://gb253c377f83133-reto1g2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/computer/computer',
        type : 'GET',
        dataType : 'json',
        success : function(json) {
            console.log(json)
            //console.log(json.count)
            let arreglo = json.items;
            //console.log(arreglo.find(name))
            $("#listarComputer").empty();
            for(i=0;i<arreglo.length;i++){
                $("#listarComputer").append(arreglo[i].id+"<b>"+ arreglo[i].name+"</b> "+ arreglo[i].brand+" "+arreglo[i].model);
                $("#listarComputer").append("<button onclick= 'borrarComputer("+arreglo[i].id+")'>Borrar</button><br>");
                $("#listarComputer").append();
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


function saveComputer(){

    let id=$("#idComputer").val();
    let Name=$("#NameComputer").val();
    let Brand=$("#BrandComputer").val();
    let Model=$("#ModelComputer").val();
    let Category=$("#CategoryComputer").val();

    let data={
        id:id,
        name:Name,
        brand:Brand,
        model:Model,
        category_id:Category
    };
    let datosEnviar=JSON.stringify(data);
    console.log(datosEnviar);
    $.ajax({ 
        url : 'https://gb253c377f83133-reto1g2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/computer/computer',
        type : 'POST',
        //dataType : 'json',
        data: datosEnviar,
        contentType: 'application/json',
        success : function(json) {
                $("#idComputer").val("");
                $("#NameComputer").val("");
                $("#BrandComputer").val("");
                $("#ModelComputer").val("");   
                $("#CategoryComputer").val("");   
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        //},
       // complete : function(xhr, status) {
        //alert('Petición realizada');
        },
        complete: function(){
            readComputer();
           }
       });
}

function editarComputer(){

    let id=$("#idComputer").val();
    let Name=$("#NameComputer").val();
    let Brand=$("#BrandComputer").val();
    let Model=$("#ModelComputer").val();
    let Category=$("#CategoryComputer").val();


    let data={
        id:id,
        name:Name,
        brand:Brand,
        model:Model,
        category_id:Category
    };
    let datosEnviar=JSON.stringify(data);
    console.log(datosEnviar);
    $.ajax({ 
        url : 'https://gb253c377f83133-reto1g2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/computer/computer',
        type : 'PUT',
        //dataType : 'json',
        data: datosEnviar,
        contentType: 'application/json',
        success : function(json) {
            $("#idComputer").val("");
            $("#NameComputer").val("");
            $("#BrandComputer").val("");
            $("#ModelComputer").val("");   
            $("#CategoryComputer").val("");    
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        //},
       // complete : function(xhr, status) {
        //alert('Petición realizada');
        },
        complete: function(){
            readComputer();
           }
       });
}

function borrarComputer(id){

    let data={
        id:id,
    };
    let datosEnviar=JSON.stringify(data);
    console.log(datosEnviar);
    $.ajax({ 
        url : 'https://gb253c377f83133-reto1g2.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/computer/computer',
        type : 'DELETE',
        //dataType : 'json',
        data: datosEnviar,
        contentType: 'application/json',
        success : function(json) {
            $("#idComputer").val("");
            $("#NameComputer").val("");
            $("#BrandComputer").val("");
            $("#ModelComputer").val("");   
            $("#CategoryComputer").val("");   
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        //},
       // complete : function(xhr, status) {
        //alert('Petición realizada');
        },
        complete: function(){
            readComputer();
           }
       });
}