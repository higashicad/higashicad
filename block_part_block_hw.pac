function FindProxyForURL(url, host) {
    // ワイルドカードを使ったドメインのリスト
    var wildcardDomains = [
        "*.autodesk.co.jp",
        "*.autodesk.com",
        "*.update.microsoft.com",
        "*.download.windowsupdate.com",
        "*.download.microsoft.com",
        "*.windowsupdate.com",
        "*.ntservicepack.microsoft.com",
        "*.login.live.com",
        "*.mp.microsoft.com",
        "*.do.dsp.mp.microsoft.com",
        "*.dl.delivery.mp.microsoft.com",
        "*.emdl.ws.microsoft.com",
        "*.trendmicro.com",
        "*.nimbusweb.me",
        "*.getupnote.com",
        "*.raw.githubusercontent.com",
        "*.inventor-navi.net",
        "*.mhlw.go.jp", // 追加部分
        "*.hellowork.mhlw.go.jp" // ハローワークのドメイン追加
    ];

    // アスタリスクなしのドメインのリスト
    var directDomains = [
        "autodesk.co.jp",
        "autodesk.com",
        "update.microsoft.com",
        "download.windowsupdate.com",
        "download.microsoft.com",
        "windowsupdate.com",
        "ntservicepack.microsoft.com",
        "login.live.com",
        "mp.microsoft.com",
        "do.dsp.mp.microsoft.com",
        "dl.delivery.mp.microsoft.com",
        "emdl.ws.microsoft.com",
        "trendmicro.com",
        "nimbusweb.me",
        "getupnote.com",
        "raw.githubusercontent.com",
        "inventor-navi.net",
        "mhlw.go.jp", // 追加部分
        "hellowork.mhlw.go.jp" // ハローワークのドメイン追加
    ];

    // 指定されたIPアドレス（LAN内サーバー）への直接接続
    var directIPs = [
        "192.168.11.173" // 追加部分
    ];

    // 指定されたIPアドレスには直接接続
    for (var k = 0; k < directIPs.length; k++) {
        if (isInNet(host, directIPs[k], "255.255.255.255")) {
            return "DIRECT";
        }
    }

    // 指定されたドメインには直接接続
    for (var i = 0; i < wildcardDomains.length; i++) {
        if (shExpMatch(host, wildcardDomains[i])) {
            return "DIRECT";
        }
    }

    // アスタリスクなしのドメインには直接接続
    for (var j = 0; j < directDomains.length; j++) {
        if (dnsDomainIs(host, directDomains[j])) {
            return "DIRECT";
        }
    }

    // それ以外のすべてのトラフィックをプロキシ経由
    return "PROXY 127.0.0.1:8118";
}
