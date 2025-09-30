<script>
import ProjectCard from './ProjectCard.vue'
import Diploma from './Diploma.vue'
import ExperienceCard from './ExperienceCard.vue'
import Contact from './Contact.vue'

export default {
  components: {
    ProjectCard,
    Diploma,
    ExperienceCard,
    Contact
  },
  data() {
    return {
      projects: [],
      experiences: []
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const projectResponse = await fetch('data/projects.json');
      this.projects = await projectResponse.json();
    
      const experienceResponse = await fetch('data/experiences.json');
      this.experiences = await experienceResponse.json();
    },
    scrollTo(section) {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } 
    }
  }
}
</script>

<template>
    <div class="top_bar">
        <div class="home_button">
            <a @click.prevent="scrollTo('top')" style="cursor:pointer">&lt;brian nielsen&gt;</a>
        </div>
        <div class="shortcuts">
            <a @click.prevent="scrollTo('projects')" style="cursor:pointer">projects</a> |
            <a @click.prevent="scrollTo('experience')" style="cursor:pointer">experience</a> |
            <a @click.prevent="scrollTo('contact')" style="cursor:pointer">contact</a>
        </div>
    </div>
    <div class="title_box"> 

        <div id="top" class="center_box">
            <div class="hey_text" 
              v-motion
              :initial="{ opacity: 0, y: -50 }"
              :enter="{ opacity: 1, y: 0 }"
              :duration="1000"
            >
                Hey, I'm Brian!
            </div>
            <div class="face_desc">
                <div class="face_picture"
                  v-motion
                  :initial="{ opacity: 0, x: -50 }"
                  :enter="{ opacity: 1, x: 0}"
                  :delay="800"
                  :duration="1000"
                >
                    <img src="/professional_pic.jpg" alt="my face lol" class="face_pic"/>
                </div>
                <div class="face_text"> 
                    <p class="reading_text"
                      v-motion
                      :initial="{ opacity: 0, x: 50 }"
                      :enter="{ opacity: 1, x: 0 }"
                      :delay="800"
                      :duration="1000"
                    >
                    With interests in video games, audio, and electronics, Computer Science was an easy 
                    choice for me coming out of highschool. Now, with degree in hand, things haven't 
                    changed a bit. I can't help myself from dipping my toes in a little bit of everything 
                    from emulator development to web-dev, and even audio processing. Problem solving 
                    in computers just scratches an itch I can't get anywhere else.
                    <br/>
                    <br/>
                    I'm currently looking for an <b>entry level</b> software engineering position.
                    Other positions in the <b>embedded</b> or <b>audio engineering</b> 
                    worlds are also on my radar!
                    </p>
                </div>
            </div>
            <div class="socials" style="width: 100%;">
		<div style="flex: 1; height: 1px; background-color: lightgrey;"
		  v-motion
		  :initial="{ opacity :0, x: -50 }"
		  :enter="{ opacity: 1, x: 0 }"
		  :delay="1300"
		  :duration="1000"
		/>
                <a class="social_entry" href="https://github.com/bnielsen1" target="_blank"
		  v-motion
		  :initial="{opacity: 0}"
		  :enter="{opacity: 1}"
		  :delay="1300"
		  :duration="1000"
		>
                  <p>GitHub</p>
                    <img src="/github_small.png" class="social_github_logo"/>
                </a>
                <a class="social_entry" href="https://www.linkedin.com/in/bnielsen03/" target="_blank"
		  v-motion
		  :initial="{opacity: 0}"
		  :enter="{opacity: 1}"
		  :delay="1300"
		  :duration="1000"
		>
                  <p>LinkedIn</p>
                    <img src="/linkedin_small.png" class="social_linkedin_logo"/>
                </a>
                <div class="social_entry"
		  v-motion
		  :initial="{opacity: 0}"
		  :enter="{opacity: 1}"
		  :delay="1300"
		  :duration="1000"
		>
                    <a href="/Brian_Resume.pdf" target="_blank">
                        <p>View CV!</p>
                    </a>
                </div>
		<div style="flex: 1; height: 1px; background-color: lightgrey;"
		  v-motion
		  :initial="{ opacity: 0, x: 50 }"
		  :enter="{ opacity: 1, x: 0 }"
		  :delay="1300"
		  :duration="1000"
		/>
            </div>
	    <div class="more_about"> 
	      <div class="learn_more">
       	        <p class="second_title"
		  v-motion
		  :initial="{ opacity: 0, x: -50 }"
		  :enter="{ opacity: 1, x: 0 }"
		  :delay="2200"
		  :duration="1000"
		>
		  Want to learn more?
		</p>
	        <div class="reading_text"
		  v-motion
		  :initial="{ opacity: 0, x: -50 }"
		  :enter="{ opacity: 1, x: 0 }"
		  :delay="2200"
		  :duration="1000"
		> 
		  <p>
		    When I'm not programming or studying, I have a lot of hobbies I wish I had more time for.
	  	    In college, I played guitar for a rock band. You can check some of our music out 
		    <a href="https://open.spotify.com/artist/3a8oCBfcfATN6Du7RyYHmm?si=CKnVmOxIR4KwtPm-KI8wXg" target="_blank" ><b>here!</b></a>
		    I also play a lot of beach volleyball and video games. Some of my favorites include, but aren't
		    limited to: Celeste, Mario Kart, and Super Smash Bros. Melee.
		  </p>
		</div>
	      </div>
	      <div class="fun_pics" style="width: 600px; position: relative;"
		v-motion
		:initial="{ opacity: 0, x: 50 }"
		:enter="{ opacity: 1, x: 0 }"
		:delay="2200"
		:duration="1000"
	      >
		<img src="/tab.jpg" style="position: absolute; top: 50px; right: 150px; height: 240px; border-radius: 40%; padding"/>
		<img src="/volleyball.webp" style="position: absolute; top: 15px; left: 480px; height: 160px; border-radius: 50%"/>
		<img src="/shine.png" style="position: absolute; top: 200px; left: 480px; height: 140px;" />	
	      </div>
	    </div>
        </div>
    </div>
    <div class="middle_box">
        <div id="projects" class="subheading_text">
            My Projects
        </div>
        <div class="project_box">
            <ProjectCard v-for="project in this.projects" :key="project.title" :title="project.title" :desc="project.desc" :timeline="project.timeline" :frameworks="project.frameworks" :skills="project.skills" :github="project.github" :colors="project.colors"/>
        </div>
    </div>
    <div class="last_box">
        <div id="experience" class="subheading_text">
            Experience
        </div>
        <div class="experience_box">
            <Diploma />
            <ExperienceCard v-for="experience in this.experiences" :key="experience.title" :title="experience.title" :desc="experience.desc" :timeline="experience.timeline" :colors="experience.colors" :skills="experience.skills" :company="experience.company"/>
        </div>
    </div> 
    <div class="form_box">
      <div id="contact" class="subheading_text">
        Contact me
      </div>
      <Contact />
    </div>
    <div class="bottom_bar" style="font-family: 'Georgia', serif">
	    <p style="margin: 0px; padding-top: 5px;">Made by Brian Nielsen</p>
	    <p style="margin: 0px; padding: 5px;">© 2025, Built with <a href="https://vuejs.org/" class="green_text"><b>Vue</b></a></p>
    </div>
</template>

<style>
html, body {
  font-family: 'Courier New', monospace;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

#projects, #experience, #contact {
  scroll-margin-top: 80px;
}

.subheading_text {
  font-family: Georgia, serif;
  font-weight: bold;
  font-size: 55px;
  margin-bottom: 20px;
}

.project_box {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  max-width: calc((3 * 540px) + (2 * 120px));
  align-items: center;
}

.experience_box {
  column-count: 1;
  column-gap: 70px;
  padding: 20px;
}


@media (min-width: 901px) and (max-width: 1600px) {
  .experience_box {
    column-count: 2;
  }
}

@media (min-width: 1601px) {
  .experience_box {
    column-count: 3;
  }
}

.title_box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home_button {
  font-size: 50px;
  background: linear-gradient(to right, darkgreen, darkolivegreen, darkseagreen);
  margin-top: 4px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.second_title {
  margin-top: 5px;
  margin-bottom: 5px;
  font-family: 'Georgia', serif;
  font-size: 30px;
  font-weight: bold;
}

.learn_more {
  width: 700px;
}

.more_about {
  display: flex
}

.reading_text {
  font-family: 'Times New Roman', serif;
  font-size: 26px;
  line-height: 1.5;
}

.socials {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

.social_github_logo {
  height: 35px;
  width: 35px;
  padding: 2px;
}

.social_linkedin_logo {
  height: 25px;
  width: 25px;
  padding: 4px;
}

.social_entry {
  display: flex;
  font-weight: bold;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  background: linear-gradient(to right, darkgreen, darkolivegreen, darkseagreen);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: 20px;
  padding-right: 20px;
}

.green_text {
  background: linear-gradient(to right, darkgreen, darkolivegreen, darkseagreen);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.social_entry:hover {
  text-decoration: underline;
}

.hey_text {
  font-family: Georgia, serif; 
  font-weight: bold;
  font-size: 65px;
  padding-left: 90px;
  padding-bottom: 5px;
}

.shortcuts {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  font-size: 20px;
}

.face_pic {
  height: 400px;
  width: 400px;
  border-radius: 50%;
  padding-left: 20px;
  padding-right: 20px;
}

.face_text {
  max-width: 800px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

.face_desc {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 20px;
}

.top_bar {
  position: fixed;
  width: 96vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding-left: 2vw;
  padding-right: 2vw;
  box-shadow: 0 2px 2px #eee;
  z-index: 9999;
}

.center_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  padding-top: 8vh;
  padding-left: 6vh;
  padding-right: 6vh;
  padding-bottom: 6vh;
}

.middle_box {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: whitesmoke;
  padding: 25px;
}

.last_box {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 25px;
}

.form_box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 96vw;
  padding: 2vw;
  background-color: whitesmoke;
}

.bottom_bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

@media (max-width: 980px) {
  .experience_box {
    column-count: 1;
  }

  .home_button {
    font-size: 35px;
  }

  .shortcuts {
    font-size: 15px;
  }
}

@media (max-width: 1200px) {
  .reading_text {
    width: 90%;
  }

  .face_pic {
    display: none;
  }

  .face_text {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hey_text {
    margin: 0;
    padding: 10px;
    padding-bottom: 0px;
  }

  .project_box {
    max-width: calc((3 * 800px) + (2 * 120px));
  }

  .learn_more {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 1300px) {
  .fun_pics {
    display: none;
  }
}

@media (max-width: 650px) {
  .home_button {
    font-size: 14px;
  }

  .shortcuts {
    font-size: 10px;
  }

  .hey_text {
    font-size: 30px;
    margin-top: 30px;
  }

  .reading_text {
    font-size: 16px;
    max-width: 90vw;
  }

  .face_desc {
    width: 95vw;
    padding-bottom: 5px;
  }

  .face_text {
    width: 90vw;
    padding: 5vw;
    margin: 0px;
  }

  .center_box {
    width: 100vw;
    padding: 0;
    margin: 0;
  }

  .learn_more {
    width: 90vw;
  }

  .social_entry {
    font-size: 15px;
  }

  .socials {
    padding: 0px;
  }

  .subheading_text {
    font-size: 30px;
  }
}

</style>
