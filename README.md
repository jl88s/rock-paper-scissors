### Rock Paper Scissors
https://lawsin-rps-game.netlify.com

Second project on **The Odin Project** 
This was the second stepping stone in the unknown for me. Like literally. The process took longer than it should have. Since I lack algorithm skills and not being able to imagine how to structure the code in my head. It made things very difficult and frustrating. However, I decided to revert back into studying the basics from: reading different books along with blog posts, forums, Youtube, and other developers code logic, things started to come together. 

#### Getting Started

After banging my head and spinning in circles for hours I realized that I wasn't going anywhere and therefore I needed to take a step back and evaluate the task at hand. Instead of trying to solve the entire problem and work on all the functions at once, I focused on creating one function at a time, and it worked out!

//1. Starting from creating the **computerPlay()** function where the computer randomly picks a value from the array and then saved that into a *variable*. Inside the function included the variable *getRandomChoices* that stored the three values of *rock, paper, and scissors* in the array. Below that, was another variable, *getRandomChoices* which produced the confusing logic of grabbing a random number from the array's index by using the function **Math.random()**. Since the **Math.random()** function returns a number between 0 and 1, I needed to round that off so in order to do that I had to store it inside **Math.floor()** function. If you look at *main.js* you will see *computerRandomChoices.length* being multiplied by the two functions I just mentioned, and that's because it is looking at the array's length (index number) and working it's magic by selecting one of the 3 values. In order to make sure everything is working as planned, I had to use the *console.log* function which confirmed that the code block was indeed working as intended! 

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
