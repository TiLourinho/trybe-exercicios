def search(numbers, start, end):
    min_element = numbers[start]
    min_element_index = start

    for i in range(start + 1, end):
        if numbers[i] < min_element:
            min_element = numbers[i]
            min_element_index = i

    return min_element_index


def selection_sort(numbers):
    n = len(numbers)

    for index in range(n - 1):
        min_element_index = search(numbers, index, n)
        numbers[index], numbers[min_element_index] = numbers[min_element_index], numbers[index]  # noqa

    return numbers


numbers = [7, 5, 9, 2, 6, 8]
print(f'Lista inicial: {numbers}')
ordered_numbers = selection_sort(numbers)
print(f'Lista final: {ordered_numbers}')
