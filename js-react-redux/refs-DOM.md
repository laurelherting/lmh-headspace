# Import ReactDOM from 'react-dom’;
# import ReactDOM, then call it on the last line of your file.You are ok when you call React.Component because you imported React already. :)

# MUST use it in a `class` function. It can't be used in a stateless object like `const App = () => ( )`

#Adding a Ref to a DOM Element
When the ref attribute is used on an HTML element, the ref callback receives the underlying DOM element as its argument. For example, this code uses the ref callback to store a reference to a DOM node:
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API  this.textInput.focus();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />
      </div>
    );
  }
}
React will call the ref callback with the DOM element when the component mounts, and call it with null when it unmounts.
Using the ref callback just to set a property on the class is a common pattern for accessing DOM elements. The preferred way is to set the property in the ref callback like in the above example. There is even a shorter way to write it: ref={input => this.textInput = input}.

#Adding a Ref to a Class Component

When the ref attribute is used on a custom component declared as a class, the ref callback receives the mounted instance of the component as its argument. For example, if we wanted to wrap the CustomTextInputabove to simulate it being clicked immediately after mounting:
class AutoFocusTextInput extends React.Component {
  componentDidMount() {
    this.textInput.focus();
  }

  render() {
    return (
      <CustomTextInput
        ref={(input) => { this.textInput = input; }} />
    );
  }
}
Note that this only works if CustomTextInput is declared as a class:
class CustomTextInput extends React.Component {
  // ...
}
#Refs and Functional Components

You may not use the ref attribute on functional components because they don't have instances:
function MyFunctionalComponent() {
  return <input />;
}

class Parent extends React.Component {
  render() {
    // This will *not* work!
    return (
      <MyFunctionalComponent
        ref={(input) => { this.textInput = input; }} />
    );
  }
}
You should convert the component to a class if you need a ref to it, just like you do when you need lifecycle methods or state.
You can, however, use the ref attribute inside a functional component as long as you refer to a DOM element or a class component:
function CustomTextInput(props) {
  // textInput must be declared here so the ref callback can refer to it
  let textInput = null;
  function handleClick() {
    textInput.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={(input) => { textInput = input; }} />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );  
}
