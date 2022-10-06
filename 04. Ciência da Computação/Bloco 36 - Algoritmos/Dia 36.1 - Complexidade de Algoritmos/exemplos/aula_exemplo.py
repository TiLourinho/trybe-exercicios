from rich import print


def more_than_twenty_five_percent(list):
    twenty_five_percent = len(list) // 4
    seventy_five_percent = len(list) - twenty_five_percent

    for index, element in enumerate(list[:seventy_five_percent]):
        if element == list[index + twenty_five_percent]:
            return element
    return -1


test1 = [1, 2, 2, 6, 6, 6, 6, 7, 10]
test2 = [1, 1, 2, 3]
test3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(more_than_twenty_five_percent(test1))
