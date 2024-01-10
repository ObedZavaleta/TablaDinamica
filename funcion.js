var json = {
    "personasUTP": [
        {
            "Id": 1,
            "Nombre": "Obed",
            "ApellidoPat": "Zavaleta",
            "ApellidoMat": "Fernandez",
            "Tel": 2288463273
        },

        {
            "Id": 2,
            "Nombre": "Fabiola",
            "ApellidoPat": "Salazar",
            "ApellidoMat": "Aguilar",
            "Tel": 2281228122
        },

        {
            "Id": 3,
            "Nombre": "Beatriz",
            "ApellidoPat": "Carmona",
            "ApellidoMat": "Dominguez",
            "Tel": 2282238223
        },

        {
            "Id": 4,
            "Nombre": "Carlos",
            "ApellidoPat": "Gutierrez",
            "ApellidoMat": "Juarez",
            "Tel": 2283248324
        }
    ]
}



function rellenarTabla() {
    $("#Tabla").append("<caption>TABLA DINAMICA</caption>");
    var DatosJson = JSON.parse(JSON.stringify(json)); //convierte el objeto llamado json a archivo JSON, y toda la info la almacena en la variable DatosJson
    console.log(DatosJson.personasUTP.length);
    $("#Tabla").append('<tr><th>ID</th>' + //selecciona el id="tabla" del html y con la append de jquery empieza añadir los encabezados de la tabla
        '<th>Nombre</th>' +
        '<th>Apellido Paterno</th>' +
        '<th>Apellido Materno</th>' +
        '<th>Telefono</th>' +
        '<th>Acciones</th></tr>');
    for (i = 0; i < DatosJson.personasUTP.length; i++) {

        $("#Tabla").append('<tr>' +
            '<td align="center" style="dislay: none;">' + DatosJson.personasUTP[i].Id + '</td>' +
            '<td align="center" style="dislay: none;">' + DatosJson.personasUTP[i].Nombre + '</td>' +
            '<td align="center" style="dislay: none;">' + DatosJson.personasUTP[i].ApellidoPat + '</td>' +
            '<td align="center" style="dislay: none;">' + DatosJson.personasUTP[i].ApellidoMat + '</td>' +
            '<td align="center" style="dislay: none;">' + DatosJson.personasUTP[i].Tel + '</td>' +
            '<td align="center" style="dislay: none;">' + '<button value="Editar" title="Editar" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>&nbsp;' + '<button value="Eliminar" title="Eliminar" class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>' + '</td>');
    }

}
