from rich import print
import time


def multiply_arrays(array1, array2, array3):
    start_time = time.time()

    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')

        for number2 in array2:
            print(f'Array 2: {number2}')

            for number3 in array3:
                print(f'Array 3: {number3}')

                result.append(number1 * number2 * number3)
                number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    end_time = time.time()
    total_time = end_time - start_time
    print(f'Time: {total_time}')

    return result


meu_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

multiply_arrays(meu_array, meu_array, meu_array)

# array = [1, 2, 3, 4, 5]
# iterations: 125
# time: 0.0596463680267334

# array = [1, 2, 3, 4, 5, 6]
# iterations: 216
# time: 0.06762433052062988

# array = [1, 2, 3, 4, 5, 6, 7]
# iterations: 343
# time: 0.08591961860656738

# array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# iterations: 1000
# time: 0.20060086250305176
