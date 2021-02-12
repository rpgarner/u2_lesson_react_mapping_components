# Mapping Components

![](https://media.giphy.com/media/d2jjuAZzDSVLZ5kI/giphy.gif)

## Overview
We've already covered the hardcoding of components in React and passing hardcoded data into reuasable modular components through props. However, React isn't intended to be used simply for hardcoded data. Its whole purpose is to _react_ to new information and user input and _pass data to the components_ that need to know about the data change so they can update the UI accordingly.

One thing you'll find yourself needing to do is take an array of data and turn it into a series of JSX elements. It's not very common to type out the array manually though. Instead, you'll usually have an array containing just your data and you'll use the `.map()` higher order function to create the new array with JSX in it.

In this lesson, we'll be building a simple website that displays data from an array in JSX by using `.map()` in a functional component.


## Learning Objectives
By the end of this, students should be able to:
- Use Functional React components
- Nest components
- Create a list component utilizing `.map()`


## Getting Started

To start this build out, begin by creating a new React project: 

- ```$ npx create-react-app mapping-components```
- Next ```cd mapping-components```
- Open your project up in VS Code
- Create a `components` folder inside `src` to organize the components we'll be building
- ```npm run start``` to start your development server


## Instructions
### Framing
In React there are two ways to define components, `Functional` and `Class` components.

While more verbose than the functional syntax, Class components offer more control with access to state and lifecyclee methods, which we'll be covering later this week. Creating a Class component is pretty simple, just define a class that `extends Component` and has a `render` function.

```js
import React, { Component } from 'react';

class Greet extends Component {
  render() {
    return (
      <h1>Hello {this.props.name}</h1>
    );
  }
}

export default Greet
```

While writing out Class components is necessary for components that need more control, what if we just wanted to write a component that displays the data from its props? 

Functional components are normal JavaScript functions which accept `props` and return a React element. 

```javascript
const Greet = (props) => <h1>Hello {props.name}</h1>
export default Greet
```

Functional components focus on the UI and don't have their own state. The value returned from the function only depends on the `values passed` as a parameter also known as `props`. The function will return the same result when passed the same props. Functional components also do not use setState, lifecycle methods, or *this*. Functional components are also "pure functions" meaning they do not have side effects. 

___
### Nesting Components

Nested Components are components that are inside of other components. They follow the common engineering pattern of parent, child, and sibling. We take advantage of this to create dynamic and complex UI or user interface. UI includes elements such as buttons, cards, dropdowns menus, and many other elements. 

The beauty of React is that it is _component based_. Let's create a new component to hold our other components we need to build. 
- Let's start by creating a file in the `component` folder named ```Layout.js``` to nest our other components. 
- This is a Functional component because it will only be used as a _container_ for other components.

#### Layout Component
```jsx
import React from 'react'

const Layout = (props) => {
    return(
        <div>
            // Place components here in Layout component
        </div>
    )
}

export default Layout
```

- Now we'll need to import our `Layout` component into `App.js`
```js
// App.js
import Layout from './components/Layout';
```
- Replace the boilerplate generated in `App.js` with our `Layout` component after importing it.


### You Do: (10 minutes)

In basic layout tradition we will have a `<Header />`, main `<Content />`, and a `<Footer />`. 

- Let's create three more files ```Header.js```, ```Footer.js```, and ```Content.js``` in our `components` folder.
- Since we are only displaying UI, all components should be Functional components
- Now add some JSX to each of our components.
- Import each component into our ```Layout.js``` component.

<details><summary>Your Layout component should look similar to this updated <code>Layout.js</code> component when finished.</summary>

```jsx
import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Layout = (props) => {
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

</details>

Now there are 3 components nested inside the ```Layout.js```. Each imported component is a _child_ of ```Layout.js```.

___
### Adding Data to Our Application

<img src="https://blog.kissmetrics.com/wp-content/uploads/2017/04/uber-new-york-supply-demand.gif" alt="city data" height="300" />

In a separate file named ```data.js``` we'll add an array of objects that includes some city data to add to our application. 

- In the `src` folder, create a file named `data.js`.
- Add the following array into the `data.js` file.

#### Data Array
    
```js
const cities = [
    {
        country: 'China',
        population: 1442778120,
        capitol: 'Beijing',
        language: 'Chinese',
    },
    {
        country: 'Brazil',
        population: 213503350,
        capitol: 'Brasília',
        language: 'Portuguese',
    },
    {
        country: 'Egypt',
        population: 103563160,
        capitol: 'Cairo',
        language: 'Arabic',
    },
    {
        country: 'Spain',
        population: 46765970,
        capitol: 'Madrid',
        language: 'Spainish',
    }
]

export default cities;
```

- Import the ```data.js``` file into our application.

We can do this a few ways:
<details><summary>Import into the <code>App.js</code> component and pass as props down through our application to the <code>Content.js</code> component</summary>
  
  <br />
  
  - First, we import into `App.js` and pass the `cities` array as `props` into our `Layout` component.
  
  #### App.js
  ```js
  import React from 'react';
  import './App.css';
  import Layout from './components/Layout';
  import cities from './data';
  
  function App() {
    return(
      <Layout cities={cities} />    // <Layout /> is the parent of our <Content /> component
    )                               // We'll have to pass the cities array down through props into Layout.js
  }                                 // first to give access to the array in Content.js
  
  export default App;
  ```
  
  - Next, we'll need to pass the `cities` array as `props` again from our `Layout` component into our `Content` component give access the data in `Content.js`
  
  #### Layout.js
  ```js
  import React from 'react'
  import Header from './Header'
  import Content from './Content'
  import Footer from './Footer'

  const Layout = (props) => {
    return(
        <div>                                 // Since we have access to cities through props in Layout,
           <Header />                         // we'll pass the data into <Content /> again as props
           <Content cities={props.cities}/>                                           // <---- here.
           <Footer />
        </div>
    )
  }

  export default Layout
  ```
  
  
  
</details> 
<details><summary>Import <code>data.js</code> directly into the <code>Content.js</code> component.</summary>
  
  #### Content.js
  ```js
  import cities from '../data'
  
  ```
  
</details>

The second way is easier but the first way listed allows us to pass props through our application. **Note: Make sure to export the data from the file**



___
### Prepare a New Component to Display Data

Look at the objects given in our Data Array:
- What properties are we going to render?
- What is the appriate JSX for each property? Be semantic.

### You Do 

Create a new component with the file name ```City.js``` in the `components` folder to render our data
- Add in a JSX tag for each property
- Render the data in your JSX using `props`
    
<details><summary>Your <code>City.js</code> component should look similar to this component depending on how the <code>props</code> object is destructured.</summary>

```jsx
import React from 'react'

const City = (props) => {

    const { capitol, country, population, language } = props.city
    
    return(
       <div>
            <p>Country: {country}</p>
            <p>Capitol: {capitol}</p>
            <p>Population: {population}</p>
            <p>Language: {language}</p>
       </div>
    )
}

export default City
```

</details>

- More on ES6 Destructuring Syntax [here](https://jackharner.com/blog/destructuring-and-nested-destructuring-in-es6/).

Like highways are the lifeblood of cities, allowing the transportation of goods, services, and people, `props` are the lifeblood of components in React, allowing data to flow into a component and render in the UI. 

<img src="https://64.media.tumblr.com/fb2f1c83ae879a005b684c798046372c/tumblr_miqqz4Fqmu1rdl9yyo1_500.gif" alt="highway" height="300" />

___
### Mapping Array Data with our Component
Now that we've created our `City` component to accept data through props from our data array, we'll use the `map()` higher order function to render multiple copies of it with all of the data in our array inside of our `Content` component.

- In ```Content.js```, import the ```City.js``` component.  
```js
// Content.js
import City from './City'
```

Depending on if our array data was imported into `App.js` or `Content.js` we'll have access to it in one of two ways:

- If it was imported in `Content.js` we'll have direct access to te `cities` data array in our `<Content />` component.
- If it was imported in `App.js` we'll need to access it through `props`

Now, we'll need to use the `map()` Array method to map over the cities array and pass its data into our `<City />` component within the return of `Content.js`.
- First, we'll need to create a block of code inside the JSX return of `Content.js` with curly brackets `{}` to allow JavaScript to be written inside of the JSX.

```js
import React from 'react';
import City from './City';

const Content = (props) => {
  return (
    <div>
      {/* .map() method used on props.cities here */}
    </div>
  );
}

export default Content;
```

Next, we'll map over the `cities` array and create a `<City />` component with the data from each element in the `cities` array.
  - Call in the `cities` array with `props.cities` in your new JavaScript code block
  - Make sure to give an argument for each `city` along with its `index` inside the `.map()`
  - Return the `<City />` component inside of `.map()` Array method.
  - Give the `<City />` component a prop for the `city` that takes in the `city` element and a `key` that takes in each city's `index`

```jsx
{props.cities.map((city, index) => 
    (<City city={city} key={index} />)
)}
```

Make sure to always give components created by an array `.map()` a `key`.
- Keys help React identify which items have changed, are added, or are removed. 
- Keys should be given to the elements inside the array to give the elements a stable identity.
- More on `keys` [here](https://reactjs.org/docs/lists-and-keys.html#keys).

## Recap

You have now nested functional components, passed props down through your application, and mapped over data to display UI.

## Resources
- [Mapping Components Reading](https://coursework.vschool.io/mapping-components-in-react/)

