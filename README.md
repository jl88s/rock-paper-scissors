### Rock Paper Scissors
https://lawsin-rps-game.netlify.com

Second project on **The Odin Project** 
This was the second stepping stone in the unknown for me. Like literally. The process took longer than it should have. Since I lack algorithm skills and not being able to imagine how to structure the code in my head. It made things very difficult and frustrating. However, I decided to revert back into studying the basics from: reading different books along with blog posts, forums, Youtube, and other developers code logic, things started to come together. 

#### Getting Started

After banging my head and spinning in circles for hours I realized that I wasn't going anywhere and therefore I needed to take a step back and evaluate the task at hand. Instead of trying to solve the entire problem and work on all the functions at once, I focused on creating one function at a time, and it worked out!

**1.** Starting from creating the **computerPlay()** function where the computer randomly picks a value from the array and then saved that into a *variable*. Inside the function included the variable *getRandomChoices* that stored the three values of *rock, paper, and scissors* in the array. Below that, was another variable, *getRandomChoices* which produced the confusing logic of grabbing a random number from the array's index by using the function **Math.random()**. Since the **Math.random()** function returns a number between 0 and 1, I needed to round that off so in order to do that I had to store it inside **Math.floor()** function. If you look at *main.js* you will see *computerRandomChoices.length* being multiplied by the two functions I just mentioned, and that's because it is looking at the array's length (index number) and working it's magic by selecting one of the 3 values. In order to make sure everything is working as planned, I had to use the *console.log* function which confirmed that the code block was indeed working as intended! 

**2.** After making the *function* that selects the Computer’s random choice. It was time to create the logic and algorithm for the actual game. Before diving right in and start writing out all conditions, I took a step back and thought about all the different approach for the game. One of those was using the *Switch* statement where it can consolidate my code into a more structured and neater way of looking at it. Although, It was pretty straight forward, I’d thought since I’m not too comfortable with the *if/else* statement, yet, I mind as well use it this time to get better at it. 

My setup was like this:
**a.** Create a *function* that has the name of, **playRound** which then took two parameters/arguments  of, **playerSelection** and **computerSelection**. 

**b.** Both the **console.log’s** are there in order for you to see the given result in the **console**, after selection your choice.

**c.** To start the conditional statement I first used  an **if** condition that compared the **playerSeleciton** and **computerSelection** so that it outputs whether both player had *tied*. Inside the code block used to be just an **alert** and/or a **console.log** message giving the outcome of the tie, but after creating the **HTML** and **CSS**, I needed to change them to **document.getElementById()** in order for me to manipulate the *DOM*.

**d.**  Within the main **if statement** there are *three* **else/if statements** that *strictly* compares the **playerSelection** with the given *keywords*: **Rock**, **Paper**, or **Scissors**. Below it, you have a *nested* **if statement** that also strictly compares the result of the **computerSelection** along with the given *keywords*. If the *condition* results to **True**, then the **player** wins and adds a score to the **playerScore** *global* variable by using the **increment operator**; however, **else** if the **computer** wins, then you add a point to the **computerScore** variable.

**e.** Inside each *code block* I went again and manipulated the *DOM* by grabbing the *id* from the specific *element* in the *HTML* and used the **document.getElementById()** method to showcase the desired results from the game. I could have used *console.log*, *alert*, etc, but the goal here was to make the main document dynamicly interactive.

**3.** Ok, here's where it gets interesting. I made a function called, **game(*playerChoice*)** that has only *one* parameter of **playerChoice**. This paramenter is then stored inside a **player** variable along with the **computerPlay()** function which is saved inside the **computer** variable. With that in mind. The already created **playRound** function I made previously is then used inside of the **game()** code block passing the parameters of **player** and **computer**. 

What's happening here is that game is being executed atleast once after the *human* player selects his choice from the images shown on the main page. That is then rendered by using an **addEventListener** and triggers the **game()** function that's why there is only **one** parameter of the **playerChoice** because the **computerPlay()** function will randomly execute once the **game()** function is called. 

**4.** The last and final section of *main.js* are the **Event Listeners** methods that carries a function with the first parameter as the keyword *click* and second parameter as a empty function (in this case, I made it into an *arrow* function to keep it short and simple) that has within its code block of the 3 different image choices avaiable on the main page. The last event listener is a simple method that reloads the page. 

#### Deployment

For deployment, I used **Git** to track my changes between noticable milestones and/or heavy changes. The changes would then be updated to my **GitHub** account. After the project was completed, Netlify is my 'go-to' free web hosting service so I easily did their grad and drop and *poof* my game is online!

#### Skills used

I used a handful of basic skills in this project as I am still learning every time I write code. Learning the **Command Line** recently, it was a nice touch using the **Terminal** so I can showcase my skills and really put them to the test. I was comfortable and confident in my learnings by creating a local repository on **Git** and then being able to push them to **GitHub's** remote repository. It was a good feeling and seemed like this is a vital tool that every developer should be executing for all their projects. Though this project is a simple, it took me a few weeks to complete. After sitting on a blank page on **Visual Studio Code** I was very sure of the **HTML5** elements I was going to be using to visualize the *DOM*. With all the symantics in place the only thing left to do was to add 'life' to the page with good ol' **CSS3**. When replicating a webpage, it's important to have everything align to almost a T! Having a good sense of what *font-size*, *margin*, *color*, *padding*, etc the original desinger/developer used can spare you a great amount of time. With this, being able to use the web browser's **Inspector tool** allowed me to optimize the trail and error that would've been done without such great tool.

#### Difficulties

Algorithims 
Logic
functions
Variables
Methods

#### Assests

Images were made by Sacha Jerrems:
https://dribbble.com/shots/2193123-Rock-Paper-Scissors

#### Difficulties

Algorithims

#### Assests

Images were made by Sacha Jerrems:
https://dribbble.com/shots/2193123-Rock-Paper-Scissors

#### Built With

* [Visual Studio Code](https://code.visualstudio.com/) - My go-to IDE!

#### Sharing is caring

From The Odin Project's [curriculum](https://www.theodinproject.com/courses/web-development-101/lessons/rock-paper-scissors)

#### Timeline

Started the project on **February 17th, 2019**
Ended the project on **April 17rd, 2019**
Hours worked on **24++**
