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
              <div class="card-body">
                <h5 class="card-title">Find Datasets</h5>
                <p class="card-text">We have datasets.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mx-auto">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Find Models</h5>
                <p class="card-text">We have models.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- be apart of foundry section -->

    <div class="mx-auto col-7 mt-5">
      <div class="row mx-auto">
        <div class="col-3 bg-secondary">
          :)
          <p>I will be an image</p>
        </div>
        <div class="col-9">
          <h1>Build Foundry With Us</h1>
          <p>Publish your data on Foundry so others can access it as well.</p>
          <a href="#"
            ><button class="btn btn-primary btn-sm mt-3" role="button">
              Publish data
            </button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
