<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isNavbarCollapsed = ref(true)
const isScrolled = ref(false)
const isMobile = ref(false)
const activeDropdown = ref(null)

// Properly defined reactive contactInfo
const contactInfo = ref({
  phone: '+254 725 396 801',
  email: 'wakafreight@gmail.com',
  address: 'Nacha Plaza, Nakuru',
})

const topBarLinks = [
  {
    name: 'Careers',
    icon: 'fas fa-briefcase',
    path: '/careers',
    badge: 'Careers',
  },
  {
    name: 'Customer Support',
    icon: 'fas fa-user',
    path: '/contact',
    badge: 'Secure',
  },
]

const navLinks = [
  {
    name: 'About Us',
    path: '/about',
    icon: 'fas fa-building',
  },
  {
    name: 'Services',
    path: '/services',
    icon: 'fas fa-boxes',
    dropdown: [
      {
        name: 'Air Freight',
        path: '/services#services',
        icon: 'fas fa-plane-departure',
        description: 'Express global air cargo solutions',
      },
      {
        name: 'Sea Freight',
        path: '/services#services',
        icon: 'fas fa-ship',
        description: 'Cost-effective ocean shipping',
      },
      {
        name: 'Cross-Border',
        path: '/services#services',
        icon: 'fas fa-truck-moving',
        description: 'Seamless regional logistics',
      },
      {
        name: 'Customs Clearance',
        path: '/services#services',
        icon: 'fas fa-file-signature',
        description: 'Expert documentation handling',
      },
    ],
  },
  {
    name: 'Industries',
    path: '/industries',
    icon: 'fas fa-industry',
    dropdown: [
      { name: 'Pharmaceutical', path: '#industries', icon: 'fas fa-pills' },
      { name: 'Manufacturing', path: '#industries', icon: 'fas fa-cogs' },
      { name: 'Agriculture', path: '#industries', icon: 'fas fa-tractor' },
      { name: 'Retail', path: '#industries', icon: 'fas fa-shopping-basket' },
    ],
  },
  {
    name: 'Our Clients',
    path: '/clients',
    icon: 'fas fa-users',
  },
]

const toggleDropdown = (index) => {
  activeDropdown.value = activeDropdown.value === index ? null : index
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 1024
  if (!isMobile.value) {
    isNavbarCollapsed.value = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', checkScreenSize)
  checkScreenSize()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<template>
  <!-- Top Utility Bar -->
  <div
    class="bg-gradient-to-r from-blue-900 to-blue-800 h-10 sm:h-10 text-white text-xs sm:text-sm border-b border-blue-700/50">
    <div class="container mx-auto px-3 sm:px-4 py-1 sm:py-2 flex flex-row justify-between items-center flex-wrap">
      <!-- Quick Links -->
      <div class="flex items-center space-x-5 sm:space-x-6">
        <div class="flex items-center group">
          <div
            class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-700/30 border border-blue-500/30 flex items-center justify-center mr-1 sm:mr-2 group-hover:bg-blue-600/50 transition-colors">
            <i class="fas fa-clock text-blue-300 text-xs sm:text-sm"></i>
          </div>
          <span class="xs:inline text-sm">Mon-Fri: 8AM-5PM</span>
        </div>
        <div class="hidden sm:flex items-center group">
          <div
            class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-700/30 border border-blue-500/30 flex items-center justify-center mr-1 sm:mr-2 group-hover:bg-blue-600/50 transition-colors">
            <i class="fas fa-phone-alt text-blue-300 text-xs sm:text-sm"></i>
          </div>
          <span class="hidden md:inline">{{ contactInfo?.phone || '+254 XXX XXX XXX' }}</span>
        </div>
      </div>

      <!-- Action Links -->
      <div class="flex items-center space-x-2 sm:space-x-4">
        <a v-for="(link, index) in topBarLinks" :key="index" :href="link.path"
          class="flex items-center group transition-all duration-200">
          <div class="relative">
            <div
              class="w-6 h-6 mr-1 sm:w-8 sm:h-8 rounded-lg bg-blue-700/30 border border-blue-500/30 flex items-center justify-center mr-1 sm:mr-2 group-hover:bg-blue-600/50 transition-colors">
              <i :class="`${link.icon} text-blue-300 text-xs sm:text-sm`"></i>
            </div>
            <span v-if="link.badge"
              class="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] px-0.5 rounded-full border border-white">
              {{ link.badge }}
            </span>
          </div>
          <span class="hidden sm:inline group-hover:text-blue-300">{{ link.name }}</span>
        </a>
        <div class="hidden sm:flex items-center space-x-1 sm:space-x-3 ml-2 sm:ml-4">
          <a href="https://www.linkedin.com/company/wakafreight-fowarders-limited/"
            class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-700/30 border border-blue-500/30 flex items-center justify-center text-white hover:bg-blue-600/50 hover:text-blue-300 transition-colors">
            <i class="fab fa-linkedin-in text-xs sm:text-sm"></i>
          </a>
          <a href="https://www.tiktok.com/@valary_2030"
            class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-700/30 border border-blue-500/30 flex items-center justify-center text-white hover:bg-blue-600/50 hover:text-blue-300 transition-colors">
            <i class="fab fa-tiktok text-xs sm:text-sm"></i>
          </a>
          <a href="https://www.facebook.com"
            class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-700/30 border border-blue-500/30 flex items-center justify-center text-white hover:bg-blue-600/50 hover:text-blue-300 transition-colors">
            <i class="fab fa-facebook-f text-xs sm:text-sm"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Navigation -->
  <nav class="sticky top-0 z-50 transition-all duration-300" :class="isScrolled
    ? 'bg-gray-50 shadow-lg py-0 border-b border-gray-100'
    : 'bg-white/95 backdrop-blur-sm py-1 sm:py-2 border-b border-white/20'
    ">
    <div class="max-w-7xl mx-auto px-2 sm:px-4">
      <div class="flex justify-between items-center h-14 sm:h-14">
        <a href="/" class="flex items-center group">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <img src="@/assets/images/logos/finalwakalogo.png" alt="Logo" class="h-14 sm:h-15 w-auto" />
          </div>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-1">
          <div v-for="(link, index) in navLinks" :key="index" class="relative h-full"
            @mouseenter="link.dropdown ? toggleDropdown(index) : null"
            @mouseleave="link.dropdown ? toggleDropdown(null) : null">
            <a :href="link.path"
              class="flex items-center px-4 py-6 text-gray-700 hover:text-blue-600 transition-colors font-medium group h-full"
              :class="{
                'text-blue-600': activeDropdown === index,
                'border-b-2 border-transparent hover:border-blue-500': !link.dropdown,
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
                    <div class="flex-shrink-0 mt-0">
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
                  <a href="/services#services"
                    class="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center">
                    View all services
                    <i class="fas fa-arrow-right ml-2 text-xs"></i>
                  </a>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="hidden lg:flex items-center ml-4 sm:ml-6">
          <a href="/contact">
            <button
              class="flex items-center px-2 py-1 sm:px-3 sm:py-2 border border-transparent text-sm font-medium rounded-lg sm:rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 group">
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-white/20 border border-white/30 flex items-center justify-center mr-1 sm:mr-2 group-hover:bg-white/30 transition-colors">
                <i class="fas fa-phone text-white text-xs sm:text-sm"></i>
              </div>
              <span>Contact Us</span>
            </button>
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden flex items-center">
          <button @click="isNavbarCollapsed = !isNavbarCollapsed"
            class="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors relative"
            :aria-expanded="!isNavbarCollapsed">
            <span class="sr-only">Open main menu</span>
            <div class="w-6 h-6 flex items-center justify-center">
              <i :class="isNavbarCollapsed ? 'fas fa-bars text-lg' : 'fas fa-times text-lg'"></i>
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
        class="lg:hidden fixed inset-x-0 top-20 bg-white shadow-xl z-40 mx-3 rounded-lg py-2 px-4 border border-gray-100">
        <div class="space-y-0.5">
          <a v-for="(link, index) in navLinks" :key="index" :href="link.path"
            class="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            @click="!link.dropdown ? (isNavbarCollapsed = true) : null">
            <div class="flex items-center">
              <div
                class="w-6 h-6 rounded-md bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-60 mr-4">
                <i :class="`${link.icon} text-xs`"></i>
              </div>
              <span class="text-sm">{{ link.name }}</span>
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
              <div v-show="activeDropdown === index" class="ml-10 pl-3 border-l-2 border-blue-200 space-y-2 my-2">
                <a v-for="(item, itemIndex) in link.dropdown" :key="itemIndex" :href="item.path || '#'"
                  class="block px-2 py-1.5 rounded-md text-xs font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors flex items-center"
                  @click="isNavbarCollapsed = true">
                  <div class="w-5 h-5 rounded-sm bg-blue-100 flex items-center justify-center text-blue-600 mr-2">
                    <i :class="`${item.icon} text-[10px]`"></i>
                  </div>
                  {{ item.name }}
                </a>
              </div>
            </transition>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-gray-200">
          <a href="/contact"
            class="w-full flex items-center justify-center px-2 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
            @click="isNavbarCollapsed = true">
            <div class="w-6 h-6 rounded-md bg-white/20 border border-white/30 flex items-center justify-center mr-2">
              <i class="fas fa-paper-plane text-white text-xs"></i>
            </div>
            Contact Us
          </a>
        </div>

        <div class="mt-4 pt-3 border-t border-gray-200 flex justify-center space-x-4">
          <a href="#"
            class="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
            <i class="fab fa-linkedin-in text-sm"></i>
          </a>
          <a href="#"
            class="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
            <i class="fab fa-twitter text-sm"></i>
          </a>
          <a href="#"
            class="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
            <i class="fab fa-facebook-f text-sm"></i>
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

/* Responsive adjustments */
@media (max-width: 640px) {
  .rounded-xl {
    border-radius: 8px;
  }

  /* Make dropdowns take full width on very small screens */
  .dropdown-menu {
    width: 100vw;
    left: 0 !important;
    margin-left: 0 !important;
    border-radius: 0 !important;
  }
}

/* Smoother transitions for mobile menu */
.mobile-menu-enter-active {
  transition: all 0.25s ease-out;
}

.mobile-menu-leave-active {
  transition: all 0.2s ease-in;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
