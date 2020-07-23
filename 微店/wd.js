var _0x5a3b9b = function () {
    var _0x520853 = function (_0x5a12f4, _0x140f67) {
            _0x5a12f4 = [_0x5a12f4[0x0] >>> 0x10, _0x5a12f4[0x0] & 0xffff, _0x5a12f4[0x1] >>> 0x10, _0x5a12f4[0x1] & 0xffff];
            _0x140f67 = [_0x140f67[0x0] >>> 0x10, _0x140f67[0x0] & 0xffff, _0x140f67[0x1] >>> 0x10, _0x140f67[0x1] & 0xffff];
            var _0x4f0ca7 = [0x0, 0x0, 0x0, 0x0];
            _0x4f0ca7[0x3] += _0x5a12f4[0x3] + _0x140f67[0x3];
            _0x4f0ca7[0x2] += _0x4f0ca7[0x3] >>> 0x10;
            _0x4f0ca7[0x3] &= 0xffff;
            _0x4f0ca7[0x2] += _0x5a12f4[0x2] + _0x140f67[0x2];
            _0x4f0ca7[0x1] += _0x4f0ca7[0x2] >>> 0x10;
            _0x4f0ca7[0x2] &= 0xffff;
            _0x4f0ca7[0x1] += _0x5a12f4[0x1] + _0x140f67[0x1];
            _0x4f0ca7[0x0] += _0x4f0ca7[0x1] >>> 0x10;
            _0x4f0ca7[0x1] &= 0xffff;
            _0x4f0ca7[0x0] += _0x5a12f4[0x0] + _0x140f67[0x0];
            _0x4f0ca7[0x0] &= 0xffff;
            return [_0x4f0ca7[0x0] << 0x10 | _0x4f0ca7[0x1], _0x4f0ca7[0x2] << 0x10 | _0x4f0ca7[0x3]];
        },
        _0x4ecb09 = function (_0x5f1b12, _0x159af0) {
            _0x5f1b12 = [_0x5f1b12[0x0] >>> 0x10, _0x5f1b12[0x0] & 0xffff, _0x5f1b12[0x1] >>> 0x10, _0x5f1b12[0x1] & 0xffff];
            _0x159af0 = [_0x159af0[0x0] >>> 0x10, _0x159af0[0x0] & 0xffff, _0x159af0[0x1] >>> 0x10, _0x159af0[0x1] & 0xffff];
            var _0x305a2d = [0x0, 0x0, 0x0, 0x0];
            _0x305a2d[0x3] += _0x5f1b12[0x3] * _0x159af0[0x3];
            _0x305a2d[0x2] += _0x305a2d[0x3] >>> 0x10;
            _0x305a2d[0x3] &= 0xffff;
            _0x305a2d[0x2] += _0x5f1b12[0x2] * _0x159af0[0x3];
            _0x305a2d[0x1] += _0x305a2d[0x2] >>> 0x10;
            _0x305a2d[0x2] &= 0xffff;
            _0x305a2d[0x2] += _0x5f1b12[0x3] * _0x159af0[0x2];
            _0x305a2d[0x1] += _0x305a2d[0x2] >>> 0x10;
            _0x305a2d[0x2] &= 0xffff;
            _0x305a2d[0x1] += _0x5f1b12[0x1] * _0x159af0[0x3];
            _0x305a2d[0x0] += _0x305a2d[0x1] >>> 0x10;
            _0x305a2d[0x1] &= 0xffff;
            _0x305a2d[0x1] += _0x5f1b12[0x2] * _0x159af0[0x2];
            _0x305a2d[0x0] += _0x305a2d[0x1] >>> 0x10;
            _0x305a2d[0x1] &= 0xffff;
            _0x305a2d[0x1] += _0x5f1b12[0x3] * _0x159af0[0x1];
            _0x305a2d[0x0] += _0x305a2d[0x1] >>> 0x10;
            _0x305a2d[0x1] &= 0xffff;
            _0x305a2d[0x0] += _0x5f1b12[0x0] * _0x159af0[0x3] + _0x5f1b12[0x1] * _0x159af0[0x2] + _0x5f1b12[0x2] * _0x159af0[0x1] + _0x5f1b12[0x3] * _0x159af0[0x0];
            _0x305a2d[0x0] &= 0xffff;
            return [_0x305a2d[0x0] << 0x10 | _0x305a2d[0x1], _0x305a2d[0x2] << 0x10 | _0x305a2d[0x3]];
        },
        _0x5c7530 = function (_0x4bf8f3, _0x190edc) {
            _0x190edc %= 0x40;

            if (_0x190edc === 0x20) {
                return [_0x4bf8f3[0x1], _0x4bf8f3[0x0]];
            } else if (_0x190edc < 0x20) {
                return [_0x4bf8f3[0x0] << _0x190edc | _0x4bf8f3[0x1] >>> 0x20 - _0x190edc, _0x4bf8f3[0x1] << _0x190edc | _0x4bf8f3[0x0] >>> 0x20 - _0x190edc];
            } else {
                _0x190edc -= 0x20;
                return [_0x4bf8f3[0x1] << _0x190edc | _0x4bf8f3[0x0] >>> 0x20 - _0x190edc, _0x4bf8f3[0x0] << _0x190edc | _0x4bf8f3[0x1] >>> 0x20 - _0x190edc];
            }
        },
        _0x384526 = function (_0x2be6f9, _0x6fbbf6) {
            _0x6fbbf6 %= 0x40;

            if (_0x6fbbf6 === 0x0) {
                return _0x2be6f9;
            } else if (_0x6fbbf6 < 0x20) {
                return [_0x2be6f9[0x0] << _0x6fbbf6 | _0x2be6f9[0x1] >>> 0x20 - _0x6fbbf6, _0x2be6f9[0x1] << _0x6fbbf6];
            } else {
                return [_0x2be6f9[0x1] << _0x6fbbf6 - 0x20, 0x0];
            }
        },
        _0x533d9b = function (_0x5be230, _0x459575) {
            return [_0x5be230[0x0] ^ _0x459575[0x0], _0x5be230[0x1] ^ _0x459575[0x1]];
        },
        _0x27370e = function (_0x18759a) {
            _0x18759a = _0x533d9b(_0x18759a, [0x0, _0x18759a[0x0] >>> 0x1]);
            _0x18759a = _0x4ecb09(_0x18759a, [0xff51afd7, 0xed558ccd]);
            _0x18759a = _0x533d9b(_0x18759a, [0x0, _0x18759a[0x0] >>> 0x1]);
            _0x18759a = _0x4ecb09(_0x18759a, [0xc4ceb9fe, 0x1a85ec53]);
            _0x18759a = _0x533d9b(_0x18759a, [0x0, _0x18759a[0x0] >>> 0x1]);
            return _0x18759a;
        };

    return function (_0x2ab66d, _0x2ba760) {
        _0x2ab66d = _0x2ab66d || '';
        _0x2ba760 = _0x2ba760 || 0x0;

        var _0x575ddc = _0x2ab66d["length"] % 0x10;

        var _0x4d394c = _0x2ab66d["length"] - _0x575ddc;

        var _0x2506cb = [0x0, _0x2ba760];
        var _0x2ee16f = [0x0, _0x2ba760];
        var _0x22f223 = [0x0, 0x0];
        var _0x438b82 = [0x0, 0x0];
        var _0x5dca71 = [0x87c37b91, 0x114253d5];
        var _0x2e6e58 = [0x4cf5ad43, 0x2745937f];

        for (var _0x22251d = 0x0; _0x22251d < _0x4d394c; _0x22251d = _0x22251d + 0x10) {
            _0x22f223 = [_0x2ab66d["charCodeAt"](_0x22251d + 0x4) & 0xff | (_0x2ab66d["charCodeAt"](_0x22251d + 0x5) & 0xff) << 0x8 | (_0x2ab66d["charCodeAt"](_0x22251d + 0x6) & 0xff) << 0x10 | (_0x2ab66d["charCodeAt"](_0x22251d + 0x7) & 0xff) << 0x18, _0x2ab66d["charCodeAt"](_0x22251d) & 0xff | (_0x2ab66d["charCodeAt"](_0x22251d + 0x1) & 0xff) << 0x8 | (_0x2ab66d["charCodeAt"](_0x22251d + 0x2) & 0xff) << 0x10 | (_0x2ab66d["charCodeAt"](_0x22251d + 0x3) & 0xff) << 0x18];
            _0x438b82 = [_0x2ab66d["charCodeAt"](_0x22251d + 0xc) & 0xff | (_0x2ab66d["charCodeAt"](_0x22251d + 0xd) & 0xff) << 0x8 | (_0x2ab66d["charCodeAt"](_0x22251d + 0xe) & 0xff) << 0x10 | (_0x2ab66d["charCodeAt"](_0x22251d + 0xf) & 0xff) << 0x18, _0x2ab66d["charCodeAt"](_0x22251d + 0x8) & 0xff | (_0x2ab66d["charCodeAt"](_0x22251d + 0x9) & 0xff) << 0x8 | (_0x2ab66d["charCodeAt"](_0x22251d + 0xa) & 0xff) << 0x10 | (_0x2ab66d["charCodeAt"](_0x22251d + 0xb) & 0xff) << 0x18];
            _0x22f223 = _0x4ecb09(_0x22f223, _0x5dca71);
            _0x22f223 = _0x5c7530(_0x22f223, 0x1f);
            _0x22f223 = _0x4ecb09(_0x22f223, _0x2e6e58);
            _0x2506cb = _0x533d9b(_0x2506cb, _0x22f223);
            _0x2506cb = _0x5c7530(_0x2506cb, 0x1b);
            _0x2506cb = _0x520853(_0x2506cb, _0x2ee16f);
            _0x2506cb = _0x520853(_0x4ecb09(_0x2506cb, [0x0, 0x5]), [0x0, 0x52dce729]);
            _0x438b82 = _0x4ecb09(_0x438b82, _0x2e6e58);
            _0x438b82 = _0x5c7530(_0x438b82, 0x21);
            _0x438b82 = _0x4ecb09(_0x438b82, _0x5dca71);
            _0x2ee16f = _0x533d9b(_0x2ee16f, _0x438b82);
            _0x2ee16f = _0x5c7530(_0x2ee16f, 0x1f);
            _0x2ee16f = _0x520853(_0x2ee16f, _0x2506cb);
            _0x2ee16f = _0x520853(_0x4ecb09(_0x2ee16f, [0x0, 0x5]), [0x0, 0x38495ab5]);
        }

        _0x22f223 = [0x0, 0x0];
        _0x438b82 = [0x0, 0x0];

        switch (_0x575ddc) {
            case 0xf:
                _0x438b82 = _0x533d9b(_0x438b82, _0x384526([0x0, _0x2ab66d["charCodeAt"](_0x22251d + 0xe)], 0x30));

            case 0xe:
                _0x438b82 = _0x533d9b(_0x438b82, _0x384526([0x0, _0x2ab66d["charCodeAt"](_0x22251d + 0xd)], 0x28));

            case 0xd:
                _0x438b82 = _0x533d9b(_0x438b82, _0x384526([0x0, _0x2ab66d["charCodeAt"](_0x22251d + 0xc)], 0x20));

            case 0xc:
                _0x438b82 = _0x533d9b(_0x438b82, _0x384526([0x0, _0x2ab66d["charCodeAt"](_0x22251d + 0xb)], 0x18));

            case 0xb:
                _0x438b82 = _0x533d9b(_0x438b82, _0x384526([0x0, _0x2ab66d["charCodeAt"](_0x22251d + 0xa)], 0x10));

            case 0xa:
                _0x438b82 = _0x533d9b(_0x438b82, _0x384526([0x0, _0x2ab66d["charCodeAt"](_0x22251d + 0x9)], 0x8));

            case 0x9:
                _0x438b82 = _0x533d9b(_0x438b82, [0x0, _0x2ab66d["charCodeAt"](_0x22251d + 0x8)]);
                _0x438b82 = _0x4ecb09(_0x438b82, _0x2e6e58);
                _0x438b82 = _0x5c7530(_0x438b82, 0x21);
                _0x438b82 = _0x4ecb09(_0x438b82, _0x5dca71);
                _0x2ee16f = _0x533d9b(_0x2ee16f, _0x438b82);

            case 0x8:
                _0x22f223 = _0x533d9b(_0x22f223, _0x384526([0x0, _0x2ab66d["charCodeAt"](_0x22251d + 0x7)], 0x38));

            case 0x7:
                _0x22f223 = _0x533d9b(_0x22f223, _0x384526([0x0, _0x2ab66d["charCodeAt"](_0x22251d + 0x6)], 0x30));

            case 0x6:
                _0x22f223 = _0x533d9b(_0x22f223, _0x384526([0x0, _0x2ab66d["charCodeAt"](_0x22251d + 0x5)], 0x28));

            case 0x5:
                _0x22f223 = _0x533d9b(_0x22f223, _0x384526([0x0, _0x2ab66d["charCodeAt"](_0x22251d + 0x4)], 0x20));

            case 0x4:
                _0x22f223 = _0x533d9b(_0x22f223, _0x384526([0x0, _0x2ab66d["charCodeAt"](_0x22251d + 0x3)], 0x18));

            case 0x3:
                _0x22f223 = _0x533d9b(_0x22f223, _0x384526([0x0, _0x2ab66d["charCodeAt"](_0x22251d + 0x2)], 0x10));

            case 0x2:
                _0x22f223 = _0x533d9b(_0x22f223, _0x384526([0x0, _0x2ab66d["charCodeAt"](_0x22251d + 0x1)], 0x8));

            case 0x1:
                _0x22f223 = _0x533d9b(_0x22f223, [0x0, _0x2ab66d["charCodeAt"](_0x22251d)]);
                _0x22f223 = _0x4ecb09(_0x22f223, _0x5dca71);
                _0x22f223 = _0x5c7530(_0x22f223, 0x1f);
                _0x22f223 = _0x4ecb09(_0x22f223, _0x2e6e58);
                _0x2506cb = _0x533d9b(_0x2506cb, _0x22f223);
        }

        _0x2506cb = _0x533d9b(_0x2506cb, [0x0, _0x2ab66d["length"]]);
        _0x2ee16f = _0x533d9b(_0x2ee16f, [0x0, _0x2ab66d["length"]]);
        _0x2506cb = _0x520853(_0x2506cb, _0x2ee16f);
        _0x2ee16f = _0x520853(_0x2ee16f, _0x2506cb);
        _0x2506cb = _0x27370e(_0x2506cb);
        _0x2ee16f = _0x27370e(_0x2ee16f);
        _0x2506cb = _0x520853(_0x2506cb, _0x2ee16f);
        _0x2ee16f = _0x520853(_0x2ee16f, _0x2506cb);
        return ("00000000" + (_0x2506cb[0x0] >>> 0x0)["toString"](0x10))["slice"](-0x8) + ("00000000" + (_0x2506cb[0x1] >>> 0x0)["toString"](0x10))["slice"](-0x8) + ("00000000" + (_0x2ee16f[0x0] >>> 0x0)["toString"](0x10))["slice"](-0x8) + ("00000000" + (_0x2ee16f[0x1] >>> 0x0)["toString"](0x10))["slice"](-0x8);
    };
}();
var _0xd05c32 = function (_0x5c6c0c) {
    var _0x39e8b5 = [];
    var _0x569c42 = {};

    for (var _0x3a1fd5 = 0x0; _0x3a1fd5 < _0x5c6c0c["length"]; _0x3a1fd5++) {
        if (!_0x569c42[_0x5c6c0c[_0x3a1fd5]]) {
            _0x39e8b5["push"](_0x5c6c0c[_0x3a1fd5]);

            _0x569c42[_0x5c6c0c[_0x3a1fd5]] = 0x1;
        }
    }

    return _0x39e8b5;
};
var _0x5b05ca = {
    'WEBGL_fragmentShaderFloatIntPrecision': ["highp/highp", "highp/lowp", "mediump/highp", "mediump/lowp", "not available"],
    'FLASH_touchScreenType': ["finger", "none", "stylus"],
    'FLASH_cpuArchitecture': ["arm", "other", "powerpc", "sparc", "x86"],
    'FLASH_screenColor': ['bw', "color", "gray", "other"],
    'FLASH_playerType': ["activex", "desktop", "external", "other", "plugin", "standalone"],
    'NAVIGATOR_doNotTrack': ["do not track", "enable", "unspecified"],
    'NAVIGATOR_plugins': ["2007 Microsoft Office system", "360MMPlugin", "360\u5B89\u5168\u536B\u58EB \u5FEB\u901F\u767B\u5F55", "ANT pic ocr plugin", "APlayer ActiveX hosting plugin", "AcroPDF.PDF", "ActiveX hosting plugin for NPAPI", "Adobe Acrobat", "AdobeAAMDetect", "AgControl.AgControl", "AliSSOLogin plugin", "AliWangWang Plug-In For Firefox and Netscape", "Alipay Security Control 3", "Alipay Security Payment Client Suit", "Alipay security control", "Alipay webmod control", "BJCA Update", "BaiduSafeInput", "BaiduSetUp Plugin", "BaiduYunGuanjia Application", "Bang5Tao Plugin", "Baofeng StormPlayer 5", "Baofeng StormPlayer WebBrowser Plugin", "BluRay Plug-in", "CCBEnckey plugin", "CCBInfoScan plugin", "CCBNetSignCom plugin", "CFCA CryptoKit BOC 3.3", "CFCA CryptoKit CIB 3.0", "CFCA CryptoKit CMBC 3.2", "CFCA CryptoKit CMBC U2 3.0", "CFCA npSecEditCtl.BOC.x86 1.0", "CFCA npSecEditCtl.DaysPASS.x86 3.0", "CFCA npSecEditCtl.SHRB.x86 3.0", "CGB Online Banking Security Chrome Plugin", "CGB Online Banking Security Firefox Plugin", "CITICEdit", "CMBCEDIT", "CMBEdit Plugin", "CNKI CAJAX Plugin", "CNKI sysinfo Plugin", "CaiNiaoPrint", "China Online Banking Assistant", "Chrome PDF Viewer", "Chrome Remote Desktop Viewer", "Chromium PDF Viewer", "CmbcCom", "Cssweb Hard Info", "Cssweb Safe LoginHt", "Dingding Screenshot Plug-In For Firefox and Netscape", "EBestPay", "Edge PDF Viewer", "Fancy Game Plugin", "Foxit Reader Plugin for Mozilla", "GamePlugin", "Google Update", "HDZBCertCtrl.dll plugin", "HDZBSNCtrl plugin", "HunanTVPlugins", "Intel\xAE Identity Protection Technology", "JDDongDong Plugin", "Java Applet Plug-in", "Java(TM) Platform SE 6 U30", "Java(TM) Platform SE 7 U11", "Java(TM) Platform SE 7 U15", "Java(TM) Platform SE 7 U67", "Java(TM) Platform SE 7 U71", "Java(TM) Platform SE 8 U101", "Java(TM) Platform SE 8 U25", "Java(TM) Platform SE 8 U60", "Java(TM) Platform SE 8 U66", "Java(TM) Platform SE 8 U91", "Lync Meeting Join Plug-in", "MacromediaFlashPaper.MacromediaFlashPaper", "Maxthon PDF Viewer", "McAfee SecurityCenter", "Microsoft Lync 2010 Meeting Join Plug-in", "Microsoft Office 2003", "Microsoft Office 2010", "Microsoft Office 2013", "Microsoft Office 2016", "Microsoft\xAE DRM", "Microsoft\xAE Windows Media Player Firefox Plugin", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "NPQQCertificate", "NPQQPassword", "NVIDIA 3D VISION", "NVIDIA 3D Vision", "Native Client", "Native Widget Plugin", "Nexon Game Controller", "PPLive PPTV Plugin", "PassGuard", "PowerEnter Plug-in for BOSH", "PowerEnter Plug-in for SRCB", "PowerEnter Plug-in for UMS", "PowerSign Plug-in for BOSH", "PowerSign Plug-in for SPDB", "QQ2013", "QQDownload Plugin", "QQGameHall Firefox Plugin", "QQGamePlugin Pro", "QQMail Plugin", "QQMiniDL Plugin", "QQMusic", "QQMusic", "QQPCMgr Detector", "QuickTime Plug-in", "QuickTime Plug-in 7.7.4", "RealDownloader Plugin", "RealNetworks(tm) RealDownloader Chrome Background Extension Plug-In (32-bit)", "RealNetworks(tm) RealDownloader HTML5VideoShim Plug-In (32-bit)", "RealNetworks(tm) RealDownloader PepperFlashVideoShim Plug-In (32-bit)", "RealPlayer Download Plugin", "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)", "Rising AntiVirus V16", "SA-iSecurity Plug-in for BOSH", "SA-iSecurity Plug-in for PAB", "SA-iSecurity Plug-in for SPDBANK", "SWCtl.SWCtl", "SangforECPlugin", "Scripting.Dictionary", "SdpEdit", "Shahai ShareCom Plugin", "SharePoint Browser Plug-in", "Shell.UIHelper", "Shockwave Flash", "Shockwave for Director", "ShockwaveFlash.ShockwaveFlash", "SignMessenger", "Silverlight Plug-In", "Skype Web Plugin", "Sogou Explorer PrintScreen plugin", "Sogou Explorer npruntime scriptable example plugin", "Sogou plugin", "TDCCtl.TDCCtl", "Tencent FTN plug-in", "Tencent QQ", "Tencent SSO Platform", "Tendyron CCB Get SN Plugin", "Tendyron CCB ImportCert Plugin", "Tenpay Security Control", "Thunder DapCtrl NPAPI Plugin", "TradeManager Plug-In For Firefox and Netscape", "Turbo.net Plugin", "UPEditor", "Unity Player", "WMPlayer.OCX", "Wandoujia Plugin", "Watchdata (Beijing) Limited npwdkctrl", "WebKit built-in PDF", "WebKit \u5185\u5EFA PDF", "Widevine Content Decryption Module", "Windows Media Player Plug-in Dynamic Link Library", "Wiz", "XunLei Plugin", "XunLei User Plugin", "XunLei User Plugin", "YeePay SecureGuard", "YoukuAgent", "clear cache plugin for fsi", "client binding plugin for fsi", "com.sogou.sogoupdfviewer", "full screen plugin for fsi", "hao123BrowserTool", "hd2gccbcertctrl plugin", "hd2gccbsnctrl plugin", "iQiyi Browser Plugin", "iTrusChina iTrusPTA,XEnroll,iEnroll,hwPTA,UKeyInstalls Firefox Plugin", "iTunes Application Detector", "nbcbEdit", "npABCUtilapp", "npAssistComm Dynamic Link Library", "npCCBGmSignCtrl", "npCNCBChecker.dll", "npCNCBGuard.dll", "npCryptoKit.CertEnrollment.Pro.x86", "npCryptoKit.CertEnrollment.SHRB.x86", "npCryptoKit.SHRB.x86", "npFT2000APIForNBCBank", "npOEdit", "npQQPhotoDrawEx", "npScreenGrab Plugin", "npSecCtl.dll", "npStatusBarCreator plugin", "npTongbuAddin", "npTsGamePlugin", "npWeiboDesktopAssist Plugin", "npXEdit", "npalicdo plugin", "npdmccbplugin", "npft_citic", "npgd_citic", "npiTools \u52A8\u6001\u94FE\u63A5\u5E93", "npifox Dynamic Link Library", "npnedit netease edit plugin", "npxxin input plugin for fsi", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "shahai Password Plugin", "signAssist", "submit plugin for fsi", "weatherplg", "x-npcntvlive2-plugin", "xfplay p2p plugin", "\u4E0A\u6D77\u519C\u5546\u94F6\u884C\u7B7E\u540D\u63A7\u4EF6", "\u4F01\u4E1AQQ", "\u5982\u610F\u641C\u5A31\u4E50\u5E2E\u624B", "\u5E73\u5B89\u94F6\u884C\u7B7E\u540D\u63A7\u4EF6", "\u5E94\u7528\u5B9D\u4E00\u952E\u5B89\u88C5\u63D2\u4EF6", '歪歪', "\u7535\u8111\u7BA1\u5BB6\u7F51\u5740\u5B89\u5168\u63D2\u4EF6", "\u767E\u5EA6\u6781\u901F\u4E0B\u8F7D\u52A9\u624B", "\u767E\u5EA6\u7F51\u9875\u542F\u52A8\u7EC4\u4EF6", "\u767E\u5EA6\u8F6F\u4EF6\u4E2D\u5FC3\u52A9\u624B", "\u817E\u8BAF\u5F00\u653E\u5E73\u53F0\u6D4F\u89C8\u5668\u63D2\u4EF6", "\u817E\u8BAF\u89C6\u9891"],
    'NAVIGATOR_mimeTypes': ["application/BaiduExpert-npplugin", "application/HwPTA.iTrusHwPTA", "application/HwWDkey.installWDkey", "application/activex-manager", "application/alidcp", "application/aliedit", "application/asx", "application/atm-plugin", "application/baiduexpert-npplugin", "application/baidusetup-activex", "application/baofeng-webbrowser-plugin", "application/baofengwebplayer-plugin", "application/bd-npYunWebDetect-plugin", "application/bd-npupload-plugin", "application/bd-npyunwebdetect-plugin", "application/citic-npcncbchecker", "application/client-activex", "application/cmbc", "application/cnki-cajax-plugin", "application/cnki-sysinfo-plugin", "application/coba", "application/csswebhardinfo", "application/csswebsafeloginht", "application/dd-plugin", "application/futuresplash", "application/gameplugin", "application/hunantv-plugin", "application/hwpta.itrushwpta", "application/hwwdkey.installwdkey", "application/itunes-plugin", "application/java-deployment-toolkit", "application/mozilla-3dv-streaming-plugin", "application/mozilla-ccbenckey-plugin", "application/mozilla-ccbgmsignctrl-plugin", "application/mozilla-ccbinfoscan-plugin", "application/mozilla-ccbnetsign-plugin", "application/mozilla-dmwz-ccbdevidctrl-plugin", "application/mozilla-dmwz-writecert-plugin", "application/mozilla-hdzb-2g-ccbcertctrl-plugin", "application/mozilla-hdzb-2g-ccbsnctrl-plugin", "application/mozilla-hdzb-ccbcertctrl-plugin", "application/mozilla-hdzb-ccbsnctrl-plugin", "application/mozilla-npqihooquicklogin", "application/np-bddownload", "application/np-bdsofthelperplug", "application/npAliSSOLogin", "application/np_xunlei_plugin", "application/np_xunlei_plugin.2", "application/npabcutilapp", "application/npalicdo", "application/npalissologin", "application/npcryptokit.certenrollment.pro.x86", "application/npcryptokit.certenrollment.shrb.x86", "application/npcryptokit.cib.x86", "application/npcryptokit.cmbc.u2.x86", "application/npcryptokit.cmbc.x86", "application/npft_citic", "application/npgd_citic", "application/npitools-plugin", "application/npnedit-netease-edit-plugin", "application/npoedit", "application/npqqwebgame", "application/npseceditctl.boc.x86", "application/npseceditctl.dayspass.x86", "application/npseceditctl.shrb.x86", "application/nptxsso", "application/npxedit", "application/npxf-qqdownload", "application/npxf-qqminidl", "application/npxluser_plugin", "application/pdf", "application/player-activex", "application/postscript", "application/pta.itruspta.version.1", "application/qqcert", "application/qqedit", "application/qqpcmgr-extensions-mozilla", "application/qqphonemanagerplugin", "application/qscall-plugin", "application/sdp", "application/sdp-edit", "application/skype-web-plugin", "application/sogou-computerinfo-plugin", "application/sogou-native-widget-plugin", "application/sogou-npprintscreen-scriptable-plugin", "application/sogou-npruntime-scriptable-plugin", "application/sogou-npruntime-statusbar-attacher-for-da-plugin", "application/sogou-npruntime-statusbar-attacher-plugin", "application/sogou-query-left-ticket-12306-plugin", "application/sogou-start-gamecenter-lite-plugin", "application/srcbsign-signer-plugin", "application/tecent-qqlive-plugin", "application/tecent-qqmusichelper-plugin", "application/tecent-qzonemusic-plugin", "application/tencent-qqphotodrawex2-plugin", "application/tencentopenplatform", "application/tsgameplugin", "application/txftn-webkit", "application/upeditor", "application/upeditor-2", "application/vnd.adobe.pdfxml", "application/vnd.adobe.x-mars", "application/vnd.adobe.xdp+xml", "application/vnd.adobe.xfd+xml", "application/vnd.adobe.xfdf", "application/vnd.apple.mpegurl", "application/vnd.chromium.remoting-viewer", "application/vnd.fdf", "application/vnd.microsoft.communicator.ocsmeeting", "application/vnd.ppdf", "application/vnd.rn-realdownloader-javascript", "application/vnd.rn-realplayer-javascript", "application/vnd.unity", "application/ww-plugin", "application/x-adobeaamdetect", "application/x-aliinethealth-plugin", "application/x-alisecctrl-plugin", "application/x-baidu-safe", "application/x-bang5taoplugin", "application/x-baofeng-webbrowser-plugin", "application/x-cainiaoprint", "application/x-cgbeditchrome-plugin", "application/x-cgbeditfirefox-plugin", "application/x-checker", "application/x-cmbc-edit", "application/x-cmbedit", "application/x-director", "application/x-drm", "application/x-drm-v2", "application/x-ebestpay", "application/x-google-chrome-pdf", "application/x-google-chrome-print-preview-pdf", "application/x-hao123dps-plugin", "application/x-icbc-clientbinding", "application/x-icbc-plugin-chrome-npclientbinding", "application/x-icbc-plugin-chrome-npfullscreen", "application/x-icbc-plugin-chrome-npsubmit", "application/x-icbc-plugin-chrome-npxxin-input", "application/x-icbc-plugin-submit", "application/x-icbcnpxxin-plugin-input", "application/x-itst-activex", "application/x-java-vm", "application/x-java-vm-npruntime", "application/x-jit-sign-plugin-boc", "application/x-juziagent-plugin", "application/x-media-element-proxy-plugin", "application/x-mfe-ipt", "application/x-mpeg", "application/x-mpegurl", "application/x-mplayer2", "application/x-ms-wmp", "application/x-msoffice", "application/x-msoffice14", "application/x-nacl", "application/x-npassistcomm-plugin", "application/x-npclcache-plugin", "application/x-npcntvlive2-plugin", "application/x-npecplugin", "application/x-npfullscreen-plugin", "application/x-npnxgame-cn", "application/x-npnxminfo-cn", "application/x-nppcmgr", "application/x-pass-guard", "application/x-pnacl", "application/x-ppapi-widevine-cdm", "application/x-pptv-plugin", "application/x-qgassist", "application/x-quartzcomposer", "application/x-rn-downloaderchromebgext-plugin", "application/x-rn-downloaderhtml5videoshim-plugin", "application/x-rn-downloaderpepperflashvideoshim-plugin", "application/x-ruyisoassistplg", "application/x-screengrab-sina", "application/x-sdp", "application/x-sharepoint", "application/x-sharepoint-uc", "application/x-sharepoint-webkit", "application/x-shockwave-flash", "application/x-sign-messenger", "application/x-signassist", "application/x-silverlight", "application/x-silverlight-2", "application/x-tencent-qmail", "application/x-tencent-qmail-webkit", "application/x-tendyron-ccb-importcert-ctrl", "application/x-tendyron-ccb-usbkey-ctrl", "application/x-thunder-aplayer", "application/x-thunder-dapctrl", "application/x-vnd-csii-powerenter-bosh", "application/x-vnd-csii-powerenter-srcb", "application/x-vnd-csii-powerenter-ums", "application/x-vnd-csii-powersign-bosh", "application/x-vnd-csii-powersign-spdb", "application/x-vnd-intel-webapi-updater", "application/x-vnd-sa-isecurity-bosh", "application/x-vnd-sa-isecurity-pab", "application/x-vnd-sa-isecurity-spdbank", "application/x-vnd.google.oneclickctrl.9", "application/x-vnd.google.update3webcontrol.3", "application/x-watchdata-importcert-ctrl", "application/x-watchdata-usbkey-ctrl", "application/x-weibodesktopassist-sina", "application/x-wizbrother-wiz-ax", "application/x-yeepay-edit", "application/x-youkuagent", "application/x360mmplugin", "application/xfplay-plugin", "audio/3gpp", "audio/3gpp2", "audio/aac", "audio/aiff", "audio/amr", "audio/basic", "audio/mp3", "audio/mp4", "audio/mpeg", "audio/mpeg3", "audio/mpegurl", "audio/scpls", "audio/wav", "audio/x-aac", "audio/x-aiff", "audio/x-caf", "audio/x-gsm", "audio/x-m4a", "audio/x-m4b", "audio/x-m4p", "audio/x-m4r", "audio/x-mp3", "audio/x-mpeg", "audio/x-mpeg3", "audio/x-mpegurl", "audio/x-ms-wax", "audio/x-ms-wma", "audio/x-pn-realaudio-plugin", "audio/x-scpls", "audio/x-wav", "image/jps", "image/mpo", "image/pns", "text/pdf", "video/3gpp", "video/3gpp2", "video/flc", "video/mp4", "video/mpeg", "video/quicktime", "video/x-m4v", "video/x-mpeg", "video/x-ms-asf", "video/x-ms-asf-plugin", "video/x-ms-wm", "video/x-ms-wmv", "video/x-ms-wvx", "x-application/baofengwebplayer-plugin"],
    'NAVIGATOR_language': ['af', "af-za", 'ar', "ar-ae", "ar-bh", "ar-dz", "ar-eg", "ar-iq", "ar-jo", "ar-kw", "ar-lb", "ar-ly", "ar-ma", "ar-om", "ar-qa", "ar-sa", "ar-sy", "ar-tn", "ar-ye", 'az', "az-az-cyrl", "az-az-latn", 'be', "be-by", 'bg', "bg-bg", "bs-ba", 'ca', "ca-es", 'cs', "cs-cz", 'cy', "cy-gb", 'da', "da-dk", 'de', "de-at", "de-ch", "de-de", "de-li", "de-lu", 'dv', "dv-mv", 'el', "el-gr", 'en', "en-au", "en-bz", "en-ca", "en-cb", "en-gb", "en-ie", "en-jm", "en-nz", "en-ph", "en-tt", "en-us", "en-za", "en-zw", 'eo', 'es', "es-ar", "es-bo", "es-cl", "es-co", "es-cr", "es-do", "es-ec", "es-es", "es-gt", "es-hn", "es-mx", "es-ni", "es-pa", "es-pe", "es-pr", "es-py", "es-sv", "es-uy", "es-ve", 'et', "et-ee", 'eu', "eu-es", 'fa', "fa-ir", 'fi', "fi-fi", 'fo', "fo-fo", 'fr', "fr-be", "fr-ca", "fr-ch", "fr-fr", "fr-lu", "fr-mc", 'gl', "gl-es", 'gu', "gu-in", 'he', "he-il", 'hi', "hi-in", 'hr', "hr-ba", "hr-hr", 'hu', "hu-hu", 'hy', "hy-am", 'id', "id-id", 'is', "is-is", 'it', "it-ch", "it-it", 'ja', "ja-jp", 'ka', "ka-ge", 'kk', "kk-kz", 'kn', "kn-in", 'ko', "ko-kr", "kok", "kok-in", 'ky', "ky-kg", 'lt', "lt-lt", 'lv', "lv-lv", 'mi', "mi-nz", 'mk', "mk-mk", 'mn', "mn-mn", 'mr', "mr-in", 'ms', "ms-bn", "ms-my", 'mt', "mt-mt", 'nb', "nb-no", 'nl', "nl-be", "nl-nl", "nn-no", 'ns', "ns-za", 'pa', "pa-in", 'pl', "pl-pl", 'pt', "pt-br", "pt-pt", 'qu', "qu-bo", "qu-ec", "qu-pe", 'ro', "ro-ro", 'ru', "ru-ru", 'sa', "sa-in", 'se', "se-fi", "se-no", "se-se", 'sk', "sk-sk", 'sl', "sl-si", 'sq', "sq-al", "sr-ba", "sr-sp", 'sv', "sv-fi", "sv-se", 'sw', "sw-ke", "syr", "syr-sy", 'ta', "ta-in", 'te', "te-in", 'th', "th-th", 'tl', "tl-ph", 'tn', "tn-za", 'tr', "tr-tr", 'ts', 'tt', "tt-ru", 'uk', "uk-ua", 'ur', "ur-pk", 'uz', "uz-uz", 'vi', "vi-vn", 'xh', "xh-za", 'zh', "zh-cn", "zh-hk", "zh-mo", "zh-sg", "zh-tw", 'zu', "zu-za"],
    'BASIC_os': ["android", "ios", "linux", "mac", "other", "windows", "windows phone"],
    'BASIC_DeviceType': ["desktop", "mobiledevice"],
    'FONTS': ["Agency FB", "Aharoni", "Algerian", "Andalus", "Angsana New", "AngsanaUPC", "Aparajita", "Arabic Typesetting", "Arial", "Arial Black", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Baskerville Old Face", "Batang", "BatangChe", "Bauhaus 93", "Bell MT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Poster Compressed", "Book Antiqua", "Bookman Old Style", "Bookshelf Symbol 7", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Calibri", "Calibri Light", "Californian FB", "Calisto MT", "Cambria", "Cambria Math", "Candara", "Castellar", "Centaur", "Century", "Century Gothic", "Century Schoolbook", "Chiller", "Colonna MT", "Comic Sans MS", "Consolas", "Constantia", "Cooper Black", "Copperplate Gothic Bold", "Copperplate Gothic Light", "Corbel", "Cordia New", "CordiaUPC", "Courier New", "Curlz MT", "DFKai-SB", "DaunPenh", "David", "DilleniaUPC", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "Engravers MT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "Estrangelo Edessa", "EucrosiaUPC", "Euphemia", "Felix Titling", "Footlight MT Light", "Forte", "FrankRuehl", "Franklin Gothic Book", "Franklin Gothic Demi", "Franklin Gothic Demi Cond", "Franklin Gothic Heavy", "Franklin Gothic Medium", "Franklin Gothic Medium Cond", "FreesiaUPC", "Freestyle Script", "French Script MT", "Gabriola", "Garamond", "Gautami", "Georgia", "Gigi", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "Goudy Old Style", "Goudy Stout", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "High Tower Text", "Impact", "Imprint MT Shadow", "Informal Roman", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jokerman", "Juice ITC", "Kalinga", "Kartika", "Khmer UI", "KodchiangUPC", "Kokila", "Kristen ITC", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Levenim MT", "LilyUPC", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "MS Gothic", "MS Mincho", "MS Outlook", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MV Boli", "Magneto", "Maiandra GD", "Malgun Gothic", "Mangal", "Marlett", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft Yi Baiti", "MingLiU", "MingLiU-ExtB", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "Miriam", "Miriam Fixed", "Mistral", "Modern No. 20", "Mongolian Baiti", "Monotype Corsiva", "MoolBoran", "Narkisim", "Niagara Engraved", "Niagara Solid", "Nyala", "OCR A Extended", "Old English Text MT", "Onyx", "PMingLiU", "PMingLiU-ExtB", "Palatino Linotype", "Papyrus", "Parchment", "Perpetua", "Perpetua Titling MT", "Plantagenet Cherokee", "Playbill", "Poor Richard", "Pristina", "Raavi", "Ravie", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Sakkal Majalla", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Shonar Bangla", "Showcard Gothic", "Shruti", "SimSun-ExtB", "Simplified Arabic", "Simplified Arabic Fixed", "Snap ITC", "Stencil", "Sylfaen", "Symbol", "Tahoma", "Tempus Sans ITC", "Times New Roman", "Traditional Arabic", "Trebuchet MS", "Tunga", "Tw Cen MT", "Utsaah", "Vani", "Verdana", "Vijaya", "Viner Hand ITC", "Vivaldi", "Vladimir Script", "Vrinda", "Webdings", "Wide Latin", "Wingdings", "Wingdings 2", "Wingdings 3", '仿宋', "\u534E\u6587\u4E2D\u5B8B", "\u534E\u6587\u4EFF\u5B8B", "\u534E\u6587\u5B8B\u4F53", "\u534E\u6587\u5F69\u4E91", "\u534E\u6587\u65B0\u9B4F", "\u534E\u6587\u6977\u4F53", "\u534E\u6587\u7425\u73C0", "\u534E\u6587\u7EC6\u9ED1", "\u534E\u6587\u884C\u6977", "\u534E\u6587\u96B6\u4E66", '宋体', '幼圆', "\u5FAE\u8F6F\u96C5\u9ED1", "\u65B0\u5B8B\u4F53", "\u65B9\u6B63\u59DA\u4F53", "\u65B9\u6B63\u8212\u4F53", '楷体', '隶书', '黑体'],
    'WEBGL_contextName_webgl': "webgl",
    'WEBGL_contextName_experimental': "experimental-webgl",
    'COLLECTOR_LOADER': ["desktop", 'h5', "hybrid", "nativeapp"],
    'UNKOWN': "unkown",
    'UNKOWN_IX': 0xff,
    'UNKOWN_IX2': 0xf,
    'CPUNUM_LIST': [0x1, 0x2, 0x4, 0x8, 0x10, 0x20, 0x40, 0x80],
    'BOOLEAN_ENUM': [!![], ![]]
};

function _0x21c661() {
    this["pos"] = 0x0;
    this["bytes"] = new Array();

    this["checkSum"] = function () {
        var _0x571938 = 0x0;

        for (var _0x1ecd7f = 0x0; _0x1ecd7f < this["bytes"]["length"]; _0x1ecd7f++) {
            _0x571938 += this["bytes"][_0x1ecd7f] >= 0x0 ? this["bytes"][_0x1ecd7f] : this["bytes"][_0x1ecd7f] + 0x100;
        }

        return _0x571938;
    };

    this["get"] = function (_0xee6779) {
        return this["bytes"][_0xee6779];
    };

    this["getShort"] = function (_0x1347d0) {
        return this["bytes"][_0x1347d0] << 0x8 | this["bytes"][_0x1347d0 + 0x1];
    };

    this["position"] = function () {
        return this["pos"];
    };

    this["getBytes"] = function () {
        return this["bytes"];
    };

    this["put"] = function (_0x213adb) {
        this["bytes"][this["pos"]] = _0x213adb;
        this["pos"]++;
    };

    this["putAtIndex"] = function (_0x1c783c, _0x3e7765) {
        this["bytes"][_0x1c783c] = _0x3e7765;
    };

    this["putBytes"] = function (_0x31a9b4) {
        for (var _0x469ed2 = 0x0; _0x469ed2 < _0x31a9b4["length"]; _0x469ed2++) {
            this["put"](_0x31a9b4[_0x469ed2]);
        }
    };

    this["putInt"] = function (_0x4994fe) {
        this["toBytes"](_0x4994fe, 0x4);
    };

    this["putIntAtIndex"] = function (_0x135f73, _0x8720ee) {
        this["toBytesAtIndex"](_0x8720ee, 0x4, _0x135f73);
    };

    this["putShort"] = function (_0x596a12) {
        this["toBytes"](_0x596a12, 0x2);
    };

    this["putShortAtIndex"] = function (_0x3c2330, _0x51d117) {
        this["toBytesAtIndex"](_0x51d117, 0x2, _0x3c2330);
    };

    this["putLong"] = function (_0x37fbaf) {
        this["toBytes"](_0x37fbaf, 0x8);
    };

    this["putLongAtIndex"] = function (_0x7b5831, _0x155930) {
        this["toBytesAtIndex"](_0x155930, 0x8, _0x7b5831);
    };

    this["putFloat"] = function (_0x5dd358) {
        this["putInt"](this["toFloat32"](_0x5dd358));
    };

    this["toBytesAtIndex"] = function (_0xed9826, _0x1dbc17, _0x1a7762) {
        var _0x323e03 = _0x1dbc17;

        do {
            this["bytes"][_0x1a7762 - 0x1 + _0x323e03] = _0xed9826 & 0xff;
            _0x323e03--;
            _0xed9826 = _0xed9826 >> 0x8;
        } while (_0x323e03);
    };

    this["toFloat32"] = function (_0x3bf3ba) {
        var _0x2fe063 = 0x0;

        switch (_0x3bf3ba) {
            case Number["POSITIVE_INFINITY"]:
                _0x2fe063 = 0x7f800000;
                break;

            case Number["NEGATIVE_INFINITY"]:
                _0x2fe063 = 0xff800000;
                break;

            case 0x0:
                _0x2fe063 = 0x0;
                break;

            default:
                if (Number["isNaN"](_0x3bf3ba)) {
                    _0x2fe063 = 0x7fc00000;
                    break;
                }

                if (_0x3bf3ba <= -0x0) {
                    _0x2fe063 = 0x80000000;
                    _0x3bf3ba = -_0x3bf3ba;
                }

                var _0x48624e = Math["floor"](Math["log"](_0x3bf3ba) / Math["log"](0x2));

                var _0x46099f = _0x3bf3ba / Math["pow"](0x2, _0x48624e) * 0x800000 | 0x0;

                _0x48624e += 0x7f;

                if (_0x48624e >= 0xff) {
                    _0x48624e = 0xff;
                    _0x46099f = 0x0;
                } else if (_0x48624e < 0x0) _0x48624e = 0x0;

                _0x2fe063 = _0x2fe063 | _0x48624e << 0x17;
                _0x2fe063 = _0x2fe063 | _0x46099f & ~(-0x1 << 0x17);
                break;
        }

        return _0x2fe063;
    };

    this["toBytes"] = function (_0x485c63, _0x8afebd) {
        var _0x24237b = _0x8afebd;

        do {
            this["bytes"][this["pos"] - 0x1 + _0x24237b] = _0x485c63 & 0xff;
            _0x24237b--;
            _0x485c63 = _0x485c63 >> 0x8;
        } while (_0x24237b);

        this["pos"] += _0x8afebd;
    };
}

function _0x4d6308() {
    this["version"] = 0x7;
    this["DYNAMIC_VERSION"] = 0x3;
    this["performanceKeyList"] = ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"];
    this["stringify"] = typeof JSON === "undefined" || typeof JSON["stringify"] === "undefined" ? function (_0x2258f8) {
        var _0x1c2ba1 = typeof _0x2258f8;

        if (_0x1c2ba1 != "object" || _0x2258f8 === null) {
            if (_0x1c2ba1 == "string") _0x2258f8 = '\x22' + _0x2258f8 + '\x22';
            return String(_0x2258f8);
        } else {
            var _0x2b79ac,
                _0x587fa5,
                _0x8bca71 = [],
                _0x43678f = _0x2258f8 && _0x2258f8["constructor"] == Array;

            for (_0x2b79ac in _0x2258f8) {
                _0x587fa5 = _0x2258f8[_0x2b79ac];
                _0x1c2ba1 = typeof _0x587fa5;
                if (_0x587fa5 === undefined || _0x587fa5 === '--') continue;
                if (_0x1c2ba1 == "string") _0x587fa5 = '\x22' + _0x587fa5 + '\x22'; else if (_0x1c2ba1 == "object" && _0x587fa5 !== null) _0x587fa5 = this["stringify"](_0x587fa5);

                _0x8bca71["push"]((_0x43678f ? '' : '\x22' + _0x2b79ac + '\x22:') + String(_0x587fa5));
            }

            return (_0x43678f ? '[' : '{') + String(_0x8bca71) + (_0x43678f ? ']' : '}');
        }
    } : JSON["stringify"];

    this["binarySearch"] = function (_0x2c94d9, _0x1f1290, _0x572020, _0xb558fd) {
        var _0xd5f5c7 = _0x1f1290;

        var _0x4fa221 = _0x572020 - 0x1;

        while (_0xd5f5c7 <= _0x4fa221) {
            var _0x3ca40d = _0xd5f5c7 + _0x4fa221 >>> 0x1;

            var _0x554843 = _0x2c94d9[_0x3ca40d] == _0xb558fd ? 0x0 : _0x2c94d9[_0x3ca40d] > _0xb558fd ? 0x1 : -0x1;

            if (_0x554843 < 0x0) _0xd5f5c7 = _0x3ca40d + 0x1; else if (_0x554843 > 0x0) _0x4fa221 = _0x3ca40d - 0x1; else return _0x3ca40d;
        }

        return -(_0xd5f5c7 + 0x1);
    };

    this["toBytes"] = function (_0x207421) {
        if (undefined == _0x207421) return [];
        var _0x1e7dc9 = [];
        _0x207421 = _0x207421 + '';

        for (var _0x1ca691 = 0x0; _0x1ca691 < _0x207421["length"]; _0x1ca691++) {
            var _0x93df24 = _0x207421["charCodeAt"](_0x1ca691);

            if (_0x93df24 < 0x80) _0x1e7dc9["push"](_0x93df24); else if (_0x93df24 < 0x800) {
                _0x1e7dc9["push"](0xc0 | _0x93df24 >> 0x6, 0x80 | _0x93df24 & 0x3f);
            } else if (_0x93df24 < 0xd800 || _0x93df24 >= 0xe000) {
                _0x1e7dc9["push"](0xe0 | _0x93df24 >> 0xc, 0x80 | _0x93df24 >> 0x6 & 0x3f, 0x80 | _0x93df24 & 0x3f);
            } else {
                _0x1e7dc9["push"](0xef, 0xbf, 0xbd);
            }
        }

        return _0x1e7dc9;
    };

    this["x64Xor"] = function (_0x56be96, _0xd4801b) {
        return [_0x56be96[0x0] ^ _0xd4801b[0x0], _0x56be96[0x1] ^ _0xd4801b[0x1]];
    };

    this["ipV4StringToInteger"] = function (_0x46b916) {
        if (undefined == _0x46b916) return 0x0;

        var _0x5cd379 = _0x46b916["split"]('.');

        var _0x4bd56f = 0x0;

        for (var _0x5d6375 = 0x0; _0x5d6375 < 0x4; _0x5d6375++) {
            var _0x1bfa63 = Number(_0x5cd379[_0x5d6375]);

            _0x4bd56f = (_0x4bd56f << 0x8) + _0x1bfa63;
        }

        return _0x4bd56f;
    };

    this["serializeBooleanSegment"] = function (_0x4145a6, _0x16a9ef) {
        var _0x2c3a59 = _0x4145a6["basic"];
        var _0x13130b = _0x4145a6["header"];
        var _0x214339 = _0x4145a6["navigator"];
        var _0x3c120d = _0x4145a6["webGL"];
        var _0x138ba8 = _0x4145a6["webRtc"];
        var _0x5c179f = _0x4145a6["battery"];
        var _0x3aadcd = _0x4145a6["browserType"];
        var _0x13bed0 = _0x4145a6["flash"];
        var _0x29991c = _0x4145a6["canvasFp"];
        var _0x40eee3 = _0x4145a6["other"];

        _0x16a9ef["put"](this["serializeInByte"]([_0x2c3a59 ? _0x2c3a59["localStorage"] : ![], _0x2c3a59 ? _0x2c3a59["sessionStorage"] : ![], _0x13130b ? _0x13130b["Connection"] : ![], _0x214339 ? _0x214339["cookieEnabled"] : ![], _0x3c120d ? _0x3c120d["isSupported"] : ![], _0x3c120d ? _0x3c120d["isEnabled"] : ![], _0x138ba8 ? _0x138ba8["shouldBeSupported"] : ![], _0x138ba8 ? _0x138ba8["deviceEnum"] : ![]]));

        _0x16a9ef["put"](this["serializeInByte"]([_0x138ba8 ? _0x138ba8["AudioContext"] : ![], _0x138ba8 ? _0x138ba8["hasMic"] : ![], _0x138ba8 ? _0x138ba8["hasWebcam"] : ![], _0x138ba8 ? _0x138ba8["hasSpeaker"] : ![], _0x138ba8 ? _0x138ba8["IceSupport"] : ![], _0x5c179f ? _0x5c179f["charging"] : ![], _0x3aadcd ? _0x3aadcd["isWeixin"] : ![], _0x3aadcd ? _0x3aadcd["isQQ"] : ![]]));

        _0x16a9ef["put"](this["serializeInByte"]([_0x3aadcd ? _0x3aadcd["isOpera"] : ![], _0x3aadcd ? _0x3aadcd["isFirefox"] : ![], _0x3aadcd ? _0x3aadcd["isSafari"] : ![], _0x3aadcd ? _0x3aadcd["isIE"] : ![], _0x3aadcd ? _0x3aadcd["isEdge"] : ![], _0x3aadcd ? _0x3aadcd["isChrome"] : ![], _0x3aadcd ? _0x3aadcd["isBlink"] : ![], _0x3aadcd ? _0x3aadcd["isWebKit"] : ![]]));

        var _0x332f9e = this["serializeInByte"]([_0x40eee3 ? _0x40eee3["adblock"] : ![], _0x40eee3 ? _0x40eee3["hasLiedLanguages"] : ![], _0x40eee3 ? _0x40eee3["hasLiedResolution"] : ![], _0x40eee3 ? _0x40eee3["hasLiedOs"] : ![]]);

        _0x332f9e = this["serializeEnumValue"](this["getValue"](_0x3c120d, "fragmentShaderFloatIntPrecision", _0x5b05ca["WEBGL_fragmentShaderFloatIntPrecision"][0x4]), _0x332f9e, 0x7 << 0x1, 0x1, _0x5b05ca["WEBGL_fragmentShaderFloatIntPrecision"], 0x4);

        _0x16a9ef["put"](_0x332f9e);

        _0x16a9ef["put"](this["serializeInByte"]([_0x13bed0 ? _0x13bed0["hasPrinting"] : ![], _0x13bed0 ? _0x13bed0["hasScreenBroadcast"] : ![], _0x13bed0 ? _0x13bed0["hasScreenPlayback"] : ![], _0x13bed0 ? _0x13bed0["hasStreamingVideo"] : ![], _0x13bed0 ? _0x13bed0["hasStreamingAudio"] : ![], _0x13bed0 ? _0x13bed0["hasVideoEncoder"] : ![], _0x13bed0 ? _0x13bed0["isDebugger"] : ![], _0x13bed0 ? _0x13bed0["hasEmbeddedVideo"] : ![]]));

        _0x16a9ef["put"](this["serializeInByte"]([_0x13bed0 ? _0x13bed0["localFileReadDisable"] : ![], _0x13bed0 ? _0x13bed0["hasIME"] : ![], _0x13bed0 ? _0x13bed0["hasAudio"] : ![], _0x13bed0 ? _0x13bed0["hasTLS"] : ![], _0x13bed0 ? _0x13bed0["avHardwareDisable"] : ![], _0x13bed0 ? _0x13bed0["hasAccessibility"] : ![], _0x13bed0 ? _0x13bed0["hasAudioEncoder"] : ![], _0x13bed0 ? _0x13bed0["hasMP3"] : ![]]));

        _0x332f9e = this["serializeInByte"]([_0x13bed0 ? _0x13bed0["supports32BitProcesses"] : ![], _0x13bed0 ? _0x13bed0["supports64BitProcesses"] : ![], _0x13bed0 ? _0x13bed0["lsoStorageTest"] : ![], _0x29991c ? _0x29991c["canvasWinding"] : ![]]);

        var _0x34bf23 = undefined == _0x2c3a59 ? _0x5b05ca["BASIC_DeviceType"][0x0] : _0x2c3a59["DeviceType"];

        _0x332f9e = this["serializeEnumValue"](undefined == _0x34bf23 ? _0x5b05ca["BASIC_DeviceType"][0x0] : _0x34bf23, _0x332f9e, 0x1 << 0x3, 0x3, _0x5b05ca["BASIC_DeviceType"], 0x0);
        _0x34bf23 = undefined == _0x2c3a59 ? _0x5b05ca["BASIC_os"][0x4] : _0x2c3a59['os'];
        _0x332f9e = this["serializeEnumValue"](undefined == _0x34bf23 ? _0x5b05ca["BASIC_os"][0x4] : _0x34bf23, _0x332f9e, 0x7, 0x0, _0x5b05ca["BASIC_os"], 0x4);

        _0x16a9ef["put"](_0x332f9e);
    };

    this["serializeInByte"] = function (_0x41a017) {
        var _0x1caa27 = 0x0;

        for (var _0x49f404 = 0x0; _0x49f404 < _0x41a017["length"]; _0x49f404++) {
            if (_0x41a017[_0x49f404]) _0x1caa27 |= 0x1 << 0x7 - _0x49f404;
        }

        return _0x1caa27;
    };

    this["serializeEnumValue"] = function (_0x4a8135, _0x417c33, _0x496b3f, _0x5775d4, _0x915efe, _0x12fcb7) {
        var _0xba6990 = _0x12fcb7;

        if (undefined != _0x915efe) {
            _0xba6990 = this["binarySearch"](_0x915efe, 0x0, _0x915efe["length"], _0x4a8135["toLowerCase"]());
            if (_0xba6990 < 0x0) _0xba6990 = _0x12fcb7;
        }

        return _0x417c33 & ~_0x496b3f | _0xba6990 << _0x5775d4 & _0x496b3f;
    };

    this["serializeTouchPlayerCpuArch"] = function (_0x3d5340, _0x1d4eca) {
        var _0x24df04 = 0x0;
        _0x24df04 = this["serializeEnumValue"](this["getValue"](_0x3d5340, "touchscreenType", _0x5b05ca["FLASH_touchScreenType"][0x1]), _0x24df04, 0x3 << 0x6, 0x6, _0x5b05ca["FLASH_touchScreenType"], 0x1);
        _0x24df04 = this["serializeEnumValue"](this["getValue"](_0x3d5340, "playerType", _0x5b05ca["FLASH_playerType"][0x3]), _0x24df04, 0x7 << 0x3, 0x3, _0x5b05ca["FLASH_playerType"], 0x3);
        _0x24df04 = this["serializeEnumValue"](this["getValue"](_0x3d5340, "cpuArchitecture", _0x5b05ca["FLASH_cpuArchitecture"][0x1]), _0x24df04, 0x7, 0x0, _0x5b05ca["FLASH_cpuArchitecture"], 0x1);

        _0x1d4eca["put"](_0x24df04);
    };

    this["getValue"] = function (_0x303538, _0x900045, _0x1cf989, _0x51d587) {
        var _0x1ccab3 = undefined == _0x303538 ? _0x1cf989 : undefined == _0x303538[_0x900045] ? _0x1cf989 : _0x303538[_0x900045];

        if (undefined != _0x51d587) {
            if (typeof _0x1ccab3 == "string" && _0x1ccab3["constructor"] == String) _0x1ccab3 = _0x1ccab3["toLowerCase"]();

            var _0x2cbcc0 = this["binarySearch"](_0x51d587, 0x0, _0x51d587["length"], _0x1ccab3);

            if (_0x2cbcc0 < 0x0) return _0x1cf989;
        }

        return _0x1ccab3;
    };

    this["serializeHistoryLen"] = function (_0x13130b, _0x4b7ccf) {
        var _0x11590d = this["getValue"](_0x13130b, "historyLength", 0x0);

        if (_0x11590d > 0xff) _0x4b7ccf["put"](0xff); else _0x4b7ccf["put"](_0x11590d);
    };

    this["serializeNumCpuHardwareFragment"] = function (_0x309648, _0x11786e, _0x33f04a) {
        var _0x295aa5 = 0x0;
        _0x295aa5 = this["serializeNumCpuOrHardwareConcurrency"](this["getValue"](_0x309648, "numCPU", 0x1), _0x295aa5, 0x7 << 0x5, 0x5);
        _0x295aa5 = this["serializeNumCpuOrHardwareConcurrency"](this["getValue"](_0x309648, "hardwareConcurrency", 0x1), _0x295aa5, 0x7 << 0x2, 0x2);

        _0x33f04a["put"](_0x295aa5);
    };

    this["serializeNumCpuOrHardwareConcurrency"] = function (_0x150993, _0xbf0b58, _0x24d923, _0x2d3d8b) {
        var _0x1f6a32;

        switch (_0x150993) {
            case 0x2:
                _0x1f6a32 = 0x1;
                break;

            case 0x4:
                _0x1f6a32 = 0x2;
                break;

            case 0x8:
                _0x1f6a32 = 0x3;
                break;

            case 0x10:
                _0x1f6a32 = 0x4;
                break;

            case 0x20:
                _0x1f6a32 = 0x5;
                break;

            case 0x40:
                _0x1f6a32 = 0x6;
                break;

            case 0x80:
                _0x1f6a32 = 0x7;
                break;

            default:
                _0x1f6a32 = 0x0;
                break;
        }

        return _0xbf0b58 & ~_0x24d923 | _0x1f6a32 << _0x2d3d8b & _0x24d923;
    };

    this["serializeEnumValOneByte"] = function (_0x1e7278, _0x5df49e, _0xd63458) {
        var _0x2b7187 = this["binarySearch"](_0x5df49e, 0x0, _0x5df49e["length"], _0x1e7278["toLowerCase"]());

        if (_0x2b7187 < 0x0) _0xd63458["put"](_0x5b05ca["UNKOWN_IX"]); else _0xd63458["put"](_0x2b7187);
    };

    this["serializeTrackColorLevel"] = function (_0xc13569, _0x2c55d7, _0x18a777, _0x3e0da4) {
        var _0x278d04 = 0x0;
        _0x278d04 = this["serializeEnumValue"](this["getValue"](_0xc13569, "doNotTrack", _0x5b05ca["NAVIGATOR_doNotTrack"][0x2]), _0x278d04, 0x3 << 0x6, 0x6, _0x5b05ca["NAVIGATOR_doNotTrack"], 0x2);
        _0x278d04 = this["serializeEnumValue"](this["getValue"](_0x2c55d7, "screenColor", _0x5b05ca["FLASH_screenColor"][0x3]), _0x278d04, 0x3 << 0x4, 0x4, _0x5b05ca["FLASH_screenColor"], 0x3);
        _0x278d04 = this["serializeBatteryLevel"](this["getValue"](_0x18a777, "level"), _0x278d04, 0xf, 0x0);

        _0x3e0da4["put"](_0x278d04);
    };

    this["serializeBatteryLevel"] = function (_0x116a5d, _0x3d7d2d, _0x500a48, _0x247882) {
        if (_0x116a5d > 0x1) {
            _0x9efdd6("the value must less than or equal 1.");

            return _0x3d7d2d;
        }

        return _0x3d7d2d & ~_0x500a48 | _0x116a5d * 0xa << _0x247882 & _0x500a48;
    };

    this["serializeBatteryDischarg"] = function (_0x214e33, _0x168832) {
        var _0x4f2baf = undefined == _0x214e33 ? undefined : _0x214e33["discharging"];

        var _0xf3d01c;

        if (null == _0x4f2baf) _0xf3d01c = 0x0; else if (_0x4f2baf == "Infinity") _0xf3d01c = -0x8000; else _0xf3d01c = _0x4f2baf;

        _0x168832["putShort"](_0xf3d01c);
    };

    this["serializeCanvasData"] = function (_0x544044, _0x46fcdd) {
        if (undefined == _0x544044) {
            _0x46fcdd["put"](0x0);

            return;
        }

        _0x46fcdd["put"](_0x544044["length"] % 0x2 != 0x0 ? _0x544044["length"] / 0x2 + 0x1 : _0x544044["length"] / 0x2);

        for (var _0x2c9f17 = 0x0; _0x2c9f17 < _0x544044["length"]; _0x2c9f17++) {
            if (_0x2c9f17 % 0x2 == 0x1) {
                _0x46fcdd["put"](parseInt(_0x544044["substring"](_0x2c9f17 - 0x1, _0x2c9f17 + 0x1), 0x10));
            }
        }

        if (_0x544044["length"] % 0x2 != 0x0) _0x46fcdd["put"](parseInt(_0x544044["substring"](_0x544044["length"] - 0x1), 0x10));
    };

    this["serializeGeoAndISP"] = function (_0x1fdb18, _0x2652f2) {
        var _0x417798 = this["getValue"](_0x1fdb18, "ClientTimezoneOffset", -0x1);

        if (-0x1 == _0x417798) _0x2652f2["put"](-0x1); else _0x2652f2["put"](_0x417798 / 0xf);

        _0x2652f2["putFloat"](this["getValue"](_0x1fdb18, "latitude", 0x0));

        _0x2652f2["putFloat"](this["getValue"](_0x1fdb18, "longitude", 0x0));
    };

    this["serializeScreenData"] = function (_0x1ee29e, _0x4a6744) {
        this["serializeWidthAndHeight"](_0x4a6744, this["getValue"](_0x1ee29e, "width", 0x0), this["getValue"](_0x1ee29e, "height", 0x0));
        this["serializeWidthAndHeight"](_0x4a6744, this["getValue"](_0x1ee29e, "availWidth", 0x0), this["getValue"](_0x1ee29e, "availHeight", 0x0));
        this["serializeWidthAndHeight"](_0x4a6744, this["getValue"](_0x1ee29e, "realWidth", 0x0), this["getValue"](_0x1ee29e, "realHeight", 0x0));

        _0x4a6744["put"](this["getValue"](_0x1ee29e, "colorDepth", 0x0));

        _0x4a6744["put"](this["getValue"](_0x1ee29e, "pixelDepth", 0x0));

        _0x4a6744["put"](this["getValue"](_0x1ee29e, "devicePixelRatio", 0x0));
    };

    this["serializeWidthAndHeight"] = function (_0x24f254, _0x300c8c, _0x31d02f) {
        _0x24f254["putShort"](_0x300c8c | (_0x31d02f & 0xf) << 0xc);

        _0x24f254["put"](_0x31d02f >>> 0x4);
    };

    this["serializeRange"] = function (_0x4c5b33, _0x17eb63, _0x2ab26d) {
        if (undefined == _0x4c5b33) {
            if (_0x2ab26d) _0x17eb63["putShort"](0x0); else _0x17eb63["put"](0x0);

            _0x17eb63["putShort"](0x0);

            return;
        }

        var _0x468a4a = _0x4c5b33["substring"](0x1, _0x4c5b33["length"] - 0x1)["split"](',');

        var _0x20782c = parseInt(_0x468a4a[0x0]["trim"]());

        var _0x1ad31d = parseInt(_0x468a4a[0x1]["trim"]());

        if (_0x2ab26d) _0x17eb63["putShort"](_0x20782c); else _0x17eb63["put"](_0x20782c);

        _0x17eb63["putShort"](_0x1ad31d);
    };

    this["serializeFlashFixedSegment"] = function (_0x2d1621, _0x44ec15) {
        _0x44ec15["put"](this["getValue"](_0x2d1621, "pixelAspectRatio", 0x0));

        _0x44ec15["put"](this["getValue"](_0x2d1621, "screenDPI", 0x0));

        _0x44ec15["putShort"](this["getValue"](_0x2d1621, "screenResolutionX", 0x0));

        _0x44ec15["putShort"](this["getValue"](_0x2d1621, "screenResolutionY", 0x0));

        this["serializeEnumValOneByte"](this["getValue"](_0x2d1621, "language", "zh-cn"), _0x5b05ca["NAVIGATOR_language"], _0x44ec15);
    };

    this["serializeUserAgent"] = function (_0x20f1ee, _0x3da90a) {
        var _0x4506b8 = this["getValue"](_0x20f1ee, "useragent", undefined);

        if (undefined == _0x4506b8) _0x3da90a["putShort"](0x0); else {
            var _0x2bbbe5 = this["toBytes"](_0x4506b8);

            _0x3da90a["putShort"](_0x2bbbe5["length"]);

            _0x3da90a["putBytes"](_0x2bbbe5);
        }
    };

    this["serializePlugins"] = function (_0x2f8ef9, _0x41cc20) {
        if (undefined == _0x2f8ef9 || _0x2f8ef9["length"] == 0x0) {
            _0x41cc20["put"](0x0);

            _0x41cc20["put"](0x0);

            return;
        }

        var _0x365845 = _0x41cc20["position"]();

        _0x41cc20["put"](0x0);

        _0x41cc20["put"](0x0);

        var _0x10b675;

        var _0x48947e = 0x0;
        var _0x1f30d2 = 0x0;

        var _0x1201c0 = new _0x21c661();

        var _0x5d46da;

        var _0x3d16fe = new _0x21c661();

        var _0x48d798;

        var _0x1a2dae;

        for (var _0x4b29c4 = 0x0; _0x4b29c4 < _0x2f8ef9["length"]; _0x4b29c4++) {
            _0x5d46da = _0x2f8ef9[_0x4b29c4];
            _0x48d798 = _0x5d46da["pluginName"];
            _0x1a2dae = _0x5d46da["Version"];
            _0x10b675 = this["binarySearch"](_0x5b05ca["NAVIGATOR_plugins"], 0x0, _0x5b05ca["NAVIGATOR_plugins"]["length"], _0x48d798);

            var _0x3c997e = this["toBytes"](_0x1a2dae);

            if (_0x10b675 < 0x0) {
                _0x1f30d2++;

                var _0x4a0ff9 = this["toBytes"](_0x48d798);

                _0x3d16fe["put"](_0x4a0ff9["length"]);

                _0x3d16fe["putBytes"](_0x4a0ff9);

                _0x3d16fe["put"](_0x3c997e["length"]);

                _0x3d16fe["putBytes"](_0x3c997e);
            } else {
                _0x1201c0["put"](_0x10b675);

                _0x1201c0["put"](_0x3c997e["length"]);

                _0x1201c0["putBytes"](_0x3c997e);

                _0x48947e++;
            }
        }

        _0x41cc20["putAtIndex"](_0x365845, _0x48947e);

        _0x41cc20["putAtIndex"](_0x365845 + 0x1, _0x1f30d2);

        _0x41cc20["putBytes"](_0x1201c0["getBytes"]());

        _0x41cc20["putBytes"](_0x3d16fe["getBytes"]());
    };

    this["serializeMimeTypeOrFonts"] = function (_0x7ddf58, _0x43e229, _0x5a4bf8, _0x401777) {
        if (undefined == _0x7ddf58 || _0x7ddf58["length"] == 0x0) {
            if (!_0x401777) {
                _0x43e229["put"](0x0);

                _0x43e229["put"](0x0);
            } else {
                _0x43e229["putShort"](0x0);

                _0x43e229["putShort"](0x0);
            }

            return;
        }

        _0x7ddf58 = _0xd05c32(_0x7ddf58);

        var _0x5e9b68 = _0x43e229["position"]();

        if (!_0x401777) {
            _0x43e229["put"](0x0);

            _0x43e229["put"](0x0);
        } else {
            _0x43e229["putShort"](0x0);

            _0x43e229["putShort"](0x0);
        }

        var _0x16e98c;

        var _0x53b9f = 0x0;
        var _0x4fad2a = 0x0;

        var _0x5bac12 = new _0x21c661();

        var _0x2167ac = new _0x21c661();

        var _0xaf447d;

        for (var _0x221626 = 0x0; _0x221626 < _0x7ddf58["length"]; _0x221626++) {
            _0xaf447d = _0x7ddf58[_0x221626];
            _0x16e98c = this["binarySearch"](_0x5a4bf8, 0x0, _0x5a4bf8["length"], _0xaf447d);

            if (_0x16e98c < 0x0) {
                _0x4fad2a++;

                var _0x1c6faf = this["toBytes"](_0xaf447d);

                _0x2167ac["put"](_0x1c6faf["length"]);

                _0x2167ac["putBytes"](_0x1c6faf);
            } else {
                _0x5bac12["put"](_0x16e98c);

                _0x53b9f++;
            }
        }

        if (!_0x401777) {
            _0x43e229["putAtIndex"](_0x5e9b68, _0x53b9f);

            _0x43e229["putAtIndex"](_0x5e9b68 + 0x1, _0x4fad2a);

            _0x43e229["putBytes"](_0x5bac12["getBytes"]());
        } else {
            _0x43e229["putShortAtIndex"](_0x5e9b68, _0x53b9f);

            _0x43e229["putShortAtIndex"](_0x5e9b68 + 0x2, _0x4fad2a);

            _0x43e229["putBytes"](_0x5bac12["getBytes"]());
        }

        _0x43e229["putBytes"](_0x2167ac["getBytes"]());
    };

    this["serializeContextName"] = function (_0x2f7b18, _0x31fad9) {
        if (undefined == _0x2f7b18 || _0x2f7b18["length"] == 0x0) {
            _0x31fad9["put"](0x0);

            return;
        }

        var _0x4f4b13 = 0x0;
        var _0x16731f = 0x0;

        var _0x699a3a = _0x31fad9["position"]();

        _0x31fad9["put"](_0x16731f);

        var _0x30a859;

        for (var _0x3cac0c = 0x0; _0x3cac0c < _0x2f7b18["length"]; _0x3cac0c++) {
            _0x30a859 = _0x2f7b18[_0x3cac0c];
            if (_0x30a859 == _0x5b05ca["WEBGL_contextName_experimental"]) _0x16731f |= 0x2; else if (_0x30a859 == _0x5b05ca["WEBGL_contextName_webgl"]) _0x16731f |= 0x4; else {
                _0x4f4b13++;

                var _0x362610 = this["toBytes"](_0x30a859);

                _0x31fad9["put"](_0x362610["length"]);

                _0x31fad9["putBytes"](_0x362610);
            }
        }

        if (_0x4f4b13 > 0x1f) {
            _0x9efdd6("UnsupportedOperationException:elements size could not greater than 31");

            return;
        }

        if (_0x4f4b13 > 0x0) _0x16731f = _0x16731f | 0x1 | _0x4f4b13 << 0x3;

        _0x31fad9["putAtIndex"](_0x699a3a, _0x16731f);
    };

    this["serializeIp"] = function (_0x4aa8bd, _0x29d295) {
        if (undefined == _0x4aa8bd || _0x4aa8bd["length"] == 0x0) {
            _0x29d295["put"](0x0);

            return;
        }

        var _0x2e8a8d = _0x29d295["position"]();

        _0x29d295["put"](0x0);

        var _0x5e99e5 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        var _0x1c682f = 0x0;

        for (var _0x607cfc = 0x0; _0x607cfc < _0x4aa8bd["length"]; _0x607cfc++) {
            if (!_0x5e99e5["exec"](_0x4aa8bd[_0x607cfc])) continue;

            _0x29d295["putInt"](this["ipV4StringToInteger"](_0x4aa8bd[_0x607cfc]));

            _0x1c682f++;
        }

        _0x29d295["putAtIndex"](_0x2e8a8d, _0x1c682f);
    };

    this["serializeVisTime"] = function (_0x177c2b, _0x1a13ab) {
        if (undefined == _0x177c2b || _0x177c2b["length"] == 0x0) {
            _0x1a13ab["put"](0x0);

            return;
        }

        var _0x580447 = this["timeSeriesToBytes"](_0x177c2b);

        _0x1a13ab["put"](_0x580447["length"]);

        _0x1a13ab["putBytes"](_0x580447);
    };

    this["longToBytes2"] = function (_0x59af0d) {
        if (undefined == _0x59af0d) _0x59af0d = 0x0;

        var _0x5c85e6 = parseInt(_0x59af0d)["toString"](0x10);

        var _0x15124e = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];

        for (var _0xb6b4df = _0x5c85e6["length"], _0x246163 = 0x7; _0xb6b4df > 0x0; _0xb6b4df -= 0x2, _0x246163--) {
            _0x15124e[_0x246163] = parseInt(_0x5c85e6["substring"](_0xb6b4df - 0x2, _0xb6b4df), 0x10);
        }

        return _0x15124e;
    };

    this["longToInt"] = function (_0x47b28f) {
        if (undefined == _0x47b28f) _0x47b28f = 0x0;

        var _0x35593e = parseInt(_0x47b28f)["toString"](0x10);

        var _0x4169a0 = [0x0, 0x0];

        for (var _0x5eccc6 = _0x35593e["length"], _0x33bd47 = 0x1; _0x5eccc6 > 0x0; _0x5eccc6 -= 0x8, _0x33bd47--) {
            _0x4169a0[_0x33bd47] = parseInt(_0x35593e["substring"](_0x5eccc6 - 0x8, _0x5eccc6), 0x10);
        }

        return _0x4169a0;
    };

    this["longBitLen"] = function (_0x35f8d0) {
        var _0x176dc6 = _0x35f8d0[0x0]["toString"](0x2)["length"];

        var _0x788fd4 = _0x176dc6 != 0x0 ? 0x20 : _0x35f8d0[0x1]["toString"](0x2)["length"];

        return _0x176dc6 + _0x788fd4;
    };

    this["timeSeriesToBytes"] = function (_0x46c7ca) {
        _0x46c7ca["sort"]();

        var _0x2ae97a = _0x46c7ca[_0x46c7ca["length"] - 0x1];

        var _0x564510 = this["longToInt"](_0x2ae97a);

        var _0x31401a = this["longToInt"](_0x46c7ca[0x0]);

        var _0x1bc946 = this["x64Xor"](_0x564510, _0x31401a);

        var _0x282bd1 = parseInt((0x40 - this["longBitLen"](_0x1bc946)) / 0x8);

        var _0x51f919 = _0x46c7ca["length"];

        var _0x4d7ec7 = _0x282bd1 + 0x1 + (0x8 - _0x282bd1) * _0x51f919;

        var _0x1ca118 = new Array(_0x4d7ec7);

        _0x1ca118[0x0] = _0x51f919 & 0xff;

        var _0x34f36b = this["longToBytes2"](_0x2ae97a);

        for (var _0x287dd1 = 0x1; _0x287dd1 <= _0x282bd1; _0x287dd1++) {
            _0x1ca118[_0x287dd1] = _0x34f36b[_0x287dd1 - 0x1];
        }

        var _0x6aa680 = 0x8 - _0x282bd1;

        for (var _0x4082cb = 0x0; _0x4082cb < _0x51f919; _0x4082cb++) {
            var _0x5ae7e0 = this["longToBytes2"](_0x46c7ca[_0x4082cb]);

            for (var _0x1e4bb4 = 0x1; _0x1e4bb4 <= _0x6aa680; _0x1e4bb4++) {
                _0x1ca118[_0x282bd1 + _0x4082cb * _0x6aa680 + _0x1e4bb4] = _0x5ae7e0[_0x282bd1 + _0x1e4bb4 - 0x1];
            }
        }

        return _0x1ca118;
    };

    this["serializePerformanceTimeing"] = function (_0xc10664, _0x4e822f) {
        if (undefined == _0xc10664 || _0xc10664["length"] == 0x0) {
            _0x4e822f["put"](0x0);

            return;
        }

        var _0x6bf122 = new Array(this["performanceKeyList"]["length"] - 0x1);

        var _0x3634bf = 0x0;

        var _0x167693 = !![];

        var _0x599934 = _0xc10664[this["performanceKeyList"][0x0]];

        for (var _0x48dc13 = 0x1; _0x48dc13 < this["performanceKeyList"]["length"]; _0x48dc13++) {
            var _0x5d6432 = _0xc10664[this["performanceKeyList"][_0x48dc13]];

            if (_0x5d6432 == undefined || _0x5d6432 == 0x0) {
                _0x6bf122[_0x3634bf++] = undefined;
            } else {
                var _0x29073b = _0x5d6432 - _0x599934;

                _0x6bf122[_0x3634bf++] = _0x29073b;
                _0x167693 = ![];
            }
        }

        var _0x64b8c1 = new _0x21c661();

        if (_0x599934 == undefined || _0x167693) {
            _0x4e822f["put"](0x1);

            _0x4e822f["put"](-0x1);

            return;
        }

        _0x64b8c1["putBytes"](this["longToBytes2"](_0x599934));

        var _0x672f54 = [0x0, 0x0, 0x0, 0x0, 0x0];

        _0x64b8c1["putBytes"](_0x672f54);

        for (var _0x4e781a = 0x0; _0x4e781a < _0x6bf122["length"]; _0x4e781a++) {
            var _0x3a3ac3 = parseInt(_0x4e781a / 0x4);

            var _0x572c96 = parseInt(_0x4e781a % 0x4 * 0x2);

            var _0x5c15a1 = 0x0;
            if (_0x6bf122[_0x4e781a] == undefined) _0x5c15a1 = 0x0; else if (_0x6bf122[_0x4e781a] <= 0x100) _0x5c15a1 = 0x1; else if (_0x6bf122[_0x4e781a] <= 0xffff) _0x5c15a1 = 0x2; else _0x5c15a1 = 0x3;
            _0x672f54[_0x3a3ac3] = _0x672f54[_0x3a3ac3] | _0x5c15a1 << _0x572c96;

            if (_0x5c15a1 == 0x1) {
                _0x64b8c1["put"](_0x6bf122[_0x4e781a] & 0xff);
            } else if (_0x5c15a1 == 0x2) {
                _0x64b8c1["put"](_0x6bf122[_0x4e781a] & 0xff);

                _0x64b8c1["put"](_0x6bf122[_0x4e781a] >> 0x8 & 0xff);
            } else if (_0x5c15a1 == 0x3) {
                _0x64b8c1["put"](_0x6bf122[_0x4e781a] & 0xff);

                _0x64b8c1["put"](_0x6bf122[_0x4e781a] >> 0x8 & 0xff);

                _0x64b8c1["put"](_0x6bf122[_0x4e781a] >> 0x10 & 0xff);
            }
        }

        for (var _0x4e781a = 0x0; _0x4e781a < _0x672f54["length"]; _0x4e781a++) {
            _0x64b8c1["putAtIndex"](0x8 + _0x4e781a, _0x672f54[_0x4e781a]);
        }

        _0x4e822f["put"](_0x64b8c1["position"]());

        _0x4e822f["putBytes"](_0x64b8c1["getBytes"]());
    };

    this["serializeOther"] = function (_0x17a0de, _0xae4e2f) {
        var _0x2c3a59 = _0x17a0de["basic"];
        var _0x3d4ca5 = _0x17a0de["navigator"];
        var _0x410ed6 = _0x17a0de["webGL"];
        var _0xa05a83 = _0x17a0de["webRtc"];
        var _0x1de9c8 = _0x17a0de["flash"];
        this["serializeStringWithByteLength"](this["getValue"](_0x2c3a59, "platform", undefined), _0xae4e2f);
        this["serializeStringWithByteLength"](this["getValue"](_0x2c3a59, "architecture", undefined), _0xae4e2f);
        this["serializeStringWithByteLength"](this["getValue"](_0x2c3a59, "Browser", undefined), _0xae4e2f);
        this["serializeStringWithByteLength"](this["getValue"](_0x3d4ca5, "vendor", undefined), _0xae4e2f);
        this["serializeStringWithByteLength"](this["getValue"](_0x3d4ca5, "appVersion", undefined), _0xae4e2f);
        this["serializeStringWithByteLength"](this["getValue"](_0x3d4ca5, "appName", undefined), _0xae4e2f);
        this["serializeStringWithByteLength"](this["getValue"](_0x3d4ca5, "appCodeName", undefined), _0xae4e2f);
        this["serializeStringWithByteLength"](this["getValue"](_0x3d4ca5, "cpuClass", undefined), _0xae4e2f);
        this["serializeStringWithByteLength"](this["getValue"](_0x3d4ca5, "platform", undefined), _0xae4e2f);
        this["serializeStringWithByteLength"](this["getValue"](_0x3d4ca5, "product", undefined), _0xae4e2f);
        this["serializeStringWithByteLength"](this["getValue"](_0x3d4ca5, "productSub", undefined), _0xae4e2f);
        this["serializeStringWithByteLength"](this["getValue"](_0x3d4ca5, "vendorSub", undefined), _0xae4e2f);
        this["serializeStringWithByteLength"](this["getValue"](_0x3d4ca5, "buildID", undefined), _0xae4e2f);

        if (null != _0xa05a83 && undefined != _0xa05a83) {
            var _0x3290b3 = this["getValue"](_0xa05a83, "mediaSources", undefined);

            var _0x257cf0 = undefined;

            if (undefined != _0x3290b3) {
                _0x257cf0 = [];

                for (var _0x304c1d = 0x0; _0x304c1d < _0x3290b3["length"]; _0x304c1d++) {
                    _0x257cf0[_0x304c1d] = this["stringify"](_0x3290b3[_0x304c1d]);
                }
            }

            this["serializeStringList"](_0x257cf0, _0xae4e2f);

            _0xae4e2f["put"](this["getValue"](_0xa05a83, "deviceCount", 0x0));

            this["serializeStringList"](this["getValue"](_0xa05a83, "IceCandidates", undefined), _0xae4e2f);
        }

        if (null != _0x1de9c8 && undefined != _0x1de9c8) {
            this["serializeStringWithByteLength"](this["getValue"](_0x1de9c8, "version", undefined), _0xae4e2f);
            this["serializeStringWithByteLength"](this["getValue"](_0x1de9c8, "guid", undefined), _0xae4e2f);
            this["serializeStringWithByteLength"](this["getValue"](_0x1de9c8, "manufacturer", undefined), _0xae4e2f);
            this["serializeStringWithByteLength"](this["getValue"](_0x1de9c8, 'os', undefined), _0xae4e2f);
            this["serializeStringWithByteLength"](this["getValue"](_0x1de9c8, "maxLevelIDC", undefined), _0xae4e2f);
            this["serializeStringWithByteLength"](this["getValue"](_0x1de9c8, "rsg", undefined), _0xae4e2f);
            this["serializeStringWithByteLength"](this["getValue"](_0x1de9c8, "rdg", undefined), _0xae4e2f);
        }
    };

    this["serializeStringList"] = function (_0x3d876d, _0x22f001) {
        if (undefined == _0x3d876d || _0x3d876d["length"] == 0x0) {
            _0x22f001["put"](0x0);

            return;
        }

        _0x22f001["put"](_0x3d876d["length"]);

        for (var _0x3222c5 = 0x0; _0x3222c5 < _0x3d876d["length"]; _0x3222c5++) {
            var _0x360f1f = this["toBytes"](_0x3d876d[_0x3222c5]);

            _0x22f001["put"](_0x360f1f["length"]);

            _0x22f001["putBytes"](_0x360f1f);
        }
    };

    this["serializeStringWithByteLength"] = function (_0x224a9e, _0x55b0e1) {
        if (undefined == _0x224a9e) {
            _0x55b0e1["put"](0x0);

            return;
        }

        if (_0x224a9e["length"] > 0xff) _0x224a9e = _0x224a9e["substring"](0x0, 0xff);

        var _0x4dbaef = this["toBytes"](_0x224a9e);

        if (_0x4dbaef["length"] > 0xff) _0x4dbaef["splice"](0xff, _0x4dbaef["length"] - 0xff);

        _0x55b0e1["put"](_0x4dbaef["length"]);

        _0x55b0e1["putBytes"](_0x4dbaef);
    };

    this["serializeShortArray"] = function (_0x33ffcc, _0x119641, _0x1093af) {
        var _0x5c2280 = _0x33ffcc[_0x119641];

        if (undefined == _0x5c2280 || _0x5c2280["length"] == 0x0) {
            _0x1093af["put"](0x0);
        } else {
            _0x1093af["put"](_0x5c2280["length"]);

            for (var _0x1ce66c = 0x0; _0x1ce66c < _0x5c2280["length"]; _0x1ce66c++) {
                _0x1093af["putShort"](_0x5c2280[_0x1ce66c]);
            }
        }
    };

    this["serializeMouseclickData"] = function (_0x1c630c, _0x4e74dc) {
        var _0xdfd3bf = _0x1c630c["mouseclickData"];

        if (undefined == _0xdfd3bf || _0xdfd3bf["length"] == 0x0) {
            _0x4e74dc["put"](0x0);
        } else {
            _0x4e74dc["put"](_0xdfd3bf["length"]);

            for (var _0x8dbab4 = 0x0; _0x8dbab4 < _0xdfd3bf["length"]; _0x8dbab4++) {
                var _0x479652 = _0xdfd3bf[_0x8dbab4]["interval"];
                var _0x582626 = _0xdfd3bf[_0x8dbab4]['x1'];
                var _0x19aa05 = _0xdfd3bf[_0x8dbab4]['y1'];
                var _0x3e00b9 = _0xdfd3bf[_0x8dbab4]['x2'];
                var _0x104c5d = _0xdfd3bf[_0x8dbab4]['y2'];

                _0x4e74dc["putInt"](_0x479652);

                _0x4e74dc["putShort"](_0x582626);

                _0x4e74dc["putShort"](_0x19aa05);

                _0x4e74dc["putShort"](_0x3e00b9);

                _0x4e74dc["putShort"](_0x104c5d);
            }
        }
    };

    this["serializeWheelDeltaData"] = function (_0xe836fb, _0x4af188) {
        var _0x4daf00 = _0xe836fb["wheelDeltaData"];

        if (undefined == _0x4daf00 || _0x4daf00["length"] == 0x0) {
            _0x4af188["put"](0x0);
        } else {
            var _0x44777b = 0x0;
            var _0x55a632 = 0x0;

            var _0x4f709e;

            var _0x5a560f = 0x0;

            var _0x1085ed = new Array(parseInt(_0x4daf00["length"] % 0x2 == 0x0 ? _0x4daf00["length"] / 0x2 : _0x4daf00["length"] / 0x2 + 0x1));

            for (var _0x34d6e9 = 0x0; _0x34d6e9 < _0x4daf00["length"]; _0x34d6e9++) {
                _0x4f709e = _0x4daf00[_0x34d6e9];
                var _0x11653b = _0x4f709e;

                if (_0x34d6e9 % 0x2 == 0x1) {
                    _0x55a632 = 0x4;
                } else {
                    _0x55a632 = 0x0;
                }

                if (_0x11653b < 0x0) {
                    _0x44777b |= 0x8 << _0x55a632 | -_0x11653b << _0x55a632;
                } else {
                    _0x44777b |= _0x11653b << _0x55a632;
                }

                if (_0x34d6e9 % 0x2 == 0x1) {
                    _0x1085ed[_0x5a560f++] = _0x44777b;
                    _0x44777b = 0x0;
                }
            }

            if (_0x4daf00["length"] % 0x2 != 0x0) _0x1085ed[_0x5a560f] = _0x44777b;

            _0x4af188["put"](_0x1085ed["length"]);

            _0x4af188["putBytes"](_0x1085ed);
        }
    };

    this["getSimpleSortedPlugins"] = function (_0x38cc90) {
        var _0x24e12e = _0x38cc90["navigator"];

        var _0x5b6792 = this["getValue"](_0x24e12e, "plugins", undefined);

        var _0x16260a = [];
        var _0x1aee65 = {};

        if (null != _0x5b6792 && undefined != _0x5b6792) {
            for (var _0x34ce34 = 0x0; _0x34ce34 < _0x5b6792["length"]; _0x34ce34++) {
                if (undefined != _0x5b6792[_0x34ce34] && undefined != _0x5b6792[_0x34ce34]["pluginName"]) {
                    var _0x46b658 = {};
                    _0x46b658["pluginName"] = _0x5b6792[_0x34ce34]["pluginName"];
                    if (undefined != _0x5b6792[_0x34ce34]["Version"]) _0x46b658["Version"] = _0x5b6792[_0x34ce34]["Version"];

                    if (!_0x1aee65[_0x46b658["pluginName"]]) {
                        _0x16260a["push"](_0x46b658);

                        _0x1aee65[_0x46b658["pluginName"]] = 0x1;
                    }
                }
            }

            var _0x39b272 = function (_0x541de9) {
                return function (_0x40eae8, _0x14e347) {
                    var _0xee8a47, _0x355974;

                    if (typeof _0x40eae8 === "object" && typeof _0x14e347 === "object" && _0x40eae8 && _0x14e347) {
                        _0xee8a47 = _0x40eae8[_0x541de9];
                        _0x355974 = _0x14e347[_0x541de9];

                        if (_0xee8a47 === _0x355974) {
                            return 0x0;
                        }

                        if (typeof _0xee8a47 === typeof _0x355974) {
                            return _0xee8a47 < _0x355974 ? -0x1 : 0x1;
                        }

                        return typeof _0xee8a47 < typeof _0x355974 ? -0x1 : 0x1;
                    } else {
                        throw "error";
                    }
                };
            };

            _0x16260a["sort"](_0x39b272("pluginName"));

            return _0x16260a;
        }

        return undefined;
    };

    this["getUniqueSortedMimeType"] = function (_0x11aadb) {
        var _0x2d1b70 = _0x11aadb["navigator"];

        var _0x4bf941 = this["getValue"](_0x2d1b70, "mimeTypes", undefined);

        var _0x4859e4 = [];
        var _0xb4d868 = {};

        if (null != _0x4bf941 && undefined != _0x4bf941) {
            for (var _0x3f8c60 = 0x0; _0x3f8c60 < _0x4bf941["length"]; _0x3f8c60++) {
                if (undefined != _0x4bf941[_0x3f8c60] && undefined != _0x4bf941[_0x3f8c60]["type"] && !_0xb4d868[_0x4bf941[_0x3f8c60]["type"]]) {
                    _0x4859e4["push"](_0x4bf941[_0x3f8c60]["type"]);

                    _0xb4d868[_0x4bf941[_0x3f8c60]["type"]] = 0x1;
                }
            }

            _0x4859e4["sort"]();

            return _0x4859e4;
        }

        return undefined;
    };

    this["browserFp"] = function (_0x3ef555) {
        var _0x1ee29e = _0x3ef555["screenData"];
        var _0x1863ec = _0x3ef555["canvasFp"];
        var _0x357a88 = _0x3ef555["navigator"];
        var _0x32cefb = _0x3ef555["flash"];
        var _0x2c3a59 = _0x3ef555["basic"];
        var _0x3eb2c5 = _0x3ef555["other"];
        var _0x1fdb18 = _0x3ef555["geoAndISP"];
        var _0x38463d = {};

        var _0x45dbf1 = function (_0x3930c5, _0x5b99cc, _0x2f944b) {
            if (_0x2f944b == undefined) return;
            _0x3930c5[_0x5b99cc] = _0x2f944b;
        };

        _0x45dbf1(_0x38463d, "width", this["getValue"](_0x1ee29e, "width", 0x0));

        _0x45dbf1(_0x38463d, "height", this["getValue"](_0x1ee29e, "height", 0x0));

        _0x45dbf1(_0x38463d, "canvas", this["getValue"](_0x1863ec, "canvasData", undefined));

        _0x45dbf1(_0x38463d, "userAgent", this["getValue"](_0x357a88, "useragent", undefined));

        _0x45dbf1(_0x38463d, "timeZone", this["getValue"](_0x1fdb18, "ClientTimezoneOffset", -0x1));

        _0x45dbf1(_0x38463d, "platform", this["getValue"](_0x2c3a59, "platform", undefined));

        _0x45dbf1(_0x38463d, 'os', this["getValue"](_0x2c3a59, 'os', _0x5b05ca["BASIC_os"][0x4], _0x5b05ca["BASIC_os"]));

        _0x45dbf1(_0x38463d, "numCpu", this["getValue"](_0x357a88, "numCPU", 0x1, _0x5b05ca["CPUNUM_LIST"]));

        _0x45dbf1(_0x38463d, "hardwareConcurrency", this["getValue"](_0x357a88, "hardwareConcurrency", 0x1, _0x5b05ca["CPUNUM_LIST"]));

        _0x45dbf1(_0x38463d, "language", this["getValue"](_0x357a88, "language", "zh-cn", _0x5b05ca["NAVIGATOR_language"]));

        _0x45dbf1(_0x38463d, "cpuClass", this["getValue"](_0x357a88, "cpuClass", undefined));

        _0x45dbf1(_0x38463d, "plugins", this["getSimpleSortedPlugins"](_0x3ef555));

        _0x45dbf1(_0x38463d, "mimeTypes", this["getUniqueSortedMimeType"](_0x3ef555));

        _0x45dbf1(_0x38463d, "doNotTrack", this["getValue"](_0x357a88, "doNotTrack", _0x5b05ca["NAVIGATOR_doNotTrack"][0x2], _0x5b05ca["NAVIGATOR_doNotTrack"]));

        _0x45dbf1(_0x38463d, "localStorage", this["getValue"](_0x2c3a59, "localStorage", ![], _0x5b05ca["BOOLEAN_ENUM"]));

        _0x45dbf1(_0x38463d, "sessionStorage", this["getValue"](_0x2c3a59, "sessionStorage", ![], _0x5b05ca["BOOLEAN_ENUM"]));

        _0x45dbf1(_0x38463d, "cookieEnabled", this["getValue"](_0x357a88, "cookieEnabled", ![], _0x5b05ca["BOOLEAN_ENUM"]));

        _0x45dbf1(_0x38463d, "hasIME", this["getValue"](_0x32cefb, "hasIME", ![], _0x5b05ca["BOOLEAN_ENUM"]));

        _0x45dbf1(_0x38463d, "hasMP3", this["getValue"](_0x32cefb, "hasMP3", ![], _0x5b05ca["BOOLEAN_ENUM"]));

        _0x45dbf1(_0x38463d, "hasTLS", this["getValue"](_0x32cefb, "hasTLS", ![], _0x5b05ca["BOOLEAN_ENUM"]));

        _0x45dbf1(_0x38463d, "hasPrinting", this["getValue"](_0x32cefb, "hasPrinting", ![], _0x5b05ca["BOOLEAN_ENUM"]));

        _0x45dbf1(_0x38463d, "hasStreamingAudio", this["getValue"](_0x32cefb, "hasStreamingAudio", ![], _0x5b05ca["BOOLEAN_ENUM"]));

        _0x45dbf1(_0x38463d, "hasStreamingVideo", this["getValue"](_0x32cefb, "hasStreamingVideo", ![], _0x5b05ca["BOOLEAN_ENUM"]));

        _0x45dbf1(_0x38463d, "adblock", this["getValue"](_0x3eb2c5, "adblock", ![], _0x5b05ca["BOOLEAN_ENUM"]));

        var _0xb073e6 = this["stringify"](_0x38463d);

        var _0x1f918c = _0x5a3b9b(_0xb073e6, 0x0);

        return _0x1f918c;
    };

    this["encodeStatic"] = function (_0x56b24a) {
        var _0x13130b = _0x56b24a["header"];
        var _0x1711ad = _0x56b24a["navigator"];
        var _0x1ee29e = _0x56b24a["screenData"];
        var _0x3a8165 = _0x56b24a["sysfonts"];
        var _0x2548c9 = _0x56b24a["webGL"];
        var _0x4367bb = _0x56b24a["webRtc"];
        var _0x1aaaf9 = _0x56b24a["battery"];
        var _0x2e4566 = _0x56b24a["performanceTiming"];
        var _0xb4597c = _0x56b24a["visTime"];
        var _0x1cf69e = _0x56b24a["flash"];
        var _0x3bfc6b = _0x56b24a["canvasFp"];
        var _0x1fdb18 = _0x56b24a["geoAndISP"];

        var _0x15e826 = new _0x21c661();

        _0x15e826["put"](this["version"]);

        var _0x2888d3 = 0x0;
        if (null != _0x3bfc6b && undefined != _0x3bfc6b) _0x2888d3 |= 0x8000;
        if (null != _0x1cf69e && undefined != _0x1cf69e) _0x2888d3 |= 0x4000;
        if (null != _0x2548c9 && undefined != _0x2548c9) _0x2888d3 |= 0x2000;
        if (null != _0x4367bb && undefined != _0x4367bb) _0x2888d3 |= 0x1000;
        if (null != _0x1fdb18 && undefined != _0x1fdb18) _0x2888d3 |= 0x800;
        if (null != _0x3a8165 && undefined != _0x3a8165) _0x2888d3 |= 0x400;

        _0x15e826["putShort"](_0x2888d3);

        _0x15e826["putBytes"]([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]);

        this["serializeBooleanSegment"](_0x56b24a, _0x15e826);
        this["serializeTouchPlayerCpuArch"](_0x1cf69e, _0x15e826);
        this["serializeHistoryLen"](_0x13130b, _0x15e826);
        this["serializeNumCpuHardwareFragment"](_0x1711ad, _0x2548c9, _0x15e826);
        this["serializeEnumValOneByte"](this["getValue"](_0x1711ad, "language", "zh-cn"), _0x5b05ca["NAVIGATOR_language"], _0x15e826);
        this["serializeTrackColorLevel"](_0x1711ad, _0x1cf69e, _0x1aaaf9, _0x15e826);
        this["serializeBatteryDischarg"](_0x1aaaf9, _0x15e826);
        if (null != _0x3bfc6b && undefined != _0x3bfc6b) this["serializeCanvasData"](_0x3bfc6b["canvasData"], _0x15e826);
        if (null != _0x1fdb18 && undefined != _0x1fdb18) this["serializeGeoAndISP"](_0x1fdb18, _0x15e826);
        this["serializeScreenData"](_0x1ee29e, _0x15e826);
        if (null != _0x1cf69e && undefined != _0x1cf69e) this["serializeFlashFixedSegment"](_0x1cf69e, _0x15e826);
        this["serializeUserAgent"](_0x1711ad, _0x15e826);

        _0x15e826["putShortAtIndex"](0x3, _0x15e826["position"]());

        var _0x9370f7 = this["getValue"](_0x1711ad, "plugins", undefined);

        this["serializePlugins"](_0x9370f7, _0x15e826);

        _0x15e826["putShortAtIndex"](0x5, _0x15e826["position"]() - _0x15e826["getShort"](0x3));

        var _0x568fe0 = _0x15e826["position"]();

        var _0x258a64 = this["getValue"](_0x1711ad, "mimeTypes", undefined);

        var _0x40a711 = [];
        if (null != _0x258a64 && undefined != _0x258a64) for (var _0xb9cb86 = 0x0, _0x297b80 = 0x0; _0xb9cb86 < _0x258a64["length"]; _0xb9cb86++) {
            if (undefined != _0x258a64[_0xb9cb86]) {
                _0x40a711[_0x297b80] = _0x258a64[_0xb9cb86]["type"];
                _0x297b80++;
            }
        }
        this["serializeMimeTypeOrFonts"](_0x40a711, _0x15e826, _0x5b05ca["NAVIGATOR_mimeTypes"], ![]);

        _0x15e826["putShortAtIndex"](0x7, _0x15e826["position"]() - _0x568fe0);

        _0x568fe0 = _0x15e826["position"]();
        if (null != _0x3a8165 && undefined != _0x3a8165) this["serializeMimeTypeOrFonts"](_0x3a8165, _0x15e826, _0x5b05ca["FONTS"], !![]);

        _0x15e826["putIntAtIndex"](0x9, _0x15e826["position"]() - _0x568fe0);

        _0x568fe0 = _0x15e826["position"]();

        if (null != _0x1cf69e && undefined != _0x1cf69e) {
            this["serializeMimeTypeOrFonts"](_0x1cf69e["fontNames"], _0x15e826, _0x5b05ca["FONTS"], !![]);
        }

        _0x15e826["putIntAtIndex"](0xd, _0x15e826["position"]() - _0x568fe0);

        _0x568fe0 = _0x15e826["position"]();

        _0x15e826["putAtIndex"](0x12, _0x15e826["position"]() - _0x568fe0);

        _0x568fe0 = _0x15e826["position"]();

        if (null != _0x4367bb && undefined != _0x4367bb) {
            this["serializeIp"](_0x4367bb["IPADDR"], _0x15e826);
        }

        _0x15e826["putAtIndex"](0x13, _0x15e826["position"]() - _0x568fe0);

        _0x568fe0 = _0x15e826["position"]();
        this["serializeOther"](_0x56b24a, _0x15e826);

        _0x15e826["putShortAtIndex"](0x14, _0x15e826["position"]() - _0x568fe0);

        _0x568fe0 = _0x15e826["position"]();
        this["serializeVisTime"](_0xb4597c, _0x15e826);

        _0x15e826["putAtIndex"](0x16, _0x15e826["position"]() - _0x568fe0);

        this["serializePerformanceTimeing"](_0x2e4566, _0x15e826);

        var _0x2e5de1 = this["browserFp"](_0x56b24a);

        this["serializeCanvasData"](_0x2e5de1, _0x15e826);

        _0x15e826["putInt"](_0x15e826["checkSum"]());

        return _0x15e826["getBytes"]();
    };

    this["encodeDynamic"] = function (_0x1a3b66) {
        if (undefined == _0x1a3b66) return;

        var _0x246531 = new _0x21c661();

        var _0x1d50b5 = 0x0;
        _0x1d50b5 |= _0x1a3b66["keypress"] != undefined && _0x1a3b66["keypress"] ? 0x80 : 0x0;
        _0x1d50b5 |= _0x1a3b66["scroll"] != undefined && _0x1a3b66["scroll"] ? 0x40 : 0x0;
        _0x1d50b5 |= _0x1a3b66["click"] != undefined && _0x1a3b66["click"] ? 0x20 : 0x0;

        _0x246531["put"](this["DYNAMIC_VERSION"]);

        _0x246531["put"](_0x1d50b5);

        this["serializeShortArray"](_0x1a3b66, "mousemoveData", _0x246531);
        this["serializeShortArray"](_0x1a3b66, "keypressData", _0x246531);
        this["serializeMouseclickData"](_0x1a3b66, _0x246531);
        this["serializeWheelDeltaData"](_0x1a3b66, _0x246531);
        return _0x246531["getBytes"]();
    };
}

var _0x1612c9 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
var _0x3b911e = function (_0x2a38c4) {
    var _0x3b7ba1 = _0x2a38c4["length"];
    var _0x5063ca = '';

    for (var _0x43e514 = 0x0, _0x2b5318 = 0x0; _0x43e514 < _0x3b7ba1; _0x43e514++) {
        _0x5063ca += _0x1612c9[(0xf0 & _0x2a38c4[_0x43e514]) >>> 0x4];
        _0x5063ca += _0x1612c9[0xf & _0x2a38c4[_0x43e514]];
    }

    return _0x5063ca;
};
var _0x1722c3 = function (_0x1da193) {
    var _0x3dca2f = new _0x4d6308();

    if (_0x1da193["basic"]) {
        var _0x180af0 = _0x3dca2f["encodeStatic"](_0x1da193);

        var _0x286380 = _0x3b911e(_0x180af0);

        return _0x286380;
    } else {
        var _0x180af0 = _0x3dca2f["encodeDynamic"](_0x1da193);

        var _0x286380 = _0x3b911e(_0x180af0);

        return _0x286380;
    }
};
function result(data) {
    return _0x1722c3(data)
}