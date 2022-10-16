# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
1. Moving out the hash creation to a utility file as it is something that is being used repetitively so its good to have a common function and also helps in future if we want to change the crypto lib in later stage we just have to modify at one place.
2. Also set the candidate to a default value so in case its not defined it gives a value '0' which was earlier set in an else condition.
3. Also instead of complex if else made the change to set candidate in one line using ternary operator which is more readable.
