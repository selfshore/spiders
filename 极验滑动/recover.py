import glob
import os

import cv2
from PIL import Image


def img_recover():
    for o in glob.glob('*.jpg'):
        img = Image.open(o)
        serilize = [39, 38, 48, 49, 41, 40, 46, 47, 35, 34, 50, 51, 33, 32, 28, 29, 27, 26, 36, 37, 31, 30, 44, 45, 43,
                    42, 12
            , 13, 23, 22, 14, 15, 21, 20, 8, 9, 25, 24, 6, 7, 3, 2, 0, 1, 11, 10, 4, 5, 19, 18, 16, 17]
        target = Image.new('RGB', (260, 160))
        for i in range(52):
            u = serilize[i] % 26 * 12
            c = 80 if 25 < serilize[i] else 0
            box = (u, c, u + 10, c + 80)
            region = img.crop(box)
            b = 80 if 25 < i else 0
            target.paste(region, (i % 26 * 10, b))
        target.save(os.path.splitext(o)[0] + '.png')
        os.remove(o)
