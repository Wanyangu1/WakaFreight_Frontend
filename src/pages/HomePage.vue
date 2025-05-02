<script setup>
import { onMounted, ref, onUnmounted } from 'vue';
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';
// Import hero images
import hero1 from '@/assets/images/bg5.jpeg';
import hero2 from '@/assets/images/services/airfreight.jpg';
import hero3 from '@/assets/images/services/sea_freight.jpg';
import hero4 from '@/assets/images/services/warehousing.jpg';

const currentSlide = ref(0);
const isTransitioning = ref(false);
const touchStartX = ref(0);
const touchEndX = ref(0);

const heroSlides = [
  {
    image: hero1,
    title: "Borderless Trade Simplified",
    subtitle: "Your trusted partner for air, sea and cross-border freight forwarding in East Africa since 1999",
    cta1: "Contact Support",
    cta2: "Our Services"
  },
  {
    image: hero2,
    title: "Air Freight Solutions",
    subtitle: "Time-sensitive global air cargo with customs clearance and dedicated air charter services",
    cta1: "Get Air Quote",
    cta2: "Learn More"
  },
  {
    image: hero3,
    title: "Ocean Freight Expertise",
    subtitle: "Cost-effective sea shipping with port-to-door logistics and container solutions",
    cta1: "Sea Freight Rates",
    cta2: "View Services"
  },
  {
    image: hero4,
    title: "Warehousing & Distribution",
    subtitle: "Secure storage with inventory management across our regional hubs",
    cta1: "Storage Solutions",
    cta2: "Contact Us"
  }
];

// Auto-rotate carousel
let interval;
const startCarousel = () => {
  interval = setInterval(() => {
    nextSlide();
  }, 9000);
};

const stopCarousel = () => {
  clearInterval(interval);
};

const nextSlide = () => {
  if (isTransitioning.value) return;
  isTransitioning.value = true;
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 1000);
};

const prevSlide = () => {
  if (isTransitioning.value) return;
  isTransitioning.value = true;
  currentSlide.value = (currentSlide.value - 1 + heroSlides.length) % heroSlides.length;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 1000);
};

const goToSlide = (index) => {
  if (isTransitioning.value || currentSlide.value === index) return;
  isTransitioning.value = true;
  currentSlide.value = index;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 1000);
};

// Touch events for mobile swipe
const handleTouchStart = (e) => {
  touchStartX.value = e.changedTouches[0].screenX;
  stopCarousel();
};

const handleTouchEnd = (e) => {
  touchEndX.value = e.changedTouches[0].screenX;
  handleSwipe();
  startCarousel();
};

const handleSwipe = () => {
  if (touchEndX.value < touchStartX.value - 50) {
    nextSlide();
  }
  if (touchEndX.value > touchStartX.value + 50) {
    prevSlide();
  }
};

// Pause on hover
const pauseCarousel = () => {
  stopCarousel();
};

const resumeCarousel = () => {
  startCarousel();
};

onMounted(() => {
  startCarousel();
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  stopCarousel();
  window.removeEventListener('keydown', handleKeyDown);
});

// Keyboard navigation
const handleKeyDown = (e) => {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  } else if (e.key === 'ArrowRight') {
    nextSlide();
  }
};
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
    description: "Reliable last-mile delivery with guaranteed timeliness and care",
    icon: "fa-box-open"
  }
];
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
</script>

<template>
  <div class="font-sans antialiased text-gray-900 bg-white">
    <!-- Navbar -->
    <TheNavbar />

    <!-- Enhanced Hero Carousel -->
    <section class="relative h-[70vh] min-h-[400px] lg:h-[90vh] lg:min-h-[600px] overflow-hidden"
      @mouseenter="pauseCarousel" @mouseleave="resumeCarousel" @touchstart="handleTouchStart"
      @touchend="handleTouchEnd">
      <!-- Slides -->
      <div class="relative h-full w-full">
        <div v-for="(slide, index) in heroSlides" :key="index"
          class="absolute inset-0 transition-opacity duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]" :class="{
            'opacity-100 z-10': currentSlide === index,
            'opacity-0 z-0': currentSlide !== index
          }">
          <!-- Background Image with Parallax -->
          <div class="absolute inset-0 z-0 overflow-hidden">
            <img :src="slide.image" :alt="slide.title"
              class="w-full h-full object-cover object-center transition-transform duration-[8000ms] ease-out" :class="{
                'scale-110': currentSlide === index,
                'scale-100': currentSlide !== index
              }">
            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>
          </div>

          <!-- Content -->
          <div class="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 text-white">
            <div class="mb-6 transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] delay-100" :class="{
              'opacity-100 translate-y-0': currentSlide === index,
              'opacity-0 translate-y-4': currentSlide !== index
            }">
              <span
                class="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-300 font-medium text-sm tracking-wider">
                GLOBAL LOGISTICS SOLUTIONS
              </span>
            </div>
            <h1
              class="text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] delay-200"
              :class="{
                'opacity-100 translate-y-0': currentSlide === index,
                'opacity-0 translate-y-4': currentSlide !== index
              }">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                {{ slide.title.split(' ')[0] }}
              </span>
              {{ slide.title.split(' ').slice(1).join(' ') }}
            </h1>
            <p class="text-xl md:text-2xl max-w-3xl leading-relaxed opacity-90 mb-10 transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] delay-300"
              :class="{
                'opacity-100 translate-y-0': currentSlide === index,
                'opacity-0 translate-y-4': currentSlide !== index
              }">
              {{ slide.subtitle }}
            </p>
            <div
              class="flex flex-col sm:flex-row gap-6 mb-8 transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] delay-500"
              :class="{
                'opacity-100 translate-y-0': currentSlide === index,
                'opacity-0 translate-y-4': currentSlide !== index
              }">

              <a href="#contact"
                class="w-3/4 sm:w-auto relative overflow-hidden group bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                <span class="relative z-1 flex items-center justify-center">
                  {{ slide.cta1 }}
                  <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>

              <a href="#services"
                class="w-3/4 sm:w-auto relative overflow-hidden group border-2 border-white hover:border-blue-400 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:bg-white/10">
                <span class="relative z-1 flex items-center justify-center">
                  {{ slide.cta2 }}
                  <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button @click="prevSlide"
        class="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
        aria-label="Previous slide">
        <svg class="w-6 h-6 transition-transform duration-300 group-hover:scale-125" fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button @click="nextSlide"
        class="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
        aria-label="Next slide">
        <svg class="w-6 h-6 transition-transform duration-300 group-hover:scale-125" fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      <!-- Pagination Dots -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        <button v-for="(slide, index) in heroSlides" :key="index" @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-300 hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-white/50"
          :class="{
            'bg-white w-6': currentSlide === index,
            'bg-white/30 w-3': currentSlide !== index
          }" :aria-label="`Go to slide ${index + 1}`"></button>
      </div>

      <!-- Scroll Down Indicator -->
      <div class="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- Enhanced Stats Section -->
    <section class="py-6 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
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
    <!-- Trusted Partners Section -->
    <section class="py-16 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span
            class="inline-block bg-blue-50 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Our Trusted Partners
          </span>
          <h2 class="text-3xl font-bold text-gray-900 mb-3">Collaborating with Industry Leaders</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to work with some of the most respected brands in East Africa
          </p>
        </div>

        <!-- Logo Marquee Container -->
        <div class="relative overflow-hidden py-8">

          <!-- Infinite Marquee -->
          <div class="flex space-x-12 animate-marquee whitespace-nowrap">
            <div v-for="(client, index) in [...clientLogos, ...clientLogos]" :key="'first-' + index"
              class="inline-flex items-center justify-center px-6">
              <img :src="client.logo" :alt="client.name"
                class="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                :title="client.name">
            </div>
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
    <!-- Testimonials -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-700/20 blur-3xl"></div>
      <div class="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-700/20 blur-3xl"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Voices From Our African Partners</h2>
          <div class="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p class="text-blue-200 max-w-2xl mx-auto">
            Trusted by businesses across East Africa for reliable logistics solutions
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div
            class="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2 group">
            <div class="flex items-center mb-6">
              <div class="relative">
                <div
                  class="w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-400 group-hover:ring-blue-300 transition-all">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=128&h=128&q=80"
                    alt="Nairobi businesswoman" class="w-full h-full object-cover">
                </div>
                <div
                  class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  <i class="fas fa-quote-left text-xs text-white"></i>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="font-bold text-lg">Wanjiku M.</h4>
                <p class="text-blue-300 text-sm">Textile Manufacturer, Nairobi</p>
              </div>
            </div>
            <p
              class="italic mb-6 relative pl-6 before:content-before:text-4xl before:text-blue-400/30 before:absolute before:left-0 before:-top-2">
              WakaFreight' s cross-border service transformed our regional distribution. Their team understands East
              African trade regulations better than anyone. </p>
            <div class="flex items-center justify-between">
              <div class="flex text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="text-blue-300 text-sm">
                <i class="fas fa-map-marker-alt mr-1"></i> Kenya
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div
            class="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2 group">
            <div class="flex items-center mb-6">
              <div class="relative">
                <div
                  class="w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-400 group-hover:ring-blue-300 transition-all">
                  <img
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=128&h=128&q=80"
                    alt="Kampala businessman" class="w-full h-full object-cover">
                </div>
                <div
                  class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  <i class="fas fa-quote-left text-xs text-white"></i>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="font-bold text-lg">Musa K.</h4>
                <p class="text-blue-300 text-sm">Auto Importer, Kampala</p>
              </div>
            </div>
            <p
              class="italic mb-6 relative pl-6 before:content-before:text-4xl before:text-blue-400/30 before:absolute before:left-0 before:-top-2">
              As a vehicle importer, I rely on WakaFreight' s Mombasa port operations. Their customs clearance team
              saves
              me 2-3 weeks on every shipment. </p>
            <div class="flex items-center justify-between">
              <div class="flex text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <div class="text-blue-300 text-sm">
                <i class="fas fa-map-marker-alt mr-1"></i> Uganda
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div
            class="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2 group">
            <div class="flex items-center mb-6">
              <div class="relative">
                <div
                  class="w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-400 group-hover:ring-blue-300 transition-all">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=128&h=128&q=80"
                    alt="Dar es Salaam businesswoman" class="w-full h-full object-cover">
                </div>
                <div
                  class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  <i class="fas fa-quote-left text-xs text-white"></i>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="font-bold text-lg">Neema J.</h4>
                <p class="text-blue-300 text-sm">Pharma Distributor, Dar es Salaam</p>
              </div>
            </div>
            <p
              class="italic mb-6 relative pl-6 before:content-before:text-4xl before:text-blue-400/30 before:absolute before:left-0 before:-top-2">
              Their temperature-controlled air freight from Europe ensures our medical supplies arrive in perfect
              condition. 24/7 tracking gives us peace of mind.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="text-blue-300 text-sm">
                <i class="fas fa-map-marker-alt mr-1"></i> Tanzania
              </div>
            </div>
          </div>
        </div>

        <!-- View more button -->
        <div class="text-center mt-12">
          <a href="/services#testimonials"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-blue-900 bg-white hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg">
            Read More Success Stories
            <i class="fas fa-arrow-right ml-2 text-blue-700"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA Section - Responsive Design -->
    <section id="contact" class="py-16 md:py-20 bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <!-- Contact Info Column -->
          <div class="w-full lg:w-1/2">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Ready to Streamline<br class="hidden sm:block"> Your Supply Chain?
            </h2>
            <p class="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Get a free consultation with our logistics experts today
            </p>

            <div class="space-y-5 sm:space-y-4">
              <!-- Phone -->
              <div class="flex items-start sm:items-center">
                <div
                  class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center mr-3 sm:mr-4 mt-1 sm:mt-0">
                  <i class="fas fa-phone-alt text-sm sm:text-base"></i>
                </div>
                <div>
                  <div class="text-xs sm:text-sm text-gray-400">Call us 24/7</div>
                  <div class="text-lg sm:text-xl font-bold">
                    <a href="tel:+254725396801" class="hover:text-blue-400 transition-colors">+254 725 396 801</a>
                  </div>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start sm:items-center">
                <div
                  class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-600 flex items-center justify-center mr-3 sm:mr-4 mt-1 sm:mt-0">
                  <i class="fas fa-envelope text-sm sm:text-base"></i>
                </div>
                <div>
                  <div class="text-xs sm:text-sm text-gray-400">Email us</div>
                  <div class="text-lg sm:text-xl font-bold">
                    <a href="mailto:wakafreight@gmail.com"
                      class="hover:text-green-400 transition-colors">wakafreight@gmail.com</a>
                  </div>
                </div>
              </div>

              <!-- Address -->
              <div class="flex items-start sm:items-center">
                <div
                  class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-600 flex items-center justify-center mr-3 sm:mr-4 mt-1 sm:mt-0">
                  <i class="fas fa-map-marker-alt text-sm sm:text-base"></i>
                </div>
                <div>
                  <div class="text-xs sm:text-sm text-gray-400">Head Office</div>
                  <div class="text-lg sm:text-xl font-bold">Nacha Plaza, Nakuru</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Form Column -->
          <div class="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div class="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div class="p-6 sm:p-8 text-gray-800">
                <h3 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Request a Quote</h3>
                <form class="space-y-3 sm:space-y-4">
                  <!-- Name -->
                  <div>
                    <label class="block text-sm sm:text-base text-gray-700 mb-1 sm:mb-2">Name</label>
                    <input type="text" placeholder="Your full name"
                      class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  </div>

                  <!-- Email -->
                  <div>
                    <label class="block text-sm sm:text-base text-gray-700 mb-1 sm:mb-2">Email</label>
                    <input type="email" placeholder="Your email address"
                      class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  </div>

                  <!-- Service Dropdown -->
                  <div>
                    <label class="block text-sm sm:text-base text-gray-700 mb-1 sm:mb-2">Service Needed</label>
                    <select
                      class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_0.75rem] sm:bg-[center_right_1rem]">
                      <option>Select a service</option>
                      <option>Air Freight</option>
                      <option>Sea Freight</option>
                      <option>Cross-Border</option>
                      <option>Customs Clearance</option>
                    </select>
                  </div>

                  <!-- Submit Button -->
                  <button type="submit"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 sm:py-4 px-6 rounded-lg transition duration-300 mt-2 sm:mt-4">
                    Submit Request
                  </button>
                </form>
              </div>
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

/* Marquee Animation */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
  display: inline-block;
}

/* Pause animation on hover */
.group:hover .animate-marquee {
  animation-play-state: paused;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  @keyframes marquee-mobile {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-100%);
    }
  }

  .animate-marquee {
    animation: marquee-mobile 20s linear infinite;
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

/* Custom animations for carousel */
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom cubic-bezier timing function for smoother transitions */
.ease-\[cubic-bezier\(0\.65\,0\,0\.35\,1\)\] {
  transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
}

/* Smooth transitions for carousel */
.carousel-enter-active,
.carousel-leave-active {
  transition: all 1s cubic-bezier(0.65, 0, 0.35, 1);
}

.carousel-enter-from,
.carousel-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.carousel-enter-to,
.carousel-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Image zoom effect on active slide */
img {
  will-change: transform;
  backface-visibility: hidden;
}

/* Scroll indicator animation */
@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0) translateX(-50%);
  }

  40% {
    transform: translateY(-20px) translateX(-50%);
  }

  60% {
    transform: translateY(-10px) translateX(-50%);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

/* Smooth transitions for carousel */
.carousel-enter-active,
.carousel-leave-active {
  transition: all 1s ease;
}

.carousel-enter-from,
.carousel-leave-to {
  opacity: 0;
}

.carousel-enter-to,
.carousel-leave-from {
  opacity: 1;
}

/* Image zoom effect on active slide */
.carousel-image {
  transition: transform 8s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
