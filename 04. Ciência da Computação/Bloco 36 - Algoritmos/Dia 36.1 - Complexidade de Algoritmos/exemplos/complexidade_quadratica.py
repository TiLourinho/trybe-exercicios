from rich import print
import time


def multiply_arrays(array1, array2):
    start_time = time.time()

    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')

        for number2 in array2:
            print(f'Array 2: {number2}')

            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    end_time = time.time()
    total_time = end_time - start_time
    print(f'Time: {total_time}')

    return result


meu_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

multiply_arrays(meu_array, meu_array)

# array = [1, 2, 3, 4, 5]
# iterations: 25
# time: 0.03505420684814453

# array = [1, 2, 3, 4, 5, 6]
# iterations: 36
# time: 0.038137197494506836

# array = [1, 2, 3, 4, 5, 6, 7]
# iterations: 49
# time: 0.037030696868896484

# array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# iterations: 100
# time: 0.05096292495727539
