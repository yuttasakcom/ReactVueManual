<template>
  <div class="container">
    <nav class="navbar navbar-toggleable-sm">
  
      <h1 class="navbar-brand mytext-primary text-center text-md-left">GAME</h1>
  
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <div>
          <Link to="singup" class="btn btn-outline-success pull-lg-right">Sign Up</Link>
          <button href="/signin" class="btn btn-outline-warning pull-lg-right">Sign In</button>
          <button class="btn btn-outline-danger pull-lg-right">Sign Out</button>
        </div>
      </div>
  
      <div class="navbar-toggler navbar-toggler-left mt-1" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="fa fa-bars text-primary"></span>
      </div>
    </nav>
  </div>
</template>

<script>
import { Link } from 'react-router-dom'
export default {
  components: {
    Link
  }
}
</script>
