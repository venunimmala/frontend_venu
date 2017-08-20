const virtualiztion = [
  {
    play: "play",
    virtualizationID: "1",
    apiType: "REST",
    name: "petstore",
    protocol: "HTTP",
    port: "8091",
    running: "false"
  },
  {
    play: "stop",
    virtualizationID: "1",
    apiType: "WDSL",
    name: "currencyconverter",
    protocol: "HTTP",
    port: "8092",
    running: "false"
  },
  {
    play: "play",
    virtualizationID: "1",
    apiType: "REST",
    name: "paystore",
    protocol: "HTTPs",
    port: "8094",
    running: "false"
  }
];

const virtualiztions = virtualiztion.map(virtualiztion =>
  <div className="box">
    <form action="/">
      <h1 className="title">{virtualiztion.name}</h1>
      <a href="#" title="Play" className="play" />

      <button>{virtualiztion.apiType}</button>
      <label><span>port</span>{virtualiztion.port}</label>
      <label><span>protocol</span>{virtualiztion.protocol}</label>
    </form>
  </div>
);

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Sucessful " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit</h2>
        </div>
        <div className="modal-body">
          <form onSubmit={this.handleSubmit}>
            <div className="formpadding">
              <label>
                <span>Name</span>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <span>port</span>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <span>protocol</span>
                <select>
                  <option value="volvo">HTTP</option>
                  <option value="saab">HTTPS</option>
                </select>
              </label>
            </div>
            <div className="modal-footer">
              <input type="submit" value="Ok" />
              <input type="submit" value="cancel" />
            </div>
          </form>

        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <div className="container">
    {virtualiztions}<NameForm />;

  </div>,
  document.getElementById("root")
);
