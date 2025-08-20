<script>
const logoMap = new Map([
  ['Rust', './rust.svg'],
  ['C++', './c-plusplus.svg'],
  ['React', './react.svg'],
  ['Typescript', './typescript-icon.svg'],
  ['MongoDB', './mongodb-icon.svg'],
  ['Django', './django-icon.svg']
]);

export default {
    props: {
        title: String,
        desc: String,
        timeline: String,
        frameworks: Array,
        skills: Array,
        github: String,
        colors: Array,
    },
    computed: {
      resolveLogos() {
        let output = []
        this.frameworks.forEach((value) => {
            if (logoMap.has(value)) {
                output.push(logoMap.get(value))
            }
        });
        return output
      },
      resolveColor() {
          return {
            fontFamily: "'Brush Script MT', cursive",
            display: 'flex',
            flexDirection: 'column',
            height: '340px',
            width: '500px',
            backgroundImage: 'linear-gradient(to bottom right, ' + this.colors[0] + ', ' + this.colors[1] + ')',
            padding: '20px',
            margin: '20px'
          }
      }
    }
}
</script>

<template>
    <div class="project_card" v-motion-pop-visible-once :style="resolveColor">
      <div class="card_space">
        <div>
          <div class="title_section">
            <div>
              <p class="title_text">{{ title }}</p>
              <p class="timeline_text">{{ timeline }}</p>
            </div>
            <a :href="github" rel="noopener noreferrer" target="_blank">
              <img src="/github-icon.svg" :alt="github" class="title_git_img">
            </a>
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
              <div class="formatted_list">
                <li v-for="tool in frameworks">
                  {{ tool }} 
                </li>
              </div>
          </div>
        </div>
        
        <div class="framework_logos">
            <img v-for="img in resolveLogos" :src="img" :alt="img" class="framework_img"/>
        </div>
      </div>
    </div>
</template>



<style>

.project_card {
  box-shadow: 8px 8px 3px #444444;
  transition: 0.4s ease;
}

.project_card:hover {
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

.framework_img {
  height: 50px;
  width: 50px;
  margin-top: auto;
  margin-left: 5px;
  margin-right: 5px;
}

.overview {
  margin-top: 20px;
  margin-bottom: 20px;
}

.tools {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
  font-size: 40px;
  font-weight: bold;
  margin: 0;
}

.timeline_text {
  font-weight: italic;
  margin: 0px;
}

</style>
