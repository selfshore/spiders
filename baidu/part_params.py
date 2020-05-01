import execjs

def get_params(data=None):
    with open('params.js', 'r')as f:
        content = f.read()
    ctx = execjs.compile(content)
    if data:
        result = ctx.call('result', data)
    else:
        result = ctx.call('result')
    return result


def get_dv():
    with open('dv.js', 'r')as f:
        content = f.read()
    ctx = execjs.compile(content)
    result = ctx.call('f')
    return result

def get_fs(nameL):
    with open('fs.js', 'r')as f:
        content = f.read()
    ctx = execjs.compile(content)
    result = ctx.call('result',nameL)
    return result


def get_traceid():
    with open('traceid.js', 'r')as f:
        content = f.read()
    ctx = execjs.compile(content)
    result = ctx.call('getid')
    return result

