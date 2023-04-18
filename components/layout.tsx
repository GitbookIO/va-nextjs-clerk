import Footer from "./footer";
import Header from "./header";

interface Props {
  children: React.ReactNode
}

export default function Layout(props: Props) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}