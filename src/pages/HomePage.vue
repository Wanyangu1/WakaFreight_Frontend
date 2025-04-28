<script setup>
import { onMounted, ref } from 'vue';
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';

// Import all images properly
import airfreightImg from '@/assets/images/services/airfreight.jpg';
import seaFreightImg from '@/assets/images/services/sea_freight.jpg';
import crossBorderImg from '@/assets/images/services/crossborder.webp';
import customsImg from '@/assets/images/services/custom.avif';
import warehousingImg from '@/assets/images/services/warehousing.jpg';
import vehicleImportImg from '@/assets/images/services/vehicle.jpg';

// Parallax bubbles configuration
const bubbles = ref([
  { id: 1, size: 'w-16 h-16', top: '15%', left: '5%', delay: 0, speed: 0.2 },
  { id: 2, size: 'w-24 h-24', top: '25%', left: '85%', delay: 0.3, speed: 0.3 },
  { id: 3, size: 'w-12 h-12', top: '65%', left: '10%', delay: 0.6, speed: 0.4 },
  { id: 4, size: 'w-20 h-20', top: '75%', left: '80%', delay: 0.9, speed: 0.25 }
]);

// Parallax and counter animations
const handleScroll = () => {
  const parallaxBg = document.querySelector('.hero-parallax img');
  const heroContent = document.querySelector('.hero-content');
  const cargoShip = document.querySelector('.cargo-ship');
  const airplane = document.querySelector('.airplane');

  if (parallaxBg && heroContent) {
    const scrollPosition = window.pageYOffset;
    parallaxBg.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;

    // Animate transportation icons
    if (cargoShip) cargoShip.style.transform = `translateX(${scrollPosition * 0.1}px)`;
    if (airplane) airplane.style.transform = `translateX(${-scrollPosition * 0.1}px)`;

    // Animate bubbles
    bubbles.value.forEach(bubble => {
      const el = document.getElementById(`bubble-${bubble.id}`);
      if (el) {
        el.style.transform = `translateY(${scrollPosition * bubble.speed}px)`;
      }
    });
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  // Animate service cards when they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .process-step, .stat-item').forEach(el => {
    observer.observe(el);
  });

  // Animate counters
  const counters = document.querySelectorAll('.counter');
  const speed = 200;
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    updateCount();
  });
});
// Services data with imported images
const services = [
  {
    title: "Air Freight",
    description: "Time-sensitive global air cargo solutions with customs clearance. Our dedicated air charter services ensure your urgent shipments arrive on schedule.",
    image: airfreightImg,
    features: [
      "Next-flight-out availability",
      "Airport-to-airport service",
      "Dangerous goods handling",
      "Temperature-controlled"
    ],
    icon: "fa-plane"
  },
  {
    title: "Sea Freight",
    description: "Cost-effective ocean shipping with port-to-door logistics. We offer FCL, LCL, and specialized container solutions.",
    image: seaFreightImg,
    features: [
      "Full container load (FCL)",
      "Less than container load (LCL)",
      "Break bulk services",
      "Port clearance included"
    ],
    icon: "fa-ship"
  },
  {
    title: "Cross-Border",
    description: "Efficient land freight across East African borders with our fleet of modern trucks and experienced drivers.",
    image: crossBorderImg,
    features: [
      "Kenya-Uganda-Tanzania routes",
      "Cargo tracking",
      "Border clearance assistance",
      "Dedicated fleet"
    ],
    icon: "fa-truck"
  },
  {
    title: "Customs Brokerage",
    description: "Expert documentation and tax compliance services to ensure smooth clearance at all border points.",
    image: customsImg,
    features: [
      "Import/export documentation",
      "Duty optimization",
      "Pre-clearance services",
      "Regulatory compliance"
    ],
    icon: "fa-file-contract"
  },
  {
    title: "Warehousing",
    description: "Secure storage with inventory management, pick & pack, and distribution services across our regional hubs.",
    image: warehousingImg,
    features: [
      "Bonded warehousing",
      "Inventory management",
      "Pick & pack services",
      "Climate-controlled"
    ],
    icon: "fa-warehouse"
  },
  {
    title: "Vehicle Import",
    description: "End-to-end new/used vehicle importation with customs clearance and inland delivery.",
    image: vehicleImportImg,
    features: [
      "New vehicle imports",
      "Used vehicle clearance",
      "Duty calculation",
      "Inland delivery"
    ],
    icon: "fa-car"
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

const processSteps = [
  {
    title: "Documentation",
    description: "We handle all customs paperwork and compliance requirements",
    icon: "fa-file-signature"
  },
  {
    title: "Transport",
    description: "Optimal routing by air, sea or land based on your priorities",
    icon: "fa-route"
  },
  {
    title: "Clearance",
    description: "Fast-track customs clearance at all border points",
    icon: "fa-passport"
  },
  {
    title: "Delivery",
    description: "Final mile delivery with real-time tracking",
    icon: "fa-box-open"
  }
];
</script>

<template>
  <div class="font-sans antialiased text-gray-900 bg-white">
    <!-- Navbar -->
    <TheNavbar />

    <!-- Enhanced Hero Section with Parallax Bubbles -->
    <section class="hero-parallax relative h-[90vh] min-h-[600px] overflow-hidden">
      <!-- Primary Background Image with Parallax -->
      <div class="absolute inset-0 z-0 overflow-hidden">
        <img src="@/assets/images/bg5.jpeg" alt="Freight containers at port"
          class="parallax-bg w-full h-full object-cover object-center" data-speed="0.5">
        <!-- Gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>
      </div>

      <!-- Parallax Bubbles -->
      <div class="absolute inset-0 z-1 pointer-events-none">
        <div v-for="bubble in bubbles" :id="`bubble-${bubble.id}`" :key="bubble.id"
          :class="`absolute rounded-full bg-white/10 backdrop-blur-sm border border-white/20 ${bubble.size}`"
          :style="{ top: bubble.top, left: bubble.left }">
          <i v-if="bubble.id % 2 === 0"
            class="fas fa-ship text-white/50 text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
          <i v-else
            class="fas fa-plane text-white/50 text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
        </div>
      </div>

      <!-- Animated Transportation Elements -->
      <div class="absolute inset-0 z-1 pointer-events-none">
        <div class="cargo-ship absolute bottom-10 left-0 w-40 h-40 opacity-70">
          <i class="fas fa-ship text-white text-6xl"></i>
        </div>
        <div class="airplane absolute top-20 right-0 w-40 h-40 opacity-70">
          <i class="fas fa-plane text-white text-6xl"></i>
        </div>
      </div>

      <!-- Content -->
      <div class="hero-content relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 text-white">
        <div class="mb-6 animate-fade-in">
          <span
            class="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-300 font-medium text-sm tracking-wider">
            GLOBAL LOGISTICS SOLUTIONS
          </span>
        </div>
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in delay-100">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Borderless</span>
          Trade Simplified
        </h1>
        <p class="text-xl md:text-2xl max-w-3xl leading-relaxed opacity-90 mb-10 animate-fade-in delay-200">
          Your trusted partner for air, sea and cross-border freight forwarding in East Africa since 1999
        </p>
        <div class="flex flex-col sm:flex-row gap-6 mb-8 animate-fade-in delay-300">
          <a href="#contact"
            class="relative overflow-hidden group bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-lg">
            <span class="relative z-1 flex items-center">
              Contact Support
              <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                </path>
              </svg>
            </span>
          </a>
          <a href="#services"
            class="relative overflow-hidden group border-2 border-white hover:border-blue-400 text-white font-bold px-10 py-4 rounded-full transition-all duration-300">
            <span class="relative z-1 flex items-center">
              Our Services
              <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- Enhanced Stats Section -->
    <section class="py-6 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-[url('@/assets/images/pattern.png')] bg-repeat bg-[size:200px]"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(stat, index) in [
            { value: 24, label: 'Years Experience', },
            { value: 1500, label: 'Monthly Shipments' },
            { value: 12, label: 'Border Stations' },
            { value: 98, suffix: '%', label: 'Client Retention' }
          ]" :key="index" class="stat-item opacity-0 translate-y-10 transition-all duration-500"
            :style="`transition-delay: ${index * 0.1}s`">
            <div
              class="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 hover:border-blue-400 transition-all h-full">
              <div class="flex flex-col items-center text-center">

                <div class="text-3xl md:text-3xl font-bold text-white mb-1 counter" :data-target="stat.value">0</div>
                <div class="text-sm uppercase tracking-wider text-blue-200">{{ stat.label }}</div>
                <div v-if="stat.suffix" class="text-blue-300 text-lg">{{ stat.suffix }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Trust Badges Section -->
    <section class="py-12 bg-gray-100">
      <div class="container mx-auto px-6">
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div class="opacity-80 hover:opacity-100 transition-opacity">
            <i class="fas fa-shield-alt text-4xl text-blue-600"></i>
            <p class="mt-2 text-sm font-medium">Licensed by KRA</p>
          </div>
          <div class="opacity-80 hover:opacity-100 transition-opacity">
            <i class="fas fa-certificate text-4xl text-green-600"></i>
            <p class="mt-2 text-sm font-medium">FIATA Member</p>
          </div>
          <div class="opacity-80 hover:opacity-100 transition-opacity">
            <i class="fas fa-globe-africa text-4xl text-orange-600"></i>
            <p class="mt-2 text-sm font-medium">East Africa Network</p>
          </div>
          <div class="opacity-80 hover:opacity-100 transition-opacity">
            <i class="fas fa-clock text-4xl text-purple-600"></i>
            <p class="mt-2 text-sm font-medium">24/7 Support</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section - Enhanced Design -->
    <section id="services" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-blue-600 font-semibold tracking-wider">OUR SOLUTIONS</span>
          <h2 class="text-4xl font-bold text-gray-800 mt-3">Comprehensive Logistics Services</h2>
          <div class="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
          <p class="text-gray-600 max-w-2xl mx-auto mt-6">
            End-to-end freight management tailored to your supply chain requirements
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" :key="index"
            class="service-card bg-white p-0 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 group opacity-0 translate-y-10"
            :style="`transition-delay: ${index * 0.1}s`">
            <div class="relative overflow-hidden h-65 rounded-t-xl">
              <img :src="service.image" :alt="service.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <div class="flex items-center">
                  <div
                    class="w-12 h-12 rounded-full bg-blue-600/90 flex items-center justify-center mr-4 text-white text-xl">
                    <i class="fas" :class="service.icon"></i>
                  </div>
                  <h3 class="text-2xl font-bold text-white">{{ service.title }}</h3>
                </div>
              </div>
            </div>
            <div class="p-8">
              <p class="text-gray-600 leading-relaxed mb-6">{{ service.description }}</p>
              <ul class="mb-6 space-y-2">
                <li v-for="(feature, i) in service.features" :key="i" class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">{{ feature }}</span>
                </li>
              </ul>
              <div class="mt-6">
                <a href="#contact" class="inline-flex items-center text-blue-600 font-medium group">
                  <span class="group-hover:underline">Get a quote</span>
                  <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Redesigned Process Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-blue-600 font-semibold tracking-wider">OUR WORKFLOW</span>
          <h2 class="text-4xl font-bold text-gray-800 mt-3">Streamlined Logistics Process</h2>
          <div class="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
          <p class="text-gray-600 max-w-2xl mx-auto mt-6">
            Our proven 4-step process ensures efficient and reliable cargo movement
          </p>
        </div>

        <div class="relative">
          <!-- Horizontal Timeline for Mobile -->
          <div class="lg:hidden flex justify-center mb-12">
            <div class="flex items-center">
              <div v-for="(step, index) in processSteps" :key="index" class="flex flex-col items-center mx-4">
                <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mb-2 z-10">
                  <i class="fas text-lg" :class="step.icon"></i>
                </div>
                <div class="text-xs font-medium text-gray-600 text-center">{{ step.title }}</div>
              </div>
            </div>
          </div>

          <!-- Vertical Timeline for Desktop -->
          <div
            class="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-200 to-blue-100 transform -translate-x-1/2">
          </div>

          <!-- Steps -->
          <div class="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
            <div v-for="(step, index) in processSteps" :key="index"
              class="process-step relative lg:text-center opacity-0 translate-y-10 transition-all duration-500"
              :style="`transition-delay: ${index * 0.15}s`">
              <div
                class="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center mx-auto mb-6 z-10 shadow-lg">
                <i class="fas text-xl" :class="step.icon"></i>
              </div>
              <div
                class="lg:pt-24 bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <h3 class="text-xl font-bold mb-3 text-gray-800">{{ step.title }}</h3>
                <p class="text-gray-600">{{ step.description }}</p>
                <div class="mt-4 text-blue-600 font-medium hidden lg:block">
                  Step {{ index + 1 }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-blue-700 text-white">
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
    <section id="contact" class="py-20 bg-gray-900 text-white">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <div class="lg:w-1/2">
            <h2 class="text-4xl font-bold mb-6">Ready to Streamline Your Supply Chain?</h2>
            <p class="text-xl text-gray-300 mb-8">
              Get a free consultation with our logistics experts today
            </p>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div>
                  <div class="text-sm text-gray-400">Call us 24/7</div>
                  <div class="text-xl font-bold">+254 725 396 801</div>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mr-4">
                  <i class="fas fa-envelope"></i>
                </div>
                <div>
                  <div class="text-sm text-gray-400">Email us</div>
                  <div class="text-xl font-bold">wakafreight@gmail.com</div>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center mr-4">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <div class="text-sm text-gray-400">Head Office</div>
                  <div class="text-xl font-bold">Nacha Plaza, Nakuru</div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 bg-white rounded-xl shadow-2xl overflow-hidden">
            <div class="p-8 text-gray-800">
              <h3 class="text-2xl font-bold mb-6">Request a Quote</h3>
              <form class="space-y-4">
                <div>
                  <label class="block text-gray-700 mb-2">Name</label>
                  <input type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div>
                  <label class="block text-gray-700 mb-2">Email</label>
                  <input type="email"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div>
                  <label class="block text-gray-700 mb-2">Service Needed</label>
                  <select
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Air Freight</option>
                    <option>Sea Freight</option>
                    <option>Cross-Border</option>
                    <option>Customs Clearance</option>
                  </select>
                </div>
                <button type="submit"
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<style>
/* Add these new styles to your existing styles */
@keyframes floatBubble {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

/* Apply floating animation to bubbles */
.absolute.rounded-full {
  animation: floatBubble 8s ease-in-out infinite;
}

/* Different animation delays for each bubble */
#bubble-1 {
  animation-delay: 0s;
}

#bubble-2 {
  animation-delay: 1s;
}

#bubble-3 {
  animation-delay: 2s;
}

#bubble-4 {
  animation-delay: 3s;
}

/* Enhanced stats section styles */
.bg-gradient-to-r.from-blue-900.to-blue-800 {
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
}

.stat-item:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
}

.stat-item .counter {
  background: linear-gradient(to right, #93c5fd, #3b82f6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* ... (rest of your styles remain the same) ... */
</style>
