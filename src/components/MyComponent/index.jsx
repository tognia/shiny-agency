import { Component } from "react"


class MyComponent extends Component {
    displayAlert() {
      alert(`L'alerte a été déclenchée`)
    }
  
    render() {
      return (
        <div>
          <button onClick={() => this.displayAlert()}>👉 Cliquer ici 👈</button>
        </div>
      )
    }
  }

  export default MyComponent