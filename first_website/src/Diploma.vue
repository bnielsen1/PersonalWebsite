<script>
  export default {

  }
</script>


<template>
  <div v-motion-pop-visible-once class="diploma_box">
    <div class="title_font">
        <img src="/UF_LOGO.png" :style="{ height: '50px' }">
      <img :style="{ height: '50px', width: '50px' }" src="/UF_SEAL.png"/>
    </div>
    <div class="description_box">
        <p :style="{ fontSize: '24px', fontWeight: 'bold', padding: '0', margin: '0' }">
        B.S. in Computer Science
      </p>
      <p :style="{ fontSize: '16px', fontStyle: 'italic', padding: '0', margin: '0' }">
        Minor in Electrical Engineering
      </p>
      <p :style="{ fontSize: '12px', fontStyle: 'italic', padding: '0', marginTop: '20' }">
        3.92 GPA | August 2021 - May 2025
      </p>
    </div>
  </div>
</template>


<style>

.title_font {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
}

.description_box {
  font-family: 'Times New Roman', serif;
  padding: 0;
  margin: 0;
}

.diploma_box {
  height: 120px;
  width: 400px;
  box-shadow: 8px 8px 3px #444444;
  transition: 0.4s ease;
  padding: 20px;
  margin-bottom: 20px;
  background-image: linear-gradient(to bottom right, #b5e2ff, #daf0ff);
}

.diploma_box:hover {
  box-shadow: 10px 10px 10px black;
}

@media (max-width: 980px) {
  .diploma_box {
    width: 80vw;
  }
}

</style>
