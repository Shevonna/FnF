import Layout from '../components/MyLayout.js'
import Header from '../components/Header.js';
import Navbar from '../components/Navbar'

function MyImage() {
  return <img src="../static/IMG-2019.JPG" alt="my image" width="100%" />
}
function Form(){
  return(
    <form>
      <div class="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Jane Wick">
    </input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    </input>
  </div>
 
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
  )
}
export default function Contact() {
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
          <Form />
         </div>
      </div>
    </Layout>
    </div>
  )
}