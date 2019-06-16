---
slug: '/destructuring-state-and-props'
title: 'React Destructuring Techniques '
date: '2019-05-29'
src: 'https://hackeryou.com/blog/exploring-state-management-in-react'
---

In this post we’ll be exploring a few of the ways we can destructure data in React applications. By using the destructuring syntax, we can unpack values from arrays, or properties from objects, into distinct variables.

When working in React, it is common practice to unpack a couple values from props or state into their own distinct variables:

```jsx
const { name } = this.props
```

Mainly, this was so we can improve our app readability by not always having to write out something like `this.props.name` and instead simply writing `name`. This level of destructuring is perfect for when the amount of data that you’re working with isn’t overly complex.

As data structures grow and contain more nested properties, there are further destructuring practices we can take advantage of to ensure our code continues to remain both error-resistant and readable.

Let's take a look at some additional improvements we can make to our code with destructuring. The examples will focus on `objects` but the same patterns apply to `arrays`.

Let’s imagine we’ve created a `AuthorDetails` component which will be passed `props` containing the following structure:

```javascript
props = {
  author: {
    name: "Margaret Atwood",
    residence: {
      city: "Ottawa",
      province: "Ontario"
    }
  },
  review: "",
  date: "January 14, 2019"
};
```

We are already familiar with extracting first-level properties and binding them into their own variables:

```jsx
import React, { Component } from "react";

class AuthorDetails extends Component {
  
  render() {
    const { author } = this.props;
    const { residence } = author;

    return (
      <div>
        ...
      </div>
    );
  }
}

export default AuthorDetails;
```

If we need to make use of a deeper nested object property like `city` or `province`, we can do so in a concise single-line extraction:

```javascript
const { author: { residence: { city, province } } } = this.props;

```
We no longer need to write `this.props.author.residence.city` and `this.props.author.residence.province`. Our code will be much easier to read by writing only `city` and `province` in our component:

```jsx
return (
  <div>
    <p>City: {city}</p>
    <p>Province: {province}</p>
  </div>
);
```


## Rest syntax

Another feature at our disposal is the `rest` syntax, which is denoted by three dots (`...`). There may be a little confusion here as the `rest` syntax uses the same pattern as the `spread` operator but their purposes differ.  In our destructuring assignment, we can group any remaining properties into their own variable. You can think of it as "what do I want to do with the _rest_ of this data?" This is an effective way to group additional pieces of data together:

```javascript
const { author, ...rest } = this.props;

console.log(author); // { name: "Margaret Atwood", residence: {…} }
console.log(rest);   // { review: "", date: "January 14, 2019" }
```

You can choose any name for the variable used in the `rest` syntax but it should reflect the type of information that it is storing. Out in the wild you will find `...rest` and `...others` as popular choices. Additionally, `rest` syntax **must** come last in the extraction or else you will get an error:

```javascript
const {...rest, author  } = props; 🛑


const { author, ...rest } = props; ✅
```

## Variable renaming

Another convenient feature of destructuring is the ability to rename properties so they better convey more meaning or context for our code. When working with external data like an API, we may have data returned to us that is poorly named or shares the same name for variables we are already using. When we are extracting values, we can rename those values with the `:` character like so:

```javascript
const { author } = props;

const { residence: origin, name: fullName } = author;

console.log(origin);     // { city: "Ottawa", province: "Ontario" }
console.log(fullName);  // "Margaret Atwood"
```

The simplest way to interpret this syntax is to treat anything left of the `:` as what you want to change and anything to the right as what it will be changed to. In this example we update a key like `name` to instead be stored in a variable called `fullName` as it is more descriptive and representative of what data is being stored. 

With these few enhancements we’ve created a strong foundation for both readable and scalable code. Destructuring with `arrays` and `objects` doesn’t stop with these few examples and it’s worthwhile to explore some of the others through the resources provided below.

Happy Coding!


