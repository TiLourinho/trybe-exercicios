conjuntoA = set()

conjuntoB = set([1, 1, 2, 3, 3, 3])

conjuntoA.add(5)
conjuntoA.add(3)
conjuntoA.add(0)


conjuntoA.add('elemento')

conjuntoB.remove(3)
conjuntoB.remove(3)

conjuntoB.discard(3)

some_element = conjuntoA.pop()

conjuntoB.clear()

if 2 in conjuntoA:
    print("2 está em A")

if 7 not in conjuntoA:
    print("7 não está em A")
