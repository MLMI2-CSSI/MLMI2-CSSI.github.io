<template>
  <div class="home col-12 mb-5">
    <!-- heading content -->
    <div class="jumbotron text-center py-5 col-12 bg-light">
      <h1 class="display-4 col-10 mx-auto">
        An open source machine learning platform for scientists
      </h1>
      <p class="lead mt-3 col-7 mx-auto">
        Access datasets and ML models while setting industry benchmarks
      </p>
      <a href="#"
        ><button class="btn btn-primary btn-lg mt-3" role="button">
          Learn more
        </button></a
      >
    </div>

    <!-- middle content -->
    <div class="row my-5">
      <div class="col-10 mx-auto">
        <div class="row">
          <div class="col-sm-4 mx-auto">
            <div class="card">
              <div class="card-body text-center">
                <b-icon
                  icon="file-bar-graph"
                  class="display-4 icons my-2"
                ></b-icon>

                <h5 class="card-title mt-2">Add your dataset</h5>
                <p class="card-text">
                  We host data from a variety of scientific domains and make it
                  easy to share and use.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mx-auto">
            <div class="card">
              <div class="card-body text-center">
                <b-icon icon="gear" class="display-4 icons my-2"></b-icon>

                <h5 class="card-title mt-2">Add your model</h5>
                <p class="card-text">
                  Our models live in the cloud, which makes them easy to
                  implement and share.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Starter code and metadata section -->
    <div class="col-10 my-5 mx-auto ">
      <h1 class="mb-4">We make collaboration easy</h1>
      <div class="row mb-5">
        <div class="col-6">
          <pre v-highlightjs class="bg-light p-2"><code class="python">
f = f.load("_test_foundry_stan_dendrite_segmentation_v1.1", globus=False)
            
X,y = f.load_data()

  </code></pre>
        </div>
        <div class="col-5">
          <p class="fw-light fs-4">
            Once a dataset is uploaded to Foundry, you can load it with just 2
            lines of code.
          </p>
          <button class="btn btn-primary">See Examples</button>
        </div>
      </div>
      <!-- end of row -->
      <div class="col-12 text-end">
        <h1 class="col-12 my-5">and save you valuable time</h1>
      </div>
      <div class="row">
        <div class="col-6">
          <p class="lead">
            No need to spend time making sense of someone else's data.
            Our publishing process includes a human review to make sure it meets
            our data standards. We also collect information about each dataset
            to take out any guesswork on your part.
          </p>
        </div>
        <div class="col-5">metadata here</div>
      </div>
      <!-- end of row -->
    </div>

    <!-- be apart of foundry section -->

    <hr class="col-10 m-auto"/>

    <div class="mx-auto col-7 mt-5">
      <div class="col-9 mx-auto">
        <h1 class="text-center">Build Foundry With Us</h1>
        <p>
          At Foundry, we believe accessibility and collaboration are the keys to
          problem solving. That's why we've made it super easy for you to share
          and use data. If you have a dataset you'd like to contribute, our
          <a
            href="https://github.com/MLMI2-CSSI/foundry/tree/main/examples/publishing-guides"
            target="blank"
            >publishing guide</a
          >
          can set you up to do that.
        </p>
        <p>
          Check out our
          <a
            href="https://ai-materials-and-chemistry.gitbook.io/foundry/v/docs/"
            target="blank"
            >documentation</a
          >
          to see how easy it is to use Foundry, and follow our
          <a
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
.icons {
  color: #6e79bf;
  /* EE8380 */
}

pre {
  overflow-x: auto;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}
</style>

<script>
export default {
  name: "Home",
};
</script>
