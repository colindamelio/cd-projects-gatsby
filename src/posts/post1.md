---
slug: '/state-immutability-in-react'
title: 'Exploring State Management in React'
date: '2019-05-08'
---

# Treating state as immutable with React

In this post we’ll be exploring state management within React, specifically around how to safely use the `setState()` method to update a component’s state. We’ll identify potential pitfalls and how to resolve them so that we’ll be able to get a better understanding of state management. It’s important to note that this post assumes a working knowledge of React, ES6 features, and JavaScript array methods. If you’re not there yet - our part-time JavaScript courses will teach you everything you need to explore these topics. 

First, let’s review one of the key recommendations from the official [React documentation](https://reactjs.org/docs/react-component.html) with regard to state:

“Never mutate this.state directly, as calling setState() afterward may replace the mutation you made. Treat this.state as if it were immutable.”

This is a fundamental concept to understand and it is not something that is unique to the React library. When writing JavaScript we need to take some extra precautions to ensure we aren't changing data when we don't intend to. Doing so will help future-proof our apps from errors and time-consuming troubleshooting.

To help illustrate this instruction, let’s explore a common use-case where we want to update our React state data by adding a new item to it. First, we'll create a class component called `AnimalList` that will contain an initial state of an array of animals that we will map over in our render method to render each value as a list item:

```jsx
class AnimalList extends Component {
  constructor() {
    super();
    this.state = {
      animals: ["dog", "cat", "bunny"]
    };
  }

  render() {
    const { animals } = this.state;

    return (
      <div>
        <ul>
          {animals.map(animal => (
            <li>{animal}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AnimalList;
```

Cool! While an array of three animals is a starting point, we can expect in our made-up application that we are going to want to add more animals to the array. Let's create a new `addAnimal` method in our component which we will use to contain our array updating logic. We will also bind that method to a new `click` handler on a button element to see our work in action:

```jsx
class AnimalList extends Component {
  constructor() {
    super();
    this.state = {
      animals: ["dog", "cat", "bunny"]
    };
  }

  addAnimal = () => {
    // logic to update our array 
  };

  render() {
    const { animals } = this.state;

    return (
      <div>
        <ul>
          {animals.map(animal => (
            <li>{animal}</li>
          ))}
        </ul>
        <button onClick={this.addAnimal}>Add The New Animal</button>
      </div>
    );
  }
}

export default AnimalList;
```

Great. Now when we click this new button element, we'll trigger some code to update our state array with some new animal data. In vanilla JavaScript, if we wanted to add a new animal item to our array, we could use the `.push()` method, which would add our new item to the end of the array. To test this out, we can *push* a new animal item directly in the `setState()` method:

```jsx
addAnimal = () => {
  this.setState({
    animals: this.state.animals.push('badger') 
  });
};
```

Unfortunately, this will result in an error because the `push()` method only returns the length value of the array, not the array itself. Instead, let's try applying the `push()` method on a copy of our state array and then we will `setState` with that new copy:

```jsx
addAnimal = () => {

  const animalsCopy = this.state.animals; 
  // best practice to always make a copy of your state item before any manipulation.
  // We want to know which piece of data has changed so we don't want to overwrite the previous version of state.
    
  animalsCopy.push("badger"); 
  // push our new animal item to the copy of the state array.
};
```

Now, before we go and update our state with this new `animalsCopy` variable containing our array, let's inspect the value of both `this.state.animals` and the `animalsCopy` array:

```javascript
console.log(this.state.animals);
// ["dog", "cat", "bunny", "badger"]

console.log(animalsCopy);
// ["dog", "cat", "bunny", "badger"]
```

Even though we used our copy of the state array to push our new animal item, the original state item is also being updated, which is exactly what we are trying to avoid. The `push()` method is mutating our state directly. This is a perfect example where we can see JavaScript not properly handling immutability. 

The central reason behind this is that `objects` and `arrays` are passed by reference. There is extensive documentation on what that means. For our purposes, it essentially means that even though we created a copy of our state, both `this.state.animals` and `animalsCopy` are referencing the *exact* same array in memory. Therefore, we can't safely update the copy without also updating the original array. This is destructive and not a solution we want to utilize.

Fortunately, there are other JavaScript methods we can apply. One such method is the ES6 spread operator:

```jsx
addAnimal = () => {
  const animalsCopy = [...this.state.animals, "badger"];
  // using the spread operator to create a copy of our state array
  // assign 'badger' as the last item in the new array
};
```
The spread operator here is copying all the items from `this.state.animals`, and then adding a new item. If we log the values of both `this.state.animals` and `animalsCopy` again, we see only the copied array was changed, leaving our original state protected from mutation: 

```javascript
console.log(this.state.animals);
// ["dog", "cat", "bunny"]

console.log(animalsCopy);
// ["dog", "cat", "bunny", "badger"]
```

Knowing this, we can confidently update our state array now:

```jsx
addAnimal = () => {
  const animalsCopy = [...this.state.animals, "badger"];
  // using the spread operator to create a copy of our state array
  // assign 'badger' as the last item in the new array
  
  this.setState({
    animals: animalsCopy
    // update state with our new copied array containing the new item.
  });
};
```


With this, our state object would now resemble the following:

```javascript
{
  animals: ['dog', 'cat', 'bunny', 'badger']
}a
```

One caveat to consider with this approach is that the spread operator creates what is referred to as a “shallow” copy. Meaning, if we had many layers of nested data to our state, a shallow copy would only go one level deep. This is just fine for our example because we only have one layer of data. If you’re dealing with more complex data and need to make a “deep” copy then there are some more advanced methods and libraries to turn to.

The spread operator isn't the only approach we can take to achieve this. Alternatively, we can use the JavaScript [`Array.concat` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat). It too will return a copy of the array without modifying the original:

```jsx
const animalsCopy = this.state.animals.concat(‘badger’);


console.log(this.state.animals);
// ["dog", "cat", "bunny"]

console.log(animalsCopy);
// ["dog", "cat", "bunny", "badger"] 
```

And that's all there is to it! If we follow this pattern when *adding* data to state, we’ll be ensuring your original state is never incidentally mutated and future-proofing your app from potential bugs. On top of that, we also know that our state will be updating exactly how we intend it to.

While our app was focused around `arrays`, the same principles apply to `objects` as well: create a copy of your `object` data and apply any updates only to that copied version. 

Happy coding!


