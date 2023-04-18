import Footer from "./footer";
import Header from "./header";

interface Props {
  children: React.ReactNode
}

export default function Layout(props: Props) {
  return (
    <div>
      <Header />
      <main className="p-6">{props.children}</main>
      <Footer />
    </div>
  )
}