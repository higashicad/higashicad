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
        "*.hellowork.mhlw.go.jp"
        "*.inventor-navi.net"
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
        "hellowork.mhlw.go.jp"
        "inventor-navi.net"
    ];

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
