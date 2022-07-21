import Navigation from "../Navigation"
import Footer from "../Footer"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen text-xl">
      <Navigation />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout