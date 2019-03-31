import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:webview_flutter/webview_flutter.dart';

class ZonaMapa extends StatelessWidget {
  hexColor(String colorhexcode) {
    String colornew = '0xff' + colorhexcode;
    colornew = colornew.replaceAll('#', '');
    int colorInt = int.parse(colornew);
    return colorInt;
  }

  @override
  Widget build(BuildContext context) {
    final Completer<WebViewController> _controller =
        Completer<WebViewController>();

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
                          initialUrl: 'https://tienditasbepensa.epizy.com/?i=1',
                          javascriptMode: JavascriptMode.unrestricted,
                          onWebViewCreated:
                              (WebViewController webViewController) {
                            _controller.complete(webViewController);
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
                ),
                Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 10.0),
                    child: new Column(
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
