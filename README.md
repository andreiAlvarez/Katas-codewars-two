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

// kata 6

You are given three piles of casino chips: white, green and black chips:

the first pile contains only white chips
the second pile contains only green chips
the third pile contains only black chips
Each day you take exactly two chips of different colors and head to the casino. You can choose any color, but you are not allowed to take two chips of the same color in a day.

You will be given an array representing the number of chips of each color and your task is to return the maximum number of days you can pick the chips. Each day you need to take exactly two chips.

solve([1,1,1]) = 1, because after you pick on day one, there will be only one chip left
solve([1,2,1]) = 2, you can pick twice; you pick two chips on day one then on day two
solve([4,1,1]) = 2

// kata 7

Write a function that reverses a list, without using any built-in reverse functions.

// kata 8 

Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
Use method prototypes to enable all Dogs to bark.

// kata 9

You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "How much do people normally tip for something like this?" The artist looks up. "Its always gonna be about tree fiddy."

It was then that you realize the musician was a 400 foot tall beast from the paleolithic era. The Loch Ness Monster almost tricked you!

There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A.) It is a 400 foot tall beast from the paleolithic era B.) It will ask you for tree fiddy

Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note: It can also be written as 3.50 or three fifty.

// kata 10 

You have three input arguments -> actually cards -> actually strings :)

Let's play the game 'Twenty-one' creating a function that returns:

'twenty-one' ---> if the sum of cards equals 21
'more' ---> if the sum of cards more than 21
'less' ---> if the sum of cards less than 21
One nuance - we have lost spades cards of our deck and now it look like (preloaded as deck) that:

deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥'];
A few games:

('3♣', 'J♦', 'Q♥') -> 'less' // 3 + 2 + 3 < 21
('7♣', '7♦', '7♥') -> 'twenty-one' // 7 + 7 + 7  == 21
('10♣', 'Q♣','9♦') -> 'more' // 10 + 3 + 9 > 21
Some details:

the result does not depend on suit
ace can be only 11 points
points of J,Q,K are 2,3,4

// kata 11

You would like to get the 'weight' of a name by getting the sum of the ascii values. However you believe that capital letters should be worth more than mere lowercase letters. Spaces, numbers, or any other character are worth 0.

Normally in ascii

a has a value of 97
A has a value of 65
' ' has a value of 32
0 has a value of 48
To find who has the 'weightier' name you will switch all the values so:

A will be 97
a will be 65
' ' will be 0
0 will be 0
etc...
For example Joe will have a weight of 254, instead of 286 using normal ascii values.

// kata 12

There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

You are given money in nominal value of n with 1<=n<=1500.

Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.

// kata 13

https://www.codewars.com/kata/5da995d583326300293ce4cb/train/javascript

// kata 14 

https://www.codewars.com/kata/57e8c68c97a05990b10000c3/train/javascript

// kata 15

https://www.codewars.com/kata/58db95e7091c114391000040/train/javascript
