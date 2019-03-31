import 'package:flutter/material.dart';
import './zonaMapa.dart';

class DatosLugar extends StatelessWidget {
  hexColor (String colorhexcode) {
    String colornew = '0xff' + colorhexcode;
    colornew = colornew.replaceAll('#', '');
    int colorInt = int.parse(colornew);
    return colorInt;
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(      
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,          
          children: <Widget>[ 
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20.0),
              child: Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  "Datos de sitio",                              
                  style: TextStyle(
                    fontSize: 25,
                  )
                )
              )
            ),
            new SizedBox(
              height: 40.0,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20.0),
              child: new TextField(
                decoration: new InputDecoration(
                  labelText: "Estado"
                ),
              )
            ),
            new SizedBox(
              height: 30.0,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20.0),
              child: new TextField(
              obscureText: false,
              decoration: new InputDecoration(
                labelText: "Municipio"
                ),
              )
            ),
            new SizedBox(
              height: 40.0,
            ),
            new MaterialButton(
              minWidth: 300.0,
              child: new Text(
                "Buscar",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 18
                ),
              ),
              color: Color((hexColor('#FF551F'))),
              shape: StadiumBorder(),
              onPressed: (){
                Navigator.push(context, MaterialPageRoute(builder: (context) { return ZonaMapa(); }));
                },
            ),
          ],
        ),
      ),
    );
  }
}