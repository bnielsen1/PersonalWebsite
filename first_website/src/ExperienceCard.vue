<script>
const logoMap = new Map([
  ['University of Florida', './UF_LOGO.png'],
  ['Open Source Club', './OSC.png'],
  ['Florida Power and Light', 'FPL.png'],
]);

export default {
    props: {
        title: String,
        desc: String,
        timeline: String,
        skills: Array,
        company: String,
        github: String,
        colors: Array,
    },
    computed: {
      resolveLogos() {
        let output = []
        console.log("Company title " + this.company)
        if (logoMap.has(this.company)) {
            output.push(logoMap.get(this.company))
        }
        return output
      },
      resolveColor() {
          return {
            fontFamily: "'Times New Roman', serif",
            display: 'flex',
            flexDirection: 'column',
            breakInside: 'avoid',
            marginBottom: '20px',
            backgroundImage: 'linear-gradient(to bottom right, ' + this.colors[0] + ', ' + this.colors[1] + ')',
            padding: '20px',
          }
      }
    }
}
</script>

<template>
    <div v-motion-pop-visible-once class="experience_card" :style="resolveColor">
      <div class="card_space">
        <div>
          <div class="title_section">
            <div>
              <p class="title_text">{{ title }}</p>
              <p class="company_text">{{ timeline }}</p>
            </div>
            <div>
                <img :src="resolveLogos" alt="company logo" class="company_img"/>
            </div>
          </div>
          <div class="overview">
              {{ desc }}
          </div>
          <div class="tools">
              <div class="formatted_list">
                <li v-for="skill in skills">
                  {{ skill }} 
                </li>
              </div>
          </div>
        </div>
        
      </div>
    </div>
</template>



<style>

.experience_card {
  box-shadow: 8px 8px 3px #444444;
  transition: 0.4s ease;
  width: 400px;
}

@media (max-width: 500px) {
  .experience_card {
    width: 80vw;
    font-size: 14px;
  }

  .title_text {
    font-size: 22px;
  }
}

.experience_card:hover {
  box-shadow: 10px 10px 10px black;
}

.card_space {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title_git_img {
  height: 30px;
  width: 30px;
}

.company_img {
  height: 40px;
  margin-top: auto;
  margin-left: 5px;
  margin-right: 5px;
}

.overview {
  margin-top: 20px;
  margin-bottom: 20px;
}

.formatted_list {
  margin-left: 25px;
  margin-right: 25px;
}

.title_section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.title_text {
  font-size: 30px;
  font-weight: bold;
  margin: 0;
}

.company_text {
  font-style: italic;
  margin: 0px;
}

</style>
