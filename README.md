# Mapping Components

![](https://media.giphy.com/media/d2jjuAZzDSVLZ5kI/giphy.gif)

## Overview

In this lesson, we'll be building a simple website that displays city data from an array in JSX by using `.map()` to render the data with a nested functional component.


## Lesson Objectives
By the end of this, students should be able to:
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
To start off our project, we'll replace App.js with a `Class` component. Your file should look like this when you're finished.
  
  ```js
  import React, { Component } from 'react';
  import './App.css'

  class App extends Component {
    render() {
      return (
        <h1>Hello {this.props.name}</h1>
      );
    }
  }

  export default App;
  ```

 

___
### Nesting Components

Nested Components are components that are inside of other components. They follow the common engineering pattern of parent, child, and sibling. We take advantage of this to create dynamic and complex UI or user interface. UI includes elements such as buttons, cards, dropdowns menus, and many other elements. 

In basic layout tradition we will have a `<Header />`, main `<Content />`, and a `<Footer />`. 

- Let's create three more files ```Header.js```, ```Footer.js```, and ```Content.js``` in our `components` folder.
- Now add some JSX to each of our components.
- Import each component into our ```App.js``` component.

<details><summary>Your <code>App</code> component should look similar to this updated <code>App.js</code> component when finished.</summary>


```js
  import React, { Component } from 'react';
  import './App.css'
  import Header from './Header'
  import Content from './Content'
  import Footer from './Footer'
  
  class App extends Component {
    render() {
      return (
        <div>
           <Header />
           <Content />
           <Footer />
        </div>
      );
    }
  }

  export default App;
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

The second way is easier but the first way listed allows us to pass props through our application. 

**Note: Make sure to export the data from the file**



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

<details><summary>A quick CSS class to add onto the <code>City</code> component if you'd like to make it more visible</summary>
  
  ```css
  .city-card {
    width: 14em;
    background: linear-gradient(165deg,rgb(110, 132, 192), rgb(18, 36, 61));
    color: rgb(255, 255, 255);
    box-shadow: 0 0 .25em black;
    padding: .5em 1em;
    margin: 1em auto;
    border-radius: 0.25em;
    font-size: 1.1em;
    line-height: .25em;
    font-weight: 600;
    text-align: left;
    text-shadow: 1px 0px 2px rgb(0, 0, 0);
  }
  ```
</details>

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
  const Content = (props) => {
    return (
      <div>
      {props.cities.map((city, index) => 
          (<City city={city} key={index} />)
      )}
      </div>
    );
  }
```

Make sure to always give components created by an array `.map()` a `key`.
- Keys help React identify which items have changed, are added, or are removed. 
- Keys should be given to the elements inside the array to give the elements a stable identity.
- More on `keys` [here](https://reactjs.org/docs/lists-and-keys.html#keys).

## Recap

You have now nested functional components, passed props down through your application, and mapped over data to display UI. Core concepts in React we covered in this lesson include:
- Passing data into Functional components through `props`
- Using Functional components to display array data by `.mapping()` through the data and passing it into a child component through `props`
- Using `keys` when mapping through a data array to help React identify components


## Resources
- [Embedding .map() in JSX (React Docs)](https://reactjs.org/docs/lists-and-keys.html#embedding-map-in-jsx)
- [Keys (React Docs)](https://reactjs.org/docs/lists-and-keys.html#keys)
- [Components and Props (React Docs)](https://reactjs.org/docs/components-and-props.html)
- [Additional Mapping Components Reading](https://coursework.vschool.io/mapping-components-in-react/)

