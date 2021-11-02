def list_of_multiples(num, length):
  arr = []
  for i in range(length):
    arr.append(num + i * num)
  return arr


print(list_of_multiples(7, 5))
print(list_of_multiples(12, 10))
print(list_of_multiples(17, 6))