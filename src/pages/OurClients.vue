<script setup>
import { ref } from 'vue'
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'

import darfordLogo from '@/assets/images/logos/darford.png'
import aviproLogo from '@/assets/images/logos/avipro.jpeg'
import agrocornerLogo from '@/assets/images/logos/agrocorner.png'
import ungaLogo from '@/assets/images/logos/ungafarmcare.png'
import wakaLogo from '@/assets/images/logos/wakalogo.png'

const clientLogos = ref([
  {
    name: 'Darford Industries',
    logo: darfordLogo,
    industry: 'Manufacturing',
    testimonial: "Their logistics solutions streamlined our supply chain by 40%",
    since: 2018
  },
  {
    name: 'Avipro',
    logo: aviproLogo,
    industry: 'Agri-Tech',
    testimonial: "Reliable cold chain solutions for our sensitive products",
    since: 2020
  },
  {
    name: 'Agrocorner',
    logo: agrocornerLogo,
    industry: 'Agriculture',
    testimonial: "Timely deliveries that keep our produce fresh",
    since: 2019
  },
  {
    name: 'Unga FarmCare',
    logo: ungaLogo,
    industry: 'Animal Nutrition',
    testimonial: "Custom solutions for our bulk feed ingredients",
    since: 2017
  },
  {
    name: 'WakaFreight Forwarders Ltd',
    logo: wakaLogo,
    industry: 'Logistics',
    testimonial: "Our trusted partner for cross-border operations",
    since: 2015
  }
])

const csrInitiatives = [
  {
    title: 'Education Support',
    icon: 'graduation-cap',
    description: 'Scholarships and logistics training programs for youth in Nakuru and Nairobi counties.',
    impact: '50+ students supported annually',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    title: 'Environmental Sustainability',
    icon: 'leaf',
    description: 'Green logistics initiatives and tree planting programs near our operational areas.',
    impact: '5,000+ trees planted',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    title: 'Community Empowerment',
    icon: 'hands-helping',
    description: 'Internship programs for fresh graduates and support for women-led logistics businesses.',
    impact: '30+ graduates trained annually',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
  }
]

const activeClient = ref(null)
</script>

<template>
  <TheNavbar />

  <!-- Hero Section -->
  <section class="relative text-white h-[90vh] lg:min-h-[600px] flex items-center">
    <div class="absolute inset-0 bg-black/50 z-0">
      <img src="@/assets/images/services/bg1.jpg" alt="Logistics operations" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-blue-800/60"></div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">
            East Africa's Leading Logistics patner</span>
        </h1>
        <div class="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8 rounded-full"></div>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10">
          Delivering excellence through customized supply chain solutions for industry leaders
        </p>
        <div class="flex flex-col sm:flex-row w-3/4 mx-auto sm:mx-0 justify-center gap-6">
          <a href="#clients"
            class="bg-white text-blue-800 hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            <i class="fas fa-building mr-2"></i> View Our Clients
          </a>
          <a href="/contact"
            class="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105">
            <i class="fas fa-phone-alt mr-2"></i> Contact Our Team
          </a>
        </div>
      </div>
    </div>
    <div class="absolute bottom-8 left-0 right-0 flex justify-center z-10">
      <a href="#clients" class="animate-bounce">
        <i class="fas fa-chevron-down text-white text-2xl bg-blue-600/30 p-4 rounded-full"></i>
      </a>
    </div>
  </section>

  <!-- Client Showcase Section -->
  <section id="clients" class="py-20 bg-gradient-to-b from-white to-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
          OUR PARTNERS
        </span>
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Trusted By Industry Leaders</h2>
        <div class="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We're proud to partner with some of East Africa's most respected brands across multiple industries
        </p>
      </div>

      <!-- Interactive Client Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div v-for="(client, index) in clientLogos" :key="index" @mouseenter="activeClient = index"
          @mouseleave="activeClient = null"
          class="relative group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 h-48 flex flex-col items-center justify-center p-6 border border-gray-100 hover:border-blue-200">

          <!-- Client Logo -->
          <div class="relative z-10 transition-transform duration-500 group-hover:scale-90">
            <img :src="client.logo" :alt="client.name" class="max-h-28 w-auto object-contain">
          </div>
        </div>
      </div>

      <!-- Testimonial Carousel -->
      <div class="mt-20 bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl overflow-hidden shadow-2xl">
        <div class="grid md:grid-cols-2 gap-0">
          <div class="p-12 text-white">
            <h3 class="text-2xl font-bold mb-6">Client Success Stories</h3>
            <div class="relative h-full">
              <div class="absolute top-0 left-0 text-6xl opacity-10 font-bold">"</div>
              <p class="text-lg relative z-10 mb-8">
                "WakaFreight transformed our supply chain operations with their reliable customs clearance and
                just-in-time delivery solutions. Their industry expertise is unmatched in East Africa."
              </p>
              <div class="flex items-center">
                <img class="h-14 w-14 rounded-full object-cover mr-4"
                  src="https://randomuser.me/api/portraits/women/42.jpg" alt="Jane Muthoni">
                <div>
                  <h4 class="font-bold">Jane Muthoni</h4>
                  <p class="text-blue-200 text-sm">Logistics Manager, Bidco Africa</p>
                </div>
              </div>
              <div class="flex mt-6 space-x-2">
                <button class="w-3 h-3 rounded-full bg-white"></button>
                <button class="w-3 h-3 rounded-full bg-white/30"></button>
                <button class="w-3 h-3 rounded-full bg-white/30"></button>
              </div>
            </div>
          </div>
          <div class="hidden md:block bg-blue-700 relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Logistics operations" class="absolute inset-0 w-full h-full object-cover opacity-90">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CSR Section -->
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
          GIVING BACK
        </span>
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Commitment to Society</h2>
        <div class="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Creating positive impact beyond logistics in the communities we serve
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(initiative, index) in csrInitiatives" :key="index"
          class="group relative overflow-hidden rounded-2xl shadow-lg h-96">
          <img :src="initiative.image" :alt="initiative.title"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-8">
            <div>
              <div
                class="w-14 h-14 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <i :class="`fas fa-${initiative.icon} text-white text-2xl`"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">{{ initiative.title }}</h3>
              <p class="text-blue-100 mb-4">{{ initiative.description }}</p>
              <span class="inline-block bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                {{ initiative.impact }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 bg-gradient-to-r from-blue-50 to-white rounded-3xl overflow-hidden shadow-xl">
        <div class="grid md:grid-cols-2 gap-0">
          <div class="p-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Attachment Program</h3>
            <p class="text-gray-600 mb-6">
              We offer 3-month attachment opportunities for recent graduates and current students to gain hands-on
              experience in Kenya's logistics system. Through our structured training and attachment programs, we aim to
              develop a skilled and empowered supply chain and logistics workforce.
            </p>
            <a href="/careers#attachment"
              class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-md">
              <i class="fas fa-info-circle mr-2"></i> Learn About Our Programs
            </a>
          </div>
          <div class="hidden md:block relative">
            <img src="@/assets/images/services/attachment.avif" alt="Internship program"
              class="absolute inset-0 w-full h-full object-cover">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Partnership Section -->
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
          PARTNER WITH US
        </span>
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Become a Partner</h2>
        <div class="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Join our network of trusted partners and benefit from our extensive logistics solutions
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div class="space-y-6">
          <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Benefits for Our Partners</h3>
            <ul class="space-y-4">
              <li v-for="(benefit, index) in [
                'Access to our extensive logistics network across East Africa',
                'Competitive rates and volume discounts',
                'Dedicated account management',
                'Priority customs clearance',
                'Regular market updates and trade advisories'
              ]" :key="index" class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <i class="fas fa-check text-blue-600 text-xs"></i>
                  </div>
                </div>
                <span class="ml-3 text-gray-600">{{ benefit }}</span>
              </li>
            </ul>
          </div>
          <div class="bg-blue-50/50 border border-blue-200 rounded-2xl p-6">
            <h4 class="font-bold text-blue-800 mb-3 flex items-center">
              <i class="fas fa-star text-yellow-400 mr-2"></i> Preferred Partner Program
            </h4>
            <p class="text-gray-600 text-sm">
              Our top-tier partners enjoy additional benefits including exclusive training sessions, early access to new
              services, and joint marketing opportunities.
            </p>
          </div>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Partner Inquiry</h3>
          <form class="space-y-5">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" id="name"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
            </div>
            <div>
              <label for="company" class="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input type="text" id="company"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" id="email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
            </div>
            <div>
              <label for="interest" class="block text-sm font-medium text-gray-700 mb-2">Area of Interest</label>
              <select id="interest"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]">
                <option>Air Freight Partnership</option>
                <option>Sea Freight Partnership</option>
                <option>Cross-Border Logistics</option>
                <option>Warehousing Solutions</option>
                <option>Other</option>
              </select>
            </div>
            <button type="submit"
              class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              Submit Partnership Request
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section class="relative py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-10">
      <div
        class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604339454409-701c5278c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
      </div>
    </div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Optimize Your Supply Chain?</h2>
      <div class="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto mb-8 rounded-full"></div>
      <p class="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
        Join hundreds of satisfied clients who trust WakaFreight for their logistics needs across East Africa
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-6">
        <a href="/contact"
          class="bg-white text-blue-800 hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
          <i class="fas fa-phone-alt mr-3"></i> Get a Free Consultation
        </a>
        <a href="/services"
          class="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105">
          <i class="fas fa-list-ul mr-3"></i> Explore Our Services
        </a>
      </div>
    </div>
  </section>

  <TheFooter />
</template>

<style scoped>
/* Custom animations */
@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.hover-float:hover {
  animation: float 3s ease-in-out infinite;
}

/* Custom select arrow */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* Smooth transitions */
.transition-slow {
  transition: all 0.7s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .client-card {
    height: 180px;
  }

  .csr-card {
    height: 320px;
  }
}
</style>
