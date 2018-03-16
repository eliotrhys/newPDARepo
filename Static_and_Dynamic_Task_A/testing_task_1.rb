# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.

def func1 val
  if val = 1
  return true
  else
  return false
  end
end

# No brackets around argument.
# Poor indentation.
# Should have == instead.

dif max a b
  if a > b
      return a
  else
  b
  end
end
end

# Misspelt "def".
# No brackets around arguments.
# No return before "b".
# Poor indentation.
# One extra end.

def looper
  for i in 1..10
  puts i
  end
end

# Puts won't return an integer.
# Returning in the for loop will return all numbers between 1-10 and the next function needs it to be 10.

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1

# No end.

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end

# This one seems fine?

if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
end

# Misspelt "failures" after second puts.

if failures
  puts "Test Failed"
else
  puts "Test Passed"
end

# No conditions set - assuming it is meant to be "if doesn't = 0 then return test failed."
