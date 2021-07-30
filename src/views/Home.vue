<template>
  <div class="home col-12 mb-5">
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
        <h1 class="display-4 col-12 mx-auto">
          An open source machine learning platform for scientists
        </h1>
        <p class="mt-3 mx-auto text-center">
          Access datasets and ML models while setting industry benchmarks
        </p>
        <router-link to="/about"
          ><button class="row btn btn-primary btn-lg mt-3" role="button">
            Learn more
          </button></router-link
        >
      </div>
    </div>

    <!-- middle content -->
    <div class="row my-5">
      <div class="col-10 mx-auto">
        <div class="row">
          <div class="col-sm-4 mx-auto">
            <div class="card borderChange">
              <div class="card-body text-center">
                <a href="https://github.com/MLMI2-CSSI/foundry/tree/main/examples/publishing-guides" target="blank">
                <b-icon
                  icon="file-bar-graph"
                  class="display-4 icons my-2"
                ></b-icon></a>

                <h5 class="card-title mt-2">Add your dataset</h5>
                <p class="card-text">
                  We host data from a variety of scientific domains and make it
                  easy to share and use.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mx-auto">
            <div class="card borderChange">
              <div class="card-body text-center">
                <a href="https://github.com/MLMI2-CSSI/foundry/tree/main/examples/publishing-guides" target="blank">
                <b-icon icon="gear" class="display-4 icons my-2"></b-icon></a>

                <h5 class="card-title mt-2">Add your model</h5>
                <p class="card-text">
                  Our models live in the cloud, which makes them easy to
                  run and share.
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
        <h1 class="mb-5">We make collaboration easy...</h1>
        <div class="row mb-5">
          <div class="col-6">
            <pre v-highlightjs class="bg-light px-4"><code class="python">
  f = f.load("your_dataset")           
  X,y = f.load_data()
    </code>
    <img
            alt="dendrite segmentation data snippet"
            src="../assets/dendrite-seg-img.png"
            class="w-100 pb-3"
          /></pre>
          </div>
          <div class="col-5">
            <p class="fw-light fs-4">
              Once a dataset is published to Foundry, you can load it with just 2
              lines of code.
            </p>
            <a
              href="https://colab.research.google.com/github/MLMI2-CSSI/foundry/blob/main/examples/dendrite-segmentation/dendrite_segmentation.ipynb"
              target="blank"
              ><button class="btn btn-primary">
                Run this in Google Colab
              </button></a
            >
          </div>
        </div>
        <!-- end of row -->
        <div class="col-12 text-end">
          <h1 class="col-11 my-5">...and save you valuable time.</h1>
        </div>
        <div class="row">
          <div class="col-6">
            <p class="lead">
              No need to spend time making sense of someone else's data. We collect information about each dataset to
              take out any guesswork on your part. Our
              publishing process also includes a human review to make sure it meets our
              data standards. 
            </p>
          </div>
          <div class="col-5">
            <table class="table table-striped">
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
        <!-- end of row -->
      </div>
    </div>

    <!-- be apart of foundry section -->

    <hr class="col-10 m-auto" />

    <div class="mx-auto col-7 mt-5">
      <div class="col-11 mx-auto">
        <h1 class="text-center my-3 display-4">Build Foundry With Us</h1>
        <p>
          At Foundry, we believe accessibility and collaboration are the keys to
          problem solving. That's why we've made it super easy for you to share
          and use data. If you have a dataset you'd like to contribute, our
          <a
            class="link-color"
            href="https://github.com/MLMI2-CSSI/foundry/tree/main/examples/publishing-guides"
            target="blank"
            >publishing guide</a
          >
          can set you up to do that.
        </p>
        <p>
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
}
.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open>.dropdown-toggle.btn-primary {
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


.icons:hover, .icons:focus, .icons:active, .icons.active, .open>.dropdown-toggle.icons {
  color: #fa7b7b;
}

.jumbotron {
  display: flex;
  text-align: center;
  align-items: center;
  background-image: url("../assets/home_img.png");
  background-size: cover;
  height: 500px;
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

/*.coloredSection {
  background-color: #6b7bc3;
  color: #fff;
}*/

</style>

<script>
export default {
  name: "Home",
};
</script>
