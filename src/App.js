import React from "react";
import resources, { costs, levels } from "./data/resources";

const Button = ({ value, filterParam, handleFilter }) => {
  const handleClick = e => {
    handleFilter(value, filterParam);
  };

  return <button onClick={handleClick}>{value}</button>;
};

class App extends React.Component {
  state = {
    resources,
    current: resources
  };

  handleFilter = (val, param) => {
    const filtered = this.state.resources.filter(
      resource => resource[param] === val
    );

    this.setState({
      current: filtered
    });
  };

  handleReset = e => {
    this.setState({
      current: resources
    });
  };

  render() {
    return (
      <main>
        <h1>Hello World Initiative</h1>

        <p>Cost:</p>
        {costs.map(cost => (
          <Button
            key={cost}
            value={cost}
            filterParam="cost"
            handleFilter={this.handleFilter}
          />
        ))}

        <p>Level:</p>
        {levels.map(level => (
          <Button
            key={level}
            value={level}
            filterParam="level"
            handleFilter={this.handleFilter}
          />
        ))}

        <hr />
        <button onClick={this.handleReset}>Reset</button>
        <hr />

        {this.state.current.map(resource => (
          <div key={resource.name}>
            <h2>{resource.name}</h2>
            <p>Cost: {resource.cost}</p>
            <p>Level: {resource.level}</p>
            <p>{resource.description}</p>
            <hr />
          </div>
        ))}
      </main>
    );
  }
}

export default App;
