//component start with capital
function Header() {
    return "Hellow Header";

}
const Myheader = (a, b) => {
    return (
        <h1>This is my header({a + b});
            <p>This is amazing tutorial and the following roots are available</p>
        </h1>);

}

function Footer() {
    return (<h1 className="header">My footer</h1>);
}

export default Myheader;
export { Footer };