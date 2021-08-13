<template>
  <div>
    <div class="home">
      <!-- Jumbotron section -->
      <div class="jumbotron jumbotron jumbotron-fluid py-5 bg-light">
        <div class="container">
          <h1 class="display-4 col-12 mx-auto neon_red" style="font-size: 3em">
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
      <!-- End section -->

      <spacer></spacer>
      <!-- middle content -->
      <div class="row my-5 py-5">
        <div class="col-10 mx-auto">
          <div class="row my-5">
            <div class="col-sm-4 mx-auto">
              <div class="card" style="border: 2px solid #6b7bc3">
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

                  <h2 class="card-title mt-2 fs-1 my-4">Add your dataset</h2>
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
              <div class="card" style="border: 2px solid #6b7bc3">
                <div class="card-body text-center">
                  <a
                    href="https://github.com/MLMI2-CSSI/foundry/tree/main/examples/publishing-guides"
                    target="blank"
                  >
                    <b-icon icon="gear" class="display-4 icons my-3"></b-icon
                  ></a>

                  <h2 class="card-title mt-2 fs-1 my-4">Add your model</h2>
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
      <!-- End section -->

      <!-- Starter code and metadata section -->
      <div class="container-fluid coloredSection">
        <div class="col-10 my-5 mx-auto pt-4 pb-5">
          <h1 class="my-5 pb-4">We make collaboration easy...</h1>
          <div class="row mb-5">
            <div class="col-6 my-auto outlined" style="background-color: #fff">
              <pre
                v-highlightjs
                class="px-5"
                style="color: #6b7bc3"
              ><code class="python"><div class="px-2 py-3" style="color:#6b7bc3;">
f = f.load('wei_atom_locating')
X,y = f.load_data() </div></code><img
            alt="dendrite segmentation data snippet"
            src="../assets/notebook_img.png"
            class="w-100 pb-4"
          /></pre>
            </div>
            <div class="col-5 px-5 text-center my-auto">
              <p class="fw-light fs-2">
                Once a dataset is published to Foundry, you can load it with
                just 2 lines of code.
              </p>
              <a
                href="https://colab.research.google.com/notebooks/intro.ipynb"
                target="blank"
                ><button class="btn btn-primary fs-4 text-center">
                  Run this notebook in Google Colab
                </button></a
              >
            </div>
          </div>
          <!-- end of row -->
          <div class="col-12 text-end">
            <h1 class="col-12 ml-4 pl-4 my-5">
              ...and save you valuable time.
            </h1>
          </div>
          <div class="mt-5 pt-4"></div>
          <div class="row">
            <div class="col col-5 my-auto">
              <p class="lead fs-2">
                No need to spend time making sense of someone else's data. We
                <span class="foundry-pink"
                  >collect information about each dataset</span
                >
                to take out any guesswork on your part.
              </p>
              <p class="lead fs-2 mt-4 pt-5">
                Our publishing process also
                <span class="foundry-pink">includes a human review</span> to
                make sure it meets our data standards.
              </p>
            </div>
            <div class="col col-5 my-auto">
              <table
                class="table table-striped spacer outlined no-borders"
                style="background-color: #6b7bc3"
              >
                <tbody>
                  <tr>
                    <td class="fw-bold">keys</td>
                    <td style="word-wrap: break-word">
                      <ul>
                        <li>
                          <table class="table table-striped table-bordered">
                            <thead>
                              <tr>
                                <th scope="col">keys</th>
                                <th scope="col">type</th>
                                <th scope="col">filter</th>
                                <th scope="col">units</th>
                                <th scope="col">description</th>
                                <th scope="col">classes</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <ul>
                                    <li>imgs</li>
                                  </ul>
                                </td>
                                <td>input</td>
                                <td></td>
                                <!-- Empty rn -->
                                <td></td>
                                <!-- Empty rn -->
                                <td>input, unlabeled images</td>
                                <td></td>
                                <!-- Empty rn -->
                              </tr>
                              <tr>
                                <td>
                                  <ul>
                                    <li>raw</li>
                                  </ul>
                                </td>
                                <td>input</td>
                                <td></td>
                                <!-- Empty rn -->
                                <td></td>
                                <!-- Empty rn -->
                                <td>raw, unlabeled images</td>
                                <td></td>
                                <!-- Empty rn -->
                              </tr>
                              <tr>
                                <td>
                                  <ul>
                                    <li>metadata</li>
                                  </ul>
                                </td>
                                <td>input</td>
                                <td></td>
                                <!-- Empty rn -->
                                <td></td>
                                <!-- Empty rn -->
                                <td>
                                  tabular information describing the
                                  experimental conditions and materials for each
                                  image
                                </td>
                                <td></td>
                                <!-- Empty rn -->
                              </tr>
                              <tr>
                                <td>
                                  <ul>
                                    <li>coords</li>
                                  </ul>
                                </td>
                                <td>target</td>
                                <td></td>
                                <!-- Empty rn -->
                                <td></td>
                                <!-- Empty rn -->
                                <td>
                                  (x,y) coordinates for labeled atoms for each
                                  image
                                </td>
                                <td></td>
                                <!-- Empty rn -->
                              </tr>
                            </tbody>
                          </table>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td class="fw-bold">splits</td>
                    <td>
                      <ul>
                        <li>
                          <table
                            class="table table-striped table-bordered w-auto"
                          >
                            <tbody>
                              <tr>
                                <td class="fw-bold">type</td>
                                <td>train</td>
                              </tr>
                              <tr>
                                <td class="fw-bold">path</td>
                                <td>wei_atom.h5</td>
                              </tr>
                              <tr>
                                <td class="fw-bold">label</td>
                                <td>train</td>
                              </tr>
                            </tbody>
                          </table>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td class="fw-bold">data_type</td>
                    <td>hdf5</td>
                  </tr>
                  <tr>
                    <td class="fw-bold">short_name</td>
                    <td>wei_atom_locating</td>
                  </tr>
                  <tr>
                    <td class="fw-bold">task_type</td>
                    <td>
                      <ul>
                        <li>materials science</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td class="fw-bold">domain</td>
                    <td>
                      <ul>
                        <li>materials science</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td class="fw-bold">n-items</td>
                    <td>299</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- end of row -->
        </div>
      </div>
      <!-- End section -->

      <!-- be apart of foundry section -->
      <div class="mx-auto col-7 my-5 py-5">
        <div class="col-11 mx-auto my-5">
          <h1 class="text-center my-5 pb-3 display-4">
            Build <span class="foundry-blue">Foundry</span> With Us
          </h1>
          <p class="text-center fs-4">
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
      <!-- End section -->
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Raleway:wght@100;200&display=swap");

/* Foundry logo colors */
.foundry-pink {
  color: #fa7b7b;
}
.foundry-blue {
  color: #6b7bc3;
}
/* End section */

/* Metadata table formatting */
table {
  background-color: #6b7bc3;
  color: #fff;
}
.table-striped > tbody > tr:nth-child(odd) > td,
.table-striped > tbody > tr:nth-child(odd) > th {
  background-color: #5162b0;
  color: #fff;
}
.outlined {
  outline-style: solid;
  outline-color: #fff;
  outline-width: thin;
}
/* End section */

/* Button Formatting */
.btn-primary {
  color: #fff;
  background-color: #fa7b7b;
  border-color: #ff5c5c; /*set the color you want here*/
  text-align: center;
  align-items: center;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  color: #fff;
  background-color: #6b7bc3;
  border-color: #2c5191; /*set the color you want here*/
}
.btn-primary:active,
.btn-primary.active {
  color: #fff;
  background-color: #fa7b7b;
  border-color: #ff5c5c; /*set the color you want here*/
}
/* End section */

/* Link formatting */
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
/* End section */

/* Icon formatting */
.icons {
  color: #6b7bc3;
}
.icons:hover,
.icons:focus,
.icons:active,
.icons.active,
.open > .dropdown-toggle.icons {
  color: #fa7b7b;
}
/* End section */

/* Foundry code formatting */
pre {
  overflow-x: auto;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}
/* End section */

/* Jumbotron formatting */
.jumbotron {
  display: flex;
  text-align: center;
  align-items: center;
  background-image: url("../assets/home_img.png");
  background-size: cover;
  height: 800px;
  color: white;
}
/* End section */

/* Blue background section */
.coloredSection {
  background-color: #6b7bc3;
  color: #fff;
}
/* End section */

/* Neon lettering formatting */
.neon_red {
  text-shadow: 0 0 0px #fff, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fa7b7b,
    0 0 30px #fa7b7b, 0 0 35px #fa7b7b, 0 0 45px #fa7b7b, 0 0 75px #fa7b7b;
}
/* End section */

/* Manual responsive design formatting */
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
@media (min-width: 1500px) {
  .spacer {
    min-width: 850px;
  }
}
/* End section */

/* Font formatting */
h1,
h2, pre
{
  font-family: "Raleway", sans-serif;
}

h1, h2 {
  font-weight: 600;
}
h3, pre {
  font-weight: 300;
}
p,
table,
template,
body, a {
  font-family: "Open Sans", sans-serif;
}
/* End section */

/*
font-family: 'Cabin', sans-serif; (paragraph)
font-family: 'Roboto Condensed', sans-serif; (title)

font-family: 'Open Sans', sans-serif; (p)
font-family: 'Raleway', sans-serif; (h)
*/
</style>

<script>
export default {
  name: "Home",
};
</script>

