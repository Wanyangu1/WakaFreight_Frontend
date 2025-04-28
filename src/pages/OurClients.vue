<script setup>
import { ref } from 'vue'
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'

const activeIndustry = ref(null)

const clientIndustries = [
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    icon: 'industry',
    description: 'We support manufacturers with raw material imports, export documentation, and bonded warehouse solutions.',
    benefits: [
      'Duty optimization for production inputs',
      'Bonded warehouse facilities',
      'Export documentation processing',
      'Just-in-time delivery coordination'
    ],
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'automotive',
    title: 'Automotive',
    icon: 'car',
    description: 'Specialized vehicle importation services for dealers and individual buyers.',
    benefits: [
      'End-to-end vehicle importation',
      'Duty calculation and payment',
      'Pre-shipment inspections',
      'Registration assistance'
    ],
    image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
  },
  {
    id: 'pharmaceutical',
    title: 'Pharmaceutical',
    icon: 'prescription-bottle',
    description: 'Temperature-controlled logistics for sensitive medical supplies and pharmaceuticals.',
    benefits: [
      'Cold chain logistics',
      'Priority customs clearance',
      'GDP-compliant handling',
      '24/7 monitoring'
    ],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'agriculture',
    title: 'Agriculture',
    icon: 'tractor',
    description: 'Logistics solutions for agricultural inputs and export produce.',
    benefits: [
      'Perishable goods handling',
      'Export documentation',
      'Fumigation services',
      'Cold storage solutions'
    ],
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'retail',
    title: 'Retail & E-Commerce',
    icon: 'shopping-cart',
    description: 'Supply chain solutions for retailers and online businesses.',
    benefits: [
      'Last-mile delivery',
      'Inventory management',
      'Cross-border e-commerce',
      'Consolidation services'
    ],
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80'
  },
  {
    id: 'construction',
    title: 'Construction',
    icon: 'hard-hat',
    description: 'Heavy equipment and materials logistics for construction firms.',
    benefits: [
      'Oversized cargo handling',
      'Project cargo solutions',
      'Customs clearance for machinery',
      'Site delivery coordination'
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
  }
]

const csrInitiatives = [
  {
    title: 'Education Support',
    icon: 'graduation-cap',
    description: 'Scholarships and logistics training programs for youth in Nakuru and Nairobi counties.',
    impact: '50+ students supported annually through our education initiatives'
  },
  {
    title: 'Environmental Sustainability',
    icon: 'leaf',
    description: 'Green logistics initiatives and tree planting programs near our operational areas.',
    impact: '5,000+ trees planted in the last 3 years'
  },
  {
    title: 'Community Empowerment',
    icon: 'hands-helping',
    description: 'Internship programs for fresh graduates and support for women-led logistics businesses.',
    impact: '30+ graduates trained annually through our attachment programs'
  }
]

const toggleIndustry = (industryId) => {
  activeIndustry.value = activeIndustry.value === industryId ? null : industryId
}
</script>

<template>
  <TheNavbar />

  <!-- Hero Section with CTA Button -->
  <section class="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24 md:py-32">
    <div class="absolute inset-0 bg-black/40 z-0">
      <img src="@/assets/images/services/bg1.jpg" alt="Happy clients" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-r from-black/40 to-black/50"></div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Valued Clients</h1>
        <div class="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
        <p class="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
          Partnering with businesses across East Africa to deliver exceptional logistics solutions
        </p>
        <div class="flex justify-center gap-4">
          <a href="#industries"
            class="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg shadow-lg transition-colors">
            Explore Industries
          </a>
          <a href="/contact"
            class="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-6 rounded-lg transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Who We Serve -->
  <section id="industries" class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
        <div class="w-20 h-1 bg-blue-500 mx-auto"></div>
        <p class="text-gray-600 max-w-2xl mx-auto mt-6">
          We provide customized logistics solutions for diverse industries across Kenya and beyond
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="industry in clientIndustries" :key="industry.id"
          class="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
          :class="{ 'ring-2 ring-blue-500': activeIndustry === industry.id }">

          <!-- Industry Header -->
          <div class="relative h-58 overflow-hidden">
            <img :src="industry.image" :alt="industry.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-end p-6">
              <div>
                <div class="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-3">
                  <i :class="`fas fa-${industry.icon} text-white text-xl`"></i>
                </div>
                <h3 class="text-xl font-bold text-white">{{ industry.title }}</h3>
              </div>
            </div>
          </div>

          <!-- Preview Content (always visible) -->
          <div class="p-6">
            <p class="text-gray-600 mb-4">{{ industry.preview }}</p>
            <button @click="toggleIndustry(industry.id)"
              class="flex items-center justify-center px-6 py-2 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
              {{ activeIndustry === industry.id ? 'Show Less' : 'Read More' }}
              <i
                :class="`fas fa-chevron-${activeIndustry === industry.id ? 'up' : 'down'} ml-2 text-sm transition-transform`"></i>
            </button>
          </div>

          <!-- Expanded Content (collapsible) -->
          <transition enter-active-class="transition ease-out duration-300" enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-[1000px]" leave-active-class="transition ease-in duration-200"
            leave-from-class="opacity-100 max-h-[1000px]" leave-to-class="opacity-0 max-h-0">
            <div v-show="activeIndustry === industry.id" class="overflow-hidden border-t border-gray-200">
              <div class="p-6 pt-4">
                <!-- Industry Description -->
                <div class="text-gray-600 mb-6">
                  {{ industry.description }}
                </div>

                <!-- Key Benefits -->
                <div class="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
                  <h4 class="text-lg font-semibold text-blue-800 mb-3">Key Benefits:</h4>
                  <ul class="space-y-2">
                    <li v-for="(benefit, index) in industry.benefits" :key="index" class="flex items-start">
                      <i class="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                      <span class="text-gray-700">{{ benefit }}</span>
                    </li>
                  </ul>
                </div>

                <!-- CTA Button -->
                <a href="/contact"
                  class="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-2 px-4 rounded-lg transition-all text-sm">
                  Get Industry Solution
                </a>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>

  <!-- Corporate Social Responsibility -->
  <section class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Commitment to Society</h2>
        <div class="w-20 h-1 bg-blue-500 mx-auto"></div>
        <p class="text-gray-600 max-w-2xl mx-auto mt-6">
          Giving back to the communities where we operate
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(initiative, index) in csrInitiatives" :key="index"
          class="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
            <i :class="`fas fa-${initiative.icon} text-2xl`"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ initiative.title }}</h3>
          <p class="text-gray-600 mb-4">{{ initiative.description }}</p>
          <div class="bg-blue-50 px-3 py-2 rounded-lg inline-block">
            <p class="text-blue-600 font-medium text-sm">{{ initiative.impact }}</p>
          </div>
        </div>
      </div>

      <div class="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 md:p-12">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Internship & Training Program</h3>
            <p class="text-gray-600 mb-6">
              We provide opportunities for fresh graduates to learn the logistics system in Kenya through our training
              and attachment programs. These initiatives are geared toward creating an enabling supply chain and
              logistics workforce.
            </p>
            <a href="/careers"
              class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              <i class="fas fa-info-circle mr-2"></i> Learn About Our Programs
            </a>
          </div>
          <div class="rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Internship program" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Partnership Opportunities -->
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Become a Partner</h2>
        <div class="w-20 h-1 bg-blue-500 mx-auto"></div>
        <p class="text-gray-600 max-w-2xl mx-auto mt-6">
          Join our network of trusted partners and benefit from our extensive logistics solutions
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div class="bg-white p-6 rounded-xl shadow-md mb-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">Benefits for Our Partners</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                <span>Access to our extensive logistics network across East Africa</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                <span>Competitive rates and volume discounts</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                <span>Dedicated account management</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                <span>Priority customs clearance</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                <span>Regular market updates and trade advisories</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="bg-white p-8 rounded-xl shadow-md">
          <h3 class="text-xl font-bold text-gray-900 mb-6">Partner Inquiry Form</h3>
          <form class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" id="name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
              <label for="company" class="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input type="text" id="company"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" id="email"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
              <label for="interest" class="block text-sm font-medium text-gray-700 mb-1">Area of Interest</label>
              <select id="interest"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <option>Air Freight Partnership</option>
                <option>Sea Freight Partnership</option>
                <option>Cross-Border Logistics</option>
                <option>Warehousing Solutions</option>
                <option>Other</option>
              </select>
            </div>
            <button type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Submit Partnership Request
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 md:py-24 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Experience WakaFreight?</h2>
      <p class="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
        Join our growing list of satisfied clients across East Africa
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/contact"
          class="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-colors">
          <i class="fas fa-phone-alt mr-2"></i> Contact Our Team
        </a>
        <a href="/services"
          class="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-colors">
          <i class="fas fa-list-ul mr-2"></i> View All Services
        </a>
      </div>
    </div>
  </section>

  <TheFooter />
</template>

<style scoped>
/* Smooth transitions for industry cards */
.service-card {
  transition: all 0.3s ease;
}

chevron-transition {
  transition: transform 0.2s ease;
}

/* Custom scrollbar for industry descriptions */
.prose ul {
  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;
}

.prose ul::-webkit-scrollbar {
  width: 6px;
}

.prose ul::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.prose ul::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 10px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .service-title {
    font-size: 1.1rem;
  }

  .service-icon {
    width: 40px;
    height: 40px;
  }
}
</style>
