
            /** INEGI */

            var token = '9fe5d171-2e5f-4383-a05f-40e38dfdcea7';
            var condicion = "restaurante";
            var latitud = "21.028041";
            var longitud = "-89.641045"; //21.028041, -89.641045
            var metros = "1000";
            var urlApiBusqueda = "http://www3.inegi.org.mx/sistemas/api/denue/v1/consulta/buscar/#condicion/#latitud,#longitud/#metros/#token";
            var urlApiBusquedaTmp = urlApiBusqueda.replace('#condicion', condicion);
            urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#latitud', latitud);
            urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#longitud', longitud);
            urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#metros', metros);
            urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#token', token);

            fetch(urlApiBusquedaTmp)
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    console.log(json);
                })
