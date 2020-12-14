class Persona extends React.Component {
    render() {
        return <div>
                    <p>Name : {this.props.name}</p>
                    <p>Age : {this.props.age}</p>
               </div>;
    }
}

Persona.defaultProps = { name: "Null", age: 0 }

ReactDOM.render(
    <Persona /*name="Tom"*/ age="22" />,
    document.getElementById("helloPerson")
);

class HelloApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {welcome: "Welcome, motherfucker!"}
    }
    render() {
        return <h1>{this.state.welcome}</h1>;
    }
}

ReactDOM.render(
    <HelloApp />,
    document.getElementById("helloApp")
);

class ClickButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = { class: "off", label: "Push" };

        this.press = this.press.bind(this);
    }
    press() {
        let className = (this.state.class === "off") ? "on" : "off";
        this.setState({ class: className });
    }
    render() {
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
    }
}

ReactDOM.render(
    <ClickButton />,
    document.getElementById("button1")
);