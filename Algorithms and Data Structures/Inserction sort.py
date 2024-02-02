numeros = [5, 3, 6, 2, 9, 7, 4, 8]
print(numeros)

for j in range(1, len(numeros)):
    actual = numeros[j]

    i = j-1
    while i >= 0 and numeros[i]> actual:
         numeros[i + 1] = numeros[i]
         i -= 1
    numeros [i+1] = actual

print(numeros)    