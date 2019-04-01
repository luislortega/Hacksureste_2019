import 'dart:async';

import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

//Stateless container
class ZonaMapa extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return _ZonaMapa();
  }
}

class _ZonaMapa extends StatefulWidget {
  _ZonaMapaState createState() => new _ZonaMapaState();
}

class _ZonaMapaState extends State<_ZonaMapa> {
  int tipo = 1;
  String url = 'http://tienditasbepensa.epizy.com/?i=1';

  WebViewController _controller;

  @override
  void initState() {
    tipo = 1;
    super.initState();
  }

  changeTipo1() {
    if (tipo == 1) {
      setState(() {
        tipo = 0;
      });
      _controller.loadUrl('http://bepensita.epizy.com/tienditas.html?i=1');
    }
  }

  changeTipo2() {
    if (tipo == 0) {
      setState(() {
        tipo = 1;
      });
      _controller.loadUrl('http://bepensita.epizy.com/gym.html?i=1');
    }
  }

  changeTipo3(){
    _controller.loadUrl('http://bepensita.epizy.com/tienditas_bepensa.html?i=1');
  }

  hexColor(String colorhexcode) {
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
          children: <Widget>[
            new Column(
              children: <Widget>[
                Padding(
                    padding: EdgeInsets.all(10),
                    child: Container(
                      height: 420.0,
                      child: WebView(
                          initialUrl: url,
                          javascriptMode: JavascriptMode.unrestricted,
                          onWebViewCreated:
                              (WebViewController webViewController) {
                            _controller = webViewController;
                          }),
                    ))
              ],
            ),
            new Row(children: <Widget>[
              Switch(
                value: true,
                activeColor: Color(hexColor('#FF551F')),
                activeTrackColor: Color(hexColor('#FF551F')),
              ),
              Text("Negocios asociados")
            ]),
            new SizedBox(
              height: 10.0,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20.0),
              child: new Row(children: <Widget>[
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 10.0),
                  child: new Column(
                    children: <Widget>[
                      FlatButton(
                        onPressed: changeTipo1,
                        child: Column(
                          children: <Widget>[
                            Image.asset(
                              'assets/iconfinder_store_384881.png',
                              width: 70.0,
                              height: 70.0,
                            ),
                            Text(
                              "Store",
                              style: TextStyle(
                                fontSize: 10.0,
                              ),
                            )
                          ],
                        ),
                      )
                    ],
                  ),
                ),
                Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 10.0),
                    child: new Column(
                      children: <Widget>[
                        FlatButton(
                          onPressed: changeTipo2,
                          child: Column(
                            children: <Widget>[
                              Image.asset(
                                'assets/iconfinder_dumbbell_1118213.png',
                                width: 70.0,
                                height: 70.0,
                              ),
                              Text(
                                "Gym",
                                style: TextStyle(
                                  fontSize: 10.0,
                                ),
                              )
                            ],
                          ),
                        ),
                      ],
                    )),
                    Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 10.0),
                    child: new Column(
                      children: <Widget>[
                        FlatButton(
                          onPressed: changeTipo3,
                          child: Column(
                            children: <Widget>[
                              Image.asset(
                                'assets/iconfinder_dumbbell_1118213.png',
                                width: 70.0,
                                height: 70.0,
                              ),
                              Text(
                                "Total",
                                style: TextStyle(
                                  fontSize: 10.0,
                                ),
                              )
                            ],
                          ),
                        ),
                      ],
                    ))
              ]),
            ),
            new SizedBox(
              height: 20.0,
            ),
          ],
        ),
      ),
    );
  }
}
