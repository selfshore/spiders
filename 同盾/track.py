import math
import random
import time

import numpy as np


def get_track(space):
    x = [0, 0]
    y = [0, 0, 0]
    z = [0]
    # x
    count = np.linspace(-math.pi / 2, math.pi / 2, random.randrange(20, 30))
    # print(count)
    func = list(map(math.sin, count))
    nx = [i + 1 for i in func]
    add = random.randrange(10, 15)
    sadd = space + add
    x.extend(list(map(lambda x: x * (sadd / 2), nx)))
    # x.extend(np.linspace(sadd, space, 4 if add > 12 else 3))
    x.extend(np.linspace(sadd, space, 3 if add > 12 else 2))
    x = [math.floor(i) for i in x]
    # y
    for i in range(len(x) - 2):
        if y[-1] < 30:
            y.append(y[-1] + random.choice([0, 0, 1, 1, 2, 2, 1, 2, 0, 0, 3, 3]))
        else:
            y.append(y[-1] + random.choice([0, 0, -1, -1, -2, -2, -1, -2, 0, 0, -3, -3]))
    # z
    for i in range(len(x) - 1):
        z.append((z[-1] // 100 * 100) + 100 + random.choice([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2]))
    value = list(map(list, zip(x, y, z)))
    arr = []
    t = int(time.time() * 1000)
    for i in value:
        arr.append({'type': 1, 'time': t+i[2], 'Action':'', 'op_x': 814+i[0], 'op_y': 672 + i[2]})
    arr[-3]['type'] = 3
    arr[-3]['Action'] = 13
    return arr
