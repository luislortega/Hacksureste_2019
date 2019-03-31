// Cuando ya tengas tu token reemplaza el texto 'AQUÍ_VA_TU_TOKEN' de la siguiente variable con él.
var token = 'AQUÍ_VA_TU_TOKEN';
			
var urlApiBusqueda = "http://www3.inegi.org.mx/sistemas/api/denue/v1/consulta/buscar/#condicion/#latitud,#longitud/#metros/#token";
var vecNombres = [
'id de establecimiento',
'Nombre de la unidad econ&oacute;mica:',
'Raz&oacute;n social:',
'Nombre de la clase de actividad:',
'Personal ocupado (estrato):',
'Tipo de vialidad:',
'Nombre de la vialidad:',
'N&uacute;mero exterior o km:',
'N&uacute;mero o letra interior:',
'Nombre del asentamiento humano:',
'C&oacute;digo postal:',
'Entidad,Municipio,Localidad:',
'N&uacute;mero de tel&eacute;fono:',
'Correo electr&oacute;nico:',
'Sitio en Internet:',
'Tipo de unidad econ&oacute;mica:',
'Latitud:',
'Longitud:'];

function llamarApiDenueBus(){
	var condicion = $('#condi').val();
	var longitud = $('#lon').val();
	var latitud = $('#lat').val();
	var metros = $('#mts').val();
	var urlApiBusquedaTmp = urlApiBusqueda.replace('#condicion',condicion);
	urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#latitud',latitud);
	urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#longitud',longitud);
	urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#metros',metros);
	urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#token',token);
	if(token.includes('AQUÍ')){
		alert("Debes ingresar tu token en el archivo apiDenue.js");
	} else {
		$.getJSON( urlApiBusquedaTmp, function( json ) {  
			var codHtml = '';
			for(var i = 0; i < json.length; i++){
			codHtml += '<table style="width:50%;">';
			codHtml += '<tr><th colspan="2">Establecimiento ' + (i + 1) + '</th></tr>';
			codHtml += '<tr ><td style="width:50%;" >' + vecNombres[0] + '</td><td style="width:50%;">' + json[i].Id + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[1] + '</td><td style="width:50%;">' + json[i].Nombre + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[2] + '</td><td style="width:50%;">' + json[i].Razon_social + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[3] + '</td><td style="width:50%;">' + json[i].Clase_actividad + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[4] + '</td><td style="width:50%;">' + json[i].Estrato + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[5] + '</td><td style="width:50%;">' + json[i].Tipo_vialidad + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[6] + '</td><td style="width:50%;">' + json[i].Calle + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[7] + '</td><td style="width:50%;">' + json[i].Num_Exterior + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[8] + '</td><td style="width:50%;">' + json[i].Num_Interior + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[9] + '</td><td style="width:50%;">' + json[i].Colonia + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[10] + '</td><td style="width:50%;">' + json[i].CP + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[11] + '</td><td style="width:50%;">' + json[i].Ubicacion + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[12] + '</td><td style="width:50%;">' + json[i].Telefono + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[13] + '</td><td style="width:50%;">' + json[i].Correo_e + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[14] + '</td><td style="width:50%;">' + json[i].Sitio_internet + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[15] + '</td><td style="width:50%;">' + json[i].Tipo + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[16] + '</td><td style="width:50%;">' + json[i].Latitud + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[17] + '</td><td style="width:50%;">' + json[i].Longitud + '</td></tr>'
			codHtml += '<tr><td></td></tr></table><br><br>';
			}
			
			$('#tabDenue').html(codHtml);
		});	
	}
}