<script>
import NavBar from "../components/NavBar.vue";
import siLinkedin from "simple-icons/icons/linkedin";
import siGithub from "simple-icons/icons/github";
import siGmail from "simple-icons/icons/gmail";
import siGooglemessages from "simple-icons/icons/googlemessages";

const platforms = [
  {
    name: "LinkedIn",
    icon: siLinkedin.svg,
    url: "https://www.linkedin.com/in/sharma01ketan/",
  },
  {
    name: "GitHub",
    icon: siGithub.svg,
    url: "https://github.com/sharma01ketan",
  },
  {
    name: "Email",
    icon: siGmail.svg,
    url: "mailto:sharma01ketan@gmail.com",
  },
  {
    name: "Phone",
    icon: siGooglemessages.svg,
    url: "tel:6006653315",
  },
];
export default {
  title: "Contact",
  emits: ["hoverIn", "hoverOut"],
  components: {
    NavBar,
  },
  data() {
    return {
      query: "",
      platforms,
    };
  },
  computed: {
    filteredPlatforms() {
      const filtered = this.platforms.filter((p) => {
        if (
          p.name.toLowerCase().includes(this.query.toLowerCase()) ||
          this.query.length < 1
        )
          return true;
      });
      if (filtered.length < 1) {
        return;
      } else {
        return filtered;
      }
    },
  },
};
</script>

<template>
  <main>
    <h1 class="background">Contact</h1>
    <router-link to="/">
      <img src="/s01k.svg" class="spinner rotate" alt="Logo" />
    </router-link>
    <NavBar @hoverIn="$emit('hoverIn')" @hoverOut="$emit('hoverOut')" />
    <div class="contact-me">
      <div class="results-cover"></div>
      <input
        type="text"
        placeholder="find a platform"
        v-model="query"
        class="contact-search"
        @mouseenter="$emit('hoverIn')"
        @mouseleave="$emit('hoverOut')"
      />
      <div class="contact-results">
        <transition-group name="list" tag="div">
          <a
            class="result"
            v-for="p in filteredPlatforms"
            :href="p.url"
            @mouseenter="$emit('hoverIn')"
            @mouseleave="$emit('hoverOut')"
            :key="p.name"
          >
            <div class="result-icon" v-html="p.icon"></div>
            <h2>{{ p.name }}</h2>
          </a>
        </transition-group>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  justify-content: center;
  height: 100vh;
}

.contact-me {
  position: relative;
  margin-top: 6rem;
  background: var(--bg-primary);
  padding: 22px 3vw;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border-radius: 0.4rem;
  width: 80vw;
  max-width: calc(300px + 3vw);
  height: max-content;
  max-height: calc(calc(100vh - 9rem) - 3vw);
  min-height: 4rem;
  overflow-y: scroll;
}

input {
  position: fixed;
  font-family: "Jost", sans-serif;
  outline: none;
  font-size: 1.2rem;
  padding: 0.75rem;
  border: 2px solid var(--text-secondary);
  background: var(--bg-primary);
  border-radius: 0.3rem;
  text-align: center;
  width: 73vw;
  max-width: 300px;
  margin-bottom: 1rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  transition: outline 0.2s;
  z-index: 2;
}

input:focus {
  border: 2px solid var(--accent);
}

.contact-results {
  width: max-content;
  margin: auto;
  margin-top: 5rem;
  color: var(--text-primary);
}

.results-cover {
  width: 73vw;
  max-width: 300px;
  height: 4rem;
  background: var(--bg-primary);
  position: fixed;
  z-index: 1;
  transform: translateY(-1.4rem);
}

.result {
  margin: 1.25rem 0;
  font-size: 1.2em;
  display: grid;
  grid-template-columns: auto 1fr;
  color: black;
  text-decoration: none;
  transition: color 0.3s, fill 0.3s;
  align-items: center;
  color: var(--text-primary);
  fill: var(--text-primary);
}

.result:hover {
  color: var(--accent);
  fill: var(--accent);
}

.result-icon {
  height: 1.1em;
}

.result h2 {
  font-size: 1.2rem;
  margin-left: 1rem;
  font-weight: normal;
}

.spinner {
  position: fixed;
  bottom: calc(18px + 32px);
  right: calc(18px + 32px);
  width: 17rem;
  max-width: 30vw;
  transform: translate(50%, -50%);
}

.rotate {
  animation: rotate 90s infinite linear;
  transform-origin: bottom right;
}

@keyframes rotate {
  0% {
    transform: rotate(0) translate(50%, 50%);
  }
  100% {
    transform: rotate(360deg) translate(50%, 50%);
  }
}

.background {
  color: var(--accent);
  position: fixed;
  z-index: -1;
  bottom: 0;
  left: 2rem;
  font-size: 30vh;
  opacity: 0.1;
  transform: skewX(-10deg);
  user-select: none;
}

@media only screen and (max-width: 735px) {
  .spinner {
    display: none;
  }

  .contact-me {
    width: 100vw;
    max-width: 100vw;
    box-shadow: none;
    background: transparent;
    height: 80vh;
    max-height: 80vh;
  }

  .results-cover {
    width: 100vw;
  }

  input {
    width: 1;
    margin-left: 10vw;
    margin-right: 10vw;
    max-width: unset;
  }
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
