var v_saf;!function(){var n=Function.toString,t=[],i=[],o=[].indexOf.bind(t),e=[].push.bind(t),r=[].push.bind(i);function u(n,t){return-1==o(n)&&(e(n),r(`function ${t||n.name||""}() { [native code] }`)),n}Object.defineProperty(Function.prototype,"toString",{enumerable:!1,configurable:!0,writable:!0,value:function(){return"function"==typeof this&&i[o(this)]||n.call(this)}}),u(Function.prototype.toString,"toString"),v_saf=u}();

function _inherits(t, e) {
    t.prototype = Object.create(e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 }
    }), e && Object.setPrototypeOf(t, e) }
Object.defineProperty(Object.prototype, Symbol.toStringTag, {
    get() { return Object.getPrototypeOf(this).constructor.name }, configurable:true,
});
var v_new_toggle = true
var v_new = function(v){var temp=v_new_toggle; v_new_toggle = true; var r = new v; v_new_toggle = temp; return r}

EventTarget = v_saf(function EventTarget(){;})
DOMTokenList = v_saf(function DOMTokenList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
NodeList = v_saf(function NodeList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
HTMLAllCollection = v_saf(function HTMLAllCollection(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
HTMLCollection = v_saf(function HTMLCollection(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
MessageChannel = v_saf(function MessageChannel(){;})
Event = v_saf(function Event(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Navigator = v_saf(function Navigator(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };this._plugins = typeof PluginArray=='undefined'?[]:v_new(PluginArray); this._mimeTypes = typeof MimeTypeArray=='undefined'?[]:v_new(MimeTypeArray)})
Storage = v_saf(function Storage(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Headers = v_saf(function Headers(){;})
PerformanceTiming = v_saf(function PerformanceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceEntry = v_saf(function PerformanceEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceObserver = v_saf(function PerformanceObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
IDBFactory = v_saf(function IDBFactory(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
URLSearchParams = v_saf(function URLSearchParams(){;})
StyleSheet = v_saf(function StyleSheet(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
CSSRuleList = v_saf(function CSSRuleList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
IntersectionObserver = v_saf(function IntersectionObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceObserverEntryList = v_saf(function PerformanceObserverEntryList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Blob = v_saf(function Blob(){;})
History = v_saf(function History(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
webkitURL = v_saf(function webkitURL(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Node = v_saf(function Node(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Node, EventTarget)
MessagePort = v_saf(function MessagePort(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MessagePort, EventTarget)
Performance = v_saf(function Performance(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Performance, EventTarget)
UIEvent = v_saf(function UIEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(UIEvent, Event)
IDBRequest = v_saf(function IDBRequest(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(IDBRequest, EventTarget)
CSSStyleSheet = v_saf(function CSSStyleSheet(){;}); _inherits(CSSStyleSheet, StyleSheet)
BroadcastChannel = v_saf(function BroadcastChannel(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(BroadcastChannel, EventTarget)
Screen = v_saf(function Screen(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Screen, EventTarget)
Document = v_saf(function Document(){;}); _inherits(Document, Node)
Element = v_saf(function Element(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Element, Node)
MouseEvent = v_saf(function MouseEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MouseEvent, UIEvent)
IDBOpenDBRequest = v_saf(function IDBOpenDBRequest(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(IDBOpenDBRequest, IDBRequest)
HTMLElement = v_saf(function HTMLElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLElement, Element)
PointerEvent = v_saf(function PointerEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PointerEvent, MouseEvent)
HTMLScriptElement = v_saf(function HTMLScriptElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLScriptElement, HTMLElement)
HTMLInputElement = v_saf(function HTMLInputElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLInputElement, HTMLElement)
HTMLCanvasElement = v_saf(function HTMLCanvasElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLCanvasElement, HTMLElement)
HTMLStyleElement = v_saf(function HTMLStyleElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLStyleElement, HTMLElement)
HTMLMetaElement = v_saf(function HTMLMetaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLMetaElement, HTMLElement)
HTMLLinkElement = v_saf(function HTMLLinkElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLLinkElement, HTMLElement)
Window = v_saf(function Window(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Window, EventTarget)
HTMLDocument = v_saf(function HTMLDocument(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };Object.defineProperty(this, 'location', {get(){return location}})}); _inherits(HTMLDocument, Document)
HTMLHeadElement = v_saf(function HTMLHeadElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHeadElement, HTMLElement)
HTMLBodyElement = v_saf(function HTMLBodyElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLBodyElement, HTMLElement)
PluginArray = v_saf(function PluginArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
    this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].filename="internal-pdf-viewer";this[0].length=2;this[0].name="PDF Viewer";
    this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].filename="internal-pdf-viewer";this[1].length=2;this[1].name="Chrome PDF Viewer";
    this[2]=v_new(Plugin);this[2].description="Portable Document Format";this[2].filename="internal-pdf-viewer";this[2].length=2;this[2].name="Chromium PDF Viewer";
    this[3]=v_new(Plugin);this[3].description="Portable Document Format";this[3].filename="internal-pdf-viewer";this[3].length=2;this[3].name="Microsoft Edge PDF Viewer";
    this[4]=v_new(Plugin);this[4].description="Portable Document Format";this[4].filename="internal-pdf-viewer";this[4].length=2;this[4].name="WebKit built-in PDF";})
Plugin = v_saf(function Plugin(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
MimeTypeArray = v_saf(function MimeTypeArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
    this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].enabledPlugin={"0":{},"1":{}};this[0].suffixes="pdf";this[0].type="application/pdf";
    this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].enabledPlugin={"0":{},"1":{}};this[1].suffixes="pdf";this[1].type="text/pdf";})
MimeType = v_saf(function MimeType(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
CSSStyleDeclaration = v_saf(function CSSStyleDeclaration(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Location = v_saf(function Location(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
WebGLRenderingContext = v_saf(function WebGLRenderingContext(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
    function WebGLBuffer(){}
    function WebGLProgram(){}
    function WebGLShader(){}
    this._toggle = {}
    this.createBuffer = function(){  return v_new(WebGLBuffer) }
    this.createProgram = function(){  return v_new(WebGLProgram) }
    this.createShader = function(){  return v_new(WebGLShader) }
    this.getSupportedExtensions = function(){
        return [
            "ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth",
            "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic", "EXT_sRGB",
            "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear",
            "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc",
            "WEBKIT_WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders",
            "WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture","WEBGL_draw_buffers","WEBGL_lose_context","WEBKIT_WEBGL_lose_context","WEBGL_multi_draw",
        ]
    }
    var self = this
    this.getExtension = function(key){
        class WebGLDebugRendererInfo{
            get UNMASKED_VENDOR_WEBGL(){self._toggle[37445]=1;return 37445}
            get UNMASKED_RENDERER_WEBGL(){self._toggle[37446]=1;return 37446}
        }
        class EXTTextureFilterAnisotropic{}
        class WebGLLoseContext{
            loseContext(){}
            restoreContext(){}
        }
        if (key == 'WEBGL_debug_renderer_info'){ var r = new WebGLDebugRendererInfo }
        if (key == 'EXT_texture_filter_anisotropic'){ var r = new EXTTextureFilterAnisotropic }
        if (key == 'WEBGL_lose_context'){ var r = new WebGLLoseContext }
        else{ var r = new WebGLDebugRendererInfo }
        return r
    }
    this.getParameter = function(key){
        if (this._toggle[key]){
            if (key == 37445){ return "Google Inc. (NVIDIA)" }
            if (key == 37446){ return "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5671)" }
        }else{
            if (key == 33902){ return new Float32Array([1,1]) }
            if (key == 33901){ return new Float32Array([1,1024]) }
            if (key == 35661){ return 32 }
            if (key == 34047){ return 16 }
            if (key == 34076){ return 16384 }
            if (key == 36349){ return 1024 }
            if (key == 34024){ return 16384 }
            if (key == 34930){ return 16 }
            if (key == 3379){ return 16384 }
            if (key == 36348){ return 30 }
            if (key == 34921){ return 16 }
            if (key == 35660){ return 16 }
            if (key == 36347){ return 4095 }
            if (key == 3386){ return new Int32Array([32767, 32767]) }
            if (key == 3410){ return 8 }
            if (key == 7937){ return "WebKit WebGL" }
            if (key == 35724){ return "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)" }
            if (key == 3415){ return 0 }
            if (key == 7936){ return "WebKit" }
            if (key == 7938){ return "WebGL 1.0 (OpenGL ES 2.0 Chromium)" }
            if (key == 3411){ return 8 }
            if (key == 3412){ return 8 }
            if (key == 3413){ return 8 }
            if (key == 3414){ return 24 }
            return null
        }
    }
    this.getContextAttributes = function(){
        return {
            alpha: true,
            antialias: true,
            depth: true,
            desynchronized: false,
            failIfMajorPerformanceCaveat: false,
            powerPreference: "default",
            premultipliedAlpha: true,
            preserveDrawingBuffer: false,
            stencil: false,
            xrCompatible: false,
        }
    }
    this.getShaderPrecisionFormat = function(a,b){
        function WebGLShaderPrecisionFormat(){}
        var r1 = v_new(WebGLShaderPrecisionFormat)
        r1.rangeMin = 127
        r1.rangeMax = 127
        r1.precision = 23
        var r2 = v_new(WebGLShaderPrecisionFormat)
        r2.rangeMin = 31
        r2.rangeMax = 30
        r2.precision = 0
        if (a == 35633 && b == 36338){ return r1 } if (a == 35633 && b == 36337){ return r1 } if (a == 35633 && b == 36336){ return r1 }
        if (a == 35633 && b == 36341){ return r2 } if (a == 35633 && b == 36340){ return r2 } if (a == 35633 && b == 36339){ return r2 }
        if (a == 35632 && b == 36338){ return r1 } if (a == 35632 && b == 36337){ return r1 } if (a == 35632 && b == 36336){ return r1 }
        if (a == 35632 && b == 36341){ return r2 } if (a == 35632 && b == 36340){ return r2 } if (a == 35632 && b == 36339){ return r2 }
        throw Error('getShaderPrecisionFormat')
    }
    v_saf(this.createBuffer, 'createBuffer')
    v_saf(this.createProgram, 'createProgram')
    v_saf(this.createShader, 'createShader')
    v_saf(this.getSupportedExtensions, 'getSupportedExtensions')
    v_saf(this.getExtension, 'getExtension')
    v_saf(this.getParameter, 'getParameter')
    v_saf(this.getContextAttributes, 'getContextAttributes')
    v_saf(this.getShaderPrecisionFormat, 'getShaderPrecisionFormat')})
CanvasRenderingContext2D = v_saf(function CanvasRenderingContext2D(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceElementTiming = v_saf(function PerformanceElementTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceElementTiming, PerformanceEntry)
PerformanceEventTiming = v_saf(function PerformanceEventTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceEventTiming, PerformanceEntry)
PerformanceLongTaskTiming = v_saf(function PerformanceLongTaskTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceLongTaskTiming, PerformanceEntry)
PerformanceMark = v_saf(function PerformanceMark(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMark, PerformanceEntry)
PerformanceMeasure = v_saf(function PerformanceMeasure(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMeasure, PerformanceEntry)
PerformanceNavigation = v_saf(function PerformanceNavigation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceResourceTiming = v_saf(function PerformanceResourceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceResourceTiming, PerformanceEntry)
PerformanceNavigationTiming = v_saf(function PerformanceNavigationTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceNavigationTiming, PerformanceResourceTiming)
PerformancePaintTiming = v_saf(function PerformancePaintTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformancePaintTiming, PerformanceEntry)
PerformanceServerTiming = v_saf(function PerformanceServerTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Image = v_saf(function Image(){;return v_new(HTMLImageElement)})
HTMLImageElement = v_saf(function HTMLImageElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLImageElement, HTMLElement)
HTMLMediaElement = v_saf(function HTMLMediaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLMediaElement, HTMLElement)
HTMLUnknownElement = v_saf(function HTMLUnknownElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLUnknownElement, HTMLElement)
XMLHttpRequestEventTarget = v_saf(function XMLHttpRequestEventTarget(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(XMLHttpRequestEventTarget, EventTarget)
XMLHttpRequest = v_saf(function XMLHttpRequest(){;}); _inherits(XMLHttpRequest, XMLHttpRequestEventTarget)
Touch = v_saf(function Touch(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
TouchEvent = v_saf(function TouchEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(TouchEvent, UIEvent)
HTMLHtmlElement = v_saf(function HTMLHtmlElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHtmlElement, HTMLElement)
HTMLDivElement = v_saf(function HTMLDivElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLDivElement, HTMLElement)
HTMLTitleElement = v_saf(function HTMLTitleElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTitleElement, HTMLElement)
Object.defineProperties(EventTarget.prototype, {
    removeEventListener: {value: v_saf(function removeEventListener(){})},
    [Symbol.toStringTag]: {value:"EventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMTokenList.prototype, {
    length: {get(){ return 0 }},
    add: {value: v_saf(function add(){})},
    contains: {value: v_saf(function contains(){})},
    toggle: {value: v_saf(function toggle(){})},
    [Symbol.toStringTag]: {value:"DOMTokenList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(NodeList.prototype, {
    length: {get(){ return 0 }},
    [Symbol.toStringTag]: {value:"NodeList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLAllCollection.prototype, {
    length: {get(){ return 177 }},
    [Symbol.toStringTag]: {value:"HTMLAllCollection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCollection.prototype, {
    length: {get(){ return 21 }},
    [Symbol.toStringTag]: {value:"HTMLCollection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MessageChannel.prototype, {
    port2: {get(){ return {} }},
    port1: {get(){ return {} }},
    [Symbol.toStringTag]: {value:"MessageChannel",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Event.prototype, {
    target: {get(){ return {} }},
    eventPhase: {get(){ return 3 }},
    bubbles: {get(){ return true }},
    cancelable: {get(){ return true }},
    timeStamp: {get(){ return 517351.59999990463 }},
    defaultPrevented: {get(){ return false }},
    type: {get(){ return "pointermove" }},
    NONE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
    CAPTURING_PHASE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    AT_TARGET: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    BUBBLING_PHASE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"Event",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Navigator.prototype, {
    userAgent: {get(){ return "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36" }},
    platform: {get(){ return "MacIntel" }},
    webdriver: {get(){ return false }},
    language: {get(){ return "zh-CN" }},
    [Symbol.toStringTag]: {value:"Navigator",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Storage.prototype, {
    [Symbol.toStringTag]: {value:"Storage",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Headers.prototype, {
    set: {value: v_saf(function set(){})},
    has: {value: v_saf(function has(){})},
    get: {value: v_saf(function get(){})},
    [Symbol.toStringTag]: {value:"Headers",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceTiming.prototype, {
    navigationStart: {get(){ return 1748921561716 }},
    [Symbol.toStringTag]: {value:"PerformanceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceEntry.prototype, {
    name: {get(){ return "first-contentful-paint" }},
    startTime: {get(){ return 1624 }},
    duration: {get(){ return 515442 }},
    [Symbol.toStringTag]: {value:"PerformanceEntry",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceObserver.prototype, {
    observe: {value: v_saf(function observe(){})},
    [Symbol.toStringTag]: {value:"PerformanceObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(IDBFactory.prototype, {
    open: {value: v_saf(function open(){})},
    [Symbol.toStringTag]: {value:"IDBFactory",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(URLSearchParams.prototype, {
    toString: {value: v_saf(function toString(){})},
    forEach: {value: v_saf(function forEach(){})},
    get: {value: v_saf(function get(){})},
    has: {value: v_saf(function has(){})},
    [Symbol.toStringTag]: {value:"URLSearchParams",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(StyleSheet.prototype, {
    [Symbol.toStringTag]: {value:"StyleSheet",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSRuleList.prototype, {
    length: {get(){ return 10 }},
    [Symbol.toStringTag]: {value:"CSSRuleList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(IntersectionObserver.prototype, {
    observe: {value: v_saf(function observe(){})},
    [Symbol.toStringTag]: {value:"IntersectionObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceObserverEntryList.prototype, {
    getEntries: {value: v_saf(function getEntries(){})},
    [Symbol.toStringTag]: {value:"PerformanceObserverEntryList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Blob.prototype, {
    size: {get(){ return 100 }},
    [Symbol.toStringTag]: {value:"Blob",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(History.prototype, {
    state: {get(){ return {} }},
    [Symbol.toStringTag]: {value:"History",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(webkitURL.prototype, {
    searchParams: {get(){ return {} }},
    pathname: {get(){ return "/udid" },set(){ return "/udid" }},
    href: {get(){ return "http://a/c%20d?a=1&c=3" }},
    username: {get(){ return "a" }},
    host: {get(){ return "x" }},
    hash: {get(){ return "#%D0%B1" }},
    search: {get(){ return "" }},
    hostname: {get(){ return "www.zhihu.com" }},
    [Symbol.toStringTag]: {value:"webkitURL",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Node.prototype, {
    appendChild: {value: v_saf(function appendChild(){})},
    nodeType: {get(){ return 1 }},
    ownerDocument: {get(){ return {} }},
    firstChild: {get(){ return {} }},
    nextSibling: {get(){ return {} }},
    nodeName: {get(){ return "DIV" }},
    removeChild: {value: v_saf(function removeChild(){})},
    textContent: {get(){ return "{\"initialState\":{\"common\":{\"ask\":{},\"cities\":{\"cityData\":[]}},\"loading\":{\"global\":{\"count\":0},\"local\":{}},\"entities\":{\"users\":{},\"questions\":{},\"answers\":{},\"articles\":{},\"columns\":{},\"topics\":{},\"roundtables\":{},\"favlists\":{},\"comments\":{},\"notifications\":{},\"ebooks\":{},\"activities\":{},\"feeds\":{},\"pins\":{},\"promotions\":{},\"drafts\":{},\"chats\":{},\"posts\":{},\"zvideos\":{},\"eduCourses\":{}},\"currentUser\":\"\",\"account\":{\"unlockTicketStatus\":false,\"unlockTicket\":null,\"challenge\":[],\"errorStatus\":false,\"message\":\"\",\"isFetching\":false,\"accountInfo\":{},\"urlToken\":{\"loading\":false},\"cardUserInfo\":{\"vipInfo\":{}},\"handleWidget\":{},\"widgetList\":[],\"userWidgetId\":\"\"},\"settings\":{\"socialBind\":null,\"inboxMsg\":null,\"notification\":{},\"email\":{},\"privacyFlag\":null,\"blockedUsers\":{\"isFetching\":false,\"paging\":{\"pageNo\":1,\"pageSize\":6},\"data\":[]},\"blockedFollowees\":{\"isFetching\":false,\"paging\":{\"pageNo\":1,\"pageSize\":6},\"data\":[]},\"ignoredTopics\":{\"isFetching\":false,\"paging\":{\"pageNo\":1,\"pageSize\":6},\"data\":[]},\"restrictedTopics\":null,\"laboratory\":{}},\"notification\":{},\"people\":{\"profileStatus\":{},\"activitiesByUser\":{},\"answersByUser\":{},\"answersSortByVotesByUser\":{},\"answersIncludedByUser\":{},\"votedAnswersByUser\":{},\"thankedAnswersByUser\":{},\"voteAnswersByUser\":{},\"thankAnswersByUser\":{},\"topicAnswersByUser\":{},\"zvideosByUser\":{},\"articlesByUser\":{},\"articlesSortByVotesByUser\":{},\"articlesIncludedByUser\":{},\"pinsByUser\":{},\"questionsByUser\":{},\"commercialQuestionsByUser\":{},\"favlistsByUser\":{},\"followingByUser\":{},\"followersByUser\":{},\"mutualsByUser\":{},\"followingColumnsByUser\":{},\"followingQuestionsByUser\":{},\"followingFavlistsByUser\":{},\"followingTopicsByUser\":{},\"publicationsByUser\":{},\"columnsByUser\":{},\"allFavlistsByUser\":{},\"brands\":null,\"creationsByUser\":{},\"creationsSortByVotesByUser\":{},\"creationsFeed\":{},\"infinity\":{},\"batchUsers\":{},\"profileInfinity\":null},\"env\":{\"abV2\":{\"config\":{\"paramMap\":{\"ws_column_card\":{\"value\":\"2\",\"abId\":\"rl-column_card_pc-2\"},\"ws_column_square\":{\"value\":\"1\",\"abId\":\"rl-column_square_pc-1\"},\"ws_new_call\":{\"value\":\"1\",\"abId\":\"rl-mobileweb_call-1\"},\"wm_pin_upvote_web\":{\"value\":\"0\"},\"ws_hot_activate\":{\"value\":\"0\",\"abId\":\"hot_activate-0\"},\"pc_mou_cre_remove\":{\"value\":\"0\"},\"ws_pop_activate\":{\"value\":\"1\",\"abId\":\"pop_activate-1\"}},\"abMap\":{\"rl-column_card_pc-2\":{\"abId\":\"rl-column_card_pc-2\",\"layerId\":\"rl-column_card_pc\"},\"rl-column_square_pc-1\":{\"abId\":\"rl-column_square_pc-1\",\"layerId\":\"rl-column_square_pc\"},\"rl-mobileweb_call-1\":{\"abId\":\"rl-mobileweb_call-1\",\"layerId\":\"rl-mobileweb_call\"},\"hot_activate-0\":{\"abId\":\"hot_activate-0\",\"layerId\":\"web_standard_domain_layer8\"},\"pop_activate-1\":{\"abId\":\"pop_activate-1\",\"layerId\":\"pop_activate_layer\"}}},\"triggers\":{}},\"userAgent\":{\"Edge\":false,\"IE\":false,\"Wechat\":false,\"Weibo\":false,\"QQ\":false,\"MQQBrowser\":false,\"Qzone\":false,\"Mobile\":false,\"Android\":false,\"HarmonyOS\":false,\"iOS\":false,\"isAppleDevice\":true,\"Zhihu\":false,\"ZhihuHybrid\":false,\"isBot\":false,\"Tablet\":false,\"UC\":false,\"Quark\":false,\"Sogou\":false,\"Qihoo\":false,\"Baidu\":false,\"BaiduApp\":false,\"Safari\":false,\"GoogleBot\":false,\"AndroidDaily\":false,\"iOSDaily\":false,\"Zhixuetang\":false,\"WxMiniProgram\":false,\"BaiduMiniProgram\":false,\"QQMiniProgram\":false,\"JDMiniProgram\":false,\"OpenHarmony\":false,\"isWebView\":false,\"isMiniProgram\":false,\"origin\":\"Mozilla\\u002F5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit\\u002F537.36 (KHTML, like Gecko) Chrome\\u002F137.0.0.0 Safari\\u002F537.36\"},\"appViewConfig\":{},\"ctx\":{\"path\":\"\\u002Fsignin\",\"query\":{\"next\":\"\\u002F\"},\"href\":\"http:\\u002F\\u002Fwww.zhihu.com\\u002Fsignin?next=%2F\",\"host\":\"www.zhihu.com\"},\"trafficSource\":\"production\",\"edition\":{\"beijing\":false,\"baidu\":false,\"sogou\":false,\"baiduBeijing\":false,\"sogouBeijing\":false,\"sogouInput\":false,\"oppoSearch\":false,\"baiduSearch\":false,\"googleSearch\":false,\"shenma\":false,\"miniProgram\":false,\"xiaomi\":false,\"huaweiSearch\":false},\"theme\":\"light\",\"appHeaderTheme\":{\"current\":\"normal\",\"disable\":true,\"normal\":{\"bgColor\":\"GBK99A\"},\"custom\":{\"bgColor\":\"GBK99A\"}},\"enableShortcut\":true,\"referer\":\"\",\"xUDId\":\"\",\"mode\":\"ssr\",\"conf\":{},\"xTrafficFreeOrigin\":\"\",\"ipInfo\":{},\"logged\":false,\"query\":{},\"vars\":{\"passThroughHeaders\":{}}},\"me\":{\"columnContributions\":[]},\"label\":{},\"ecommerce\":{},\"comments\":{\"pagination\":{},\"collapsed\":{},\"reverse\":{},\"reviewing\":{},\"conversation\":{},\"parent\":{}},\"commentsV2\":{\"stickers\":[],\"commentWithPicPermission\":{},\"notificationsComments\":{},\"pagination\":{},\"collapsed\":{},\"reverse\":{},\"reviewing\":{},\"conversation\":{},\"conversationMore\":{},\"parent\":{}},\"pushNotifications\":{\"default\":{\"isFetching\":false,\"isDrained\":false,\"ids\":[]},\"follow\":{\"isFetching\":false,\"isDrained\":false,\"ids\":[]},\"vote_thank\":{\"isFetching\":false,\"isDrained\":false,\"ids\":[]},\"currentTab\":\"default\",\"notificationsCount\":{\"default\":0,\"follow\":0,\"vote_thank\":0}},\"messages\":{\"data\":{},\"currentTab\":\"common\",\"messageCount\":0},\"register\":{\"registerValidateSucceeded\":null,\"registerValidateErrors\":{},\"registerConfirmError\":null,\"sendDigitsError\":null,\"registerConfirmSucceeded\":null},\"login\":{\"loginUnregisteredError\":false,\"loginBindWechatError\":false,\"loginConfirmError\":null,\"sendDigitsError\":null,\"needSMSIdentify\":false,\"validateDigitsError\":false,\"loginConfirmSucceeded\":null,\"qrcodeLoginToken\":\"\",\"qrcodeLoginScanStatus\":0,\"qrcodeLoginError\":null,\"qrcodeLoginReturnNewToken\":false},\"switches\":{},\"captcha\":{\"captchaNeeded\":false,\"captchaValidated\":false},\"sms\":{\"supportedCountries\":[]},\"chat\":{\"chats\":{},\"inbox\":{\"recents\":{\"isFetching\":false,\"isDrained\":false,\"isPrevDrained\":false,\"result\":[],\"next\":null,\"key\":null},\"strangers\":{\"isFetching\":false,\"isDrained\":false,\"isPrevDrained\":false,\"result\":[],\"next\":null,\"key\":null},\"friends\":{\"isFetching\":false,\"isDrained\":false,\"isPrevDrained\":false,\"result\":[],\"next\":null,\"key\":null},\"search\":{\"isFetching\":false,\"isDrained\":false,\"isPrevDrained\":false,\"result\":[],\"next\":null,\"key\":null},\"config\":{\"newCount\":0,\"strangerMessageSwitch\":false,\"strangerMessageUnread\":false,\"friendCount\":0}},\"global\":{\"isChatMqttExisted\":false}},\"emoticons\":{\"emoticonGroupList\":[],\"emoticonGroupDetail\":{}},\"creator\":{\"tools\":{\"question\":{\"invitationCount\":{\"questionFolloweeCount\":0,\"questionTotalCount\":0}},\"recommend\":{\"recommendTimes\":{}}},\"explore\":{},\"levelUpperLimit\":10,\"mcn\":{},\"mcnManage\":{},\"tasks\":{},\"announcement\":{},\"creatorsRecommendInfo\":{}},\"creators\":{\"common\":{\"applyStatus\":{},\"rightsStatus\":{}},\"bayesDomains\":{\"status\":{},\"options\":{\"topDomains\":null,\"allDomains\":null,\"editable\":0},\"contents\":null},\"school\":{\"tabs\":[],\"contents\":[],\"banner\":null,\"entities\":{}},\"faq\":{\"tabs\":[],\"article\":{}},\"knowledgeIncome\":{},\"safeguardRights\":{},\"analytics\":{\"all\":{},\"answer\":{},\"zvideo\":{},\"article\":{},\"pin\":{},\"singleContent\":{}},\"account\":{\"growthLevel\":{}},\"KMResource\":{},\"training\":{},\"ToolsQuestion\":{\"goodatTopics\":[]},\"ToolsHotspot\":{\"domains\":[]},\"ToolsRecommend\":{},\"ToolsCustomPromotion\":{\"itemLists\":{},\"baseInfo\":{}},\"ToolsSearchQuestion\":{},\"editorSetting\":{},\"MCNManage\":{},\"knowledgeTasks\":{},\"incomeAnalysis\":{\"income\":{\"aggregation\":{}}},\"creationManage\":{\"editModal\":{\"status\":false}},\"activity\":{},\"announcement\":{},\"home\":{\"currentCreatorUrlToken\":null,\"rights\":[],\"newRights\":[],\"scoreInfo\":{},\"menusShowControlByServer\":{\"bVipRecomend\":false,\"creationRelationship\":false},\"newTasks\":{\"creatorTask\":{\"tasks\":[],\"des\":[]}},\"bannerList\":[],\"recentlyCreated\":[],\"homecard\":{},\"homeData\":{}},\"videoSupport\":{\"textBenefit\":{}},\"videoDistribution\":{},\"profilePoster\":{\"creatorPosterConfig\":{},\"creatorPosterData\":{}}},\"question\":{\"followers\":{},\"concernedFollowers\":{},\"answers\":{},\"hiddenAnswers\":{},\"updatedAnswers\":{},\"ariaAnswers\":{},\"collapsedAnswers\":{},\"notificationAnswers\":{},\"invitedQuestions\":{\"total\":{\"count\":null,\"isEnd\":false,\"isLoading\":false,\"questions\":[]},\"followees\":{\"count\":null,\"isEnd\":false,\"isLoading\":false,\"questions\":[]}},\"laterQuestions\":{\"count\":null,\"isEnd\":false,\"isLoading\":false,\"questions\":[]},\"waitingQuestions\":{\"recommend\":{\"isEnd\":false,\"isLoading\":false,\"questions\":[]},\"invite\":{\"isEnd\":false,\"isLoading\":false,\"questions\":[]},\"newest\":{\"isEnd\":false,\"isLoading\":false,\"questions\":[]},\"hot\":{\"isEnd\":false,\"isLoading\":false,\"questions\":[]}},\"invitationCandidates\":{},\"inviters\":{},\"invitees\":{},\"similarQuestions\":{},\"questionBanners\":{},\"relatedCommodities\":{},\"bio\":{},\"brand\":{},\"permission\":{},\"adverts\":{},\"advancedStyle\":{},\"commonAnswerCount\":0,\"hiddenAnswerCount\":0,\"topicMeta\":{\"isLoading\":{}},\"bluestarRanklist\":{},\"relatedSearch\":{},\"autoInvitation\":{},\"simpleConcernedFollowers\":{},\"draftStatus\":{},\"disclaimers\":{},\"isShowMobileSignInModal\":false},\"shareTexts\":{},\"answers\":{\"voters\":{},\"upvoters\":{},\"copyrightApplicants\":{},\"favlists\":{},\"newAnswer\":{},\"entityWords\":{},\"paidContent\":{},\"settings\":{},\"relationEndorsement\":{},\"growthCardOrder\":{}},\"banner\":{},\"topic\":{\"bios\":{},\"hot\":{},\"newest\":{},\"top\":{},\"sticky\":{},\"pin\":{},\"unanswered\":{},\"questions\":{},\"zivdeo\":{},\"zvideo-new\":{},\"pin20\":{},\"pin20-new\":{},\"followers\":{},\"contributors\":{},\"parent\":{},\"children\":{},\"bestAnswerers\":{},\"wikiMeta\":{},\"index\":{},\"intro\":{},\"meta\":{},\"schema\":{},\"creatorWall\":{},\"wikiEditInfo\":{},\"committedWiki\":{},\"landingBasicData\":{},\"landingExcellentItems\":[],\"landingExcellentEditors\":[],\"landingCatalog\":[],\"landingEntries\":{}},\"explore\":{\"recommendations\":{},\"specials\":{\"entities\":{},\"order\":[]},\"roundtables\":{\"entities\":{},\"order\":[]},\"collections\":{},\"columns\":{},\"square\":{\"hotQuestionList\":[],\"potentialList\":[]}},\"articles\":{\"voters\":{},\"upvoters\":{},\"relationEndorsement\":{}},\"favlists\":{\"relations\":{}},\"pins\":{\"reviewing\":{},\"upvoters\":{},\"relationEndorsement\":{}},\"topstory\":{\"recommend\":{\"isFetching\":false,\"isDrained\":false,\"afterId\":0,\"items\":[],\"next\":null},\"follow\":{\"isFetching\":false,\"isDrained\":false,\"afterId\":0,\"items\":[],\"next\":null},\"followWonderful\":{\"isFetching\":false,\"isDrained\":false,\"afterId\":0,\"items\":[],\"next\":null},\"sidebar\":null,\"announcement\":{},\"hotList\":[],\"hotListHeadZone\":[],\"guestFeeds\":{\"isFetching\":false,\"isDrained\":false,\"afterId\":0,\"items\":[],\"next\":null},\"followExtra\":{\"isNewUser\":null,\"isFetched\":false,\"followCount\":0,\"followers\":[]},\"hotDaily\":{\"data\":[],\"paging\":{}},\"hotHighlight\":{\"isFetching\":false,\"isDrained\":false,\"data\":[],\"paging\":{}},\"banner\":{},\"commercialBanner\":{\"show\":false,\"banner\":{},\"trackData\":{}},\"video\":{\"items\":[],\"next\":null,\"isLoading\":false,\"isDrained\":false}},\"upload\":{},\"video\":{\"data\":{},\"shareVideoDetail\":{},\"last\":{}},\"zvideos\":{\"campaignVideoList\":{},\"campaigns\":{},\"tagoreCategory\":[],\"recommendations\":{},\"insertable\":{},\"recruit\":{\"form\":{\"platform\":\"\",\"nickname\":\"\",\"followerCount\":\"\",\"domain\":\"\",\"contact\":\"\"},\"submited\":false,\"ranking\":[]},\"qyActivityData\":{},\"talkActivityData\":{},\"party2022ActivityData\":{},\"batchVideos\":{},\"creationReferences\":{},\"zvideoCollection\":{},\"zvideoGrant\":{},\"collectData\":{\"isFetching\":false,\"list\":[]},\"videoSource\":{\"isLoaded\":false},\"paidColumnInfo\":{}},\"guide\":{\"guide\":{\"isFetching\":false,\"isShowGuide\":false}},\"reward\":{\"answer\":{},\"article\":{},\"question\":{}},\"search\":{\"recommendSearch\":[],\"topSearch\":{},\"searchValue\":{},\"suggestSearch\":{},\"attachedInfo\":{\"generalByQuery\":{}},\"nextOffset\":{\"generalByQuery\":{}},\"topicReview\":{},\"sidebar\":{},\"calendar\":{},\"scores\":null,\"majors\":{},\"university\":{},\"generalByQuery\":{},\"generalByQueryInADay\":{},\"generalByQueryInAWeek\":{},\"generalByQueryInThreeMonths\":{},\"peopleByQuery\":{},\"topicByQuery\":{},\"zvideoByQuery\":{},\"scholarByQuery\":{},\"columnByQuery\":{},\"liveByQuery\":{},\"albumByQuery\":{},\"eBookByQuery\":{},\"kmGeneralByQuery\":{},\"kmCourseByQuery\":{},\"favlistByQuery\":{},\"customFilter\":{\"requestFinished\":false,\"keys\":[],\"tags\":[]},\"zhidaRelatedQuestions\":{\"isLoading\":false,\"data\":[],\"showZhidaRelatedQuestionsCard\":false}},\"creatorSalt\":{\"recommendQuestionList\":[],\"bannerList\":[],\"claimBannerList\":[],\"sites\":[],\"domains\":{},\"hasRecored\":false,\"hasClaim\":false,\"hasContributedList\":[],\"notContributedList\":[],\"contributesTotal\":null,\"previewPageTitle\":\"\",\"previewPageContent\":\"\",\"restContributionNumber\":\"-\"},\"publicEditPermission\":{},\"readStatus\":{},\"draftHistory\":{\"history\":{},\"drafts\":{}},\"notifications\":{\"recent\":{\"isFetching\":false,\"isDrained\":false,\"isPrevDrained\":false,\"result\":[],\"next\":null,\"key\":null},\"history\":{\"isFetching\":false,\"isDrained\":false,\"isPrevDrained\":false,\"result\":[],\"next\":null,\"key\":null},\"notificationActors\":{\"isFetching\":false,\"isDrained\":false,\"isPrevDrained\":false,\"result\":[],\"next\":null,\"key\":null},\"recentNotificationEntry\":\"all\"},\"specials\":{\"entities\":{},\"all\":{\"data\":[],\"paging\":{},\"isLoading\":false}},\"collections\":{\"hot\":{\"data\":[],\"paging\":{},\"isLoading\":false,\"errorPayload\":null},\"collectionFeeds\":{}},\"userProfit\":{\"permission\":{\"permissionStatus\":{\"zhiZixuan\":0,\"recommend\":-1,\"task\":0,\"plugin\":0,\"infinity\":0},\"visible\":false},\"linkCardLimit\":0},\"mcn\":{\"bindInfo\":{},\"memberCategoryList\":[],\"producerList\":[],\"categoryList\":[],\"lists\":{},\"banners\":{},\"protocolStatus\":{\"isAgreedNew\":true,\"isAgreedOld\":true},\"probationCountdownDays\":0},\"mcnActivity\":{\"household\":{\"products\":{},\"rankList\":{\"total\":{},\"yesterday\":{}}}},\"brand\":{\"contentPlugin\":{}},\"host\":{\"roundtable\":{\"subjects\":{},\"applications\":{\"total\":0},\"online\":{\"total\":0},\"applies\":{},\"details\":{},\"includedResource\":{},\"hotQuestions\":{},\"warmupContents\":{},\"batchInclude\":{}},\"special\":{\"applications\":{\"total\":0,\"pages\":{},\"entities\":{}},\"censorHistory\":{},\"drafts\":{}}},\"campaign\":{\"single\":{},\"list\":{},\"videoMakerAcq\":{},\"vote\":{},\"cardCollecting\":{\"message\":null,\"profile\":{\"balance\":\"0\",\"chance\":0,\"coinNum\":0,\"gatherClose\":false,\"isGotMagicCard\":false,\"isPay\":false,\"partitionStart\":false,\"totalDone\":0,\"withdrawStart\":false},\"sharePoster\":{\"share\":\"\",\"sendCard\":\"\",\"invite\":\"\"},\"shareLink\":null,\"shareIntention\":\"share\",\"shareKey\":null,\"shareCardId\":null,\"inviterInfo\":null,\"giverInfo\":null,\"prize\":null,\"receivedCard\":null,\"newCoinCount\":null,\"newCardList\":[],\"newUserCardCount\":1,\"taskList\":[],\"prizeList\":null,\"cardList\":null,\"panel\":{\"showTaskPanel\":false,\"showRewardPanel\":false},\"modal\":{\"showWelcomeModal\":false,\"showFusionModal\":false,\"showFusionPromptModal\":false,\"showShareModal\":false,\"showBackModal\":false}},\"zhiboPandian2020\":null,\"boarding\":{},\"searchGaokaoSubPage\":{},\"searchHealth\":{}},\"knowledgePlan\":{\"lists\":{},\"allCreationRankList\":{},\"featuredQuestions\":{}},\"wallE\":{\"protectHistory\":{\"total\":0,\"pages\":{},\"entities\":{}}},\"roundtables\":{\"hotQuestions\":{},\"warmupContents\":{},\"hotDiscussions\":{},\"selectedContents\":{},\"roundtables\":{}},\"helpCenter\":{\"entities\":{\"question\":{},\"category\":{}},\"categories\":[],\"commonQuestions\":[],\"relatedQuestions\":{},\"faqTypes\":[]},\"republish\":{},\"commercialReport\":{\"commercialTypes\":[]},\"creatorMCN\":{\"mcn\":{},\"mcnStatistics\":{},\"mcnRight\":{\"bind\":false,\"coupon\":false},\"isNoAuth\":false,\"creatorManageData\":[],\"creatorManageDataTotal\":1,\"mcnDomains\":[],\"bill\":{\"list\":{},\"detail\":{}},\"healthScore\":{\"healthScore\":\"0\",\"updateTime\":\"\",\"evaluate\":\"\"},\"healthScoreRecordInfo\":{},\"beforeDownloadCheckResult\":{},\"beforePromotionData\":[],\"afterPromotionData\":[]},\"commentManage\":{\"commentList\":{\"ids\":[],\"entities\":{},\"nextOffset\":0,\"urlToken\":\"\"},\"subCommentList\":{\"ids\":[],\"entities\":{},\"paging\":{\"next\":\"\",\"isEnd\":false}}},\"commentPermission\":{},\"creatorRightStatus\":{\"list\":[]},\"zhiPlus\":{\"permissionStatus\":9999},\"streaming\":{},\"creationRanking\":{},\"eduSections\":{\"eduSectionState\":{}},\"adPromotion\":{\"answer\":{},\"article\":{}},\"editVideo\":{\"editVideoEnabled\":false},\"zhidaEntry\":{\"sidebar\":{\"answer\":{},\"question\":{}},\"answerBottom\":{}},\"guideZhidaCard\":{\"cardStatus\":{\"isShowGuideZhidaCard\":false,\"guideZhidaCardInView\":false,\"isClickedBeforeAbIndex\":false,\"isManualClose\":false,\"clickedPosition\":-1}},\"hotSpot\":{},\"contentColumnCard\":{},\"rings\":{\"rankList\":{},\"membersList\":{},\"membersListPaging\":{}}},\"subAppName\":\"main\",\"spanName\":\"SignInHomepage\",\"canaryConfig\":{\"test_canary\":\"0\",\"use_new_player\":\"0\",\"player_vendor\":\"0\",\"use_hevc\":\"0\",\"upload_use_signature\":\"0\",\"use_backdrop_blur\":\"0\",\"article_title_imagex\":\"0\",\"play_station\":\"0\",\"use_cached_supported_countries\":\"1\"}}" },set(){ return "{\"initialState\":{\"common\":{\"ask\":{},\"cities\":{\"cityData\":[]}},\"loading\":{\"global\":{\"count\":0},\"local\":{}},\"entities\":{\"users\":{},\"questions\":{},\"answers\":{},\"articles\":{},\"columns\":{},\"topics\":{},\"roundtables\":{},\"favlists\":{},\"comments\":{},\"notifications\":{},\"ebooks\":{},\"activities\":{},\"feeds\":{},\"pins\":{},\"promotions\":{},\"drafts\":{},\"chats\":{},\"posts\":{},\"zvideos\":{},\"eduCourses\":{}},\"currentUser\":\"\",\"account\":{\"unlockTicketStatus\":false,\"unlockTicket\":null,\"challenge\":[],\"errorStatus\":false,\"message\":\"\",\"isFetching\":false,\"accountInfo\":{},\"urlToken\":{\"loading\":false},\"cardUserInfo\":{\"vipInfo\":{}},\"handleWidget\":{},\"widgetList\":[],\"userWidgetId\":\"\"},\"settings\":{\"socialBind\":null,\"inboxMsg\":null,\"notification\":{},\"email\":{},\"privacyFlag\":null,\"blockedUsers\":{\"isFetching\":false,\"paging\":{\"pageNo\":1,\"pageSize\":6},\"data\":[]},\"blockedFollowees\":{\"isFetching\":false,\"paging\":{\"pageNo\":1,\"pageSize\":6},\"data\":[]},\"ignoredTopics\":{\"isFetching\":false,\"paging\":{\"pageNo\":1,\"pageSize\":6},\"data\":[]},\"restrictedTopics\":null,\"laboratory\":{}},\"notification\":{},\"people\":{\"profileStatus\":{},\"activitiesByUser\":{},\"answersByUser\":{},\"answersSortByVotesByUser\":{},\"answersIncludedByUser\":{},\"votedAnswersByUser\":{},\"thankedAnswersByUser\":{},\"voteAnswersByUser\":{},\"thankAnswersByUser\":{},\"topicAnswersByUser\":{},\"zvideosByUser\":{},\"articlesByUser\":{},\"articlesSortByVotesByUser\":{},\"articlesIncludedByUser\":{},\"pinsByUser\":{},\"questionsByUser\":{},\"commercialQuestionsByUser\":{},\"favlistsByUser\":{},\"followingByUser\":{},\"followersByUser\":{},\"mutualsByUser\":{},\"followingColumnsByUser\":{},\"followingQuestionsByUser\":{},\"followingFavlistsByUser\":{},\"followingTopicsByUser\":{},\"publicationsByUser\":{},\"columnsByUser\":{},\"allFavlistsByUser\":{},\"brands\":null,\"creationsByUser\":{},\"creationsSortByVotesByUser\":{},\"creationsFeed\":{},\"infinity\":{},\"batchUsers\":{},\"profileInfinity\":null},\"env\":{\"abV2\":{\"config\":{\"paramMap\":{\"ws_column_card\":{\"value\":\"2\",\"abId\":\"rl-column_card_pc-2\"},\"ws_column_square\":{\"value\":\"1\",\"abId\":\"rl-column_square_pc-1\"},\"ws_new_call\":{\"value\":\"1\",\"abId\":\"rl-mobileweb_call-1\"},\"wm_pin_upvote_web\":{\"value\":\"0\"},\"ws_hot_activate\":{\"value\":\"0\",\"abId\":\"hot_activate-0\"},\"pc_mou_cre_remove\":{\"value\":\"0\"},\"ws_pop_activate\":{\"value\":\"1\",\"abId\":\"pop_activate-1\"}},\"abMap\":{\"rl-column_card_pc-2\":{\"abId\":\"rl-column_card_pc-2\",\"layerId\":\"rl-column_card_pc\"},\"rl-column_square_pc-1\":{\"abId\":\"rl-column_square_pc-1\",\"layerId\":\"rl-column_square_pc\"},\"rl-mobileweb_call-1\":{\"abId\":\"rl-mobileweb_call-1\",\"layerId\":\"rl-mobileweb_call\"},\"hot_activate-0\":{\"abId\":\"hot_activate-0\",\"layerId\":\"web_standard_domain_layer8\"},\"pop_activate-1\":{\"abId\":\"pop_activate-1\",\"layerId\":\"pop_activate_layer\"}}},\"triggers\":{}},\"userAgent\":{\"Edge\":false,\"IE\":false,\"Wechat\":false,\"Weibo\":false,\"QQ\":false,\"MQQBrowser\":false,\"Qzone\":false,\"Mobile\":false,\"Android\":false,\"HarmonyOS\":false,\"iOS\":false,\"isAppleDevice\":true,\"Zhihu\":false,\"ZhihuHybrid\":false,\"isBot\":false,\"Tablet\":false,\"UC\":false,\"Quark\":false,\"Sogou\":false,\"Qihoo\":false,\"Baidu\":false,\"BaiduApp\":false,\"Safari\":false,\"GoogleBot\":false,\"AndroidDaily\":false,\"iOSDaily\":false,\"Zhixuetang\":false,\"WxMiniProgram\":false,\"BaiduMiniProgram\":false,\"QQMiniProgram\":false,\"JDMiniProgram\":false,\"OpenHarmony\":false,\"isWebView\":false,\"isMiniProgram\":false,\"origin\":\"Mozilla\\u002F5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit\\u002F537.36 (KHTML, like Gecko) Chrome\\u002F137.0.0.0 Safari\\u002F537.36\"},\"appViewConfig\":{},\"ctx\":{\"path\":\"\\u002Fsignin\",\"query\":{\"next\":\"\\u002F\"},\"href\":\"http:\\u002F\\u002Fwww.zhihu.com\\u002Fsignin?next=%2F\",\"host\":\"www.zhihu.com\"},\"trafficSource\":\"production\",\"edition\":{\"beijing\":false,\"baidu\":false,\"sogou\":false,\"baiduBeijing\":false,\"sogouBeijing\":false,\"sogouInput\":false,\"oppoSearch\":false,\"baiduSearch\":false,\"googleSearch\":false,\"shenma\":false,\"miniProgram\":false,\"xiaomi\":false,\"huaweiSearch\":false},\"theme\":\"light\",\"appHeaderTheme\":{\"current\":\"normal\",\"disable\":true,\"normal\":{\"bgColor\":\"GBK99A\"},\"custom\":{\"bgColor\":\"GBK99A\"}},\"enableShortcut\":true,\"referer\":\"\",\"xUDId\":\"\",\"mode\":\"ssr\",\"conf\":{},\"xTrafficFreeOrigin\":\"\",\"ipInfo\":{},\"logged\":false,\"query\":{},\"vars\":{\"passThroughHeaders\":{}}},\"me\":{\"columnContributions\":[]},\"label\":{},\"ecommerce\":{},\"comments\":{\"pagination\":{},\"collapsed\":{},\"reverse\":{},\"reviewing\":{},\"conversation\":{},\"parent\":{}},\"commentsV2\":{\"stickers\":[],\"commentWithPicPermission\":{},\"notificationsComments\":{},\"pagination\":{},\"collapsed\":{},\"reverse\":{},\"reviewing\":{},\"conversation\":{},\"conversationMore\":{},\"parent\":{}},\"pushNotifications\":{\"default\":{\"isFetching\":false,\"isDrained\":false,\"ids\":[]},\"follow\":{\"isFetching\":false,\"isDrained\":false,\"ids\":[]},\"vote_thank\":{\"isFetching\":false,\"isDrained\":false,\"ids\":[]},\"currentTab\":\"default\",\"notificationsCount\":{\"default\":0,\"follow\":0,\"vote_thank\":0}},\"messages\":{\"data\":{},\"currentTab\":\"common\",\"messageCount\":0},\"register\":{\"registerValidateSucceeded\":null,\"registerValidateErrors\":{},\"registerConfirmError\":null,\"sendDigitsError\":null,\"registerConfirmSucceeded\":null},\"login\":{\"loginUnregisteredError\":false,\"loginBindWechatError\":false,\"loginConfirmError\":null,\"sendDigitsError\":null,\"needSMSIdentify\":false,\"validateDigitsError\":false,\"loginConfirmSucceeded\":null,\"qrcodeLoginToken\":\"\",\"qrcodeLoginScanStatus\":0,\"qrcodeLoginError\":null,\"qrcodeLoginReturnNewToken\":false},\"switches\":{},\"captcha\":{\"captchaNeeded\":false,\"captchaValidated\":false},\"sms\":{\"supportedCountries\":[]},\"chat\":{\"chats\":{},\"inbox\":{\"recents\":{\"isFetching\":false,\"isDrained\":false,\"isPrevDrained\":false,\"result\":[],\"next\":null,\"key\":null},\"strangers\":{\"isFetching\":false,\"isDrained\":false,\"isPrevDrained\":false,\"result\":[],\"next\":null,\"key\":null},\"friends\":{\"isFetching\":false,\"isDrained\":false,\"isPrevDrained\":false,\"result\":[],\"next\":null,\"key\":null},\"search\":{\"isFetching\":false,\"isDrained\":false,\"isPrevDrained\":false,\"result\":[],\"next\":null,\"key\":null},\"config\":{\"newCount\":0,\"strangerMessageSwitch\":false,\"strangerMessageUnread\":false,\"friendCount\":0}},\"global\":{\"isChatMqttExisted\":false}},\"emoticons\":{\"emoticonGroupList\":[],\"emoticonGroupDetail\":{}},\"creator\":{\"tools\":{\"question\":{\"invitationCount\":{\"questionFolloweeCount\":0,\"questionTotalCount\":0}},\"recommend\":{\"recommendTimes\":{}}},\"explore\":{},\"levelUpperLimit\":10,\"mcn\":{},\"mcnManage\":{},\"tasks\":{},\"announcement\":{},\"creatorsRecommendInfo\":{}},\"creators\":{\"common\":{\"applyStatus\":{},\"rightsStatus\":{}},\"bayesDomains\":{\"status\":{},\"options\":{\"topDomains\":null,\"allDomains\":null,\"editable\":0},\"contents\":null},\"school\":{\"tabs\":[],\"contents\":[],\"banner\":null,\"entities\":{}},\"faq\":{\"tabs\":[],\"article\":{}},\"knowledgeIncome\":{},\"safeguardRights\":{},\"analytics\":{\"all\":{},\"answer\":{},\"zvideo\":{},\"article\":{},\"pin\":{},\"singleContent\":{}},\"account\":{\"growthLevel\":{}},\"KMResource\":{},\"training\":{},\"ToolsQuestion\":{\"goodatTopics\":[]},\"ToolsHotspot\":{\"domains\":[]},\"ToolsRecommend\":{},\"ToolsCustomPromotion\":{\"itemLists\":{},\"baseInfo\":{}},\"ToolsSearchQuestion\":{},\"editorSetting\":{},\"MCNManage\":{},\"knowledgeTasks\":{},\"incomeAnalysis\":{\"income\":{\"aggregation\":{}}},\"creationManage\":{\"editModal\":{\"status\":false}},\"activity\":{},\"announcement\":{},\"home\":{\"currentCreatorUrlToken\":null,\"rights\":[],\"newRights\":[],\"scoreInfo\":{},\"menusShowControlByServer\":{\"bVipRecomend\":false,\"creationRelationship\":false},\"newTasks\":{\"creatorTask\":{\"tasks\":[],\"des\":[]}},\"bannerList\":[],\"recentlyCreated\":[],\"homecard\":{},\"homeData\":{}},\"videoSupport\":{\"textBenefit\":{}},\"videoDistribution\":{},\"profilePoster\":{\"creatorPosterConfig\":{},\"creatorPosterData\":{}}},\"question\":{\"followers\":{},\"concernedFollowers\":{},\"answers\":{},\"hiddenAnswers\":{},\"updatedAnswers\":{},\"ariaAnswers\":{},\"collapsedAnswers\":{},\"notificationAnswers\":{},\"invitedQuestions\":{\"total\":{\"count\":null,\"isEnd\":false,\"isLoading\":false,\"questions\":[]},\"followees\":{\"count\":null,\"isEnd\":false,\"isLoading\":false,\"questions\":[]}},\"laterQuestions\":{\"count\":null,\"isEnd\":false,\"isLoading\":false,\"questions\":[]},\"waitingQuestions\":{\"recommend\":{\"isEnd\":false,\"isLoading\":false,\"questions\":[]},\"invite\":{\"isEnd\":false,\"isLoading\":false,\"questions\":[]},\"newest\":{\"isEnd\":false,\"isLoading\":false,\"questions\":[]},\"hot\":{\"isEnd\":false,\"isLoading\":false,\"questions\":[]}},\"invitationCandidates\":{},\"inviters\":{},\"invitees\":{},\"similarQuestions\":{},\"questionBanners\":{},\"relatedCommodities\":{},\"bio\":{},\"brand\":{},\"permission\":{},\"adverts\":{},\"advancedStyle\":{},\"commonAnswerCount\":0,\"hiddenAnswerCount\":0,\"topicMeta\":{\"isLoading\":{}},\"bluestarRanklist\":{},\"relatedSearch\":{},\"autoInvitation\":{},\"simpleConcernedFollowers\":{},\"draftStatus\":{},\"disclaimers\":{},\"isShowMobileSignInModal\":false},\"shareTexts\":{},\"answers\":{\"voters\":{},\"upvoters\":{},\"copyrightApplicants\":{},\"favlists\":{},\"newAnswer\":{},\"entityWords\":{},\"paidContent\":{},\"settings\":{},\"relationEndorsement\":{},\"growthCardOrder\":{}},\"banner\":{},\"topic\":{\"bios\":{},\"hot\":{},\"newest\":{},\"top\":{},\"sticky\":{},\"pin\":{},\"unanswered\":{},\"questions\":{},\"zivdeo\":{},\"zvideo-new\":{},\"pin20\":{},\"pin20-new\":{},\"followers\":{},\"contributors\":{},\"parent\":{},\"children\":{},\"bestAnswerers\":{},\"wikiMeta\":{},\"index\":{},\"intro\":{},\"meta\":{},\"schema\":{},\"creatorWall\":{},\"wikiEditInfo\":{},\"committedWiki\":{},\"landingBasicData\":{},\"landingExcellentItems\":[],\"landingExcellentEditors\":[],\"landingCatalog\":[],\"landingEntries\":{}},\"explore\":{\"recommendations\":{},\"specials\":{\"entities\":{},\"order\":[]},\"roundtables\":{\"entities\":{},\"order\":[]},\"collections\":{},\"columns\":{},\"square\":{\"hotQuestionList\":[],\"potentialList\":[]}},\"articles\":{\"voters\":{},\"upvoters\":{},\"relationEndorsement\":{}},\"favlists\":{\"relations\":{}},\"pins\":{\"reviewing\":{},\"upvoters\":{},\"relationEndorsement\":{}},\"topstory\":{\"recommend\":{\"isFetching\":false,\"isDrained\":false,\"afterId\":0,\"items\":[],\"next\":null},\"follow\":{\"isFetching\":false,\"isDrained\":false,\"afterId\":0,\"items\":[],\"next\":null},\"followWonderful\":{\"isFetching\":false,\"isDrained\":false,\"afterId\":0,\"items\":[],\"next\":null},\"sidebar\":null,\"announcement\":{},\"hotList\":[],\"hotListHeadZone\":[],\"guestFeeds\":{\"isFetching\":false,\"isDrained\":false,\"afterId\":0,\"items\":[],\"next\":null},\"followExtra\":{\"isNewUser\":null,\"isFetched\":false,\"followCount\":0,\"followers\":[]},\"hotDaily\":{\"data\":[],\"paging\":{}},\"hotHighlight\":{\"isFetching\":false,\"isDrained\":false,\"data\":[],\"paging\":{}},\"banner\":{},\"commercialBanner\":{\"show\":false,\"banner\":{},\"trackData\":{}},\"video\":{\"items\":[],\"next\":null,\"isLoading\":false,\"isDrained\":false}},\"upload\":{},\"video\":{\"data\":{},\"shareVideoDetail\":{},\"last\":{}},\"zvideos\":{\"campaignVideoList\":{},\"campaigns\":{},\"tagoreCategory\":[],\"recommendations\":{},\"insertable\":{},\"recruit\":{\"form\":{\"platform\":\"\",\"nickname\":\"\",\"followerCount\":\"\",\"domain\":\"\",\"contact\":\"\"},\"submited\":false,\"ranking\":[]},\"qyActivityData\":{},\"talkActivityData\":{},\"party2022ActivityData\":{},\"batchVideos\":{},\"creationReferences\":{},\"zvideoCollection\":{},\"zvideoGrant\":{},\"collectData\":{\"isFetching\":false,\"list\":[]},\"videoSource\":{\"isLoaded\":false},\"paidColumnInfo\":{}},\"guide\":{\"guide\":{\"isFetching\":false,\"isShowGuide\":false}},\"reward\":{\"answer\":{},\"article\":{},\"question\":{}},\"search\":{\"recommendSearch\":[],\"topSearch\":{},\"searchValue\":{},\"suggestSearch\":{},\"attachedInfo\":{\"generalByQuery\":{}},\"nextOffset\":{\"generalByQuery\":{}},\"topicReview\":{},\"sidebar\":{},\"calendar\":{},\"scores\":null,\"majors\":{},\"university\":{},\"generalByQuery\":{},\"generalByQueryInADay\":{},\"generalByQueryInAWeek\":{},\"generalByQueryInThreeMonths\":{},\"peopleByQuery\":{},\"topicByQuery\":{},\"zvideoByQuery\":{},\"scholarByQuery\":{},\"columnByQuery\":{},\"liveByQuery\":{},\"albumByQuery\":{},\"eBookByQuery\":{},\"kmGeneralByQuery\":{},\"kmCourseByQuery\":{},\"favlistByQuery\":{},\"customFilter\":{\"requestFinished\":false,\"keys\":[],\"tags\":[]},\"zhidaRelatedQuestions\":{\"isLoading\":false,\"data\":[],\"showZhidaRelatedQuestionsCard\":false}},\"creatorSalt\":{\"recommendQuestionList\":[],\"bannerList\":[],\"claimBannerList\":[],\"sites\":[],\"domains\":{},\"hasRecored\":false,\"hasClaim\":false,\"hasContributedList\":[],\"notContributedList\":[],\"contributesTotal\":null,\"previewPageTitle\":\"\",\"previewPageContent\":\"\",\"restContributionNumber\":\"-\"},\"publicEditPermission\":{},\"readStatus\":{},\"draftHistory\":{\"history\":{},\"drafts\":{}},\"notifications\":{\"recent\":{\"isFetching\":false,\"isDrained\":false,\"isPrevDrained\":false,\"result\":[],\"next\":null,\"key\":null},\"history\":{\"isFetching\":false,\"isDrained\":false,\"isPrevDrained\":false,\"result\":[],\"next\":null,\"key\":null},\"notificationActors\":{\"isFetching\":false,\"isDrained\":false,\"isPrevDrained\":false,\"result\":[],\"next\":null,\"key\":null},\"recentNotificationEntry\":\"all\"},\"specials\":{\"entities\":{},\"all\":{\"data\":[],\"paging\":{},\"isLoading\":false}},\"collections\":{\"hot\":{\"data\":[],\"paging\":{},\"isLoading\":false,\"errorPayload\":null},\"collectionFeeds\":{}},\"userProfit\":{\"permission\":{\"permissionStatus\":{\"zhiZixuan\":0,\"recommend\":-1,\"task\":0,\"plugin\":0,\"infinity\":0},\"visible\":false},\"linkCardLimit\":0},\"mcn\":{\"bindInfo\":{},\"memberCategoryList\":[],\"producerList\":[],\"categoryList\":[],\"lists\":{},\"banners\":{},\"protocolStatus\":{\"isAgreedNew\":true,\"isAgreedOld\":true},\"probationCountdownDays\":0},\"mcnActivity\":{\"household\":{\"products\":{},\"rankList\":{\"total\":{},\"yesterday\":{}}}},\"brand\":{\"contentPlugin\":{}},\"host\":{\"roundtable\":{\"subjects\":{},\"applications\":{\"total\":0},\"online\":{\"total\":0},\"applies\":{},\"details\":{},\"includedResource\":{},\"hotQuestions\":{},\"warmupContents\":{},\"batchInclude\":{}},\"special\":{\"applications\":{\"total\":0,\"pages\":{},\"entities\":{}},\"censorHistory\":{},\"drafts\":{}}},\"campaign\":{\"single\":{},\"list\":{},\"videoMakerAcq\":{},\"vote\":{},\"cardCollecting\":{\"message\":null,\"profile\":{\"balance\":\"0\",\"chance\":0,\"coinNum\":0,\"gatherClose\":false,\"isGotMagicCard\":false,\"isPay\":false,\"partitionStart\":false,\"totalDone\":0,\"withdrawStart\":false},\"sharePoster\":{\"share\":\"\",\"sendCard\":\"\",\"invite\":\"\"},\"shareLink\":null,\"shareIntention\":\"share\",\"shareKey\":null,\"shareCardId\":null,\"inviterInfo\":null,\"giverInfo\":null,\"prize\":null,\"receivedCard\":null,\"newCoinCount\":null,\"newCardList\":[],\"newUserCardCount\":1,\"taskList\":[],\"prizeList\":null,\"cardList\":null,\"panel\":{\"showTaskPanel\":false,\"showRewardPanel\":false},\"modal\":{\"showWelcomeModal\":false,\"showFusionModal\":false,\"showFusionPromptModal\":false,\"showShareModal\":false,\"showBackModal\":false}},\"zhiboPandian2020\":null,\"boarding\":{},\"searchGaokaoSubPage\":{},\"searchHealth\":{}},\"knowledgePlan\":{\"lists\":{},\"allCreationRankList\":{},\"featuredQuestions\":{}},\"wallE\":{\"protectHistory\":{\"total\":0,\"pages\":{},\"entities\":{}}},\"roundtables\":{\"hotQuestions\":{},\"warmupContents\":{},\"hotDiscussions\":{},\"selectedContents\":{},\"roundtables\":{}},\"helpCenter\":{\"entities\":{\"question\":{},\"category\":{}},\"categories\":[],\"commonQuestions\":[],\"relatedQuestions\":{},\"faqTypes\":[]},\"republish\":{},\"commercialReport\":{\"commercialTypes\":[]},\"creatorMCN\":{\"mcn\":{},\"mcnStatistics\":{},\"mcnRight\":{\"bind\":false,\"coupon\":false},\"isNoAuth\":false,\"creatorManageData\":[],\"creatorManageDataTotal\":1,\"mcnDomains\":[],\"bill\":{\"list\":{},\"detail\":{}},\"healthScore\":{\"healthScore\":\"0\",\"updateTime\":\"\",\"evaluate\":\"\"},\"healthScoreRecordInfo\":{},\"beforeDownloadCheckResult\":{},\"beforePromotionData\":[],\"afterPromotionData\":[]},\"commentManage\":{\"commentList\":{\"ids\":[],\"entities\":{},\"nextOffset\":0,\"urlToken\":\"\"},\"subCommentList\":{\"ids\":[],\"entities\":{},\"paging\":{\"next\":\"\",\"isEnd\":false}}},\"commentPermission\":{},\"creatorRightStatus\":{\"list\":[]},\"zhiPlus\":{\"permissionStatus\":9999},\"streaming\":{},\"creationRanking\":{},\"eduSections\":{\"eduSectionState\":{}},\"adPromotion\":{\"answer\":{},\"article\":{}},\"editVideo\":{\"editVideoEnabled\":false},\"zhidaEntry\":{\"sidebar\":{\"answer\":{},\"question\":{}},\"answerBottom\":{}},\"guideZhidaCard\":{\"cardStatus\":{\"isShowGuideZhidaCard\":false,\"guideZhidaCardInView\":false,\"isClickedBeforeAbIndex\":false,\"isManualClose\":false,\"clickedPosition\":-1}},\"hotSpot\":{},\"contentColumnCard\":{},\"rings\":{\"rankList\":{},\"membersList\":{},\"membersListPaging\":{}}},\"subAppName\":\"main\",\"spanName\":\"SignInHomepage\",\"canaryConfig\":{\"test_canary\":\"0\",\"use_new_player\":\"0\",\"player_vendor\":\"0\",\"use_hevc\":\"0\",\"upload_use_signature\":\"0\",\"use_backdrop_blur\":\"0\",\"article_title_imagex\":\"0\",\"play_station\":\"0\",\"use_cached_supported_countries\":\"1\"}}" }},
    parentNode: {get(){ return {} }},
    insertBefore: {value: v_saf(function insertBefore(){})},
    isEqualNode: {value: v_saf(function isEqualNode(){})},
    childNodes: {get(){ return {} }},
    ELEMENT_NODE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    ATTRIBUTE_NODE: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    TEXT_NODE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    CDATA_SECTION_NODE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    ENTITY_REFERENCE_NODE: {"value":5,"writable":false,"enumerable":true,"configurable":false},
    ENTITY_NODE: {"value":6,"writable":false,"enumerable":true,"configurable":false},
    PROCESSING_INSTRUCTION_NODE: {"value":7,"writable":false,"enumerable":true,"configurable":false},
    COMMENT_NODE: {"value":8,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_NODE: {"value":9,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_TYPE_NODE: {"value":10,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_FRAGMENT_NODE: {"value":11,"writable":false,"enumerable":true,"configurable":false},
    NOTATION_NODE: {"value":12,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_DISCONNECTED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_PRECEDING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_FOLLOWING: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_CONTAINS: {"value":8,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_CONTAINED_BY: {"value":16,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {"value":32,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"Node",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MessagePort.prototype, {
    onmessage: {set(){  }},
    postMessage: {value: v_saf(function postMessage(){})},
    [Symbol.toStringTag]: {value:"MessagePort",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Performance.prototype, {
    now: {value: v_saf(function now(){})},
    timing: {get(){ return v_new(PerformanceTiming) }},
    getEntriesByType: {value: v_saf(function getEntriesByType(){if (arguments[0]=='resource'){return v_new(PerformanceResourceTiming)}})},
    mark: {value: v_saf(function mark(){})},
    [Symbol.toStringTag]: {value:"Performance",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(UIEvent.prototype, {
    view: {get(){ return {} }},
    detail: {get(){ return 0 }},
    [Symbol.toStringTag]: {value:"UIEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(IDBRequest.prototype, {
    onsuccess: {set(){  }},
    onerror: {set(){  }},
    [Symbol.toStringTag]: {value:"IDBRequest",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSStyleSheet.prototype, {
    cssRules: {get(){ return {} }},
    insertRule: {value: v_saf(function insertRule(){})},
    [Symbol.toStringTag]: {value:"CSSStyleSheet",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(BroadcastChannel.prototype, {
    postMessage: {value: v_saf(function postMessage(){})},
    [Symbol.toStringTag]: {value:"BroadcastChannel",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Screen.prototype, {
    width: {get(){ return 1792 }},
    height: {get(){ return 1120 }},
    [Symbol.toStringTag]: {value:"Screen",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Document.prototype, {
    createElement: {value: v_saf(function createElement(){return _createElement(arguments[0])})},
    activeElement: {get(){ return {} }},
    createTextNode: {value: v_saf(function createTextNode(){})},
    createElementNS: {value: v_saf(function createElementNS(){})},
    defaultView: {get(){ return {} }},
    currentScript: {get(){ return {} }},
    all: {get(){ return {} }},
    documentElement: {get(){ return document }},
    readyState: {get(){ return "interactive" }},
    visibilityState: {get(){ return "visible" }},
    title: {get(){ return "知乎 - 有问题，就会有答案" }},
    scripts: {get(){ return {} }},
    createDocumentFragment: {value: v_saf(function createDocumentFragment(){})},
    referrer: {get(){ return "" }},
    onreadystatechange: {"enumerable":true,"configurable":true},
    onmouseenter: {"enumerable":true,"configurable":true},
    onmouseleave: {"enumerable":true,"configurable":true},
    [Symbol.toStringTag]: {value:"Document",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Element.prototype, {
    namespaceURI: {get(){ return "http://www.w3.org/1999/xhtml" }},
    tagName: {get(){ return this.v_tagName }},
    setAttribute: {value: v_saf(function setAttribute(){})},
    removeAttribute: {value: v_saf(function removeAttribute(){})},
    getAttribute: {value: v_saf(function getAttribute(){})},
    querySelectorAll: {value: v_saf(function querySelectorAll(){})},
    className: {set(){ return "DIV" }},
    closest: {value: v_saf(function closest(){})},
    innerHTML: {set(){ return "DIV" }},
    classList: {get(){ return {} }},
    id: {set(){ return {} }},
    firstElementChild: {get(){ return {} }},
    querySelector: {value: v_saf(function querySelector(){})},
    [Symbol.toStringTag]: {value:"Element",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MouseEvent.prototype, {
    fromElement: {get(){ return {} }},
    buttons: {get(){ return 0 }},
    [Symbol.toStringTag]: {value:"MouseEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(IDBOpenDBRequest.prototype, {
    onupgradeneeded: {set(){  }},
    [Symbol.toStringTag]: {value:"IDBOpenDBRequest",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLElement.prototype, {
    dataset: {get(){ return {} }},
    onload: {get(){ return {} },set(){ return {} }},
    style: {get(){ return this.v_style }},
    contentEditable: {get(){ return "inherit" }},
    onclick: {get(){ return {} },set(){ return {} }},
    onerror: {get(){ return {} },set(){ return {} }},
    onmouseenter: {"enumerable":true,"configurable":true},
    onmouseleave: {"enumerable":true,"configurable":true},
    [Symbol.toStringTag]: {value:"HTMLElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PointerEvent.prototype, {
    pointerId: {get(){ return 1 }},
    width: {get(){ return 1 }},
    height: {get(){ return 1 }},
    pressure: {get(){ return 0 }},
    tangentialPressure: {get(){ return 0 }},
    tiltX: {get(){ return 0 }},
    tiltY: {get(){ return 0 }},
    twist: {get(){ return 0 }},
    pointerType: {get(){ return "mouse" }},
    isPrimary: {get(){ return true }},
    [Symbol.toStringTag]: {value:"PointerEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLScriptElement.prototype, {
    crossOrigin: {set(){  }},
    src: {get(){ return "https://static.zhihu.com/heifetz/chunks/8141.c6a8db13be171d2fa1e3.js" },set(){ return "https://static.zhihu.com/heifetz/chunks/8141.c6a8db13be171d2fa1e3.js" }},
    charset: {set(){ return "https://static.zhihu.com/heifetz/chunks/8141.c6a8db13be171d2fa1e3.js" }},
    [Symbol.toStringTag]: {value:"HTMLScriptElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLInputElement.prototype, {
    type: {get(){ return "tel" }},
    value: {get(){ return "" }},
    defaultValue: {get(){ return "" },set(){ return "" }},
    name: {get(){ return "digits" },set(){ return "digits" }},
    defaultChecked: {set(){ return "digits" }},
    [Symbol.toStringTag]: {value:"HTMLInputElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCanvasElement.prototype, {
    getContext: {value: v_saf(function getContext(){if (arguments[0]=='2d'){var r = v_new(CanvasRenderingContext2D); return r}; if (arguments[0]=='webgl' || arguments[0]=='experimental-webgl'){var r = v_new(WebGLRenderingContext); r._canvas = this; return r}; return null})},
    [Symbol.toStringTag]: {value:"HTMLCanvasElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLStyleElement.prototype, {
    sheet: {get(){ return {} }},
    media: {set(){ return {} }},
    [Symbol.toStringTag]: {value:"HTMLStyleElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLMetaElement.prototype, {
    content: {set(){  }},
    [Symbol.toStringTag]: {value:"HTMLMetaElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLLinkElement.prototype, {
    rel: {get(){ return "stylesheet" }},
    [Symbol.toStringTag]: {value:"HTMLLinkElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Window.prototype, {
    TEMPORARY: {"value":0,"writable":false,"enumerable":true,"configurable":false},
    PERSISTENT: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"Window",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDocument.prototype, {
    [Symbol.toStringTag]: {value:"HTMLDocument",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLHeadElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLHeadElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLBodyElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLBodyElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PluginArray.prototype, {
    [Symbol.toStringTag]: {value:"PluginArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Plugin.prototype, {
    [Symbol.toStringTag]: {value:"Plugin",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeTypeArray.prototype, {
    [Symbol.toStringTag]: {value:"MimeTypeArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeType.prototype, {
    [Symbol.toStringTag]: {value:"MimeType",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSStyleDeclaration.prototype, {
    [Symbol.toStringTag]: {value:"CSSStyleDeclaration",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {value:"Location",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(WebGLRenderingContext.prototype, {
    DEPTH_BUFFER_BIT: {"value":256,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BUFFER_BIT: {"value":1024,"writable":false,"enumerable":true,"configurable":false},
    COLOR_BUFFER_BIT: {"value":16384,"writable":false,"enumerable":true,"configurable":false},
    POINTS: {"value":0,"writable":false,"enumerable":true,"configurable":false},
    LINES: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    LINE_LOOP: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    LINE_STRIP: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    TRIANGLES: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    TRIANGLE_STRIP: {"value":5,"writable":false,"enumerable":true,"configurable":false},
    TRIANGLE_FAN: {"value":6,"writable":false,"enumerable":true,"configurable":false},
    ZERO: {"value":0,"writable":false,"enumerable":true,"configurable":false},
    ONE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    SRC_COLOR: {"value":768,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_SRC_COLOR: {"value":769,"writable":false,"enumerable":true,"configurable":false},
    SRC_ALPHA: {"value":770,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_SRC_ALPHA: {"value":771,"writable":false,"enumerable":true,"configurable":false},
    DST_ALPHA: {"value":772,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_DST_ALPHA: {"value":773,"writable":false,"enumerable":true,"configurable":false},
    DST_COLOR: {"value":774,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_DST_COLOR: {"value":775,"writable":false,"enumerable":true,"configurable":false},
    SRC_ALPHA_SATURATE: {"value":776,"writable":false,"enumerable":true,"configurable":false},
    FUNC_ADD: {"value":32774,"writable":false,"enumerable":true,"configurable":false},
    BLEND_EQUATION: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
    BLEND_EQUATION_RGB: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
    BLEND_EQUATION_ALPHA: {"value":34877,"writable":false,"enumerable":true,"configurable":false},
    FUNC_SUBTRACT: {"value":32778,"writable":false,"enumerable":true,"configurable":false},
    FUNC_REVERSE_SUBTRACT: {"value":32779,"writable":false,"enumerable":true,"configurable":false},
    BLEND_DST_RGB: {"value":32968,"writable":false,"enumerable":true,"configurable":false},
    BLEND_SRC_RGB: {"value":32969,"writable":false,"enumerable":true,"configurable":false},
    BLEND_DST_ALPHA: {"value":32970,"writable":false,"enumerable":true,"configurable":false},
    BLEND_SRC_ALPHA: {"value":32971,"writable":false,"enumerable":true,"configurable":false},
    CONSTANT_COLOR: {"value":32769,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_CONSTANT_COLOR: {"value":32770,"writable":false,"enumerable":true,"configurable":false},
    CONSTANT_ALPHA: {"value":32771,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_CONSTANT_ALPHA: {"value":32772,"writable":false,"enumerable":true,"configurable":false},
    BLEND_COLOR: {"value":32773,"writable":false,"enumerable":true,"configurable":false},
    ARRAY_BUFFER: {"value":34962,"writable":false,"enumerable":true,"configurable":false},
    ELEMENT_ARRAY_BUFFER: {"value":34963,"writable":false,"enumerable":true,"configurable":false},
    ARRAY_BUFFER_BINDING: {"value":34964,"writable":false,"enumerable":true,"configurable":false},
    ELEMENT_ARRAY_BUFFER_BINDING: {"value":34965,"writable":false,"enumerable":true,"configurable":false},
    STREAM_DRAW: {"value":35040,"writable":false,"enumerable":true,"configurable":false},
    STATIC_DRAW: {"value":35044,"writable":false,"enumerable":true,"configurable":false},
    DYNAMIC_DRAW: {"value":35048,"writable":false,"enumerable":true,"configurable":false},
    BUFFER_SIZE: {"value":34660,"writable":false,"enumerable":true,"configurable":false},
    BUFFER_USAGE: {"value":34661,"writable":false,"enumerable":true,"configurable":false},
    CURRENT_VERTEX_ATTRIB: {"value":34342,"writable":false,"enumerable":true,"configurable":false},
    FRONT: {"value":1028,"writable":false,"enumerable":true,"configurable":false},
    BACK: {"value":1029,"writable":false,"enumerable":true,"configurable":false},
    FRONT_AND_BACK: {"value":1032,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_2D: {"value":3553,"writable":false,"enumerable":true,"configurable":false},
    CULL_FACE: {"value":2884,"writable":false,"enumerable":true,"configurable":false},
    BLEND: {"value":3042,"writable":false,"enumerable":true,"configurable":false},
    DITHER: {"value":3024,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_TEST: {"value":2960,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_TEST: {"value":2929,"writable":false,"enumerable":true,"configurable":false},
    SCISSOR_TEST: {"value":3089,"writable":false,"enumerable":true,"configurable":false},
    POLYGON_OFFSET_FILL: {"value":32823,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_ALPHA_TO_COVERAGE: {"value":32926,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_COVERAGE: {"value":32928,"writable":false,"enumerable":true,"configurable":false},
    NO_ERROR: {"value":0,"writable":false,"enumerable":true,"configurable":false},
    INVALID_ENUM: {"value":1280,"writable":false,"enumerable":true,"configurable":false},
    INVALID_VALUE: {"value":1281,"writable":false,"enumerable":true,"configurable":false},
    INVALID_OPERATION: {"value":1282,"writable":false,"enumerable":true,"configurable":false},
    OUT_OF_MEMORY: {"value":1285,"writable":false,"enumerable":true,"configurable":false},
    CW: {"value":2304,"writable":false,"enumerable":true,"configurable":false},
    CCW: {"value":2305,"writable":false,"enumerable":true,"configurable":false},
    LINE_WIDTH: {"value":2849,"writable":false,"enumerable":true,"configurable":false},
    ALIASED_POINT_SIZE_RANGE: {"value":33901,"writable":false,"enumerable":true,"configurable":false},
    ALIASED_LINE_WIDTH_RANGE: {"value":33902,"writable":false,"enumerable":true,"configurable":false},
    CULL_FACE_MODE: {"value":2885,"writable":false,"enumerable":true,"configurable":false},
    FRONT_FACE: {"value":2886,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_RANGE: {"value":2928,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_WRITEMASK: {"value":2930,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_CLEAR_VALUE: {"value":2931,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_FUNC: {"value":2932,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_CLEAR_VALUE: {"value":2961,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_FUNC: {"value":2962,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_FAIL: {"value":2964,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_PASS_DEPTH_FAIL: {"value":2965,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_PASS_DEPTH_PASS: {"value":2966,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_REF: {"value":2967,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_VALUE_MASK: {"value":2963,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_WRITEMASK: {"value":2968,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_FUNC: {"value":34816,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_FAIL: {"value":34817,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_PASS_DEPTH_FAIL: {"value":34818,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_PASS_DEPTH_PASS: {"value":34819,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_REF: {"value":36003,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_VALUE_MASK: {"value":36004,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_WRITEMASK: {"value":36005,"writable":false,"enumerable":true,"configurable":false},
    VIEWPORT: {"value":2978,"writable":false,"enumerable":true,"configurable":false},
    SCISSOR_BOX: {"value":3088,"writable":false,"enumerable":true,"configurable":false},
    COLOR_CLEAR_VALUE: {"value":3106,"writable":false,"enumerable":true,"configurable":false},
    COLOR_WRITEMASK: {"value":3107,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_ALIGNMENT: {"value":3317,"writable":false,"enumerable":true,"configurable":false},
    PACK_ALIGNMENT: {"value":3333,"writable":false,"enumerable":true,"configurable":false},
    MAX_TEXTURE_SIZE: {"value":3379,"writable":false,"enumerable":true,"configurable":false},
    MAX_VIEWPORT_DIMS: {"value":3386,"writable":false,"enumerable":true,"configurable":false},
    SUBPIXEL_BITS: {"value":3408,"writable":false,"enumerable":true,"configurable":false},
    RED_BITS: {"value":3410,"writable":false,"enumerable":true,"configurable":false},
    GREEN_BITS: {"value":3411,"writable":false,"enumerable":true,"configurable":false},
    BLUE_BITS: {"value":3412,"writable":false,"enumerable":true,"configurable":false},
    ALPHA_BITS: {"value":3413,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_BITS: {"value":3414,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BITS: {"value":3415,"writable":false,"enumerable":true,"configurable":false},
    POLYGON_OFFSET_UNITS: {"value":10752,"writable":false,"enumerable":true,"configurable":false},
    POLYGON_OFFSET_FACTOR: {"value":32824,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_BINDING_2D: {"value":32873,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_BUFFERS: {"value":32936,"writable":false,"enumerable":true,"configurable":false},
    SAMPLES: {"value":32937,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_COVERAGE_VALUE: {"value":32938,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_COVERAGE_INVERT: {"value":32939,"writable":false,"enumerable":true,"configurable":false},
    COMPRESSED_TEXTURE_FORMATS: {"value":34467,"writable":false,"enumerable":true,"configurable":false},
    DONT_CARE: {"value":4352,"writable":false,"enumerable":true,"configurable":false},
    FASTEST: {"value":4353,"writable":false,"enumerable":true,"configurable":false},
    NICEST: {"value":4354,"writable":false,"enumerable":true,"configurable":false},
    GENERATE_MIPMAP_HINT: {"value":33170,"writable":false,"enumerable":true,"configurable":false},
    BYTE: {"value":5120,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_BYTE: {"value":5121,"writable":false,"enumerable":true,"configurable":false},
    SHORT: {"value":5122,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT: {"value":5123,"writable":false,"enumerable":true,"configurable":false},
    INT: {"value":5124,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_INT: {"value":5125,"writable":false,"enumerable":true,"configurable":false},
    FLOAT: {"value":5126,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_COMPONENT: {"value":6402,"writable":false,"enumerable":true,"configurable":false},
    ALPHA: {"value":6406,"writable":false,"enumerable":true,"configurable":false},
    RGB: {"value":6407,"writable":false,"enumerable":true,"configurable":false},
    RGBA: {"value":6408,"writable":false,"enumerable":true,"configurable":false},
    LUMINANCE: {"value":6409,"writable":false,"enumerable":true,"configurable":false},
    LUMINANCE_ALPHA: {"value":6410,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT_4_4_4_4: {"value":32819,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT_5_5_5_1: {"value":32820,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT_5_6_5: {"value":33635,"writable":false,"enumerable":true,"configurable":false},
    FRAGMENT_SHADER: {"value":35632,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_SHADER: {"value":35633,"writable":false,"enumerable":true,"configurable":false},
    MAX_VERTEX_ATTRIBS: {"value":34921,"writable":false,"enumerable":true,"configurable":false},
    MAX_VERTEX_UNIFORM_VECTORS: {"value":36347,"writable":false,"enumerable":true,"configurable":false},
    MAX_VARYING_VECTORS: {"value":36348,"writable":false,"enumerable":true,"configurable":false},
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: {"value":35661,"writable":false,"enumerable":true,"configurable":false},
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: {"value":35660,"writable":false,"enumerable":true,"configurable":false},
    MAX_TEXTURE_IMAGE_UNITS: {"value":34930,"writable":false,"enumerable":true,"configurable":false},
    MAX_FRAGMENT_UNIFORM_VECTORS: {"value":36349,"writable":false,"enumerable":true,"configurable":false},
    SHADER_TYPE: {"value":35663,"writable":false,"enumerable":true,"configurable":false},
    DELETE_STATUS: {"value":35712,"writable":false,"enumerable":true,"configurable":false},
    LINK_STATUS: {"value":35714,"writable":false,"enumerable":true,"configurable":false},
    VALIDATE_STATUS: {"value":35715,"writable":false,"enumerable":true,"configurable":false},
    ATTACHED_SHADERS: {"value":35717,"writable":false,"enumerable":true,"configurable":false},
    ACTIVE_UNIFORMS: {"value":35718,"writable":false,"enumerable":true,"configurable":false},
    ACTIVE_ATTRIBUTES: {"value":35721,"writable":false,"enumerable":true,"configurable":false},
    SHADING_LANGUAGE_VERSION: {"value":35724,"writable":false,"enumerable":true,"configurable":false},
    CURRENT_PROGRAM: {"value":35725,"writable":false,"enumerable":true,"configurable":false},
    NEVER: {"value":512,"writable":false,"enumerable":true,"configurable":false},
    LESS: {"value":513,"writable":false,"enumerable":true,"configurable":false},
    EQUAL: {"value":514,"writable":false,"enumerable":true,"configurable":false},
    LEQUAL: {"value":515,"writable":false,"enumerable":true,"configurable":false},
    GREATER: {"value":516,"writable":false,"enumerable":true,"configurable":false},
    NOTEQUAL: {"value":517,"writable":false,"enumerable":true,"configurable":false},
    GEQUAL: {"value":518,"writable":false,"enumerable":true,"configurable":false},
    ALWAYS: {"value":519,"writable":false,"enumerable":true,"configurable":false},
    KEEP: {"value":7680,"writable":false,"enumerable":true,"configurable":false},
    REPLACE: {"value":7681,"writable":false,"enumerable":true,"configurable":false},
    INCR: {"value":7682,"writable":false,"enumerable":true,"configurable":false},
    DECR: {"value":7683,"writable":false,"enumerable":true,"configurable":false},
    INVERT: {"value":5386,"writable":false,"enumerable":true,"configurable":false},
    INCR_WRAP: {"value":34055,"writable":false,"enumerable":true,"configurable":false},
    DECR_WRAP: {"value":34056,"writable":false,"enumerable":true,"configurable":false},
    VENDOR: {"value":7936,"writable":false,"enumerable":true,"configurable":false},
    RENDERER: {"value":7937,"writable":false,"enumerable":true,"configurable":false},
    VERSION: {"value":7938,"writable":false,"enumerable":true,"configurable":false},
    NEAREST: {"value":9728,"writable":false,"enumerable":true,"configurable":false},
    LINEAR: {"value":9729,"writable":false,"enumerable":true,"configurable":false},
    NEAREST_MIPMAP_NEAREST: {"value":9984,"writable":false,"enumerable":true,"configurable":false},
    LINEAR_MIPMAP_NEAREST: {"value":9985,"writable":false,"enumerable":true,"configurable":false},
    NEAREST_MIPMAP_LINEAR: {"value":9986,"writable":false,"enumerable":true,"configurable":false},
    LINEAR_MIPMAP_LINEAR: {"value":9987,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_MAG_FILTER: {"value":10240,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_MIN_FILTER: {"value":10241,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_WRAP_S: {"value":10242,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_WRAP_T: {"value":10243,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE: {"value":5890,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP: {"value":34067,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_BINDING_CUBE_MAP: {"value":34068,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_POSITIVE_X: {"value":34069,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_NEGATIVE_X: {"value":34070,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_POSITIVE_Y: {"value":34071,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_NEGATIVE_Y: {"value":34072,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_POSITIVE_Z: {"value":34073,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_NEGATIVE_Z: {"value":34074,"writable":false,"enumerable":true,"configurable":false},
    MAX_CUBE_MAP_TEXTURE_SIZE: {"value":34076,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE0: {"value":33984,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE1: {"value":33985,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE2: {"value":33986,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE3: {"value":33987,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE4: {"value":33988,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE5: {"value":33989,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE6: {"value":33990,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE7: {"value":33991,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE8: {"value":33992,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE9: {"value":33993,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE10: {"value":33994,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE11: {"value":33995,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE12: {"value":33996,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE13: {"value":33997,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE14: {"value":33998,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE15: {"value":33999,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE16: {"value":34000,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE17: {"value":34001,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE18: {"value":34002,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE19: {"value":34003,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE20: {"value":34004,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE21: {"value":34005,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE22: {"value":34006,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE23: {"value":34007,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE24: {"value":34008,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE25: {"value":34009,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE26: {"value":34010,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE27: {"value":34011,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE28: {"value":34012,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE29: {"value":34013,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE30: {"value":34014,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE31: {"value":34015,"writable":false,"enumerable":true,"configurable":false},
    ACTIVE_TEXTURE: {"value":34016,"writable":false,"enumerable":true,"configurable":false},
    REPEAT: {"value":10497,"writable":false,"enumerable":true,"configurable":false},
    CLAMP_TO_EDGE: {"value":33071,"writable":false,"enumerable":true,"configurable":false},
    MIRRORED_REPEAT: {"value":33648,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_VEC2: {"value":35664,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_VEC3: {"value":35665,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_VEC4: {"value":35666,"writable":false,"enumerable":true,"configurable":false},
    INT_VEC2: {"value":35667,"writable":false,"enumerable":true,"configurable":false},
    INT_VEC3: {"value":35668,"writable":false,"enumerable":true,"configurable":false},
    INT_VEC4: {"value":35669,"writable":false,"enumerable":true,"configurable":false},
    BOOL: {"value":35670,"writable":false,"enumerable":true,"configurable":false},
    BOOL_VEC2: {"value":35671,"writable":false,"enumerable":true,"configurable":false},
    BOOL_VEC3: {"value":35672,"writable":false,"enumerable":true,"configurable":false},
    BOOL_VEC4: {"value":35673,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT2: {"value":35674,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT3: {"value":35675,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT4: {"value":35676,"writable":false,"enumerable":true,"configurable":false},
    SAMPLER_2D: {"value":35678,"writable":false,"enumerable":true,"configurable":false},
    SAMPLER_CUBE: {"value":35680,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_ENABLED: {"value":34338,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_SIZE: {"value":34339,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_STRIDE: {"value":34340,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_TYPE: {"value":34341,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_NORMALIZED: {"value":34922,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_POINTER: {"value":34373,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: {"value":34975,"writable":false,"enumerable":true,"configurable":false},
    IMPLEMENTATION_COLOR_READ_TYPE: {"value":35738,"writable":false,"enumerable":true,"configurable":false},
    IMPLEMENTATION_COLOR_READ_FORMAT: {"value":35739,"writable":false,"enumerable":true,"configurable":false},
    COMPILE_STATUS: {"value":35713,"writable":false,"enumerable":true,"configurable":false},
    LOW_FLOAT: {"value":36336,"writable":false,"enumerable":true,"configurable":false},
    MEDIUM_FLOAT: {"value":36337,"writable":false,"enumerable":true,"configurable":false},
    HIGH_FLOAT: {"value":36338,"writable":false,"enumerable":true,"configurable":false},
    LOW_INT: {"value":36339,"writable":false,"enumerable":true,"configurable":false},
    MEDIUM_INT: {"value":36340,"writable":false,"enumerable":true,"configurable":false},
    HIGH_INT: {"value":36341,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER: {"value":36160,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER: {"value":36161,"writable":false,"enumerable":true,"configurable":false},
    RGBA4: {"value":32854,"writable":false,"enumerable":true,"configurable":false},
    RGB5_A1: {"value":32855,"writable":false,"enumerable":true,"configurable":false},
    RGB565: {"value":36194,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_COMPONENT16: {"value":33189,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_INDEX8: {"value":36168,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_STENCIL: {"value":34041,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_WIDTH: {"value":36162,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_HEIGHT: {"value":36163,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_INTERNAL_FORMAT: {"value":36164,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_RED_SIZE: {"value":36176,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_GREEN_SIZE: {"value":36177,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_BLUE_SIZE: {"value":36178,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_ALPHA_SIZE: {"value":36179,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_DEPTH_SIZE: {"value":36180,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_STENCIL_SIZE: {"value":36181,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: {"value":36048,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: {"value":36049,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: {"value":36050,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: {"value":36051,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT0: {"value":36064,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_ATTACHMENT: {"value":36096,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_ATTACHMENT: {"value":36128,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_STENCIL_ATTACHMENT: {"value":33306,"writable":false,"enumerable":true,"configurable":false},
    NONE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_COMPLETE: {"value":36053,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: {"value":36054,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: {"value":36055,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: {"value":36057,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_UNSUPPORTED: {"value":36061,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_BINDING: {"value":36006,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_BINDING: {"value":36007,"writable":false,"enumerable":true,"configurable":false},
    MAX_RENDERBUFFER_SIZE: {"value":34024,"writable":false,"enumerable":true,"configurable":false},
    INVALID_FRAMEBUFFER_OPERATION: {"value":1286,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_FLIP_Y_WEBGL: {"value":37440,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: {"value":37441,"writable":false,"enumerable":true,"configurable":false},
    CONTEXT_LOST_WEBGL: {"value":37442,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_COLORSPACE_CONVERSION_WEBGL: {"value":37443,"writable":false,"enumerable":true,"configurable":false},
    BROWSER_DEFAULT_WEBGL: {"value":37444,"writable":false,"enumerable":true,"configurable":false},
    RGB8: {"value":32849,"writable":false,"enumerable":true,"configurable":false},
    RGBA8: {"value":32856,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"WebGLRenderingContext",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CanvasRenderingContext2D.prototype, {
    [Symbol.toStringTag]: {value:"CanvasRenderingContext2D",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceElementTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceElementTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceEventTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceEventTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceLongTaskTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceLongTaskTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceMark.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceMark",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceMeasure.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceMeasure",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceNavigation.prototype, {
    TYPE_NAVIGATE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
    TYPE_RELOAD: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    TYPE_BACK_FORWARD: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    TYPE_RESERVED: {"value":255,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"PerformanceNavigation",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceResourceTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceResourceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceNavigationTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceNavigationTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformancePaintTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformancePaintTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceServerTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceServerTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Image.prototype, {
    [Symbol.toStringTag]: {value:"Image",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLImageElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLImageElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLMediaElement.prototype, {
    NETWORK_EMPTY: {"value":0,"writable":false,"enumerable":true,"configurable":false},
    NETWORK_IDLE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    NETWORK_LOADING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    NETWORK_NO_SOURCE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    HAVE_NOTHING: {"value":0,"writable":false,"enumerable":true,"configurable":false},
    HAVE_METADATA: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    HAVE_CURRENT_DATA: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    HAVE_FUTURE_DATA: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    HAVE_ENOUGH_DATA: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"HTMLMediaElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLUnknownElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLUnknownElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
    [Symbol.toStringTag]: {value:"XMLHttpRequestEventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequest.prototype, {
    UNSENT: {"value":0,"writable":false,"enumerable":true,"configurable":false},
    OPENED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    HEADERS_RECEIVED: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    LOADING: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    DONE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"XMLHttpRequest",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Touch.prototype, {
    [Symbol.toStringTag]: {value:"Touch",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(TouchEvent.prototype, {
    [Symbol.toStringTag]: {value:"TouchEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLHtmlElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLHtmlElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDivElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLDivElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLTitleElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLTitleElement",writable:false,enumerable:false,configurable:true},
})

if (typeof __dirname != 'undefined'){ __dirname = undefined }
if (typeof __filename != 'undefined'){ __filename = undefined }
if (typeof require != 'undefined'){ require = undefined }
if (typeof exports != 'undefined'){ exports = undefined }
if (typeof module != 'undefined'){ module = undefined }
if (typeof Buffer != 'undefined'){ Buffer = undefined }
var __globalThis__ = typeof global != 'undefined' ? global : this
var window = new Proxy(v_new(Window), {
    get(a,b){ if(b=='global'){return}return a[b] || __globalThis__[b] },
    set(a,b,c){
        if (b == 'onclick' && typeof c == 'function') { window.addEventListener('click', c) }
        if (b == 'onmousedown' && typeof c == 'function') { window.addEventListener('mousedown', c) }
        if (b == 'onmouseup' && typeof c == 'function') { window.addEventListener('mouseup', c) }
        __globalThis__[b] = a[b] = c
        return true
    },
})
var v_hasOwnProperty = Object.prototype.hasOwnProperty
Object.prototype.hasOwnProperty = v_saf(function hasOwnProperty(){
    if (this == window){ return v_hasOwnProperty.apply(__globalThis__, arguments) }
    return v_hasOwnProperty.apply(this, arguments)
})
Object.defineProperties(__globalThis__, {[Symbol.toStringTag]:{value:'Window'}})
Object.defineProperties(__globalThis__, Object.getOwnPropertyDescriptors(window))
Object.setPrototypeOf(__globalThis__, Object.getPrototypeOf(window))
window.parent = window
window.top = window
window.frames = window
window.self = window
window.document = v_new(HTMLDocument)
window.location = v_new(Location)
window.history = v_new(History)
window.navigator = v_new(Navigator)
window.screen = v_new(Screen)
window.clientInformation = navigator
window.performance = v_new(Performance)
window.indexedDB = v_new(IDBFactory)
window.sessionStorage = v_new(Storage)
window.localStorage = v_new(Storage)

var win = {
    window: window,
    frames: window,
    parent: window,
    self: window,
    top: window,
}
function v_repair_this(){
    win = {
        window: __globalThis__,
        frames: __globalThis__,
        parent: __globalThis__,
        self: __globalThis__,
        top: __globalThis__,
    }
}
Object.defineProperties(window, {
    window: {get:function(){return win.window},set:function(e){return win.window = e}},
    frames: {get:function(){return win.frames},set:function(e){return win.frames = e}},
    parent: {get:function(){return win.parent},set:function(e){return win.parent = e}},
    self:   {get:function(){return win.self},  set:function(e){return win.self = e}},
    top:    {get:function(){return win.top},   set:function(e){return win.top = e}},
})
function _createElement(name){
    var htmlmap = {"HTMLElement":["abbr","address","article","aside","b","bdi","bdo","cite","code","dd","dfn","dt","em","figcaption","figure","footer","header","hgroup","i","kbd","main","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],"HTMLScriptElement":["script"],"HTMLInputElement":["input"],"HTMLCanvasElement":["canvas"],"HTMLStyleElement":["style"],"HTMLMetaElement":["meta"],"HTMLLinkElement":["link"],"HTMLHeadElement":["head"],"HTMLBodyElement":["body"],"HTMLImageElement":["img"],"HTMLMediaElement":[],"HTMLUnknownElement":[],"HTMLAnchorElement":["a"]}
    var ret, htmlmapkeys = Object.keys(htmlmap)
    name = name.toLocaleLowerCase()
    for (var i = 0; i < htmlmapkeys.length; i++) {
        if (htmlmap[htmlmapkeys[i]].indexOf(name) != -1){
            ret = v_new(window[htmlmapkeys[i]])
            break
        }
    }
    if (!ret){ ret = v_new(HTMLUnknownElement) }
    if (typeof CSSStyleDeclaration != 'undefined') { ret.v_style = v_new(CSSStyleDeclaration) }
    ret.v_tagName = name.toUpperCase()
    return ret
}
function v_hook_href(obj, name, initurl){
    var r = Object.defineProperty(obj, 'href', {
        get: function(){
            if (!(this.protocol) && !(this.hostname)){
                r = ''
            }else{
                r = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "") + this.pathname + this.search + this.hash;
            }
            return r
        },
        set: function(href){
            href = href.trim()
            if (href.startsWith("http://") || href.startsWith("https://")){/*ok*/}
            else if(href.startsWith("//")){ href = (this.protocol?this.protocol:'http:') + href}
            else{ href = this.protocol+"//"+this.hostname + (this.port?":"+this.port:"") + '/' + ((href[0]=='/')?href.slice(1):href) }
            var a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
            this.protocol = a[1] ? a[1] : "";
            this.hostname = a[2] ? a[2] : "";
            this.port     = a[3] ? a[3] : "";
            this.pathname = a[4] ? a[4] : "";
            this.search   = a[5] ? a[5] : "";
            this.hash     = a[6] ? a[6] : "";
            this.host     = this.hostname + (this.port?":"+this.port:"") ;
            this.origin   = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "");
        }
    });
    if (initurl && initurl.trim()){ var temp=v_new_toggle; v_new_toggle = true; r.href = initurl; v_new_toggle = temp; }
    return r
}
function v_init_document(){
    Document.prototype.getElementById = v_saf(function getElementById(name){ var r = v_getele(name, 'getElementById');  return r })
    Document.prototype.querySelector = v_saf(function querySelector(name){ var r = v_getele(name, 'querySelector');  return r })
    Document.prototype.getElementsByClassName = v_saf(function getElementsByClassName(name){ var r = v_geteles(name, 'getElementsByClassName');  return r })
    Document.prototype.getElementsByName = v_saf(function getElementsByName(name){ var r = v_geteles(name, 'getElementsByName');  return r })
    Document.prototype.getElementsByTagName = v_saf(function getElementsByTagName(name){ var r = v_geteles(name, 'getElementsByTagName');  return r })
    Document.prototype.getElementsByTagNameNS = v_saf(function getElementsByTagNameNS(name){ var r = v_geteles(name, 'getElementsByTagNameNS');  return r })
    Document.prototype.querySelectorAll = v_saf(function querySelectorAll(name){ var r = v_geteles(name, 'querySelectorAll');  return r })
    var v_head = v_new(HTMLHeadElement)
    var v_body = v_new(HTMLBodyElement)
    Object.defineProperties(Document.prototype, {
        head: {get(){ return v_head }},
        body: {get(){ return v_body }},
    })
}

v_hook_href(window.location, 'location', "https://www.zhihu.com/signin?next=%2F")
Location.prototype.toString = v_saf(function toString(){ return "https://www.zhihu.com/signin?next=%2F" })
window.alert = v_saf(function alert(){})
v_init_document()

v_repair_this()
v_new_toggle = undefined


function type_of(tt) {
    return tt && "undefined" != typeof Symbol && tt.constructor === Symbol ? "symbol" : typeof tt
}

var t = function () {
}
    , i = function (x) {
    this.s = (2048 & x) >> 11,
        this.t = (1536 & x) >> 9,
        this.i = 511 & x,
        this.h = 511 & x
}
    , h = function (x) {
    this.t = (3072 & x) >> 10,
        this.h = 1023 & x
}
    , B = function (x) {
    this.B = (3072 & x) >> 10,
        this.n = (768 & x) >> 8,
        this.Q = (192 & x) >> 6,
        this.s = 63 & x
}
    , n = function (x) {
    this.t = x >> 10 & 3,
        this.i = 1023 & x
}
    , Q = function () {
}
    , a = function (x) {
    this.B = (3072 & x) >> 10,
        this.n = (768 & x) >> 8,
        this.Q = (192 & x) >> 6,
        this.s = 63 & x
}
    , C = function (x) {
    this.h = (4095 & x) >> 2,
        this.s = 3 & x
}
    , c = function (x) {
    this.t = x >> 10 & 3,
        this.i = x >> 2 & 255,
        this.s = 3 & x
}
    , o = function (x) {
    this.s = (4095 & x) >> 10,
        this.t = (1023 & x) >> 8,
        this.i = 1023 & x,
        this.h = 63 & x
}
    , k = function (x) {
    this.s = (4095 & x) >> 10,
        this.B = (1023 & x) >> 8,
        this.n = (255 & x) >> 6
}
    , g = function (x) {
    this.t = (3072 & x) >> 10,
        this.h = 1023 & x
}
    , G = function (x) {
    this.h = 4095 & x
}
    , r = function (x) {
    this.t = (3072 & x) >> 10
}
    , w = function (x) {
    this.h = 4095 & x
}
    , E = function (x) {
    this.s = (3840 & x) >> 8,
        this.t = (192 & x) >> 6,
        this.i = 63 & x
}
    , D = function () {
    this.c = [0, 0, 0, 0],
        this.k = 0,
        this.o = [],
        this.e = [],
        this.g = [],
        this.G = [],
        this.r = [],
        this.w = !1,
        this.R = [],
        this.I = [],
        this.C = !1,
        this.D = null,
        this.Y = null,
        this.f = [],
        this.J = 0,
        this.u = {
            0: t,
            1: i,
            2: h,
            3: B,
            4: n,
            5: Q,
            6: a,
            7: C,
            8: c,
            9: o,
            10: k,
            11: g,
            12: G,
            13: r,
            14: w,
            15: E
        }
};

function s(x) {
    return (s = "function" == typeof Symbol && "symbol" == type_of(Symbol.A) ? function (x) {
                return void 0 === x ? "undefined" : type_of(x)
            }
            : function (x) {
                return x && "function" == typeof Symbol && x.constructor === Symbol && x !== Symbol.prototype ? "symbol" : void 0 === x ? "undefined" : type_of(x)
            }
    )(x)
}

var A = "2.0"
    , __g = {};
t.prototype.a = function (x) {
    x.C = !1
}
    ,
    i.prototype.a = function (x) {
        switch (this.s) {
            case 0:
                x.c[this.t] = this.i;
                break;
            case 1:
                x.c[this.t] = x.e[this.h]
        }
    }
    ,
    h.prototype.a = function (x) {
        x.e[this.h] = x.c[this.t]
    }
    ,
    B.prototype.a = function (x) {
        switch (this.s) {
            case 0:
                x.c[this.B] = x.c[this.n] + x.c[this.Q];
                break;
            case 1:
                x.c[this.B] = x.c[this.n] - x.c[this.Q];
                break;
            case 2:
                x.c[this.B] = x.c[this.n] * x.c[this.Q];
                break;
            case 3:
                x.c[this.B] = x.c[this.n] / x.c[this.Q];
                break;
            case 4:
                x.c[this.B] = x.c[this.n] % x.c[this.Q];
                break;
            case 5:
                x.c[this.B] = x.c[this.n] == x.c[this.Q];
                break;
            case 6:
                x.c[this.B] = x.c[this.n] >= x.c[this.Q];
                break;
            case 7:
                x.c[this.B] = x.c[this.n] || x.c[this.Q];
                break;
            case 8:
                x.c[this.B] = x.c[this.n] && x.c[this.Q];
                break;
            case 9:
                x.c[this.B] = x.c[this.n] !== x.c[this.Q];
                break;
            case 10:
                x.c[this.B] = s(x.c[this.n]);
                break;
            case 11:
                x.c[this.B] = x.c[this.n] in x.c[this.Q];
                break;
            case 12:
                x.c[this.B] = x.c[this.n] > x.c[this.Q];
                break;
            case 13:
                x.c[this.B] = -x.c[this.n];
                break;
            case 14:
                x.c[this.B] = x.c[this.n] < x.c[this.Q];
                break;
            case 15:
                x.c[this.B] = x.c[this.n] & x.c[this.Q];
                break;
            case 16:
                x.c[this.B] = x.c[this.n] ^ x.c[this.Q];
                break;
            case 17:
                x.c[this.B] = x.c[this.n] << x.c[this.Q];
                break;
            case 18:
                x.c[this.B] = x.c[this.n] >>> x.c[this.Q];
                break;
            case 19:
                x.c[this.B] = x.c[this.n] | x.c[this.Q];
                break;
            case 20:
                x.c[this.B] = !x.c[this.n]
        }
    }
    ,
    n.prototype.a = function (x) {
        x.o.push(x.k),
            x.g.push(x.e),
            x.k = x.c[this.t],
            x.e = [];
        for (var d = 0; d < this.i; d++)
            x.e.unshift(x.G.pop());
        x.r.push(x.G),
            x.G = []
    }
    ,
    Q.prototype.a = function (x) {
        x.k = x.o.pop(),
            x.e = x.g.pop(),
            x.G = x.r.pop()
    }
    ,
    a.prototype.a = function (x) {
        switch (this.s) {
            case 0:
                x.w = x.c[this.B] >= x.c[this.n];
                break;
            case 1:
                x.w = x.c[this.B] <= x.c[this.n];
                break;
            case 2:
                x.w = x.c[this.B] > x.c[this.n];
                break;
            case 3:
                x.w = x.c[this.B] < x.c[this.n];
                break;
            case 4:
                x.w = x.c[this.B] == x.c[this.n];
                break;
            case 5:
                x.w = x.c[this.B] != x.c[this.n];
                break;
            case 6:
                x.w = x.c[this.B];
                break;
            case 7:
                x.w = !x.c[this.B]
        }
    }
    ,
    C.prototype.a = function (x) {
        switch (this.s) {
            case 0:
                x.k = this.h;
                break;
            case 1:
                x.w && (x.k = this.h);
                break;
            case 2:
                x.w || (x.k = this.h);
                break;
            case 3:
                x.k = this.h,
                    x.D = null
        }
        x.w = !1
    }
    ,
    c.prototype.a = function (x) {
        switch (this.s) {
            case 0:
                for (var d = [], f = 0; f < this.i; f++)
                    d.unshift(x.G.pop());
                x.c[3] = x.c[this.t](d[0], d[1]);
                break;
            case 1:
                for (var v = x.G.pop(), T = [], S = 0; S < this.i; S++)
                    T.unshift(x.G.pop());
                x.c[3] = x.c[this.t][v](T[0], T[1]);
                break;
            case 2:
                for (var y = [], O = 0; O < this.i; O++)
                    y.unshift(x.G.pop());
                x.c[3] = new x.c[this.t](y[0], y[1])
        }
    }
;
var e = function (x) {
    for (var d = 66, f = [], v = 0; v < x.length; v++) {
        var T = 24 ^ x.charCodeAt(v) ^ d;
        f.push(String.fromCharCode(T)),
            d = T
    }
    return f.join("")
};
o.prototype.a = function (x) {
    switch (this.s) {
        case 0:
            x.G.push(x.c[this.t]);
            break;
        case 1:
            x.G.push(this.i);
            break;
        case 2:
            x.G.push(x.e[this.h]);
            break;
        case 3:
            x.G.push(e(x.I[this.h]))
    }
}
    ,
    k.prototype.a = function (A) {
        switch (this.s) {
            case 0:
                var s = A.G.pop();
                A.c[this.B] = A.c[this.n][s];
                break;
            case 1:
                var t = A.G.pop()
                    , i = A.G.pop();
                A.c[this.n][t] = i;
                break;
            case 2:
                var h = A.G.pop();
                A.c[this.B] = eval(h)
        }
    }
    ,
    g.prototype.a = function (x) {
        x.c[this.t] = e(x.I[this.h])
    }
    ,
    G.prototype.a = function (x) {
        x.D = this.h
    }
    ,
    r.prototype.a = function (x) {
        throw x.c[this.t]
    }
    ,
    w.prototype.a = function (x) {
        var d = this
            , f = [0];
        x.e.forEach(function (x) {
            f.push(x)
        });
        var v = function (v) {
            var T = new D;
            return T.e = f,
                T.e[0] = v,
                T.b(x.R, d.h, x.I, x.f),
                T.c[3]
        };
        v.toString = function () {
            return "() { [native code] }"
        }
            ,
            x.c[3] = v
    }
    ,
    E.prototype.a = function (x) {
        switch (this.s) {
            case 0:
                for (var d = {}, f = 0; f < this.i; f++) {
                    var v = x.G.pop();
                    d[x.G.pop()] = v
                }
                x.c[this.t] = d;
                break;
            case 1:
                for (var T = [], S = 0; S < this.i; S++)
                    T.unshift(x.G.pop());
                x.c[this.t] = T
        }
    }
    ,
    D.prototype.x = function (x) {
        for (var d = atob(x), f = d.charCodeAt(0) << 8 | d.charCodeAt(1), v = [], T = 2; T < f + 2; T += 2)
            v.push(d.charCodeAt(T) << 8 | d.charCodeAt(T + 1));
        this.R = v;
        for (var S = [], y = f + 2; y < d.length;) {
            var O = d.charCodeAt(y) << 8 | d.charCodeAt(y + 1)
                , U = d.slice(y + 2, y + 2 + O);
            S.push(U),
                y += O + 2
        }
        this.I = S
    }
    ,
    D.prototype.b = function (x, d, f) {
        for (d = d || 0,
                 f = f || [],
                 this.k = d,
                 "string" == typeof x ? this.x(x) : (this.R = x,
                     this.I = f),
                 this.C = !0,
                 this.J = Date.now(); this.C;) {
            var v = this.R[this.k++];
            if ("number" != typeof v)
                break;
            var T = Date.now();
            // if (5e8 < T - this.J)
            //     return;
            this.J = T;
            try {
                this.a(v)
            } catch (x) {
                console.log(x)
                this.Y = x,
                this.D && (this.k = this.D)
            }
        }
    }
    ,
    D.prototype.a = function (x) {
        var d = (61440 & x) >> 12;
        new this.u[d](x).a(this)
    }
    ,
"undefined" != typeof window && (new D).b("B1biNpMAnACoAJwBpADi8JMAnACoAJwCpAAAABAAIAGcA6gAMAq0BDRJZAZwapwDqACQACABsAUgAhgBnAagACADnAeoACAEGAEwFBoBnAihQLgJOYU0h2QGcMqwChoCNECRACQCGAMwFBoDnAuhQDUUNEdkBnECsAwaAjRAkQAkArANkAAYA5wLoACcDoABnA+MBRAAMwZgBnFKsBAaAjRAkQAkAhgBnBGgABoBnBKhQDRHGAGcE6AAMQdgBnGSsBQaAjRAkQAkAhgBnBWgABoBnBahQDRHZAZxyrAXGgI0QJEAJAIYAZwYoABgBnHysBkaAjRAkQAkAhgBnBqgAGAGchqwGxoCNECRACQCGAOcHKAAYAZyQrAdGgI0QJEAJAIYAZweoAAaAZwfoUA0R2QGcnqwIBoCNECRACQCGAScIaAAMBRgBnKmsCIaAjRAkQAkAhgDkACwC5AAGAScIYAJbAZy3rAjGgI0QJEAJAIYA5AAsByQABgEnCGACWwGcxawJBoCNECRACQCsCWQABgEnCGgAJAAnCaoAJwnoACcKKAAnCmABZwPjAUQADMOYAZzerAqGgI0QJEAJALwACAFGAOcC6AAkACQALArkAAYBaQAGAKQAJAAsCyQABgFpAAYALQtNEAYBZAAnC6oAJwvgAUxwJAAIAAeAFAAsDAgAbAxIAIgAyAEIAUgBiAHIAggCRAAIAoYChoAnDKhQDROZAZ2OhgKEgE0QCQKkAAYAJwzgAWTACwDGAoSATRAJAqQABgAnDOABZMALAQYChIBNEAkCpAAGACcM4AFkwAsBRgDEgI0UpEAJAYYAxIDNE8QBDERGgQUBDmSNJORACQHGAQSDzRPEAIxERoFFAY5kjSTkQAkCBgFEj80T5EAJAkYChoAnDKhQBQBOYA0jGQGdX4QQJAAIAkQQJAAIAgYChoAnDKhQDRMZAZ1phBAkAAgCRgCGgaRABoBnDSEBTTAJAIYAhoHkQAaAZw0hAU0wCQCGAIaCJEAGgGcNIQFNMAkAhgCGgmRABoBnDSEBTTAJAIYChIANEAkCnQsHgJQALAwIAGwMSACIAMgBCAFIAYgByAIIAkQACAKGAoaAJwyoUA0TmQGeNIYChIBNEAkCpAAGACcNIAFkwAYAZwPgAWTACwGGAoSATRAJAqQABgAnDSABZMAGAGcD4AFkwAsBxgKEgE0QCQKkAAYAJw0gAWTABgBnA+ABZMALAgYChIBNEAkCpAAGACcNIAFkwAYAZwPgAWTACwJGAYSAjRRGAcUBDiSMZOQACADGAcSDzRPEAQxERoIFAI5kjSTkQAkBBgIEgM0TxAGMREaCTRTkQAkBRAAkAAYA5AAnDWoAJw2gAWgwCALGAIaCzRAJAIYCBJANElkBnhuEACQABgEkACcNagAnDaABaDAkAAgCxgCGgs0QCQCGAkSQDRJZAZ4vhAAkAAYBZAAnDWoAJw2gAWgwJAAIAsYAhoLNEAkAhgKEgA0QCQKdnQeAlAAEAAgApwDqAAwCrQENElkBnkOnAOoAJAAIAKwNyADEAqQACAB8QAgBBgAkAARkEABLAUQACAGGAYaATROZAZ7bpw4qACcOYABsAUzACAHEAKQABAHkAAYB5w6gAksCLAFIAkQACAKGAoaCJwyoUA0TmQGel4YCpAAGAicM4AFLAsYChIFNESRAPEBkAAYA5wzgAUsDBgLGgw0UCQNEACQABgNkACcNagAnDaABaDAIA4YCRoONEAkCRgKEgE0QCQKeaQYCSAPEAAgChgKGgWcMqFANE5kBnsmGAqQABgFnDOABSwLGAoSBTREkQDxAZAAGAicM4AFLAwYCxoMNFAkDRAAkAAYDZAAnDWoAJw2gAWgwCAOGA8aDjRAJA8YChIBNEAkCnpsGA+QABD+QAEsEBgQkAAYBJw7gAUYBJw8gAEYBhIBNEAkBnlEEAmQABgEoAAgEbA9GhE0QJEAkQCcPqgAnD+kABACkAAYBKAAIBEeBFAAGACQABANQAEsAhgBEio0R5EAJAGwBSADGAKcMqAAEgM0RCQEGAQSATRFZAZ8LhgCtEA0QCQCGAQSAjRFZAZ8UhgCtEE0QCQCEAAgBbBCIAYYApwyoAASATRBJAcYBxIANEZkBn6mEAgaBRQBOYAoBRQEOYQ0giQIGAeQABgCnDOABRgBGgg0UhD/MQ8zECAJEAgaBRQBOYAoBRQEOYQ0gpEAJAgYARoINFIQ/zEPkAAgCBgJGgcUATmBkgAaApwzhAUaCDdQFAg5kTSTJAkQCBoFFAE5gCgFFAQ5hDSCkQAkCBgBGgg0UhD/MQ+QACAIGAkaBxQCOYGSABoCnDOEBRoIN1AUEDmRNJMkCRgDGgkUPzmPkgAaBpw0hAU0wCQDGAMaCRQGOZISPzZPkQAaBpw0hAU0wCQDGAMaCRQMOZISPzZPkQAaBpw0hAU0wCQDGAMaCRQSOZISPzZPkQAaBpw0hAU0wCQDGAcSAzRBJAd8eB4DUAAAAwUYIAADBSJMAAMFIk8ABi0GHxITAAAJLwMSGRsXHxMZAAAACTQXDwcWHg0DBQAGFTUQFx4PAAQ0FxQQAAY0GRMZFwEAAUoACS8eDg8rPhoTAgABSwAIMhUcHRARDhgACy4DOzsACg8pOgoOAAczHxIZBS8xAAFIAAs5GhUYJCARFwIDGgAIBTcAERcCAxoACwUYNwARFwIDGhQKAAFJAAY4DwsYGw8ABhgvCxgbDwABTgAEPxAcBQABTwAFKRsJDgEAAUwACS0KHx4OAwcLDwABTQANPhMaNCwZAxoUDQUeGQAXPhMaNCwZAxoUDQUeGTU0GQIeBRsYEQ8AAUIAGD0aCSMgASY6BQcNDx4VJTkOCAkDARwDBQABQwABQAABQQANAS0XDQUHC11bFBMZIAAIHCsDFQ8FHhkACSoaBQMDAxURDQAILgMkPx4DHxEABDkaFRgAAUYAAihbAAYoDxwKBBkACHkYexh8GB8YAAQQAQQZAAkpHx4DHxEWFwcAQRsbGR8ZGxkXGRsZHxkbGQcZGxkfGRsZFxkbIxsZHxkbGRcZGxkfGRsZBxkbGR8ZGxkXGRtSGRsZHxkbGRcZDGp6AAAABjYRExELBAAKORMRCyk0Exk8LQAGORMRCystAAYJPx4DHxEADDwMBRo2MxELKTQTGQAFORJVDlAABBc0DQQABigLFxITGgAJKR4PCR8eAx8RAAQqHR4DAAMqBwcABRAdHhVhAAg+ExQOABATAgAGORQYHBoUAAJaGAABWgBACD89PDQ3FxA8JDkLclkQGz1+RycNFxQBdmJrRDgSFCBceiMwFjcxZUI1PS4OExdwZDsBQU8eKCRBTBAWSFoCQQ==");
var R = function (x) {
    return __g._e2(encodeURI(x))
} , I = function (x) {
    return __g._e1(encodeURI(x))
};

function seedToInteger(seedInput) {
    let seed = 0;
    if (typeof seedInput === 'number') {
        seed = Math.floor(seedInput);
    } else if (typeof seedInput === 'string' && seedInput.length > 0) {
        for (let i = 0; i < seedInput.length; i++) {
            const char = seedInput.charCodeAt(i);
            seed = ((seed << 5) - seed) + char;
            seed |= 0;
        }
    } else {
        seed = Math.floor(Date.now() * (Math.random() * 1000));
    }
    return seed;
}

function mulberry32(seed) {
    let s = seed;
    return function() {
        s |= 0;
        s = s + 0x6D2B79F5 | 0;
        var t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = t + Math.imul(t ^ (t >>> 7), 61 | t) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
}
function generateSeededRandomString(length, seedInput) {
    const characters =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    if (charactersLength === 0) {
        throw new Error("自定义字符集不能为空!");
    }
    if (length <= 0) {
        return "";
    }

    const initialSeed = seedToInteger(seedInput); // 将输入种子转换为整数
    const prng = mulberry32(initialSeed);       // 初始化PRNG

    let result = '';
    for (let i = 0; i < length; i++) {
        const randomNumber = prng(); // 获取 [0, 1) 范围内的伪随机数
        result += characters.charAt(Math.floor(randomNumber * charactersLength));
    }
    return result;
}

function getNonce(sessionId, username) {
    let seed = Math.random();
    if(!username){
        username = Math.random() * 100000;
    }
    let fingerprint = {
        "color_depth": 24,
        "dpi_x": 96,
        "dpi_y": 96,
        "device_pixel_ratio": 2,
        "client_rects": {
            "0": {
                "x": 0,
                "y": 0,
                "width": 1300 + Math.floor(seed * 400),
                "height": 500 + Math.floor(seed * 400),
                "top": 0,
                "right": 1300 + Math.floor(seed * 400),
                "bottom": 500 + Math.floor(seed * 400),
                "left": 0
            }
        },
        "inner_height": 500 + Math.floor(seed * 400),
        "max_touch_points": 0,
        "outer_height": 600 + Math.floor(seed * 400),
        "screen_orientation": "landscape",
        "screen_width": 1792,
        "screen_height": 1120,
        "screen_vail_width": 1792,
        "screen_vail_heigth": 1035,
        "language": "zh-CN",
        "navigator_properties_num": 83,
        "track": false,
        "flash_enabled": false,
        "js_enabled": true,
        "cookie_enabled": true,
        "touch_support": false,
        "vb_enable": false,
        "webrtc_enable": true,
        "battery": {
            "charging": true,
            "chargingTime": 0,
            "dischargingTime": null,
            "level": 1
        },
        "platform": "MacIntel",
        "created": new Date()["getTime"](),
        "connection_type": "wifi",
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
        "websocket_enable": true,
        "debug_enable": true,
        "memory": 8,
        "plugins": [
            [
                "PDF Viewer",
                "Portable Document Format",
                [
                    [
                        "application/pdf",
                        "pdf"
                    ],
                    [
                        "text/pdf",
                        "pdf"
                    ]
                ]
            ],
            [
                "Chrome PDF Viewer",
                "Portable Document Format",
                [
                    [
                        "application/pdf",
                        "pdf"
                    ],
                    [
                        "text/pdf",
                        "pdf"
                    ]
                ]
            ],
            [
                "Chromium PDF Viewer",
                "Portable Document Format",
                [
                    [
                        "application/pdf",
                        "pdf"
                    ],
                    [
                        "text/pdf",
                        "pdf"
                    ]
                ]
            ],
            [
                "Microsoft Edge PDF Viewer",
                "Portable Document Format",
                [
                    [
                        "application/pdf",
                        "pdf"
                    ],
                    [
                        "text/pdf",
                        "pdf"
                    ]
                ]
            ],
            [
                "WebKit built-in PDF",
                "Portable Document Format",
                [
                    [
                        "application/pdf",
                        "pdf"
                    ],
                    [
                        "text/pdf",
                        "pdf"
                    ]
                ]
            ]
        ],
        "canvas_fp": generateSeededRandomString(32, username),
        "webgl_fp": generateSeededRandomString(32, username),
        "graphics": "Google Inc. (Intel)~ANGLE (Intel, ANGLE Metal Renderer: Intel(R) UHD Graphics 630, Unspecified Version)",
        "adblock": false,
        "audio_fp": generateSeededRandomString(32, username),
        "audio_enable": true,
        "nonce": "",
        "SESSIONID": sessionId
    }
    return R(JSON.stringify(fingerprint));
}

function x81(nonce, sessionId){
    let value = I(nonce);
    return "3_2.0" + R([value[0],value[1],sessionId].join("#"))

}
// console.log(x81("7EiH33cVDUlKSxMq4XGAU78mwZQSejovlHzQik9BRSJJgbm3dxUNSUxewXPqPdvfU--qmIforNV2vqIB","SnFKeo7fx4WU8THkbmW6yNa7FUP7KKLBGWBmYY1NRO7"))

// 3_2.0ae3TnRUTEvOOUCNMTQnTSHUZo02p-HNMZBO8YDR0ERtuQ6kqBX2ZgGemkUO17HkmuqOBpD_BWgN97QPY39wfZhRTS0tuo0Yqw_V1ZULBVCN9QuV_IHkqsv90su2x77wTbvXTFJLY7QSYebOfIAt12CXGEgOfUcXIIRFZcL_8ArS_jvOYTiFTr7gTdqfPH_P_aqkToLNLyw2MBcN_vGH_0wSfoRcsxGY8Hg3qVGH8WUHs6LcCK73BoLLBZBX9YqfzVXC_DrUMHGxLZBtftCFmSDV02Tx_3BFKAqpOc8LCXBCfEGOqJgcLDJxO9ugOhuFf6CtYSLe0ICCm2DeVZGeB6rOGZcOOWqgfmXLf209yigH9eBcTVeYLuqHqk9OYjJHqngOqErwLr0tfaGNq_BeM8vumC9XsFbSBsMLOYqL_8wgKQgX07hCq0rrm2iespq3fcwS93hg9cJe92JSL7wY_hg9yb7S8A93C
