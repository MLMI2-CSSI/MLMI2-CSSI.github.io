<template>
  <div>
    <b-navbar id="navbar" toggleable="md" class="my-3">
      <div class="row" style="align-items: center">
        <div class="col">
          <b-navbar-brand class="">
            <a class="navbar-brand mx-sm-3"
              ><router-link to="/">
                <img
                  alt="Foundry logo"
                  src="../assets/foundry.png"
                  class="img-fluid logoImg"
                />
              </router-link>
            </a>
          </b-navbar-brand>
        </div>
        <!--<div class="col" style="my-auto">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="" style="justify-content: flex-end" is-nav>
            <b-navbar-nav>
              <b-nav-item>
                <router-link to="/about"
                  ><a class="nav-item nav-link">About</a></router-link
                >
              </b-nav-item>
              <b-nav-item href="https://ai-materials-and-chemistry.gitbook.io/foundry/v/docs/">
                <a
                  class="nav-item nav-link"
                  target="blank"
                  href="https://ai-materials-and-chemistry.gitbook.io/foundry/v/docs/"
                  >Documentation</a
                >
              </b-nav-item>
              <b-nav-item href="#">
                <a
                  class="nav-item nav-link"
                  target="blank"
                  href="https://github.com/MLMI2-CSSI/foundry/tree/main/examples"
                  >Examples</a
                >
              </b-nav-item>
            </b-navbar-nav>

            !-- Right aligned nav items --
            
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input
                  size="sm"
                  class="mr-sm-2"
                  placeholder="Search"
                ></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit"
                  >Search</b-button
                >
              </b-nav-form>
              

              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown right>
                !-- Using 'button-content' slot --
                <template #button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </div>-->

        <div class="col" style="text-align: right">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse
            id="nav-collapse"
            style="justify-content: flex-end"
            is-nav
          >
            <b-navbar-nav>
              <b-nav-item>
                <router-link to="/about"
                  ><a class="nav-item nav-link">About</a></router-link
                >
              </b-nav-item>
              <b-nav-item
                href="https://ai-materials-and-chemistry.gitbook.io/foundry/v/docs/"
              >
                <a
                  class="nav-item nav-link"
                  target="blank"
                  href="https://ai-materials-and-chemistry.gitbook.io/foundry/v/docs/"
                  >Documentation</a
                >
              </b-nav-item>
              <b-nav-item
                href="https://github.com/MLMI2-CSSI/foundry/tree/main/examples"
              >
                <a
                  class="nav-item nav-link"
                  target="blank"
                  href="https://github.com/MLMI2-CSSI/foundry/tree/main/examples"
                  >Examples</a
                >
              </b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <!--
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input
                  size="sm"
                  class="mr-sm-2"
                  placeholder="Search"
                ></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit"
                  >Search</b-button
                >
              </b-nav-form>

              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown right>-->
            <!-- Using 'button-content' slot -->
            <!--
                <template #button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>-->
          </b-collapse>
        </div>
      </div>
    </b-navbar>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Raleway:wght@100;200&display=swap");

.foundry-pink {
  color: #fa7b7b;
}
.foundry-blue {
  color: #6b7bc3;
}
.foundry-blue-border {
  color: #2c5191;
}
.foundry-pink-border {
  color: #ff5c5c;
}

.logoImg {
  padding-left: 1em;
  width: 50%;
  min-width: 40%;
  max-width: 60%;
}

a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
a.nav-item.nav-link {
  color: #6b7bc3;
}
a.nav-item.nav-link:link {
  color: #6b7bc3;
  text-decoration: none;
}
a.nav-item.nav-link:visited {
  color: #6b7bc3;
  text-decoration: none;
}
a.nav-item.nav-link:hover {
  color: #fa7b7b;
  text-decoration: none;
}
a.nav-item.nav-link:active {
  color: #fa7b7b;
  text-decoration: none;
}

a {
  font-family: "Raleway", sans-serif;
  font-weight: 700;
}
/*
font-family: 'Open Sans', sans-serif; (p)
font-family: 'Raleway', sans-serif; (h)
*/
</style>

