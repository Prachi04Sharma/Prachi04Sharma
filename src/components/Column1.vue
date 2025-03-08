<script>
import siLinkedin from "simple-icons/icons/linkedin";
import siGithub from "simple-icons/icons/github";
import siDribbble from "simple-icons/icons/dribbble";
import siStackoverflow from "simple-icons/icons/stackoverflow";
import siYoutube from "simple-icons/icons/youtube";
import siTwitter from "simple-icons/icons/twitter";
export default {
  title: "Column1",
  emits: ["hoverIn", "hoverOut"],
  data() {
    return {
      i: {
        linkedin: siLinkedin.svg,
        github: siGithub.svg,
        dribbble: siDribbble.svg,
        stackoverflow: siStackoverflow.svg,
        youtube: siYoutube.svg,
        twitter: siTwitter.svg,
      },
    };
  },
};
</script>

<template>
  <div class="column">
    <div class="center">
      <h1>Hi, I'm sharma01ketan</h1><br/>
      <p>
        I am a Software Engineer at 
        <a
          href="http://plane.so/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Plane</a
        > since graduating from NIT Srinagar, with a Bachelor of Technology in Information Technology.<br/><br/>
        I have experience in Full-Stack development, Generative AIs, and DevOps, with contributions to open-source projects. <br/><br/>
        Passionate about engineering software, 
        I work with 
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >JavaScript,
        </a> 
        <a
          href="https://nextjs.org/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Next.js</a
        >, 
        <a
          href="https://mobx.js.org/README.html"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Mobx</a
        >, and 
        <a
          href="https://www.docker.com/ "
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >cloud technologies</a>
        .<br/><br/>
        Aside from web development, I'm a Java-loving ❤️ LeetCode monkey who enjoys reading non-fiction books in his free time. 
        <br/> <br/>
        While you're here, feel free to check out my 
        <router-link
          to="/projects"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          class="special-link"
          >projects</router-link
        >
        or 
        <a
          href="https://www.linkedin.com/in/sharma01ketan/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          class="special-link"
          >get in touch</a>.
      
      </p>
      <div class="socials">
        <a
          v-html="i.linkedin"
          href="https://www.linkedin.com/in/sharma01ketan/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
        ></a>
        <a
          v-html="i.github"
          href="https://github.com/sharma01ketan"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
        ></a>
        <a
          v-html="i.twitter"
          href="https://x.com/sharma01ketan"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
        ></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.column {
  background: var(--bg-primary);
  display: grid;
  justify-content: center;
  align-items: center;
  transition: background 0.2s;
}

.center {
  margin: 1rem auto;
  max-width: 480px;
  padding: 1rem 2.5rem;
}

h1 {
  color: var(--accent);
  font-size: 4rem;
  line-height: 1em;
  margin-bottom: 0.2em;
  opacity: 0;
  transform-style: preserve-3d;
  transform-origin: top center;
  transform: var(--animation-initial);
  animation: var(--animation);
  animation-delay: 0.1s;
}

p {
  opacity: 0;
  transform-style: preserve-3d;
  transform-origin: top center;
  transform: var(--animation-initial);
  animation: var(--animation);
  animation-delay: 0.2s;
  color: var(--text-primary);
  transition: color 0.2s;
}

p > a {
  color: inherit;
  font-weight: 500;
  transition: color 0s;
}

.special-link {
  color: var(--accent);
}

.socials {
  margin-top: 1.5em;
  opacity: 0;
  transform-style: preserve-3d;
  transform-origin: top center;
  transform: var(--animation-initial);
  animation: var(--animation);
  animation-delay: 0.5s;
}

.socials a {
  fill: var(--text-secondary);
  text-decoration: none;
  margin-right: 1.2rem;
  transition: 0.2s;
}

.socials a:hover {
  fill: var(--accent);
}

@media only screen and (max-width: 510px) {
  h1 {
    font-size: 2.5rem;
  }
}
</style>
