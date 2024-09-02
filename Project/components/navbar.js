const Navbar=()=>{

    return`
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand" href="./home.html">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/home.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="/pages/product.html">Product</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="/pages/addproduct.html">AddProduct</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="/pages/cart.html">Cart</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="/pages/login.html">LogIn</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="/pages/signup.html">SignUp</a>
      </li>
     
     
    </ul>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>
`
}

export default Navbar;