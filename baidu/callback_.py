import random


def ChangeNumber(num):
    table = '0123456789abcdefghijklmnopqrstuvwxyz'
    result = []
    temp = num
    if 0 == temp:
        result.append('0')
    else:
        while 0 < temp:
            result.append(table[temp % 36])
            temp //= 36
    return ''.join([x for x in reversed(result)])


def get_callback():
    callback_ = "bd__cbs__" + ChangeNumber(int(random.random() * 2147483648))
    return callback_

def get_callback_p():
    callback_ = "parent.bd__pcbs__" + ChangeNumber(int(random.random() * 2147483648))
    return callback_
