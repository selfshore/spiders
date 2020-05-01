import random

def get_gid():
    origin_str = "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    new_str = ''
    for i in origin_str:
        if i == '-':
            n = i
        else:
            t = int(16 * random.random()) | 0
            if i == 'x':
                n = str(hex(t))[2].upper()
            elif i == '4':
                n = '4'
            else:
                n = str(hex(3 & t | 8))[2].upper()
        new_str += n
    return new_str
