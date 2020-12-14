class Hello extends React.Component {
    render() {
        return <h1>Привет, Reactik.JS</h1>;
    }
}
ReactDOM.render(
    <Hello />,
    document.getElementById("content")
);