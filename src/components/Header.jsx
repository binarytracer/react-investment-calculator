import Logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={Logo} title="Investment Computation" />
      <h1> Investment Calculator</h1>
    </header>
  );
}
