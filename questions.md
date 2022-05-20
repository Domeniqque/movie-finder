# Questions

### 1. What is the difference between Component and PureComponent? Give an example where it might break my app.

The primary difference between these two kind of components are the way that they will handle the re-render. `PureComponents` will see if your params was changed with one shallow equality and then will decide if the component will re-rerender. `PureComponents` has your own implementation of `shouldComponentUpdate`. But in the other hand, `Components` needs you to instruct the component (inside of `shouldComponentUpdate` method) to know if they have to renderer again.

If you use a `PureComponent` and pass by props an object, an array or an function it will break the shallow comparison.

And if you use a `Component` but you don't define very well when the component have to renderer again this can prevent the component update.

### 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

I think it's because the context needs to propagate your change through the component tree. In this case, if the shouldComponentUpdate don't let the component renderer again when the context change, the change propagation of the context will be stoped and all child components will not have access to the change.

### 3. Describe 3 ways to pass information from a component to its PARENT.

First, we can pass a function by props and call this function inside the child component passing the data in the function params;
Second, using context api;
Third, using one state management library;

### 4. Give 2 ways to prevent components from re-rendering.

First, break the app in smaller components and isolate the state within the components that really need it. If we have a bunch of differents states in one component it can cause unnecessary rerendering in child components that don't depend on these states.

Second, we could wrap our component with React.memo, wrap the parents functions that our component depend on with React.useCallback and the wrap the parent data that need computation and was passed by props.

### 5. What is a fragment and why do we need it? Give an example where it might break my app.

The fragment is on way to group components withould add any DOM element, like an div element. Sorry, I can not remember one use case where fragments can break one app.

### 6. Give 3 examples of the HOC pattern.

First, we can use React.fowardRef to pass a reference within a component.
Second, we can connect a component with the redux store using the redux connect HOC method.
Third, we create on HOC websocket that subscribe one component to events.

### 7. What's the difference in handling exceptions in promises, callbacks and async...await.

Pomises are asynchronous, so we cannot use try..catch to handle errors. Instead, we can use the .catch method in the pipe to handle the exceptions.

But callback are synchronous and async...await is a structured way to run Promises like one "synchronous" code. With that, we can use the try..catch to handle the exceptions.

### 8. How many arguments does setState take and why is it async.

The setState take one argument. But this argument can be the value or one callback function that will receive by params the current state of the useState and should return the new state.

This method is async because the react only apply the changes in the next rendering.

### 9. List the steps needed to migrate a Class to Function Component.

First, refector the states using the React.useState.

Second, identify the life-clicle methods and what they do. After, implement the corresponding effect using the react hooks.

Third, refectory the jsx elements.

### 10. List a few ways styles can be used with components.

First, import the css file in the top of our components, (eg. `import 'styles.css'`) and use the css classes in the jsx using the props className. (eg. `<div className="container" />`)

Second, use the css modules (eg. `import styles './styles.module.css'`) and also use with the className props (eg. `<div className={styles.container} />`)

Third, use one css-in-js library like styled-components or emotion.

Or another option, use the build-in style way.

### 11. How to render an HTML string coming from the server.

We can use the `dangerouslySetInnerHTML` HTML prop to pass the html received from the server. But, we have to sanitize/unnescape the data before do that.
