<script setup>
import { onMounted } from 'vue';
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';

// Parallax and counter animations
const handleScroll = () => {
  const parallaxBg = document.querySelector('.parallax-bg');
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
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

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

const services = [
  {
    title: "Air Freight",
    description: "Time-sensitive global air cargo solutions with customs clearance.",
    icon: "fas fa-plane",
    color: "blue"
  },
  {
    title: "Sea Freight",
    description: "Cost-effective ocean shipping with port-to-door logistics.",
    icon: "fas fa-ship",
    color: "indigo"
  },
  {
    title: "Cross-Border",
    description: "Efficient land freight across East African borders.",
    icon: "fas fa-truck",
    color: "green"
  },
  {
    title: "Customs Brokerage",
    description: "Expert documentation and tax compliance services.",
    icon: "fas fa-file-contract",
    color: "purple"
  },
  {
    title: "Warehousing",
    description: "Secure storage with inventory management.",
    icon: "fas fa-warehouse",
    color: "orange"
  },
  {
    title: "Vehicle Import",
    description: "End-to-end new/used vehicle importation.",
    icon: "fas fa-car",
    color: "red"
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
</script>

<template>
  <div class="font-sans antialiased text-gray-900 bg-white">
    <!-- Navbar -->
    <TheNavbar />

    <!-- Hero Section with Logistics Theme -->
    <section class="hero-parallax relative h-[90vh] min-h-[600px] overflow-hidden">
      <!-- Animated Background with Transportation Elements -->
      <div class="parallax-bg absolute inset-0 bg-gradient-to-br from-blue-900 to-gray-900">
        <div class="absolute inset-0 opacity-20 bg-[url('https://example.com/cargo-pattern.png')]"></div>

        <!-- Animated Transportation Icons -->
        <div class="cargo-ship absolute bottom-10 left-0 w-40 h-40 opacity-70 transition-transform duration-1000">
          <i class="fas fa-ship text-white text-6xl"></i>
        </div>
        <div class="airplane absolute top-20 right-0 w-40 h-40 opacity-70 transition-transform duration-1000">
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
        <div class="flex flex-col sm:flex-row gap-6 animate-fade-in delay-300">
          <a href="#contact"
            class="relative overflow-hidden group bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-lg">
            <span class="relative z-10 flex items-center">
              Request Quote
              <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                </path>
              </svg>
            </span>
          </a>
          <a href="#services"
            class="relative overflow-hidden group border-2 border-white hover:border-blue-400 text-white font-bold px-10 py-4 rounded-full transition-all duration-300">
            <span class="relative z-10 flex items-center">
              Our Services
              <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>

      <!-- Stats Bar -->
      <div class="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm py-4">
        <div class="container mx-auto grid grid-cols-3 md:grid-cols-4 gap-4 text-center">
          <div>
            <div class="text-2xl md:text-3xl font-bold text-blue-300 counter" data-target="24">0</div>
            <div class="text-xs md:text-sm uppercase tracking-wider text-white">Years Experience</div>
          </div>
          <div>
            <div class="text-2xl md:text-3xl font-bold text-blue-300 counter" data-target="1500">0</div>
            <div class="text-xs md:text-sm uppercase tracking-wider text-white">Monthly Shipments</div>
          </div>
          <div>
            <div class="text-2xl md:text-3xl font-bold text-blue-300 counter" data-target="12">0</div>
            <div class="text-xs md:text-sm uppercase tracking-wider text-white">Border Stations</div>
          </div>
          <div class="hidden md:block">
            <div class="text-2xl md:text-3xl font-bold text-blue-300 counter" data-target="98">0</div>
            <div class="text-xs md:text-sm uppercase tracking-wider text-white">Client Retention</div>
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

    <!-- Services Section -->
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
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 group">
            <div class="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white"
              :class="`bg-${service.color}-600`">
              <i :class="service.icon" class="text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed">{{ service.description }}</p>
            <div class="mt-6">
              <a href="#" class="text-blue-600 font-medium inline-flex items-center group-hover:underline">
                Learn more
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-blue-600 font-semibold tracking-wider">HOW IT WORKS</span>
          <h2 class="text-4xl font-bold text-gray-800 mt-3">Our Seamless Process</h2>
          <div class="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        <div class="relative">
          <!-- Timeline -->
          <div class="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>

          <!-- Steps -->
          <div class="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
            <!-- Step 1 -->
            <div class="relative lg:text-center">
              <div
                class="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-6 z-10">
                <span class="text-2xl font-bold">1</span>
              </div>
              <div class="lg:pt-24 bg-white p-8 rounded-xl shadow-md">
                <h3 class="text-xl font-bold mb-3 text-gray-800">Documentation</h3>
                <p class="text-gray-600">We handle all customs paperwork and compliance requirements</p>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="relative lg:text-center">
              <div
                class="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-6 z-10">
                <span class="text-2xl font-bold">2</span>
              </div>
              <div class="lg:pt-24 bg-white p-8 rounded-xl shadow-md">
                <h3 class="text-xl font-bold mb-3 text-gray-800">Transport</h3>
                <p class="text-gray-600">Optimal routing by air, sea or land based on your priorities</p>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="relative lg:text-center">
              <div
                class="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-6 z-10">
                <span class="text-2xl font-bold">3</span>
              </div>
              <div class="lg:pt-24 bg-white p-8 rounded-xl shadow-md">
                <h3 class="text-xl font-bold mb-3 text-gray-800">Clearance</h3>
                <p class="text-gray-600">Fast-track customs clearance at all border points</p>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="relative lg:text-center">
              <div
                class="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-6 z-10">
                <span class="text-2xl font-bold">4</span>
              </div>
              <div class="lg:pt-24 bg-white p-8 rounded-xl shadow-md">
                <h3 class="text-xl font-bold mb-3 text-gray-800">Delivery</h3>
                <p class="text-gray-600">Final mile delivery with real-time tracking</p>
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

.hero-parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

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
  animation: fadeIn 1s ease forwards;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #2563eb;
}

body {
  font-family: 'Poppins', sans-serif;
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Floating animation for cargo icons */
@keyframes floatShip {

  0%,
  100% {
    transform: translateX(0) translateY(0);
  }

  50% {
    transform: translateX(20px) translateY(-10px);
  }
}

.cargo-ship {
  animation: floatShip 8s ease-in-out infinite;
}

@keyframes floatPlane {

  0%,
  100% {
    transform: translateX(0) translateY(0);
  }

  50% {
    transform: translateX(-20px) translateY(10px);
  }
}

.airplane {
  animation: floatPlane 10s ease-in-out infinite;
}
</style>
