const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};
class App extends React.Component {
  hnadleTitleClick() {
    alert("You clicked on Title !");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.hnadleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel"
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "cat",
        breed: "Mixed"
      })
    ]);
  }
}
// render out the componnent in dom
ReactDOM.render(
  React.createElement(App), //instance of the app to be render
  document.getElementById("root") //where to render
);
