var oQQOoQ = function (oQ0o00, OoQoOo, O0QOO0, O00QQO, QooOOo, oo0oOO) {
    return (O0QOO0 >>> 5 ^ OoQoOo << 2) + (OoQoOo >>> 3 ^ O0QOO0 << 4) ^ (oQ0o00 ^ OoQoOo) + (oo0oOO[O00QQO & 3 ^ QooOOo] ^ O0QOO0);
};
var QOoOoQ = function(oQ0o00) {
    return oQ0o00 & 4294967295;
};
var OO0OOo = function (oQ0o00, OoQoOo) {
    var O0QOO0 = [];
    var O00QQO = new Array(32768);
    var QooOOo = 0,
        oo0oOO = 0;
    var QOQooO = 1;

    while (QOQooO) {
        switch (QOQooO) {
            case (82 - 50) / 8:
            {
                QooOOo++;
                QOQooO = 2;
                break;
            }

            case (84 - 57) / 9:
            {
                var oQO0oO = oQ0o00["charCodeAt"](oo0oOO++);

                switch (oQO0oO >> 4) {
                    case 0:
                    case (89 - 76) / 13:
                    case (110 - 92) / 9:
                    case (109 - 49) / 20:
                    case (135 - 79) / 14:
                    case (140 - 75) / 13:
                    case (109 - 67) / 7:
                    case (175 - 49) / 18:
                        O00QQO[QooOOo] = oQO0oO;
                        break;

                    case (284 - 68) / 18:
                    case (140 - 75) / 5:
                        if (oo0oOO < oQQO00) {
                            O00QQO[QooOOo] = (oQO0oO & 31) << 6 | oQ0o00["charCodeAt"](oo0oOO++) & 63;
                        } else {
                            throw new Error('Unfinished UTF-8 octet sequence');
                        }

                        break;

                    case (198 - 100) / 7:
                        if (oo0oOO + 1 < oQQO00) {
                            O00QQO[QooOOo] = (oQO0oO & 15) << 12 | (oQ0o00["charCodeAt"](oo0oOO++) & 63) << 6 | oQ0o00["charCodeAt"](oo0oOO++) & 63;
                        } else {
                            throw new Error('Unfinished UTF-8 octet sequence');
                        }

                        break;

                    case (337 - 67) / 18:
                        if (oo0oOO + 2 < oQQO00) {
                            var oOO0QO = ((oQO0oO & 7) << 18 | (oQ0o00["charCodeAt"](oo0oOO++) & 63) << 12 | (oQ0o00["charCodeAt"](oo0oOO++) & 63) << 6 | oQ0o00["charCodeAt"](oo0oOO++) & 63) - 65536;

                            if (0 <= oOO0QO && oOO0QO <= 1048575) {
                                O00QQO[QooOOo++] = oOO0QO >> 10 & 1023 | 55296;
                                O00QQO[QooOOo] = oOO0QO & 1023 | 56320;
                            } else {
                                throw new Error('Character outside valid Unicode range: 0x' + oOO0QO["toString"](16));
                            }
                        } else {
                            throw new Error('Unfinished UTF-8 octet sequence');
                        }

                        break;

                    default:
                        throw new Error('Bad UTF-8 encoding 0x' + oQO0oO["toString"](16));
                }

                if (QooOOo >= 32767 - 1) {
                    var oOQoQo = QooOOo + 1;
                    O00QQO["length"] = oOQoQo;
                    O0QOO0[O0QOO0["length"]] = String["fromCharCode"]["apply"](String, O00QQO);
                    OoQoOo -= oOQoQo;
                    QooOOo = -1;
                }

                QOQooO = 4;
                break;
            }

            case (67 - 53) / 7:
            {
                QOQooO = QooOOo < OoQoOo && oo0oOO < oQQO00 ? 3 : 0;
                break;
            }

            case (63 - 57) / 6:
            {
                var oQQO00 = oQ0o00["length"];
                QOQooO = 2;
                break;
            }
        }
    }

    if (QooOOo > 0) {
        O00QQO["length"] = QooOOo;
        O0QOO0[O0QOO0["length"]] = String["fromCharCode"]["apply"](String, O00QQO);
    }

    return O0QOO0["join"]('');
};
var O0Ooo0 = function (oQ0o00, OoQoOo) {
    var O0QOO0 = new Array(OoQoOo);
    var O00QQO = 0,
        QooOOo = 0;
    var oo0oOO = 1;

    while (oo0oOO) {
        switch (oo0oOO) {
            case (115 - 100) / 5:
            {
                var QOQooO = oQ0o00["charCodeAt"](QooOOo++);

                switch (QOQooO >> 4) {
                    case 0:
                    case (108 - 91) / 17:
                    case (70 - 58) / 6:
                    case (105 - 60) / 15:
                    case (117 - 85) / 8:
                    case (129 - 69) / 12:
                    case (126 - 60) / 11:
                    case (183 - 50) / 19:
                        O0QOO0[O00QQO] = QOQooO;
                        break;

                    case (273 - 69) / 17:
                    case (219 - 63) / 12:
                        if (QooOOo < oOO0QO) {
                            O0QOO0[O00QQO] = (QOQooO & 31) << 6 | oQ0o00["charCodeAt"](QooOOo++) & 63;
                        } else {
                            throw new Error('Unfinished UTF-8 octet sequence');
                        }

                        break;

                    case (237 - 41) / 14:
                        if (QooOOo + 1 < oOO0QO) {
                            O0QOO0[O00QQO] = (QOQooO & 15) << 12 | (oQ0o00["charCodeAt"](QooOOo++) & 63) << 6 | oQ0o00["charCodeAt"](QooOOo++) & 63;
                        } else {
                            throw new Error('Unfinished UTF-8 octet sequence');
                        }

                        break;

                    case (200 - 65) / 9:
                        if (QooOOo + 2 < oOO0QO) {
                            var oQO0oO = ((QOQooO & 7) << 18 | (oQ0o00["charCodeAt"](QooOOo++) & 63) << 12 | (oQ0o00["charCodeAt"](QooOOo++) & 63) << 6 | oQ0o00["charCodeAt"](QooOOo++) & 63) - 65536;

                            if (0 <= oQO0oO && oQO0oO <= 1048575) {
                                O0QOO0[O00QQO++] = oQO0oO >> 10 & 1023 | 55296;
                                O0QOO0[O00QQO] = oQO0oO & 1023 | 56320;
                            } else {
                                throw new Error('Character outside valid Unicode range: 0x' + oQO0oO["toString"](16));
                            }
                        } else {
                            throw new Error('Unfinished UTF-8 octet sequence');
                        }

                        break;

                    default:
                        throw new Error('Bad UTF-8 encoding 0x' + QOQooO["toString"](16));
                }

                oo0oOO = 4;
                break;
            }

            case (98 - 85) / 13:
            {
                var oOO0QO = oQ0o00["length"];
                oo0oOO = 2;
                break;
            }

            case (77 - 41) / 18:
            {
                oo0oOO = O00QQO < OoQoOo && QooOOo < oOO0QO ? 3 : 0;
                break;
            }

            case (97 - 69) / 7:
            {
                O00QQO++;
                oo0oOO = 2;
                break;
            }
        }
    }

    if (O00QQO < OoQoOo) {
        O0QOO0["length"] = O00QQO;
    }

    return String["fromCharCode"]["apply"](String, O0QOO0);
};
var QO0Q0Q = function (oQ0o00, OoQoOo) {
    if (OoQoOo === undefined || OoQoOo === null || OoQoOo < 0) OoQoOo = oQ0o00["length"];
    if (OoQoOo === 0) return '';

    if (/^[\x00-\x7f]*$/["test"](oQ0o00) || !/^[\x00-\xff]*$/["test"](oQ0o00)) {
        if (OoQoOo === oQ0o00["length"]) return oQ0o00;
        return oQ0o00["substr"](0, OoQoOo);
    }

    return OoQoOo < 65535 ? O0Ooo0(oQ0o00, OoQoOo) : OO0OOo(oQ0o00, OoQoOo);
};
var oOQ0Q0 = function (oQ0o00, OoQoOo) {
    var O0QOO0 = oQ0o00["length"];
    var O00QQO = O0QOO0 << 2;

    if (OoQoOo) {
        var QooOOo = oQ0o00[O0QOO0 - 1];
        O00QQO -= 4;

        if (QooOOo < O00QQO - 3 || QooOOo > O00QQO) {
            return null;
        }

        O00QQO = QooOOo;
    }

    var oo0oOO = 1;

    while (oo0oOO) {
        switch (oo0oOO) {
            case (65 - 50) / 5:
            {
                oQ0o00[QOQooO] = String["fromCharCode"](oQ0o00[QOQooO] & 255, oQ0o00[QOQooO] >>> 8 & 255, oQ0o00[QOQooO] >>> 16 & 255, oQ0o00[QOQooO] >>> 24 & 255);
                oo0oOO = 4;
                break;
            }

            case (87 - 47) / 20:
            {
                oo0oOO = QOQooO < O0QOO0 ? 3 : 0;
                break;
            }

            case (120 - 60) / 15:
            {
                QOQooO++;
                oo0oOO = 2;
                break;
            }

            case (77 - 58) / 19:
            {
                var QOQooO = 0;
                oo0oOO = 2;
                break;
            }
        }
    }

    var oQO0oO = oQ0o00["join"]('');

    if (OoQoOo) {
        return oQO0oO["substring"](0, O00QQO);
    }

    return oQO0oO;
};
var OOOOo0 = function (oQ0o00, OoQoOo) {
    var O0QOO0 = oQ0o00["length"];
    var O00QQO = O0QOO0 - 1;
    var QooOOo, oo0oOO, QOQooO, oQO0oO, oOO0QO, oOQoQo;
    QooOOo = oQ0o00[0];
    oOQoQo = Math["floor"](6 + 52 / O0QOO0);
    var oQQO00 = 1;

    while (oQQO00) {
        switch (oQQO00) {
            case (79 - 67) / 6:
            {
                oQQO00 = QOQooO !== 0 ? 3 : 0;
                break;
            }

            case (155 - 75) / 20:
            {
                QOQooO = QOoOoQ(QOQooO - 2654435769);
                oQQO00 = 2;
                break;
            }

            case (90 - 57) / 11:
            {
                oQO0oO = QOQooO >>> 2 & 3;

                for (oOO0QO = O00QQO; oOO0QO > 0; --oOO0QO) {
                    oo0oOO = oQ0o00[oOO0QO - 1];
                    QooOOo = oQ0o00[oOO0QO] = QOoOoQ(oQ0o00[oOO0QO] - oQQOoQ(QOQooO, QooOOo, oo0oOO, oOO0QO, oQO0oO, OoQoOo));
                }

                oo0oOO = oQ0o00[O00QQO];
                QooOOo = oQ0o00[0] = QOoOoQ(oQ0o00[0] - oQQOoQ(QOQooO, QooOOo, oo0oOO, 0, oQO0oO, OoQoOo));
                oQQO00 = 4;
                break;
            }

            case (84 - 68) / 16:
            {
                QOQooO = QOoOoQ(oOQoQo * 2654435769);
                oQQO00 = 2;
                break;
            }
        }
    }

    return oQ0o00;
};
var O0Q0QQ = function (oQ0o00) {
    if (oQ0o00["length"] < 4) oQ0o00["length"] = 4;
    return oQ0o00;
};
var OOOOoo = function (oQ0o00, OoQoOo) {
    var O0QOO0 = oQ0o00["length"];
    var O00QQO = O0QOO0 >> 2;

    if ((O0QOO0 & 3) !== 0) {
        ++O00QQO;
    }

    var QooOOo;

    if (OoQoOo) {
        QooOOo = new Array(O00QQO + 1);
        QooOOo[O00QQO] = O0QOO0;
    } else {
        QooOOo = new Array(O00QQO);
    }

    var oo0oOO = 1;

    while (oo0oOO) {
        switch (oo0oOO) {
            case (97 - 40) / 19:
            {
                QooOOo[QOQooO >> 2] |= oQ0o00["charCodeAt"](QOQooO) << ((QOQooO & 3) << 3);
                oo0oOO = 4;
                break;
            }

            case (89 - 71) / 9:
            {
                oo0oOO = QOQooO < O0QOO0 ? 3 : 0;
                break;
            }

            case (133 - 57) / 19:
            {
                ++QOQooO;
                oo0oOO = 2;
                break;
            }

            case (63 - 56) / 7:
            {
                var QOQooO = 0;
                oo0oOO = 2;
                break;
            }
        }
    }

    return QooOOo;
};
var QOoQ0O = function (oQ0o00) {
    if (/^[\x00-\x7f]*$/["test"](oQ0o00)) {
        return oQ0o00;
    }

    var OoQoOo = [];
    var O0QOO0 = oQ0o00["length"];
    var O00QQO = 1;

    while (O00QQO) {
        switch (O00QQO) {
            case (88 - 76) / 6:
            {
                O00QQO = QooOOo < O0QOO0 ? 3 : 0;
                break;
            }

            case (115 - 95) / 5:
            {
                ++QooOOo, ++oo0oOO;
                O00QQO = 2;
                break;
            }

            case (113 - 99) / 14:
            {
                var QooOOo = 0,
                    oo0oOO = 0;
                O00QQO = 2;
                break;
            }

            case (123 - 81) / 14:
            {
                var QOQooO = oQ0o00["charCodeAt"](QooOOo);

                if (QOQooO < 128) {
                    OoQoOo[oo0oOO] = oQ0o00["charAt"](QooOOo);
                } else if (QOQooO < 2048) {
                    OoQoOo[oo0oOO] = String["fromCharCode"](192 | QOQooO >> 6, 128 | QOQooO & 63);
                } else if (QOQooO < 55296 || QOQooO > 57343) {
                    OoQoOo[oo0oOO] = String["fromCharCode"](224 | QOQooO >> 12, 128 | QOQooO >> 6 & 63, 128 | QOQooO & 63);
                } else {
                    if (QooOOo + 1 < O0QOO0) {
                        var oQO0oO = oQ0o00["charCodeAt"](QooOOo + 1);

                        if (QOQooO < 56320 && 56320 <= oQO0oO && oQO0oO <= 57343) {
                            var oOO0QO = ((QOQooO & 1023) << 10 | oQO0oO & 1023) + 65536;
                            OoQoOo[oo0oOO] = String["fromCharCode"](240 | oOO0QO >> 18 & 63, 128 | oOO0QO >> 12 & 63, 128 | oOO0QO >> 6 & 63, 128 | oOO0QO & 63);
                            ++QooOOo;
                            continue;
                        }
                    }

                    throw new Error("Malformed string");
                }

                O00QQO = 4;
                break;
            }
        }
    }

    return OoQoOo["join"]('');
};
var b = function () {
    var o00oQ0 = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
    return function (oQ0o00) {
        var OoQoOo = 1;

        while (OoQoOo) {
            switch (OoQoOo) {
                case (75 - 51) / 12:
                {
                    if (/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/["test"](oQ0o00)) {
                        return '';
                    }

                    if (oQ0o00["charAt"](oOO0QO - 2) == '=') {
                        oOQoQo = 1;
                    } else if (oQ0o00["charAt"](oOO0QO - 1) == '=') {
                        oOQoQo = 2;
                    } else {
                        oOQoQo = 0;
                    }

                    oQQO00 = oOO0QO;

                    if (oOQoQo > 0) {
                        oQQO00 -= 4;
                    }

                    OoQoOo = 3;
                    break;
                }

                case (67 - 51) / 16:
                {
                    var O0QOO0, O00QQO, QooOOo, oo0oOO;
                    var QOQooO, oQO0oO, oOO0QO, oOQoQo, oQQO00, ooOOOQ;
                    oOO0QO = oQ0o00["length"];

                    if (oOO0QO % 4 !== 0) {
                        return '';
                    }

                    OoQoOo = 2;
                    break;
                }

                case (132 - 87) / 15:
                {
                    oQQO00 = (oQQO00 >> 2) * 3 + oOQoQo;
                    ooOOOQ = new Array(oQQO00);
                    QOQooO = oQO0oO = 0;

                    while (QOQooO < oOO0QO) {
                        O0QOO0 = o00oQ0[oQ0o00["charCodeAt"](QOQooO++)];
                        if (O0QOO0 == -1) break;
                        O00QQO = o00oQ0[oQ0o00["charCodeAt"](QOQooO++)];
                        if (O00QQO == -1) break;
                        ooOOOQ[oQO0oO++] = String["fromCharCode"](O0QOO0 << 2 | (O00QQO & 48) >> 4);
                        QooOOo = o00oQ0[oQ0o00["charCodeAt"](QOQooO++)];
                        if (QooOOo == -1) break;
                        ooOOOQ[oQO0oO++] = String["fromCharCode"]((O00QQO & 15) << 4 | (QooOOo & 60) >> 2);
                        oo0oOO = o00oQ0[oQ0o00["charCodeAt"](QOQooO++)];
                        if (oo0oOO == -1) break;
                        ooOOOQ[oQO0oO++] = String["fromCharCode"]((QooOOo & 3) << 6 | oo0oOO);
                    }

                    OoQoOo = 4;
                    break;
                }

                case (89 - 69) / 5:
                {
                    return ooOOOQ["join"]('');
                    OoQoOo = 0;
                    break;
                }
            }
        }
    };
}();
var a = function (oQ0o00, OoQoOo) {
    OoQoOo = QOoQ0O(OoQoOo);
    return QO0Q0Q(oOQ0Q0(OOOOo0(OOOOoo(oQ0o00, false), O0Q0QQ(OOOOoo(OoQoOo, false))), true));
};
function distance(bgImageSplitSequence,imageGeneral) {
    return a(b(imageGeneral),bgImageSplitSequence);
}