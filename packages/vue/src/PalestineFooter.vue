<template>
  <footer 
    class="ps-footer-vue"
    role="contentinfo"
    aria-label="Palestine Support Footer"
  >
    <div class="ps-footer-wrapper">
      <p class="ps-copyright">
        جميع الحقوق محفوظة © 
        <span class="ps-year">{{ displayYear }}</span> لـ 
        <span class="ps-host-name">{{ displayHostName }}</span>
      </p>
      <div v-if="showMessage" class="ps-solidarity-line">
        <span class="ps-dot"></span>
        <span class="ps-palestine-text">{{ displayMessage }}</span>
        <span class="ps-dot"></span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

// Props
interface Props {
  year?: number;
  hostName?: string;
  message?: string;
  showMessage?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  year: undefined,
  hostName: undefined,
  message: 'نحن نقف مع فلسطين حرة من النهر إلى البحر',
  showMessage: true,
  backgroundColor: '#000000',
  textColor: '#ffffff'
});

// Computed properties
const displayYear = computed(() => props.year || new Date().getFullYear());
const displayHostName = computed(() => {
  if (props.hostName) return props.hostName.toUpperCase();
  if (typeof window !== 'undefined') {
    return (window.location.hostname || 'موقعنا').toUpperCase();
  }
  return 'موقعنا';
});
const displayMessage = computed(() => props.message);

// Load Cairo font
let fontLink: HTMLLinkElement | null = null;

onMounted(() => {
  fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap';
  fontLink.rel = 'stylesheet';
  fontLink.id = 'palestine-footer-font-vue';
  
  if (!document.getElementById('palestine-footer-font-vue')) {
    document.head.appendChild(fontLink);
  }
});

onUnmounted(() => {
  if (fontLink && document.head.contains(fontLink)) {
    document.head.removeChild(fontLink);
  }
});
</script>

<style scoped>
.ps-footer-vue {
  background: v-bind(backgroundColor);
  color: v-bind(textColor);
  font-family: 'Cairo', sans-serif;
  direction: rtl;
  padding: 40px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  margin-top: 50px;
}

.ps-footer-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.ps-copyright {
  font-size: 15px;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.5px;
}

.ps-solidarity-line {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  opacity: 0.9;
}

.ps-dot {
  width: 6px;
  height: 6px;
  background: #E4312B;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 10px rgba(228, 49, 43, 0.5);
  transition: all 0.3s ease;
}

.ps-footer-vue:hover .ps-dot {
  background: #008000;
  transform: scale(1.2);
}

.ps-palestine-text {
  font-weight: 900;
  background: linear-gradient(to left, #008000, #ffffff, #E4312B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 14px;
}

@media (max-width: 480px) {
  .ps-footer-vue {
    padding: 30px 15px;
  }
  
  .ps-copyright {
    font-size: 13px;
  }
  
  .ps-solidarity-line {
    font-size: 11px;
    flex-wrap: wrap;
  }
}
</style>
