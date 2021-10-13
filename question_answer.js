section-1

question-1. Explain the difference between an abstract class and an interface.
ans:- 
abstract class
-abstract classes are the class where one or more methods are abstract but not 
necessarily all method has to be abstract. Abstract methods are the methods, 
which are declare in its class but not define. 
The definition of those methods must be in its extending class.

interface
-Interfaces are one type of class where all the methods are abstract. 
That means all the methods only declared but not defined. 
All the methods must be define by its implemented class.


question-2. What is the purpose of getters and setters in a class?
ans:- a setter is used to set the value of a variable. 
A setter gets called each time the value of the property is changed. In other words, 
it executes a function for each time a property used inside the setter function is changed.

a getter is used to retrieving the value of a variable outside the encapsulating class.


Section – 2 - Testing

question-3. Explain the purpose of black box testing
ans:-
-Black box testing helps to find the gaps in functionality, usability, and other features. 
-Black box testing helps to make sure that the end result meets the business and user requirements.
-Black box testing helps to gain the confidence of the customers by providing them a quality product

question-4.  In your opinion what are the benefits of test cases
ans:-
-The user gets a trustworthy product
-Improved quality of software and user experience.
-For detects bugs earlier
-Manual testing can not do that is doing with test cases


Section 3 – Node.JS specific questions

question-5. What is an error first callback, and what is the reason for this pattern existing? 
ans:-
Error- 
-first callbacks are used to pass error and data. The first argument to these functions is an error object and the subsequent arguments represent associated data.
-it is used to If any error has occurred during the execution of the function, it will be returned by the first argument.

question-6. Explain the difference between fs.readSync and fs.read (File System module in Nodejs)
ans:-
-fs.readSync  It will wait until file related operation is done where fs.read is a async call seems its doesn’t wait.

question-7. What tasks do you feel should be done asynchronously?
ans:-
-	when we don’t bother about data should be persist or deliver then we can go with asynchronous call. 
-	 Ex: Video streaming
