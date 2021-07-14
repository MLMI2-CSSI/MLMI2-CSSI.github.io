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
                <b-icon icon="file-bar-graph" class="display-4 icons"></b-icon>

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
                <b-icon icon="gear" class="display-4 icons"></b-icon>

                <h5 class="card-title">Add your model</h5>
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
    <div class="col-8 my-5 mx-auto">
      <h2>whatever this is</h2>
      <div class="row">
        <div class="col-7">
          <pre
            v-highlightjs
            class="bg-light"
          ><code class="python">const s = new Date().toString(){
  hi }</code></pre>
        </div>
        <div class="col-4">text here</div>
      </div>
      <!-- end of row -->
      <div class="col-12 text-right">
        <h2 class="col-12">whatever this is</h2>
      </div>
      <div class="row">
        <div class="col-4">text here</div>
        <div class="col-7">metadata here</div>
      </div>
      <!-- end of row -->
    </div>

    <!-- be apart of foundry section -->

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
</style>

<script>
export default {
  name: "Home",
};
</script>
