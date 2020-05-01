e = {};
e.traceID = {
    headID: e.traceID && e.traceID.headID || "",
    flowID: e.traceID && e.traceID.flowID || "",
    cases: e.traceID && e.traceID.cases || "",
    initTraceID: function(e) {
        var t = this;
        e && e.length > 0 ? (t.headID = e.slice(0, 6),
            t.flowID = e.slice(6, 8)) : t.destory()
    },
    createTraceID: function() {
        var e = this;
        return e.headID + e.flowID + e.cases
    },
    startFlow: function(e) {
        var t = this
            , n = t.getFlowID(e);
        0 === t.flowID.length || t.flowID === n ? (t.createHeadID(),
            t.flowID = n) : t.finishFlow(n)
    },
    finishFlow: function() {
        var e = this;
        e.destory()
    },
    getRandom: function() {
        return parseInt(90 * Math.random() + 10, 10)
    },
    createHeadID: function() {
        var e = this
            , t = (new Date).getTime() + e.getRandom().toString()
            , n = Number(t).toString(16)
            , r = n.length
            , o = n.slice(r - 6, r).toUpperCase();
        e.headID = o
    },
    getTraceID: function(e) {
        var t = this
            , n = e && e.traceid || "";
        t.initTraceID(n)
    },
    getFlowID: function(e) {
        var t = {
            login: "01",
            reg: "02"
        };
        return t[e]
    },
    setData: function(e) {
        var t = this;
        return e.data ? e.data.traceid = t.createTraceID() : e.url = e.url + (e.url.indexOf("?") > -1 ? "&" : "?") + "traceid=" + t.createTraceID(),
            e
    },
    destory: function() {
        var e = this;
        e.headID = "",
            e.flowID = ""
    }
}
function getid(){
    e.traceID.startFlow('login')
    return e.traceID.createTraceID()
}
