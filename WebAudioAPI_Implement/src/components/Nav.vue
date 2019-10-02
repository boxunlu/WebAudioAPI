<template>
  <div id="nav">
    <router-link to="guitar-tuner">Guitar Tuner</router-link>
    <router-link to="stereo-panner-node">Stereo Panner Node</router-link>
    <router-link to="panner-node">Panner Node</router-link>
    <router-link to="source">Source</router-link>
  </div>
</template>
<style lang="scss">
#nav {
  background-color: #e9e9e9;
  padding-top: 2px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  z-index: 5;
  a {
    display: block;
    padding: 10px;
    font-weight: bold;
    color: #2d5377;
    text-decoration: none;
    transition: all 0.3s ease-out;
    &.router-link-exact-active {
      background-color: #ffffff;
      color: #00477d;
      font-weight: 800;
    }
    &:hover {
      background-color: #ffffff;
    }
  }
}
</style>
