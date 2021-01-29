# Katas-codewars-two

// kata 1 

Magpies are my favourite birds
Baby ones even more so...
It is a little known fact^ that the black & white colours of baby magpies differ by at least one place and at most two places from the colours of the mother magpie.
So now you can work out if any two magpies may be related.
...and Quardle oodle ardle wardle doodle the magpies said
Kata Task
Given the colours of two magpies, determine if one is a possible child or grand-child of the other.
Notes
Each pair of birds being compared will have same number of colour areas
B = Black
W = White
Example
Given these three magpies
Magpie 1  BWBWBW
Magpie 2  BWBWBB
Magpie 3  WWWWBB
You can see:
Magpie 2 may be a child of Magpie 1 because there is only one difference
Magpie 3 may be child of Magpie 2 because there are two differences
So Magpie 3 may be a grand-child of Magpie 1
On the other hand, Magpie 3 cannot be a child of Magpie 1 because there are three differences
DM :-)

// kata 2

A friend of yours is developing an application for a hotel. You should write a function that returns all names of the people on a given floor. Every floor has 6 rooms, and all rooms are numbered in a consecutive way.
The function has the following signature:
function roomMates( rooms, floor ){}
The argument rooms holds all clients in an array, where the index (starts at 0) corresponds to the room-number (starts at 1) and holds the name of the client.
floor is an integer and denotes the floor whose names need to be returned. If the floor is empty, the function roomMates should return an empty Array.
rooms = [ "foo", "bar" ]
Means that foo (index 0) stays in room #1 of the 1st floor and bar (index 1) in room #2 of the 1st floor.
Empty rooms shouldn't be returned, so he can directly count the number of occupied rooms by looking at the length of the array.
You have to use the filter-method of Javascript, which returns each element of the array for which the filter-method returns true. The second argument gives the index you're looking at:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// kata 3 

Create a combinator function named flip that takes a function as an argument and returns that function with it's arguments reversed.

For example:

flip(print)(4,5) // returns "5 -> 4"
function print(a,b) {
  return a + " -> " + b;
}
The idea is to reverse any number of arguments using a higher order function, without any concern for the function being passed into it.

// kata 4

you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

// kata 5

Create (a) method(s) eqAll that determines if all elements of a list are equal.
list can be a String or an Array; return value is a Boolean.
Your method(s) should not be enumerable. Equality should be strict (===).

Examples
"aaaaa".eqAll() => true
"abcde".eqAll() => false
[0,0,0].eqAll() => true
[0,1,2].eqAll() => false

"".eqAll() => true
[].eqAll() => true
