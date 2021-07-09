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
                <h5 class="card-title">Add your dataset</h5>
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
                <h5 class="card-title">Add your model</h5>
                <p class="card-text">
                  Our models run in the cloud, which makes them easy to
                  implement and share.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- be apart of foundry section -->

    <div class="mx-auto col-7 mt-5">
      <div class="col-9 mx-auto">
        <h1 class="text-center">Build Foundry With Us</h1>
        <p>
          At Foundry, we believe accessibility and collaboration are the keys to
          problem solving. That's why we've made it super easy for you to share
          and use data. If you have a dataset you'd like to contribute, our
          <a href="https://github.com/MLMI2-CSSI/foundry/tree/main/examples/publishing-guides" target="blank">publishing guide</a> can set you up to do
          that.
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

<script>
export default {
  name: "Home",
};
</script>
