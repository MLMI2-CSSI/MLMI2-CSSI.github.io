<template>
  <div>
    <div class="home col-12">
      <!-- heading content -->
      <!--
    <div class="jumbotron text-center py-5 col-12 bg-light">
      <h1 class="display-4 col-10 mx-auto">
        An open source machine learning platform for scientists
      </h1>
      <p class="lead mt-3 col-7 mx-auto">
        Access datasets and ML models while setting industry benchmarks
      </p>
      <router-link to="/about"
        ><button class="btn btn-primary btn-lg mt-3" role="button">
          Learn more
        </button></router-link
      >
    </div>
    -->

      <div class="jumbotron jumbotron jumbotron-fluid py-5 bg-light">
        <div class="container">
          <h1 class="display-4 col-12 mx-auto neon_red fixText">
            An open source machine learning platform for scientists
          </h1>
          <!-- <h1 class="display-4 col-12 mx-auto neon_test fixText">
            An open source machine learning platform for scientists
          </h1> -->
          
          <p class="mt-3 mx-auto text-center fs-4">
            Access datasets and ML models while setting industry benchmarks
          </p>
          <router-link to="/about"
            ><button class="row btn btn-primary btn-lg mt-3 fs-4" role="button">
              Learn more
            </button></router-link
          >
        </div>
      </div>

      <spacer></spacer>
      <!-- middle content -->
      <div class="row my-5 py-5">
        <div class="col-10 mx-auto">
          <div class="row my-5">
            <div class="col-sm-4 mx-auto">
              <div class="card borderChange">
                <div class="card-body text-center">
                  <a
                    href="https://github.com/MLMI2-CSSI/foundry/tree/main/examples/publishing-guides"
                    target="blank"
                  >
                    <b-icon
                      icon="file-bar-graph"
                      class="display-4 icons my-3"
                    ></b-icon
                  ></a>

                  <h5 class="card-title mt-2 fs-1 my-4">Add your dataset</h5>
                  <p class="card-text fs-5">
                    We host data from a variety of scientific domains and make
                    it easy to share and use.
                  </p>
                </div>
              </div>
              <div class="break"></div>
              <!-- When screen is small, cards stack - this puts a space between them -->
            </div>
            <div class="col-sm-4 mx-auto">
              <div class="card borderChange">
                <div class="card-body text-center">
                  <a
                    href="https://github.com/MLMI2-CSSI/foundry/tree/main/examples/publishing-guides"
                    target="blank"
                  >
                    <b-icon icon="gear" class="display-4 icons my-3"></b-icon
                  ></a>

                  <h5 class="card-title mt-2 fs-1 my-4">Add your model</h5>
                  <p class="card-text fs-5">
                    Our models live in the cloud, which makes them easy to run
                    and share.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Starter code and metadata section -->
      <div class="container-fluid coloredSection">
        <div class="col-10 my-5 mx-auto pt-4">
          <h1 class="my-5 pb-4">We make collaboration easy...</h1>
          <div class="row mb-5">
            <div class="col-6 my-auto">
              <pre v-highlightjs class="bg-light px-5" style="color:#6b7bc3"><code class="python">
  f = f.load("your_dataset")           
  X,y = f.load_data()
    </code>
    <img
            alt="dendrite segmentation data snippet"
            src="../assets/dendrite-seg-img.png"
            class="w-100 pb-3"
          /></pre>
            </div>
            <div class="col-5 px-5 text-center my-auto">
              <p class="fw-light fs-2">
                Once a dataset is published to Foundry, you can load it with
                just 2 lines of code.
              </p>
              <a
                href="https://colab.research.google.com/github/MLMI2-CSSI/foundry/blob/main/examples/dendrite-segmentation/dendrite_segmentation.ipynb"
                target="blank"
                ><button class="btn btn-primary fs-4 text-center">
                  Run this in Google Colab
                </button></a
              >
            </div>
          </div>
          <!-- end of row -->
          <!-- <div class="col-12 text-end">
            <h1 class="col-11 my-5">...and save you valuable time.</h1>
          </div> -->
          <div class="mt-5 pt-4">   </div>
          <div class="row">
            <div class="col-6">
              <p class="lead fs-2 my-auto">
                No need to spend time making sense of someone else's data. We
                collect information about each dataset to take out any guesswork
                on your part. Our publishing process also includes a human
                review to make sure it meets our data standards.
              </p>
            </div>
            <div class="col-5 my-auto">
              <table class="table table-striped" style="background-color: #fff">
                <tbody>
                  <tr>
                    <td class="fw-bold">hello</td>
                    <td>hello</td>
                  </tr>
                  <tr>
                    <td class="fw-bold">hello</td>
                    <td>hello</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-12 text-end">
            <h1 class="col-11 pt-4 pb-5">...and save you valuable time.</h1>
          </div>
          <!-- end of row -->
        </div>
      </div>

      <!-- be apart of foundry section -->

      <div class="mx-auto col-7 mt-5">
        <div class="col-11 mx-auto">
          <h1 class="text-center my-5 display-4 neon">Build Foundry With Us</h1>
          <p class=" text-center fs-4">
            At Foundry, we believe accessibility and collaboration are the keys
            to problem solving. That's why we've made it super easy for you to
            share and use data. If you have a dataset you'd like to contribute,
            our
            <a
              class="link-color"
              href="https://github.com/MLMI2-CSSI/foundry/tree/main/examples/publishing-guides"
              target="blank"
              >publishing guide</a
            >
            can set you up to do that.
          </p>
          <p class="fs-4 pt-2 text-center">
            Check out our
            <a
              class="link-color"
              href="https://ai-materials-and-chemistry.gitbook.io/foundry/v/docs/"
              target="blank"
              >documentation</a
            >
            to see how easy it is to use Foundry, and follow our
            <a
              class="link-color"
              href="https://github.com/MLMI2-CSSI/foundry/tree/main/examples"
              target="blank"
              >examples</a
            >
            to do it all yourself.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.foundry-pink {
  color: #fa7b7b;
}
.foundry-blue {
  color: #6b7bc3;
}

.btn-primary {
  color: #fff;
  background-color: #fa7b7b;
  border-color: #ff5c5c; /*set the color you want here*/
  text-align: center;
  align-items: center;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  color: #fff;
  background-color: #6b7bc3;
  border-color: #2c5191; /*set the color you want here*/

}

.link-color:link {
  color: #fa7b7b;
  text-decoration: underline;
  text-decoration-color: #6b7bc3;
}

.link-color:visited {
  color: #fa7b7b;
  text-decoration: underline;
  text-decoration-color: #ff5c5c;
}

.link-color:hover {
  color: #6b7bc3;
  text-decoration: underline;
  text-decoration-color: #2c5191;
}

.link-color:active {
  color: #fa7b7b;
  text-decoration: underline;
  text-decoration-color: #ff5c5c;
}

.icons {
  color: #6b7bc3;
}


pre {
  overflow-x: auto;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}

.icons:hover,
.icons:focus,
.icons:active,
.icons.active,
.open > .dropdown-toggle.icons {
  color: #fa7b7b;
}

.jumbotron {
  display: flex;
  text-align: center;
  align-items: center;
  background-image: url("../assets/home_img.png");
  background-size: cover;
  height: 800px;
  color: white;
}

.borderChange {
  border: 2px solid #6b7bc3;
}
/* Keep if want border to change color (blue to pink) on hover
.borderChange:hover {
  border: 2px solid #fa7b7b;
}
*/

.coloredSection {
  background-color: #6b7bc3;
  color: #fff;
}

.fixText {
  font-size: 3.5em;
}

b-navbar {
  background-color: #fff;
  margin-top: 3em;
  margin-bottom: 3em;
  margin-left: 3em;
}

/*a {
  text-decoration: none;
  // -webkit-transition: all 0.5s;
  // -moz-transition: all 0.5s;
  // transition: all 0.5s;
}

p:nth-child(1) a {
  color: #fff;
  font-family: Monoton;
  //-webkit-animation: neon1 1.5s ease-in-out infinite alternate;
  //-moz-animation: neon1 1.5s ease-in-out infinite alternate;
  //animation: neon1 1.5s ease-in-out infinite alternate;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fa7b7b,
    0 0 35px #fa7b7b, 0 0 40px #fa7b7b, 0 0 50px #fa7b7b, 0 0 75px #fa7b7b;
}*/

.neon_red {
  color: #fff;
  font-family: Monoton;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fa7b7b,
    0 0 35px #fa7b7b, 0 0 40px #fa7b7b, 0 0 50px #fa7b7b, 0 0 75px #fa7b7b;
}

.neon_test {
  color: #fff;
  font-family: Monoton;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 8px #fa7b7b,
    0 0 14px #fa7b7b, 0 0 40px #fa7b7b, 0 0 20px #fa7b7b, 0 0 30px #fa7b7b;
}

.neon_blue {
  color: #fff;
  font-family: Monoton;
  max-width: 100%;
  /*-webkit-animation: neon1 1.5s ease-in-out infinite alternate;
  -moz-animation: neon1 1.5s ease-in-out infinite alternate;
  animation: neon1 1.5s ease-in-out infinite alternate;*/
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #6b7bc3,
    0 0 35px #6b7bc3, 0 0 40px #6b7bc3, 0 0 50px #6b7bc3, 0 0 75px #6b7bc3;
}
/* Put below back if you want glow text on home page to pulse (but it seems to make the page run slow / lag)
p:nth-child(1) a:hover {
  color: #ff1177;
  -webkit-animation: none;
  -moz-animation: none;
  animation: none;
}

@-webkit-keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fa7b7b,
      0 0 70px #fa7b7b, 0 0 80px #fa7b7b, 0 0 100px #fa7b7b, 0 0 150px #fa7b7b;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fa7b7b,
      0 0 35px #fa7b7b, 0 0 40px #fa7b7b, 0 0 50px #fa7b7b, 0 0 75px #fa7b7b;
  }
}

@-moz-keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fa7b7b,
      0 0 70px #fa7b7b, 0 0 80px #fa7b7b, 0 0 100px #fa7b7b, 0 0 150px #fa7b7b;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fa7b7b,
      0 0 35px #fa7b7b, 0 0 40px #fa7b7b, 0 0 50px #fa7b7b, 0 0 75px #fa7b7b;
  }
}

@keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fa7b7b,
      0 0 70px #fa7b7b, 0 0 80px #fa7b7b, 0 0 100px #fa7b7b, 0 0 150px #fa7b7b;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fa7b7b,
      0 0 35px #fa7b7b, 0 0 40px #fa7b7b, 0 0 50px #fa7b7b, 0 0 75px #fa7b7b;
  }
}
*/

@media screen and (max-width: 767px) {
  /* When screen is small, cards stack - this puts a space between them */
  .break {
    margin-top: 4em;
  }
}
@media screen and (min-width: 768px) {
}
@media (min-width: 992px) {
}
@media (min-width: 1200px) {
}

h1,
h2,
h3,
h4,
h5 {
  font-family: Monoton;
}

h1 {
  font-size: 4em;
}

spacer {
  margin-top: 5000px;
}
</style>

<script>
export default {
  name: "Home",
};
</script>

