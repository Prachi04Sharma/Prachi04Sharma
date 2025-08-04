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
      <h1>Hi, I'm <br />Prachi Sharma</h1>
      <br />
      <p>
        I am a Fourth Year Computer Science Undergrad at M.I.E.T. Working as a
        Software Engineer Intern at
        <a
          href="https://www.scorora.com/toqi/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Scorora</a
        >. I've built award-winning products at the intersection of Web
        Development and A.I. <br /><br />
      </p>
      <p>
        <span class="bold-text">Ranked 1</span> in
        <span class="bold-text">India</span> against
        <span class="bold-text">50,000 teams</span> in
        <span class="bold-text">Smart India Hackathon</span>.
        <span class="bold-text">World Finalist</span> in
        <span class="bold-text">IEEE</span> YESIST Hackathon 2025.
        <span class="bold-text">Top 100</span> out of
        <span class="bold-text">64,000 teams</span> across
        <span class="bold-text">India</span> in
        <span class="bold-text">Google Solution Challenge</span>
        2025.<br /><br />
        Passionate about crafting scalable and accessible interfaces, I work
        with <a class="special-link" href="https://react.dev/">React.js</a>,
        <a class="special-link" href="https://v3.tailwindcss.com/"
          >Tailwind CSS</a
        >,
        <a
          class="special-link"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          >JavaScript</a
        >, and
        <a class="special-link" href="https://fastapi.tiangolo.com/">FastAPI</a
        >, while exploring CV, NLP, and Generative AI.
        <br />
        <br />
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
          href="https://www.linkedin.com/in/prachi2k5sharma/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          class="special-link"
          >get in touch</a
        >.
      </p>
      <div class="socials">
        <a
          v-html="i.linkedin"
          href="https://www.linkedin.com/in/prachi2k5sharma/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
        ></a>
        <a
          v-html="i.github"
          href="https://github.com/Prachi04Sharma"
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
  max-width: 500px;
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
  font-weight: 700;
  transition: color 0s;
}

.bold-text {
  color: var(--bold-text);
  font-weight: 700;
  transition: color 0s;
}

.special-link {
  color: var(--accent);
  font-weight: 700;
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
