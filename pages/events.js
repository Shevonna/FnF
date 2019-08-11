import Layout from '../components/MyLayout.js'
import Header from '../components/Header.js';
import Navbar from '../components/Navbar'

function MyImage() {
  return <img src="../static/IMG-0708.JPG" alt="my image" width="100%" />
}
export default function Events() {
  return (
     <div> 
    <Header />  
    <Navbar />
    <Layout>
      <div className="row">
        <div className="col-4">
          <MyImage />
        </div>
        <div className="col-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet risus risus, eget tincidunt eros convallis et. Curabitur id lacinia nulla. Vestibulum non nisl dolor. Vivamus a justo sed risus eleifend feugiat. Mauris efficitur justo non ligula vestibulum, non imperdiet sapien porttitor. Curabitur enim nisl, sollicitudin non est lacinia, dignissim pharetra lectus. Pellentesque aliquet turpis odio, in eleifend turpis volutpat ut. Mauris gravida, tortor vitae dignissim consectetur, magna mi ultricies metus, sit amet blandit lacus libero vel nibh. Donec eu hendrerit purus, nec venenatis nulla. Sed placerat hendrerit porttitor. Ut pretium accumsan metus, et pretium felis porta at. Vivamus ut tortor augue. Morbi sit amet euismod risus, at consectetur sapien.</p>
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sit amet fermentum lectus. Nulla fringilla lacus lorem, vitae interdum massa feugiat nec. Morbi non libero ultrices, feugiat augue ac, rutrum odio. Maecenas sollicitudin urna orci, at viverra dolor mollis eu. Phasellus venenatis diam eget suscipit laoreet. Phasellus dignissim nec lacus id volutpat. Nulla justo orci, tristique eu odio luctus, tincidunt porta erat. Duis faucibus sollicitudin nisi eget rutrum. Quisque viverra commodo maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean sollicitudin diam in diam semper viverra eu eu tortor. Curabitur sollicitudin est nibh.</p>
      </div>
      </div>
    </Layout>
    </div>
  )
}