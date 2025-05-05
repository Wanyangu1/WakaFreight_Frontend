<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
import ceo from '@/assets/images/team/Julius1.JPG'
import md from '@/assets/images/team/person.jpg'
import manager from '@/assets/images/team/Derrick2.jpg'

gsap.registerPlugin(ScrollTrigger)

// Core company data - now as computed or static
const companyData = {
  founded: 1999,
  incorporated: 2011,
  employees: 120,
  locations: ['Nakuru HQ', 'Nairobi', 'Mombasa', 'Border Stations'],
  services: [
    {
      title: 'Air Freight',
      icon: 'plane',
      description: 'Time-sensitive global air cargo solutions with customs clearance',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Sea Freight',
      icon: 'ship',
      description: 'Cost-effective ocean shipping with port-to-door logistics',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      title: 'Cross-Border',
      icon: 'truck',
      description: 'Efficient land freight across East African borders',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      title: 'Customs Clearance',
      icon: 'file-contract',
      description: 'Expert documentation and tax compliance services',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Warehousing',
      icon: 'warehouse',
      description: 'Secure storage with inventory management solutions',
      color: 'from-amber-500 to-amber-600',
    },
    {
      title: 'Vehicle Import',
      icon: 'car',
      description: 'End-to-end vehicle importation services',
      color: 'from-red-500 to-red-600',
    },
  ],
}

// Leadership team
const leadership = [
  {
    name: 'Julius Waka',
    position: 'Managing Director & CEO',
    bio: '25+ years in logistics industry, established WakaFreight to revolutionize East African freight solutions.',
    image: ceo,
  },
  {
    name: 'Gladys Omondi',
    position: 'Operations Director',
    bio: 'Specializes in customs regulations and cross-border logistics with 15 years experience.',
    image: md,
  },
  {
    name: 'Derrick John',
    position: 'Manager',
    bio: 'Financial strategist ensuring cost-effective solutions for our clients.',
    image: manager,
  },
]

// Milestones - now as simple array
const milestones = [
  { year: 1999, event: 'Began operations under Dalexy Freighters license' },
  { year: 2011, event: 'Officially incorporated as WakaFreight Forwarders Limited' },
  { year: 2015, event: 'Opened Nairobi branch at KeMu Towers' },
  { year: 2018, event: 'Expanded to Mombasa port operations' },
  { year: 2021, event: 'Launched 24/7 customer support center' },
  { year: 2023, event: 'Recognized as Top Customs Agent by KRA' },
]

// Animated counters - now with separate refs to avoid circular references
const yearsCounter = ref(0)
const clientsCounter = ref(0)
const shipmentsCounter = ref(0)
const bordersCounter = ref(0)

// Store GSAP instances for cleanup
const animations = {
  counters: null,
  scrollTriggers: [],
  floats: [],
}

onMounted(() => {
  // Animate counters without circular references
  animations.counters = gsap.to(
    {},
    {
      years: new Date().getFullYear() - companyData.founded,
      clients: 1500,
      shipments: 25000,
      borders: 12,
      duration: 2.5,
      ease: 'power3.out',
      onUpdate: function () {
        yearsCounter.value = Math.floor(this.targets()[0].years)
        clientsCounter.value = Math.floor(this.targets()[0].clients)
        shipmentsCounter.value = Math.floor(this.targets()[0].shipments)
        bordersCounter.value = Math.floor(this.targets()[0].borders)
      },
    },
  )

  // Initialize animations on scroll
  gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
    const animation = gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
    animations.scrollTriggers.push(animation.scrollTrigger)
  })

  // Floating elements animation using class instead of IDs
  const floatElements = gsap.utils.toArray('.floating-element')
  floatElements.forEach((el, index) => {
    const anim = gsap.to(el, {
      y: 20,
      duration: 3,
      delay: index * 0.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
    animations.floats.push(anim)
  })

  // Timeline animation
  const timelineItems = gsap.utils.toArray('.timeline-item')
  timelineItems.forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.timeline-container',
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    })
  })
})

onUnmounted(() => {
  // Clean up all GSAP animations
  if (animations.counters) animations.counters.kill()

  animations.scrollTriggers.forEach((trigger) => {
    if (trigger) trigger.kill()
  })

  animations.floats.forEach((anim) => {
    if (anim) anim.kill()
  })

  // Clear all ScrollTriggers
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  gsap.globalTimeline.clear()
})
</script>
<template>
  <TheNavbar />

  <!-- Hero Section with Parallax Effect -->
  <section
    class="relative h-[70vh] min-h-[400px] lg:h-[90vh] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
    <!-- Background with parallax effect -->
    <div class="absolute inset-0 z-0">
      <img src="@/assets/images/background.jpg" alt="Freight containers at port" class="w-full h-full object-cover"
        data-speed="0.6" />
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>
    </div>

    <!-- Floating elements -->
    <div v-for="el in floatingElements" :id="`floating-${el.id}`" :key="el.id"
      class="absolute z-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20" :class="el.size"
      :style="{ top: el.top, left: el.left }"></div>

    <!-- Hero content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-on-scroll">
        <span class="inline-block">Your Trusted</span>
        <span class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">Logistics
          Partner</span>
      </h1>

      <div class="w-24 h-1 bg-blue-400 mx-auto mb-8 animate-on-scroll" style="animation-delay: 0.2s"></div>

      <p class="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed animate-on-scroll"
        style="animation-delay: 0.4s">
        Since 1999, WakaFreight has been delivering reliable air, sea and cross-border freight
        solutions across East Africa and beyond.
      </p>

      <div class="mt-12 animate-on-scroll" style="animation-delay: 0.6s">
        <a href="#about"
          class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 text-white transition-all">
          <i class="fas fa-chevron-down"></i>
        </a>
      </div>
    </div>
  </section>

  <!-- Company Overview -->
  <section id="about" class="py-16 md:py-24 bg-white relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute -right-32 -top-32 w-64 h-64 rounded-full bg-blue-100/20 blur-3xl"></div>
    <div class="absolute -left-32 -bottom-32 w-64 h-64 rounded-full bg-blue-100/20 blur-3xl"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span class="relative inline-block">
              <span class="relative z-10">WakaFreight</span>
              <span class="absolute bottom-0 left-0 w-full h-3 bg-blue-100/50 z-0 -rotate-1"></span>
            </span>
            <span class="text-blue-600"> Forwarders Limited</span>
          </h2>

          <div class="prose max-w-none text-gray-600 mb-8 space-y-4">
            <p class="leading-relaxed">
              Incorporated in 2011 under the Companies Act (Cap. 486 Laws of Kenya), WakaFreight
              builds on decades of experience in customs agency and freight forwarding.
            </p>
            <p class="leading-relaxed">
              From our headquarters in Nakuru's Nacha Plaza to our strategically located branches at
              ICD Embakasi and major border stations, we've grown into a premier logistics provider.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 mb-8">
            <div v-for="(value, key) in counterValues" :key="key"
              class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div class="text-3xl font-bold text-blue-600 mb-1 font-mono">
                {{ value }}{{ key === 'years' ? '+' : '' }}
              </div>
              <div class="text-sm font-medium text-gray-600 uppercase tracking-wider">
                {{
                  key === 'years'
                    ? 'Years Experience'
                    : key === 'clients'
                      ? 'Satisfied Clients'
                      : key === 'shipments'
                        ? 'Annual Shipments'
                        : 'Border Stations'
                }}
              </div>
            </div>
          </div>
        </div>

        <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
          <div class="aspect-w-16 aspect-h-9 overflow-hidden">
            <img src="@/assets/images/background.jpg" alt="WakaFreight Warehouse"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 class="text-xl font-bold mb-2">Our Nakuru Headquarters</h3>
            <p class="text-blue-200">
              Nacha Plaza, 3rd Floor - Where East African logistics excellence begins
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Leadership Team -->
  <section class="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Executive Leadership</h2>
        <div class="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p class="text-gray-600 max-w-2xl mx-auto mt-6 px-4">
          Guiding WakaFreight's vision with decades of combined industry expertise
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 px-4 sm:px-0">
        <!-- CEO Card -->
        <div
          class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-on-scroll group w-full"
          style="animation-delay: 0s">
          <div class="h-70 bg-gray-200 overflow-hidden relative w-full">
            <img :src="leadership[0].image" :alt="leadership[0].name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
            <div
              class="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
              <i class="fas fa-crown mr-1"></i> Founder
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900">{{ leadership[0].name }}</h3>
            <p class="text-blue-600 font-medium mb-3 flex items-center">
              <i class="fas fa-briefcase mr-2"></i> {{ leadership[0].position }}
            </p>
            <p class="text-gray-600 mb-4">{{ leadership[0].bio }}</p>
            <div class="flex space-x-3">
              <a href="#"
                class="w-8 h-8 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 flex items-center justify-center transition-colors">
                <i class="fab fa-linkedin-in text-sm"></i>
              </a>
              <a href="#"
                class="w-8 h-8 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 flex items-center justify-center transition-colors">
                <i class="fas fa-envelope text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Operations Director Card -->
        <div
          class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-on-scroll group w-full"
          style="animation-delay: 0.1s">
          <div class="h-70 bg-gray-200 overflow-hidden relative w-full">
            <img :src="leadership[1].image" :alt="leadership[1].name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
            <div
              class="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
              <i class="fas fa-cogs mr-1"></i> Operations
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900">{{ leadership[1].name }}</h3>
            <p class="text-emerald-600 font-medium mb-3 flex items-center">
              <i class="fas fa-map-signs mr-2"></i> {{ leadership[1].position }}
            </p>
            <p class="text-gray-600 mb-4">{{ leadership[1].bio }}</p>
            <div class="flex space-x-3">
              <a href="https://www.linkedin.com/company/wakafreight-fowarders-limited/"
                class="w-8 h-8 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-600 flex items-center justify-center transition-colors">
                <i class="fab fa-linkedin-in text-sm"></i>
              </a>
              <a href="mailto:wakafreight@gmail.com"
                class="w-8 h-8 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-600 flex items-center justify-center transition-colors">
                <i class="fas fa-envelope text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Manager Card - Enhanced -->
        <div
          class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-on-scroll group w-full"
          style="animation-delay: 0.2s">
          <div class="h-70 bg-gray-200 overflow-hidden relative w-full">
            <img :src="leadership[2].image" :alt="leadership[2].name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
            <div
              class="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
              <i class="fas fa-user-tie mr-1"></i> Manager
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900">{{ leadership[2].name }}</h3>
            <p class="text-amber-600 font-medium mb-3 flex items-center">
              <i class="fas fa-user-tie mr-2"></i> Overall Manager
            </p>
            <p class="text-gray-600 mb-4">
              Experienced leader skilled in managing teams, optimizing operations, and driving
              strategic growth to boost efficiency and client satisfaction.
            </p>
            <div class="flex space-x-3">
              <a href="#"
                class="w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-600 flex items-center justify-center transition-colors">
                <i class="fab fa-linkedin-in text-sm"></i>
              </a>
              <a href="#"
                class="w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-600 flex items-center justify-center transition-colors">
                <i class="fas fa-envelope text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Animated floating icons -->
      <div
        class="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-100/20 blur-xl z-0 animate-float max-w-full">
      </div>
      <div class="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-100/20 blur-xl z-0 animate-float max-w-full"
        style="animation-delay: 2s"></div>
    </div>
  </section>

  <!-- Mission & Values -->
  <section class="py-16 md:py-24 bg-gray-50 relative">
    <!-- Animated background pattern -->
    <div class="absolute inset-0 overflow-hidden opacity-10">
      <div
        class="absolute inset-0 bg-[url('@/assets/images/background.jpg')] bg-repeat bg-[length:300px] animate-[pan_60s_linear_infinite]">
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Principles</h2>
        <div class="w-20 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(item, index) in [
          {
            icon: 'bullseye',
            title: 'Vision',
            content:
              'To become the leading clearing and forwarding firm in the world, respected for our integrity and quality service delivery.',
          },
          {
            icon: 'rocket',
            title: 'Mission',
            content:
              'To provide quality service delivery to all clients while conforming to the highest legal and professional standards.',
          },
          {
            icon: 'gem',
            title: 'Values',
            content: ['Professionalism', 'Integrity', 'Reliability', 'Customer Focus'],
          },
        ]" :key="index"
          class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll"
          :style="`animation-delay: ${index * 0.1 + 0.2}s`">
          <div
            class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 text-white shadow-md">
            <i :class="`fas fa-${item.icon} text-2xl`"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ item.title }}</h3>

          <template v-if="Array.isArray(item.content)">
            <ul class="space-y-2 text-gray-600">
              <li v-for="(value, i) in item.content" :key="i" class="flex items-start">
                <i class="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                <span>{{ value }}</span>
              </li>
            </ul>
          </template>
          <template v-else>
            <p class="text-gray-600">{{ item.content }}</p>
          </template>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Services -->
  <section class="py-16 md:py-24 bg-white relative overflow-hidden">
    <!-- Decorative wave -->
    <div class="absolute top-0 left-0 right-0 h-32 -mt-32 overflow-hidden">
      <svg class="absolute w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25" class="fill-gray-50"></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5" class="fill-gray-50"></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          class="fill-gray-50"></path>
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Logistics Solutions</h2>
        <div class="w-20 h-1 bg-blue-500 mx-auto"></div>
        <p class="text-gray-600 max-w-2xl mx-auto mt-6">
          Comprehensive freight services tailored to your supply chain requirements
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(service, index) in companyData.services" :key="index"
          class="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-on-scroll"
          :style="`animation-delay: ${index * 0.1}s`">
          <div class="h-48 flex items-center justify-center text-white relative overflow-hidden"
            :class="`bg-gradient-to-br ${service.color}`">
            <i :class="`fas fa-${service.icon} text-6xl transition-transform duration-500 group-hover:scale-110`"></i>
            <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ service.title }}</h3>
            <p class="text-gray-600">
              {{ service.description }}
            </p>
            <div class="mt-4">
              <a href="/services"
                class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
                Learn more
                <i class="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Company Timeline -->
  <section class="py-16 md:py-24 bg-white relative overflow-hidden">
    <!-- Decorative curve -->
    <div class="absolute top-0 left-0 right-0 h-32 -mt-32 overflow-hidden transform rotate-180">
      <svg class="absolute w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25" class="fill-gray-50"></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5" class="fill-gray-50"></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          class="fill-gray-50"></path>
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
        <div class="w-20 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <div class="relative timeline-container">
        <!-- Timeline line -->
        <div
          class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-300 transform -translate-x-1/2">
        </div>

        <div class="space-y-12 md:space-y-0">
          <div v-for="(milestone, index) in milestones" :key="index" class="relative timeline-item"
            :class="`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between`">
            <!-- Year -->
            <div :class="`md:w-1/2 py-4 md:py-8 ${index % 2 === 0 ? 'md:pr-8 text-right' : 'md:pl-8'}`">
              <div
                class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white font-bold text-xl shadow-lg">
                {{ milestone.year }}
              </div>
            </div>

            <!-- Event -->
            <div :class="`md:w-1/2 py-4 md:py-8 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`">
              <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-200 relative group">
                <div
                  class="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 shadow-md">
                </div>
                <p class="text-gray-700">{{ milestone.event }}</p>
                <div
                  class="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style="filter: blur(10px)"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 md:py-24 bg-gradient-to-r from-blue-800 to-blue-900 text-white relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden opacity-20">
      <div
        class="absolute inset-0 bg-[url('@/assets/images/pattern-dark.svg')] bg-repeat bg-[length:300px] animate-[pan_60s_linear_infinite]">
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
        Ready to Ship With Confidence?
      </h2>
      <p class="text-xl text-blue-200 max-w-3xl mx-auto mb-8 animate-on-scroll" style="animation-delay: 0.2s">
        Partner with WakaFreight for reliable, efficient logistics solutions tailored to your
        business needs.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll" style="animation-delay: 0.4s">
        <a href="/contact"
          class="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-all hover:scale-105">
          Get a Free Quote
        </a>
        <a href="/services"
          class="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-all hover:scale-105">
          Explore Services
        </a>
      </div>
    </div>
  </section>

  <TheFooter />
</template>

<style scoped>
/* Custom animations */
@keyframes pan {
  0% {
    background-position: 0% 0%;
  }

  100% {
    background-position: 0% 100%;
  }
}

/* Custom timeline styling for mobile */
@media (max-width: 767px) {
  .timeline-item::before {
    content: '';
    position: absolute;
    left: 31px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #3b82f6, #60a5fa);
  }
}

/* Custom scroll animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom hover effects */
.service-card:hover {
  transform: translateY(-8px);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Smooth transitions */
.prose p {
  margin-bottom: 1.25em;
  line-height: 1.7;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .counter-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
