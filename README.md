# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

![](https://media.giphy.com/media/d2jjuAZzDSVLZ5kI/giphy.gif)

## Prerequisites
- Introduction to React
- Create-react-app installed
- Basic understanding of components
- Basic understanding of passing props 
- Visual Studio Code installed

## Learning Objectives
By the end of this, students should be able to:
- Use Functional React components
- Nest components
- Create a list component

## Framing
In React there are two ways to define components, Functional and Class components. Functional components are normal JavaScript functions which accept props and returns a React element. 

```javascript
const Greet = props => <h1>Hello {props.name}</h1>
```
Functional components focus on the UI and don't have their own state. The value returned from the function only depends on the values passed as a parameter also known as props. The function will return the same result when passed the same props. Functional components also do not use setState, lifecylce methods, or *this*. Functional components are also "pure functions" meaning they do not have side effects. 

## Get Started

To start this build out, begin by creating a new React project: 

1. ```$ npx create-react-app functional-components```
1. Next ```cd functional-components```
1. Open text text editor
1. ```npm run start```
1. Happy coding!

## Nesting Components

Nested Components are components that are inside of other components. They follow the common engineering pattern of parent, child, and sibling. We take advantage of this to create dynamic and complex UI or user interface. UI includes elements such as buttons, dropdowns menus, and many other elements. 

The beauty of React is that it is component based. Let's create a new component to hold our other components we need to build. Let's start by creating a file named ```Layout.js``` to nest our other components. This is a functional component because it will be a container for other components.

### Layout Component
```jsx
import React from 'react'

const Layout = () => {
    return(
        <div>
            // Place components here in Layout component
        </div>
    )
}

export default Layout
```
## You Do: (10 minutes)

*In basic layout tradition we will have a header, main content, and a footer. Let's create three more files ```Header.js```, ```Footer.js```, and ```Content.js```. Since we are only displaying UI, all components should be functional components

*Now add some JSX to each of our components.

*Import each component into our ```Layout.js``` component.

Your Layout component should look similar to the updated ```Layout.js``` component.

```jsx
import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Layout = () => {
    return(
        <div>
           <Header />
           <Content />
           <Footer />
        </div>
    )
}

export default Layout
```

Now there are 3 components nested inside the ```Layout.js```. Each imported component is a child of ```Layout.js```.

## Adding Data to Our Application

In a separate file name ```data.js``` we are adding an array of objects that includes some city data to add to our application. Import the ```data.js``` file into our application.

We can do this a few ways:
1. Import into ```App.js``` component and pass as props down through our application to the ```Content.js``` component
2. Import ```data.js``` directly into the ```Content.js``` component.

The second way is easier but the first way listed allows us to passing props through our application. **Note: Make sure to export the data from the file**

<details>
    <summary>Data Array:</summary>
    
```
const cities = [
    {
        country: 'China',
        population: 1403500365,
        capitol: 'Beijing',
        language: 'Chinese',
    },
    {
        country: 'Brazil',
        population: 205823665, 
        capitol: 'Brazilia',
        language: 'Portuguese',
    },
    {
        country: 'Egypt',
        population: 90120000,
        capitol: 'Cairo',
        language: 'Arabic',
    },
    {
        country: 'Spain',
        population: 46468102,
        capitol: 'Madrid',
        language: 'Spainish',
    }
]
```

</details>

## Prepare a New Component to Display Data

Look at the object given:
1. What properties are we going to render?
2. What is the appriate JSX? Be semantic.

## You Do: Create a new component with the file name ```City.js``` to render our data

<details>
    <summary>City Component:</summary>
    
```jsx
import React from 'react'

const City = (props) => {

    const { capitol, country, population, language } = props.city
    
    return(
       <div>
            <p>Capitol: {capitol}</p>
            <p>Country: {country}</p>
            <p>Population: {population}</p>
            <p>Language: {language}</p>
       </div>
    )
}

export default City
```

</details>



**Your ```City.js``` component should look similar to depending on how the props object is destructured.**

In your ```Content.js``` component, import the ```City.js``` component.  Use the map Array method to map over the cities array. Return the ```Cities.js``` component inside of map Array method.

```jsx
{cities.map( (city, index) => 
    (<City city={city} key={index} />)
)}
```
## Conclusion

You have now nested fucntional components, passed props down through your application, and mapped over data to display UI.

