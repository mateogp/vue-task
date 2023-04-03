<template>
  <RouterView />
</template>

<script>
import { useAuthStore } from '@/stores/auth';

export default {
  beforeMount(){
    useAuthStore().init()
  }
}
</script>


<style lang="scss">

.main-btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 25px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: var(--vt-c-green);
  transition: 0.4s;
  &--principal {
    font-weight: bold;
    background-color: var(--vt-c-green);
    color: var(--vt-c-white);
    &:hover, &:focus, &:active {
      color: var(--vt-c-white) !important;
      transform: scale(1.08);
      text-decoration: none !important;
    }
  }
  &:hover, &:focus, &:active {
    text-decoration: underline;
    border: 0 !important;
    outline: none;
    color: var(--vt-c-green);
  }
}

.heart {
  position: absolute;
  top: -35px;
  right: -35px;
  transform: scale(0.8);
  width: 100px;
  height: 100px;
  background: url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat;
  background-position: 0 0;
  cursor: pointer;
  transition: background-position 1s steps(28);
  transition-duration: 0s;
  
  &.is-active {
    transition-duration: 1s;
    background-position: -2800px 0;
  }
}

</style>
