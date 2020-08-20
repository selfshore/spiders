from PIL import Image


def encodeto16(content):
    """
    十六进制转换
    :param content:
    :return:
    """
    encode_str = '0123456789ABCDEF'
    return encode_str.index(content)


def img_recv(bgIS):
    """
    :param bgIS:
    :return:
    """
    img = Image.open('2.jpeg')
    arr = [[], []]
    for i in range(2):
        for j in range(8):
            part_img = img.crop((j * 40, i * 90, (j + 1) * 40, (i + 1) * 90))
            arr[i].append(part_img)
    #以下是拼凑图片部分
    counter = 0
    arr_recv = [[], []]
    for i in arr_recv:
        for j in range(8):
            i.append([])
    for i in range(16):
        num = encodeto16(bgIS[counter])
        if num < 8:
            if counter >= 8:
                arr_recv[0][num] = arr[1][counter - 8]
            else:
                arr_recv[0][num] = arr[0][counter]
        else:
            if counter >= 8:
                arr_recv[1][num - 8] = arr[1][counter - 8]
            else:
                arr_recv[1][num - 8] = arr[0][counter]
        counter += 1
    to_image = Image.new('RGB', (320, 180))
    for i in arr_recv:
        for j in i:
            to_image.paste(j, (i.index(j) * 40, arr_recv.index(i) * 90, (i.index(j)+1) * 40, (arr_recv.index(i)+1) * 90))
    to_image.save('bb.jpg')
