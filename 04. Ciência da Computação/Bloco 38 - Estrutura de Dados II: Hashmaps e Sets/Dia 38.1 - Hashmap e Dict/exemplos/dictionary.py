from rich import print
from collections import Counter

employee_registry = {}

employee_registry[14] = 'name1'
employee_registry[23] = 'name2'
employee_registry[10] = 'name3'
employee_registry[9] = 'name4'
print(employee_registry)

employee_registry[10] = 'name30'
print(f"Novo valor do id 10, após a atualização: {employee_registry[10]}")

map_integers = {number: number * 2 for number in range(3, 21)}

for key in map_integers.keys():
    if key % 2 != 0:
        map_integers[key] = key * 3

print(map_integers)


def count_chars(string):
    new_dict = Counter(string)
    result = dict(new_dict)
    return result


print(count_chars('bbbbaaaacccaaaaaaddddddddccccccc'))
