import Link from 'next/link'


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light font-italic">
    <a class="navbar-brand" href="/">FnF</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link href="/">
        <a class="nav-item nav-link active">Home <span class="sr-only">(current)</span></a>
        </Link>
        <Link href="/about">
        <a class="nav-item nav-link">About</a>
        </Link>
        <Link href="/events">
         <a class="nav-item nav-link">Event Planning</a>
       </Link>
       <Link href="/staff">
         <a class="nav-item nav-link">Staffing</a>
       </Link>
       <Link href="/cater">
         <a class="nav-item nav-link">Catering</a>
       </Link>
       <Link href="/contact">
         <a class="nav-item nav-link">Contact Us</a>
       </Link>
       <Link href="/rent">
         <a class="nav-item nav-link">Rentals</a>
       </Link>
      </div>
    </div>
  </nav>
  )
}
