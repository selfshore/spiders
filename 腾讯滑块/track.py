import random


def generate_tracks(S):
    """
    :param S: 缺口距离Px
    :return:
    """
    S += 20
    v = 0
    t = 0.2
    forward_tracks = []
    current = 0
    mid = S * 3 / 5  # 减速阀值
    while current < S:
        if current < mid:
            a = 2  # 加速度为+2
        else:
            a = -3  # 加速度-3
        s = v * t + 0.5 * a * (t ** 2)
        v = v + a * t
        current += s
        forward_tracks.append(round(s))

    back_tracks = [-3, -3, -2, -2, -2, -2, -2, -1, -1, -1]
    forward_tracks.extend(back_tracks)
    track = []
    for i in forward_tracks:
        track.append([i, random.randint(0,1), random.randint(5,20)])
    return track
