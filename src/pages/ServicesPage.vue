<script setup>
import { ref } from 'vue';
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';
import seafreight from '@/assets/images/services/seafreight1.jpeg';
import distribution from '@/assets/images/services/distribution.jpg';

const activeService = ref(null);

const services = [
  {
    id: 'air-freight',
    title: 'Air Freight Services',
    icon: 'fas fa-plane',
    summary: 'Time-sensitive global air cargo solutions with customs clearance',
    preview: 'Fastest transit times for urgent shipments with customs clearance at all major airports worldwide.',
    description: `
      <p>Our air freight services provide the fastest transit times for your urgent shipments worldwide. We handle all aspects of air cargo logistics including:</p>
      <ul class="list-disc pl-5 space-y-2 mt-3">
        <li>Door-to-door air freight solutions</li>
        <li>Airport-to-airport services</li>
        <li>Express parcel services</li>
        <li>Dangerous goods handling</li>
        <li>Temperature-controlled shipments</li>
        <li>Customs clearance at all major airports</li>
      </ul>
      <p class="mt-4">With partnerships with all major airlines, we secure the best rates and most reliable schedules for your cargo.</p>
    `,
    features: [
      '24-48 hour transit times to major destinations',
      'Real-time flight tracking',
      'Dedicated air cargo specialists',
      'Handling of special cargo (perishables, valuables)'
    ],
    image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'sea-freight',
    title: 'Sea Freight Services',
    icon: 'fas fa-ship',
    summary: 'Cost-effective ocean shipping with port-to-door logistics',
    preview: 'Comprehensive ocean shipping solutions including FCL, LCL, and specialized cargo handling.',
    description: `
      <p>Our comprehensive sea freight solutions cater to all your ocean shipping needs:</p>
      <ul class="list-disc pl-5 space-y-2 mt-3">
        <li>Full Container Load (FCL) services</li>
        <li>Less than Container Load (LCL) consolidation</li>
        <li>Breakbulk and project cargo</li>
        <li>Reefer container services</li>
        <li>Customs brokerage at all major ports</li>
      </ul>
      <p class="mt-4">We maintain strong relationships with major shipping lines to provide reliable schedules and competitive rates.</p>
    `,
    features: [
      'Weekly sailings to/from major global ports',
      'Container tracking system',
      'Cargo insurance options',
      'Hazardous materials handling'
    ],
    image: seafreight
  },
  {
    id: 'cross-border',
    title: 'Cross-Border Logistics',
    icon: 'fas fa-truck',
    summary: 'Seamless land freight across East African borders',
    preview: 'Efficient trucking services connecting East African nations with border clearance facilitation.',
    description: `
      <p>Our cross-border trucking services connect East African nations with efficiency and reliability:</p>
      <ul class="list-disc pl-5 space-y-2 mt-3">
        <li>Kenya-Uganda-Tanzania routes</li>
        <li>DR Congo and South Sudan corridors</li>
        <li>Full truckload and partial load options</li>
        <li>Dedicated fleet and partner carriers</li>
        <li>Border clearance facilitation</li>
      </ul>
      <p class="mt-4">Our border station agents ensure smooth clearance at all major crossings including Malaba, Busia, Namanga, and Taveta.</p>
    `,
    features: [
      '24/7 border monitoring',
      'Transit bonds processing',
      'Cargo tracking technology',
      'Regional regulatory expertise'
    ],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
  },
  {
    id: '#customs',
    title: 'Customs Clearance',
    icon: 'fas fa-file-contract',
    summary: 'Expert documentation and tax compliance services',
    preview: 'Licensed customs agents handling all import/export documentation with KRA compliance.',
    description: `
      <p>As licensed customs agents, we handle all import/export documentation:</p>
      <ul class="list-disc pl-5 space-y-2 mt-3">
        <li>Import/export declarations</li>
        <li>Duty drawback processing</li>
        <li>Bonded warehouse arrangements</li>
        <li>Tax remission applications</li>
        <li>Pre-shipment documentation review</li>
      </ul>
      <p class="mt-4">Our team stays current with all KRA regulations to ensure compliance and avoid costly delays.</p>
    `,
    features: [
      'Average clearance time under 4 hours',
      'Dedicated customs specialists',
      'Duty optimization strategies',
      'Regular compliance audits'
    ],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'warehousing',
    title: 'Warehousing & Distribution',
    icon: 'fas fa-warehouse',
    summary: 'Secure storage with inventory management solutions',
    preview: 'Strategically located warehouses with complete inventory solutions and 24/7 security.',
    description: `
      <p>Our strategically located warehouses offer complete inventory solutions:</p>
      <ul class="list-disc pl-5 space-y-2 mt-3">
        <li>Bonded and non-bonded storage</li>
        <li>Temperature-controlled facilities</li>
        <li>Inventory management systems</li>
        <li>Pick-and-pack services</li>
        <li>Last-mile distribution network</li>
      </ul>
      <p class="mt-4">Our Nairobi and Mombasa facilities feature 24/7 security and advanced tracking systems.</p>
    `,
    features: [
      'Real-time inventory reporting',
      'Barcode scanning technology',
      'Flexible storage terms',
      'Integrated transportation'
    ],
    image: distribution
  },
  {
    id: '#vehicle',
    title: 'Vehicle Importation',
    icon: 'fas fa-car',
    summary: 'End-to-end vehicle importation services',
    preview: 'Complete vehicle import services from sourcing to registration in Kenya.',
    description: `
      <p>Specialized services for personal and commercial vehicle imports:</p>
      <ul class="list-disc pl-5 space-y-2 mt-3">
        <li>New and used vehicle imports</li>
        <li>Duty calculation and payment</li>
        <li>Pre-shipment inspections</li>
        <li>Port clearance and delivery</li>
        <li>Registration assistance</li>
      </ul>
      <p class="mt-4">We handle all paperwork and logistics from origin port to your doorstep.</p>
    `,
    features: [
      'Japan and UAE sourcing partners',
      'Transparent pricing',
      'Damage inspection on arrival',
      'Registration processing'
    ],
    image: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2078&q=80'
  }
];
const testimonials = [
  {
    name: "James Kariuki",
    role: "Import Manager, Nairobi",
    quote: "Wakafreight cleared our pharmaceutical shipment in record time during the pandemic. Their expertise saved us thousands in demurrage costs.",
    image: ""
  },
  {
    name: "Sarah Mwangi",
    role: "Export Director, Mombasa",
    quote: "Their sea freight rates from Mombasa to China are unbeatable. We've shipped 200+ containers with zero delays in 3 years.",
    image: ""
  },
  {
    name: "David Omondi",
    role: "Logistics Coordinator",
    quote: "The cross-border team handles our Uganda/Tanzania routes seamlessly. One call solves any clearance issue.",
    image: ""
  }
];

const toggleService = (serviceId) => {
  activeService.value = activeService.value === serviceId ? null : serviceId;
};
</script>

<template>
  <TheNavbar />

  <!-- Hero Section -->
  <section class="relative h-[500px] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-black/0 z-0">
      <img src="@/assets/images/services/bg6.jpg" alt="Cargo plane loading"
        class="w-full h-full object-cover object-center animate-scale-slow">
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/60"></div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">Our Logistics Services</h1>
        <div class="w-24 h-1.5 bg-blue-400 mx-auto mb-8"></div>
        <p class="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium">
          Comprehensive freight solutions tailored to your supply chain requirements
        </p>
        <a href="#services"
          class="mt-10 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all hover:scale-105 duration-300 group">
          <i class="fas fa-arrow-down mr-2 group-hover:animate-bounce"></i> Explore Services
        </a>
      </div>
    </div>
  </section>

  <!-- Stats Bar -->
  <div class="bg-blue-900 text-white py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div class="p-4 hover:scale-105 transition-transform duration-300">
          <div class="text-3xl md:text-4xl font-bold mb-2">10+</div>
          <div class="text-blue-200 uppercase text-sm font-medium">Countries Served</div>
        </div>
        <div class="p-4 hover:scale-105 transition-transform duration-300">
          <div class="text-3xl md:text-4xl font-bold mb-2">24/7</div>
          <div class="text-blue-200 uppercase text-sm font-medium">Customer Support</div>
        </div>
        <div class="p-4 hover:scale-105 transition-transform duration-300">
          <div class="text-3xl md:text-4xl font-bold mb-2">98%</div>
          <div class="text-blue-200 uppercase text-sm font-medium">On-Time Delivery</div>
        </div>
        <div class="p-4 hover:scale-105 transition-transform duration-300">
          <div class="text-3xl md:text-4xl font-bold mb-2">500+</div>
          <div class="text-blue-200 uppercase text-sm font-medium">Monthly Shipments</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Services Grid -->
  <section id="services" class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
        <div class="w-20 h-1 bg-blue-500 mx-auto"></div>
        <p class="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          We offer end-to-end logistics solutions to meet all your freight and supply chain needs
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.id"
          class="border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
          :class="{ 'ring-2 ring-blue-500 shadow-lg': activeService === service.id }">

          <!-- Service Header -->
          <div class="relative h-60 overflow-hidden">
            <img :src="service.image" :alt="service.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 flex items-end p-6">
              <div>
                <div class="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-3">
                  <i :class="`${service.icon} text-white text-xl`"></i>
                </div>
                <h3 class="text-xl font-bold text-white">{{ service.title }}</h3>
                <p class="mt-1 text-blue-100">{{ service.summary }}</p>
              </div>
            </div>
          </div>

          <!-- Preview Content -->
          <div class="p-6">
            <p class="text-gray-600 mb-4">{{ service.preview }}</p>

            <!-- Single Toggle Button -->
            <button @click="toggleService(service.id)"
              class="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
              <span>{{ activeService === service.id ? 'Show Less' : 'View Details' }}</span>
              <i class="fas ml-2 transition-transform duration-300"
                :class="activeService === service.id ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
            </button>
          </div>

          <!-- Expanded Content -->
          <transition enter-active-class="transition-[opacity,max-height] duration-500 ease-out"
            enter-from-class="opacity-0 max-h-0" enter-to-class="opacity-100 max-h-[2000px]"
            leave-active-class="transition-[opacity,max-height] duration-300 ease-in"
            leave-from-class="opacity-100 max-h-[2000px]" leave-to-class="opacity-0 max-h-0">
            <div v-show="activeService === service.id" class="overflow-hidden border-t border-gray-200">
              <div class="p-6 pt-4">
                <!-- Full Description -->
                <div class="prose max-w-none text-gray-600 mb-4" v-html="service.description"></div>

                <!-- Key Features -->
                <div class="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
                  <h4 class="text-lg font-semibold text-blue-800 mb-3">Key Features:</h4>
                  <ul class="space-y-2">
                    <li v-for="(feature, index) in service.features" :key="index" class="flex items-start">
                      <i class="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                      <span class="text-gray-700">{{ feature }}</span>
                    </li>
                  </ul>
                </div>

                <!-- CTA Button -->
                <div class="mt-4">
                  <a href="/contact"
                    class="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 hover:shadow-md">
                    <i class="fas fa-envelope mr-2"></i> Inquire About This Service
                  </a>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="py-16 md:py-24 bg-gray-50 relative">
    <div class="absolute inset-0 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Warehouse background" class="w-full h-full object-cover opacity-10">
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose WakaFreight?</h2>
        <div class="w-20 h-1 bg-blue-500 mx-auto"></div>
        <p class="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          We go beyond standard logistics to deliver exceptional value and service
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100">
          <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white">
            <i class="fas fa-shield-alt text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Licensed & Certified</h3>
          <p class="text-gray-600">
            Fully licensed by KRA and FIATA certified with all necessary industry accreditations for peace of mind.
          </p>
        </div>

        <div
          class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100">
          <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white">
            <i class="fas fa-network-wired text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">East Africa Network</h3>
          <p class="text-gray-600">
            Strategic locations at all major ports, airports, and border stations for seamless regional logistics.
          </p>
        </div>

        <div
          class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100">
          <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white">
            <i class="fas fa-headset text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Dedicated Support</h3>
          <p class="text-gray-600">
            24/7 customer service with personalized account managers for your business.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section id="testimonials" class="py-20 bg-blue-700 text-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-blue-300 font-semibold tracking-wider">CLIENT VOICES</span>
        <h2 class="text-4xl font-bold mt-3">Trusted by Businesses Across Africa</h2>
        <div class="w-20 h-1 bg-blue-400 mx-auto mt-4"></div>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in testimonials" :key="index"
          class="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-500 transform hover:-translate-y-2">
          <div class="flex items-center mb-6">
            <div class="w-14 h-14 rounded-full bg-blue-600/30 flex items-center justify-center mr-4 text-2xl">
              <i class="fas fa-user"></i>
            </div>
            <div>
              <h4 class="font-bold text-lg">{{ testimonial.name }}</h4>
              <div class="text-blue-200 text-sm">{{ testimonial.role }}</div>
            </div>
          </div>
          <p class="italic mb-6 relative pl-6">
            <span class="absolute left-0 top-0 text-blue-400 text-2xl font-serif">"</span>
            {{ testimonial.quote }}
          </p>
          <div class="text-yellow-400">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- CTA Section -->
  <section class="relative py-16 md:py-32 text-white overflow-hidden">
    <div class="absolute inset-0 bg-black/60 z-0">
      <img src="@/assets/images/services/bg6.jpg" alt="Truck on highway" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/60"></div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Need a Custom Logistics Solution?</h2>
      <p class="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
        Our experts will design a tailored freight program for your specific requirements.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/contact"
          class="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
          <i class="fas fa-phone-alt mr-2"></i> Speak to Our Team
        </a>
        <a href="/quote"
          class="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
          <i class="fas fa-calculator mr-2"></i> Get Instant Quote
        </a>
      </div>
    </div>
  </section>

  <TheFooter />
</template>

<style scoped>
/* Custom animations */
.animate-scale-slow {
  animation: scale 20s linear infinite alternate;
}

@keyframes scale {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.1);
  }
}

/* Smooth transitions */
.service-card {
  transition: all 0.3s ease;
}

/* Custom scrollbar */
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
