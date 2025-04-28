<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isNavbarCollapsed = ref(true);
const isScrolled = ref(false);
const isMobile = ref(false);
const activeDropdown = ref(null);

const topBarLinks = [
  {
    name: 'Track Shipment',
    icon: 'fas fa-map-marked-alt',
    path: '/tracking',
    badge: 'Live'
  },
  {
    name: 'Customer Support',
    icon: 'fas fa-user',
    path: '/',
    badge: 'Secure'
  }
];

const navLinks = [
  {
    name: 'About Us',
    path: '/about',
    icon: 'fas fa-building'
  },
  {
    name: 'Services',
    path: '/services',
    icon: 'fas fa-boxes',
    dropdown: [
      {
        name: 'Air Freight',
        path: '/services/air',
        icon: 'fas fa-plane-departure',
        description: 'Express global air cargo solutions'
      },
      {
        name: 'Sea Freight',
        path: '/services/sea',
        icon: 'fas fa-ship',
        description: 'Cost-effective ocean shipping'
      },
      {
        name: 'Cross-Border',
        path: '/services/cross-border',
        icon: 'fas fa-truck-moving',
        description: 'Seamless regional logistics'
      },
      {
        name: 'Customs Clearance',
        path: '/services/customs',
        icon: 'fas fa-file-signature',
        description: 'Expert documentation handling'
      }
    ]
  },
  {
    name: 'Industries',
    path: '/industries',
    icon: 'fas fa-industry-alt',
    dropdown: [
      { name: 'Pharmaceutical', icon: 'fas fa-pills' },
      { name: 'Manufacturing', icon: 'fas fa-cogs' },
      { name: 'Agriculture', icon: 'fas fa-tractor' },
      { name: 'Retail', icon: 'fas fa-shopping-basket' }
    ]
  },
  {
    name: 'Our Clients',
    path: '/clients',
    icon: 'fas fa-users'
  },
];

const contactInfo = {
  phone: '+254 725 396 801',
  email: 'wakafreight@gmail.com',
  address: 'Nacha Plaza, Nakuru'
};

const toggleDropdown = (index) => {
  activeDropdown.value = activeDropdown.value === index ? null : index;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 1024;
  if (!isMobile.value) {
    isNavbarCollapsed.value = true;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', checkScreenSize);
  checkScreenSize();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<template>
  <!-- Top Utility Bar -->
  <div class="bg-gradient-to-r from-blue-900 to-blue-800 text-white text-sm border-b border-blue-700/50">
    <div class="container mx-auto px-4 py-2 flex flex-row justify-between items-center flex-wrap">
      <!-- Quick Links -->
      <div class="flex items-center space-x-6 mb-2 md:mb-0">
        <div class="flex items-center group">
          <div
            class="w-8 h-8 rounded-full bg-blue-700/30 border border-blue-500/30 flex items-center justify-center mr-2 group-hover:bg-blue-600/50 transition-colors">
            <i class="fas fa-clock text-blue-300 text-sm"></i>
          </div>
          <span class="text-sm">Mon-Fri: 8AM - 5PM</span>
        </div>
        <div class="hidden md:flex items-center group">
          <div
            class="w-8 h-8 rounded-full bg-blue-700/30 border border-blue-500/30 flex items-center justify-center mr-2 group-hover:bg-blue-600/50 transition-colors">
            <i class="fas fa-phone-alt text-blue-300 text-sm"></i>
          </div>
          <span class="text-sm">{{ contactInfo.phone }}</span>
        </div>
      </div>

      <!-- Action Links -->
      <div class="flex items-center space-x-4">
        <a v-for="(link, index) in topBarLinks" :key="index" :href="link.path"
          class="flex items-center group transition-all duration-200">
          <div class="relative">
            <div
              class="w-8 h-8 rounded-lg bg-blue-700/30 border border-blue-500/30 flex items-center justify-center mr-2 group-hover:bg-blue-600/50 transition-colors">
              <i :class="`${link.icon} text-blue-300 text-sm`"></i>
            </div>
            <span v-if="link.badge"
              class="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1 rounded-full border border-white">
              {{ link.badge }}
            </span>
          </div>
          <span class="hidden sm:inline text-sm group-hover:text-blue-300">{{ link.name }}</span>
        </a>
        <div class="hidden md:flex items-center space-x-3 ml-4">
          <a href="#"
            class="w-8 h-8 rounded-full bg-blue-700/30 border border-blue-500/30 flex items-center justify-center text-white hover:bg-blue-600/50 hover:text-blue-300 transition-colors">
            <i class="fab fa-linkedin-in text-sm"></i>
          </a>
          <a href="#"
            class="w-8 h-8 rounded-full bg-blue-700/30 border border-blue-500/30 flex items-center justify-center text-white hover:bg-blue-600/50 hover:text-blue-300 transition-colors">
            <i class="fab fa-twitter text-sm"></i>
          </a>
          <a href="#"
            class="w-8 h-8 rounded-full bg-blue-700/30 border border-blue-500/30 flex items-center justify-center text-white hover:bg-blue-600/50 hover:text-blue-300 transition-colors">
            <i class="fab fa-facebook-f text-sm"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Navigation -->
  <nav class="sticky top-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-white shadow-lg py-0 border-b border-gray-100' : 'bg-white/95 backdrop-blur-sm py-2 border-b border-white/20'">
    <div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-4">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <a href="/" class="flex items-center group">
            <div class="relative">
              <div
                class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center transform group-hover:rotate-3 transition-all duration-500 shadow-md border-2 border-white/20">
                <i class="fas fa-shipping-fast text-2xl"></i>
              </div>
              <div
                class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-white flex items-center justify-center">
                <i class="fas fa-check text-white text-xs"></i>
              </div>
            </div>
            <div class="ml-3">
              <h1 class="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors font-serif">
                WakaFreight
              </h1>
              <p class="text-xs text-gray-500 -mt-1 tracking-wider">FORWADERS LIMITED</p>
            </div>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-1">
          <div v-for="(link, index) in navLinks" :key="index" class="relative h-full"
            @mouseenter="link.dropdown ? toggleDropdown(index) : null"
            @mouseleave="link.dropdown ? toggleDropdown(null) : null">
            <a :href="link.path"
              class="flex items-center px-4 py-6 text-gray-700 hover:text-blue-600 transition-colors font-medium group h-full"
              :class="{
                'text-blue-600': activeDropdown === index,
                'border-b-2 border-transparent hover:border-blue-500': !link.dropdown
              }">
              <div class="relative">
                <div
                  class="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                  <i :class="`${link.icon} text-blue-600`"></i>
                </div>
                <div v-if="link.dropdown"
                  class="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-blue-600 border border-white"></div>
              </div>
              <span>{{ link.name }}</span>
              <i v-if="link.dropdown"
                class="fas fa-chevron-down ml-2 text-xs transition-transform duration-200 text-gray-400 group-hover:text-blue-500"
                :class="{ 'transform rotate-180 text-blue-600': activeDropdown === index }"></i>
            </a>

            <!-- Mega Dropdown Menu -->
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <div v-if="link.dropdown && activeDropdown === index"
                class="absolute z-20 left-0 mt-0 w-96 origin-top-left rounded-b-xl shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none border-t-2 border-blue-600">
                <div class="p-4 grid gap-4" :class="{ 'grid-cols-2': link.name === 'Services' }">
                  <a v-for="(item, itemIndex) in link.dropdown" :key="itemIndex" :href="item.path || '#'"
                    class="flex items-start p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                    <div class="flex-shrink-0 mt-1">
                      <div
                        class="w-10 h-10 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition-colors">
                        <i :class="`${item.icon}`"></i>
                      </div>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                        {{ item.name }}
                      </p>
                      <p v-if="item.description" class="text-xs text-gray-500 mt-1">
                        {{ item.description }}
                      </p>
                    </div>
                  </a>
                </div>
                <div v-if="link.name === 'Services'" class="bg-gray-50 px-4 py-3 rounded-b-xl border-t border-gray-100">
                  <a href="/services" class="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center">
                    View all services
                    <i class="fas fa-arrow-right ml-2 text-xs"></i>
                  </a>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="hidden lg:flex items-center ml-6">
          <a href="/contact">
            <button
              class="flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 group">
              <div
                class="w-8 h-8 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center mr-2 group-hover:bg-white/30 transition-colors">
                <i class="fas fa-phone text-white"></i>
              </div>
              <span>Contact Us</span>
            </button>
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden flex items-center">
          <button @click="isNavbarCollapsed = !isNavbarCollapsed"
            class="inline-flex items-center justify-center p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors relative"
            :aria-expanded="!isNavbarCollapsed">
            <span class="sr-only">Open main menu</span>
            <div class="w-8 h-8 flex items-center justify-center">
              <i :class="isNavbarCollapsed ? 'fas fa-bars text-xl' : 'fas fa-times text-xl'"></i>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-150"
      leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <div v-if="!isNavbarCollapsed && isMobile"
        class="lg:hidden fixed inset-x-0 top-28 bg-white shadow-2xl z-40 mx-4 rounded-xl py-4 px-6 border border-gray-100">
        <div class="space-y-1">
          <a v-for="(link, index) in navLinks" :key="index" :href="link.path"
            class="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            @click="!link.dropdown ? isNavbarCollapsed = true : null">
            <div class="flex items-center">
              <div
                class="w-8 h-8 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 mr-3">
                <i :class="`${link.icon}`"></i>
              </div>
              {{ link.name }}
            </div>
            <i v-if="link.dropdown"
              class="fas fa-chevron-down text-xs transition-transform duration-200 ml-2 text-gray-400"
              :class="{ 'transform rotate-180': activeDropdown === index }" @click.stop="toggleDropdown(index)"></i>
          </a>

          <!-- Mobile Dropdown Items -->
          <div v-for="(link, index) in navLinks" :key="'dropdown-' + index">
            <transition v-if="link.dropdown" enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <div v-show="activeDropdown === index" class="ml-12 pl-4 border-l-2 border-blue-200 space-y-3 my-3">
                <a v-for="(item, itemIndex) in link.dropdown" :key="itemIndex" :href="item.path || '#'"
                  class="block px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors flex items-center"
                  @click="isNavbarCollapsed = true">
                  <div class="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <i :class="`${item.icon} text-xs`"></i>
                  </div>
                  {{ item.name }}
                </a>
              </div>
            </transition>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-gray-200">
          <a href="/quote"
            class="w-full flex items-center justify-center px-3 py-3 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
            @click="isNavbarCollapsed = true">
            <div class="w-8 h-8 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center mr-3">
              <i class="fas fa-paper-plane text-white"></i>
            </div>
            Contact Us
          </a>
        </div>

        <div class="mt-6 pt-4 border-t border-gray-200 flex justify-center space-x-6">
          <a href="#"
            class="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#"
            class="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#"
            class="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style>
/* Custom animations */
@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

/* Logo animation */
.logo-container:hover .logo-icon {
  animation: float 2s ease-in-out infinite;
}

/* Custom underline animation */
.nav-link-underline {
  position: relative;
}

.nav-link-underline:after {
  content: '';
  position: absolute;
  width: 0;
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #3b82f6;
  border-radius: 3px;
  transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-link-underline:hover:after {
  width: 100%;
}

/* Smooth transitions for dropdowns */
.dropdown-enter-active {
  transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}

.dropdown-leave-active {
  transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Glow effect for CTA */
.cta-glow {
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.cta-glow:hover {
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 10px;
  border: 2px solid #f1f1f1;
}

::-webkit-scrollbar-thumb:hover {
  background: #2563eb;
}

/* Beautiful border radius */
.rounded-xl {
  border-radius: 12px;
}
</style>
