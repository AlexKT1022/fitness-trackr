import Navbar from '../components/Navbar';

/** The shared layout for all pages of the app */
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
