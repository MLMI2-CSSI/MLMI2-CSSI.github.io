<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand mx-sm-3"
      ><router-link to="/">
        <img
          alt="Foundry logo"
          src="../assets/foundry.png"
          class="img-fluid logoImg"
        />
      </router-link>
    </a>
    <div class="col-2 d-none d-md-block"></div>
    <div class="collapse navbar-collapse col-4" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/about"
          ><a class="nav-item nav-link" href="#">About</a></router-link
        >
        <a
          class="nav-item nav-link"
          target="blank"
          href="https://ai-materials-and-chemistry.gitbook.io/foundry/v/docs/"
          >Documentation</a
        >
        <a
          class="nav-item nav-link"
          target="blank"
          href="https://github.com/MLMI2-CSSI/foundry/tree/main/examples"
          >Examples</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopNav",
  props: {
    msg: String,
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}

.logoImg {
  max-width: 1000%;
  margin-left: 5em;
  padding-left: 10px;
}

@media screen and (max-width: 767px) {
  .logoImg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
}

@media screen and (min-width: 768px) {
  .logoImg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
}
@media (min-width: 992px) {
}
@media (min-width: 1200px) {
}
</style>
