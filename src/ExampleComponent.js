import React, { Component } from 'react';

// no need to modify anything in here. The second test is looking for the returned JSX from this component
class ExampleComponent extends Component {
  render() {
    return (
      <div className="example">
        <img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" alt="whoa"/>
        <p>Whoa!</p>
      </div>
    );
  }
}

export default ExampleComponent;
