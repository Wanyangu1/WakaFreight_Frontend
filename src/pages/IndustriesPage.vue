<script setup>
import { ref } from 'vue'
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'

// Updated with premium stock images for each industry
const clientIndustries = [
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    icon: 'industry',
    preview: 'Custom logistics for raw material imports and finished goods exports',
    description: 'We support manufacturers with raw material imports, export documentation, and bonded warehouse solutions to streamline your supply chain.',
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
    preview: 'Complete vehicle import solutions from sourcing to registration',
    description: 'Specialized vehicle importation services for dealers and individual buyers with end-to-end solutions.',
    benefits: [
      'End-to-end vehicle importation',
      'Duty calculation and payment',
      'Pre-shipment inspections',
      'Registration assistance'
    ],
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2083&q=80'
  },
  {
    id: 'pharmaceutical',
    title: 'Pharmaceutical',
    icon: 'prescription-bottle',
    preview: 'Temperature-controlled logistics for sensitive medical supplies',
    description: 'GDP-compliant cold chain solutions for pharmaceuticals and medical devices with 24/7 monitoring.',
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
    preview: 'Specialized handling for perishable agricultural products',
    description: 'Cold storage and expedited logistics solutions for fresh produce and agricultural inputs.',
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
    preview: 'Efficient last-mile delivery solutions for retailers',
    description: 'Omnichannel fulfillment solutions designed for modern retail and e-commerce businesses.',
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
    preview: 'Heavy equipment and materials logistics specialists',
    description: 'Project cargo solutions for construction firms with specialized handling requirements.',
    benefits: [
      'Oversized cargo handling',
      'Project cargo solutions',
      'Customs clearance for machinery',
      'Site delivery coordination'
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
  }
]

const stats = ref([
  { value: '200+', label: 'Industry Clients', icon: 'building' },
  { value: '15+', label: 'Years Experience', icon: 'award' },
  { value: '98%', label: 'Satisfaction Rate', icon: 'smile' },
  { value: '24/7', label: 'Support Available', icon: 'headset' }
])

const caseStudies = ref([
  {
    title: 'Automotive Parts Distributor',
    industry: 'automotive',
    challenge: '65% customs clearance delays',
    solution: 'Implemented our specialized documentation processing system',
    result: 'Reduced clearance time from 14 days to 5 days',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    title: 'Pharmaceutical Company',
    industry: 'pharmaceutical',
    challenge: 'Temperature excursions during transit',
    solution: 'Deployed our GDP-compliant cold chain solution',
    result: 'Zero temperature excursions for 18 months',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
])

const activeIndustry = ref(null)
const toggleIndustry = (industryId) => {
  activeIndustry.value = activeIndustry.value === industryId ? null : industryId
}
</script>

<template>
  <TheNavbar />

  <!-- Hero Section with Video Background -->
  <section
    class="relative text-white h-[70vh] min-h-[400px] lg:h-[90vh] lg:min-h-[600px] flex items-center justify-center">
    <div class="absolute inset-0 bg-black/60 z-0">
      <div class="absolute inset-0 bg-black/60 z-0">
        <img
          src="https://images.unsplash.com/photo-1604339454409-701c5278c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Shipping containers at port" class="w-full h-full object-cover">
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div class="mb-8">
        <span class="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
          Industry Solutions
        </span>
        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">Tailored
            Logistics</span><br>
          For Your Industry
        </h1>
        <div class="w-32 h-1 bg-blue-400 mx-auto mb-8"></div>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Precision logistics solutions designed to address the unique challenges of your sector
        </p>
      </div>
      <a href="#industries"
        class="inline-flex items-center justify-center bg-white text-blue-800 hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
        Explore Solutions <i class="fas fa-chevron-down ml-2"></i>
      </a>
    </div>
  </section>

  <!-- Industry Stats with Icons -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="stat in stats" :key="stat.label"
          class="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white shadow-sm hover:shadow-md transition-shadow">
          <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i :class="`fas fa-${stat.icon} text-blue-600 text-3xl`"></i>
          </div>
          <p class="text-5xl font-bold text-blue-800 mb-2">{{ stat.value }}</p>
          <p class="text-gray-600 font-medium">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Industries We Serve - Enhanced Grid -->
  <section id="industries" class="py-16 md:py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
          OUR EXPERTISE
        </span>
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Custom logistics solutions designed for the specific requirements of your industry
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="industry in clientIndustries" :key="industry.id"
          class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
          :class="{ 'ring-2 ring-blue-500': activeIndustry === industry.id }">

          <!-- Industry Header with Parallax Effect -->
          <div class="relative h-64 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
            <img :src="industry.image" :alt="industry.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute bottom-0 left-0 p-6">
              <div class="w-14 h-14 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                <i :class="`fas fa-${industry.icon} text-white text-2xl`"></i>
              </div>
              <h3 class="text-2xl font-bold text-white">{{ industry.title }}</h3>
            </div>
          </div>

          <!-- Preview Content -->
          <div class="p-6">
            <p class="text-gray-600 mb-6">{{ industry.preview }}</p>

            <!-- Toggle Button -->
            <button @click="toggleIndustry(industry.id)"
              class="w-full flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
              <span>{{ activeIndustry === industry.id ? 'Show Less' : 'View Details' }}</span>
              <i class="fas transition-transform duration-300"
                :class="activeIndustry === industry.id ? 'fa-minus' : 'fa-plus'"></i>
            </button>
          </div>

          <!-- Expanded Content -->
          <transition enter-active-class="transition-all duration-500 ease-out" enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-[1000px] opacity-100" leave-active-class="transition-all duration-300 ease-in"
            leave-from-class="max-h-[1000px] opacity-100" leave-to-class="max-h-0 opacity-0">
            <div v-show="activeIndustry === industry.id" class="overflow-hidden border-t border-gray-200">
              <div class="p-6 pt-0">
                <!-- Full Description -->
                <p class="text-gray-600 mb-6">{{ industry.description }}</p>

                <!-- Key Benefits -->
                <div class="bg-blue-50/50 border border-blue-100 rounded-xl p-6 mb-6">
                  <h4 class="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                    <i class="fas fa-star text-blue-500 mr-2"></i> Key Benefits
                  </h4>
                  <ul class="space-y-3">
                    <li v-for="(benefit, index) in industry.benefits" :key="index" class="flex items-start">
                      <i class="fas fa-check-circle text-blue-500 mt-1 mr-3"></i>
                      <span class="text-gray-700">{{ benefit }}</span>
                    </li>
                  </ul>
                </div>

                <!-- CTA Button -->
                <a href="/contact"
                  class="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 group">
                  Get {{ industry.title }} Solution
                  <i class="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                </a>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>

  <!-- Case Studies with Before/After -->
  <section class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
          SUCCESS STORIES
        </span>
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Transforming Industry Logistics</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Real-world examples of how we've solved complex logistics challenges
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <div v-for="(study, index) in caseStudies" :key="index" class="relative group">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-800/50 rounded-xl z-10"></div>
          <img :src="study.image" :alt="study.title" class="w-full h-full object-cover rounded-xl aspect-[4/3]">

          <div class="absolute inset-0 z-20 flex flex-col justify-end p-8">
            <div class="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <div class="flex items-center mb-3">
                <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                  <i :class="`fas fa-${clientIndustries.find(i => i.id === study.industry).icon} text-white`"></i>
                </div>
                <span class="text-sm font-semibold text-blue-800 uppercase tracking-wider">
                  {{clientIndustries.find(i => i.id === study.industry).title}}
                </span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ study.title }}</h3>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div class="bg-blue-50 p-3 rounded-lg">
                  <p class="text-xs font-semibold text-blue-800 mb-1">CHALLENGE</p>
                  <p class="text-sm text-gray-700">{{ study.challenge }}</p>
                </div>
                <div class="bg-blue-50 p-3 rounded-lg">
                  <p class="text-xs font-semibold text-blue-800 mb-1">SOLUTION</p>
                  <p class="text-sm text-gray-700">{{ study.solution }}</p>
                </div>
                <div class="bg-blue-100 p-3 rounded-lg">
                  <p class="text-xs font-semibold text-blue-800 mb-1">RESULT</p>
                  <p class="text-sm text-gray-700 font-medium">{{ study.result }}</p>
                </div>
              </div>

              <a href="#" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 group">
                Read full case study
                <i class="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Industry Comparison - Enhanced -->
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
          FEATURE COMPARISON
        </span>
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Industry-Specific Capabilities</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          How our solutions address unique industry requirements
        </p>
      </div>

      <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col"
                  class="px-8 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Service Feature
                </th>
                <th v-for="industry in clientIndustries.slice(0, 4)" :key="industry.id" scope="col"
                  class="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  <div class="flex flex-col items-center">
                    <i :class="`fas fa-${industry.icon} text-blue-600 text-xl mb-2`"></i>
                    {{ industry.title }}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-8 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Customs Clearance
                </td>
                <td v-for="industry in clientIndustries.slice(0, 4)" :key="industry.id"
                  class="px-6 py-4 whitespace-nowrap text-center">
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <i class="fas fa-check mr-1"></i> Included
                  </span>
                </td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-8 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Special Documentation
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center">
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <i class="fas fa-check mr-1"></i> Included
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center">
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <i class="fas fa-check mr-1"></i> Included
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center">
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    <i class="fas fa-times mr-1"></i> Not Included
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center">
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <i class="fas fa-check mr-1"></i> Included
                  </span>
                </td>
              </tr>
              <!-- Add more rows as needed -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section - Enhanced -->
  <section class="relative py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div
        class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10">
      </div>
      <div class="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-700/90"></div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Optimize Your Industry Logistics?</h2>
        <div class="w-32 h-1 bg-blue-400 mx-auto mb-8"></div>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
          Our industry specialists are ready to design a logistics solution tailored to your specific requirements
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <a href="/contact"
            class="inline-flex items-center justify-center bg-white text-blue-800 hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            <i class="fas fa-phone-alt mr-3"></i> Speak With an Expert
          </a>
          <a href="/services"
            class="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105">
            <i class="fas fa-list-ul mr-3"></i> View All Services
          </a>
        </div>
      </div>
    </div>
  </section>

  <TheFooter />
</template>

<style scoped>
/* Custom animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

/* Custom scrollbar for industry details */
.industry-details::-webkit-scrollbar {
  width: 6px;
}

.industry-details::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.industry-details::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 10px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .stats-card {
    margin-bottom: 1rem;
  }

  .case-study-card {
    margin-bottom: 2rem;
  }
}

/* Hover effects */
.hover-grow {
  transition: transform 0.3s ease;
}

.hover-grow:hover {
  transform: scale(1.03);
}
</style>
