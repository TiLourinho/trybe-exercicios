def reverse(list):
    if len(list) <= 1:
        return list

    result = [list[-1]] + reverse(list[:-1])
    return result


print(reverse([1, 2, 3, 4, 5]))
