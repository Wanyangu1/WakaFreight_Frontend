<script setup>
import { ref } from 'vue';
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';

const activeService = ref(null);

const services = [
  {
    id: 'air-freight',
    title: 'Air Freight Services',
    icon: 'fas fa-plane',
    summary: 'Time-sensitive global air cargo solutions with customs clearance',
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
    image: '/images/services/air-freight.jpg'
  },
  {
    id: 'sea-freight',
    title: 'Sea Freight Services',
    icon: 'fas fa-ship',
    summary: 'Cost-effective ocean shipping with port-to-door logistics',
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
    image: '/images/services/sea-freight.jpg'
  },
  {
    id: 'cross-border',
    title: 'Cross-Border Logistics',
    icon: 'fas fa-truck',
    summary: 'Seamless land freight across East African borders',
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
    image: '/images/services/cross-border.jpg'
  },
  {
    id: 'customs',
    title: 'Customs Clearance',
    icon: 'fas fa-file-contract',
    summary: 'Expert documentation and tax compliance services',
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
    image: '/images/services/customs-clearance.jpg'
  },
  {
    id: 'warehousing',
    title: 'Warehousing & Distribution',
    icon: 'fas fa-warehouse',
    summary: 'Secure storage with inventory management solutions',
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
    image: '/images/services/warehousing.jpg'
  },
  {
    id: 'vehicle',
    title: 'Vehicle Importation',
    icon: 'fas fa-car',
    summary: 'End-to-end vehicle importation services',
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
    image: '/images/services/vehicle-import.jpg'
  }
];

const toggleService = (serviceId) => {
  activeService.value = activeService.value === serviceId ? null : serviceId;
};
</script>

<template>
  <TheNavbar />
  <!-- Hero Section -->
  <section class="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24 md:py-32">
    <div class="absolute inset-0 bg-black/40 z-0"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Logistics Services</h1>
        <div class="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
        <p class="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
          Comprehensive freight solutions tailored to your supply chain requirements
        </p>
      </div>
    </div>
  </section>

  <!-- Services Grid -->
  <section class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.id"
          class="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
          :class="{ 'ring-2 ring-blue-500': activeService === service.id }">
          <!-- Service Header -->
          <div class="bg-blue-600 px-6 py-4 text-white cursor-pointer" @click="toggleService(service.id)">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mr-4">
                  <i :class="`${service.icon} text-white text-xl`"></i>
                </div>
                <h3 class="text-xl font-bold">{{ service.title }}</h3>
              </div>
              <i :class="`fas fa-chevron-${activeService === service.id ? 'up' : 'down'} transition-transform`"></i>
            </div>
            <p class="mt-2 text-blue-100">{{ service.summary }}</p>
          </div>

          <!-- Collapsible Content -->
          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-screen" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 max-h-screen" leave-to-class="opacity-0 max-h-0">
            <div v-show="activeService === service.id" class="overflow-hidden">
              <div class="p-6">
                <!-- Service Image -->
                <div class="rounded-lg overflow-hidden mb-6" style="aspect-ratio: 16/9;">
                  <img :src="service.image" :alt="service.title" class="w-full h-full object-cover">
                </div>

                <!-- Service Description -->
                <div class="prose max-w-none text-gray-600 mb-6" v-html="service.description"></div>

                <!-- Key Features -->
                <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <h4 class="text-lg font-semibold text-blue-800 mb-3">Key Features:</h4>
                  <ul class="space-y-2">
                    <li v-for="(feature, index) in service.features" :key="index" class="flex items-start">
                      <i class="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                      <span>{{ feature }}</span>
                    </li>
                  </ul>
                </div>

                <!-- CTA Button -->
                <div class="mt-6">
                  <a href="/contact"
                    class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
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
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose WakaFreight?</h2>
        <div class="w-20 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
            <i class="fas fa-shield-alt text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Licensed & Certified</h3>
          <p class="text-gray-600">
            Fully licensed by KRA and FIATA certified with all necessary industry accreditations for peace of mind.
          </p>
        </div>

        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
            <i class="fas fa-network-wired text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">East Africa Network</h3>
          <p class="text-gray-600">
            Strategic locations at all major ports, airports, and border stations for seamless regional logistics.
          </p>
        </div>

        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
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

  <!-- CTA Section -->
  <section class="py-16 md:py-24 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Need a Custom Logistics Solution?</h2>
      <p class="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
        Our experts will design a tailored freight program for your specific requirements.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/contact"
          class="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-colors">
          <i class="fas fa-phone-alt mr-2"></i> Speak to Our Team
        </a>
        <a href="/quote"
          class="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-colors">
          <i class="fas fa-calculator mr-2"></i> Get Instant Quote
        </a>
      </div>
    </div>
  </section>
  <TheFooter />
</template>

<style scoped>
/* Smooth transitions for service cards */
.service-card {
  transition: all 0.3s ease;
}

/* Custom scrollbar for service descriptions */
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
