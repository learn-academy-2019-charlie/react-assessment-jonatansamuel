# React Assessments

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:


- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework

 
 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.
 
 //Your Answer
 
 SMART - smart componenets refer to the tab resposible for syncing all the other tabs together. It has access to every branch created and can make individual commands to each.
 DUMB - dumb componenets refer to the tabs that have no mainconnections to all the other branches of the APP they are unaware of the existence of all the other 'sister componenets', they only have on tether of communication which is with the smart component
 
 
 //Googled Answer
 Smart- a smart componenet is any componenet which manages its own state. We've come to know this as any class like object that extends componenet. 
 Dumb- a dumb componenet is defined as a stateless componenet. A stateless componenet is much more efficient than a stateful one, because it doesn't require as many computer resources to render (memory, CPU, and GPU in terms of graphic intensive apps)
 
#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?
 
 
 //Your Answer
 yarn is connecting your text editor with the web server creating a tether between the two. Any changes moving forward will be connected between your terminal, text editor, and web page.
 
 //Googled Answer
 Allows you to add and install a dependency. As the name of the command implies, it adds a dependency, meaning it automatically saves a reference to the package in the package.json file.
 
#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends React.Component{
      constructor(props){
        super(props)
        this.state = {
          recipes: 
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}
      
        }
      }

      render() {
    
        return (
        <div>
          let recipes = this.state.recipes.map(function(recipe){
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )
          })
    
          <ul>
            {recipes}
          </ul>
          
          </div>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)
 
 //Your Answer
 =color
 =image
 =password
 
 //Googled Answer
 =checkbox
 =tel
 =hidden
 
 #### 7. How would you explain state to a friend who doesn't know code?
 
 //Your Answer
 react states are managed within the components, the variables (or commands) are declared within the function body, they are also mutatable. 
 
 //Googled Answer
 State is an object that determines how that component renders & behaves. In other words, "state" is what allows you to create componenets that are dynamic and interactive.
 
 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.
 
 
 //Your Answer
 - State's are nested inside the body of the main "mothership" component and can only be used within that component.
 - props are faster and non changable, and are used to pass data to the baby components. 
 
 //Googled Answer
 - A State in react componenet is its own local state, the state cannot be accessed and modified outside the component and can only be used inside the component.
 - Props make components reusable by giving components the ability to receive data from the parent component in the form of props.
 
#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
My experience with building tic tac toe went very well. I really enjoyed working with the partners i was paired up with. We collaborated very well! The three of us really made sure to grasp the concepts by going through a tutorial on reacts website to fully understand the logic that goes behind building T.T.T. Something that stood out to me was that I noticed I take the role of navigator far too often, so did the two other people I was paired with. This caused us to each step out of our comfort zone and drive for longer periods of time throughout the group projects. The experience of building something in code from scratch was super cool and being able to see it come to life was satisfying. Concepts from react that stood out to me were how it is all connected yet seperate at the same time.