import Navbar from '../components/Navbar'
import Header from '../components/Header'
function MyImage() {
  return <img src="../static/IMG-1784.JPG" alt="my image" width="100%" />
}

export default function Index() {
  return (
    <div>
      <Header />
      <Navbar />
      <MyImage />

    </div>
  );
}
