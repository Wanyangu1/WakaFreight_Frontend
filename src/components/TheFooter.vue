<script>
export default {
  data() {
    return {
      socialLinks: [
        { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/company/wakafreight-fowarders-limited/' },
        { name: 'Tiktok', icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@valary_2030' },
        { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com' },
        { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com' },
      ],
      services: [
        { name: 'Air Freight', path: '/services#services', icon: 'fas fa-plane' },
        { name: 'Sea Freight', path: '/services#services', icon: 'fas fa-ship' },
        { name: 'Cross-Border', path: '/services#services', icon: 'fas fa-truck' },
        { name: 'Customs Clearance', path: '/services#services', icon: 'fas fa-file-contract' },
        { name: 'Warehousing', path: '/services#services', icon: 'fas fa-warehouse' },
        { name: 'Vehicle Import', path: '/services#services', icon: 'fas fa-car' },
      ],
    }
  },
}
</script>
<template>
  <footer class="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8 border-t-2 border-blue-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        <!-- Company Info & Logo -->
        <div class="space-y-6">
          <div class="flex-shrink-0 flex items-center">
            <a href="/" class="flex items-center group">
              <!-- Logo -->
              <div class="flex-shrink-0 flex items-center">
                <img src="@/assets/images/logos/finalwakalogo.png" alt="Logo" class="h-14 sm:h-15 w-auto" />
              </div>
            </a>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed">
            Your trusted partner for air, sea and cross-border freight forwarding in East Africa
            since 1999. Licensed customs agents with 12 border stations across the region.
          </p>
          <div class="flex space-x-4">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
              class="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-600 border border-gray-600 flex items-center justify-center transition-all duration-300 group"
              :aria-label="social.name">
              <i :class="`${social.icon} text-white group-hover:scale-110`"></i>
            </a>
          </div>
        </div>

        <!-- Quick Services Links -->
        <div>
          <h3 class="text-lg font-bold text-white mb-5 pb-2 border-b border-gray-700 flex items-center">
            <i class="fas fa-boxes mr-3 text-blue-400"></i>
            Our Services
          </h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service.name">
              <a :href="service.path" class="flex items-center group text-gray-300 hover:text-white transition-colors">
                <div
                  class="w-6 h-6 rounded-md bg-gray-700 border border-gray-600 flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-colors">
                  <i :class="`${service.icon} text-xs text-blue-400 group-hover:text-white`"></i>
                </div>
                <span>{{ service.name }}</span>
                <i class="fas fa-chevron-right text-xs ml-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Information -->
        <div>
          <h3 class="text-lg font-bold text-white mb-5 pb-2 border-b border-gray-700 flex items-center">
            <i class="fas fa-headset mr-3 text-blue-400"></i>
            Contact Us
          </h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <div
                class="w-8 h-8 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center mt-1 mr-3">
                <i class="fas fa-map-marker-alt text-blue-400 text-sm"></i>
              </div>
              <div>
                <h4 class="text-sm font-semibold text-blue-300">Head Office</h4>
                <p class="text-gray-300 text-sm">
                  Nacha Plaza, 3rd Floor<br />P.O. Box 13098-20100, Nakuru
                </p>
              </div>
            </li>
            <li class="flex items-start">
              <div
                class="w-8 h-8 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center mt-1 mr-3">
                <i class="fas fa-building text-blue-400 text-sm"></i>
              </div>
              <div>
                <h4 class="text-sm font-semibold text-blue-300">Nairobi Office</h4>
                <p class="text-gray-300 text-sm">ICD Embakasi<br />P.O. Box 70343-00400, Nairobi</p>
              </div>
            </li>
            <li class="flex items-center">
              <div
                class="w-8 h-8 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center mr-3">
                <i class="fas fa-phone-alt text-blue-400 text-sm"></i>
              </div>
              <div>
                <a href="tel:+254725396801" class="text-gray-300 hover:text-white text-sm transition-colors">
                  +254 725 396 801
                </a>
              </div>
            </li>
            <li class="flex items-center">
              <div
                class="w-8 h-8 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center mr-3">
                <i class="fas fa-envelope text-blue-400 text-sm"></i>
              </div>
              <div>
                <a href="mailto:wakafreight@gmail.com" class="text-gray-300 hover:text-white text-sm transition-colors">
                  wakafreight@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        <!-- Newsletter & Certification -->
        <div>
          <h3 class="text-lg font-bold text-white mb-5 pb-2 border-b border-gray-700 flex items-center">
            <i class="fas fa-newspaper mr-3 text-blue-400"></i>
            Logistics Updates
          </h3>
          <p class="text-gray-300 text-sm mb-4">
            Subscribe for shipping news, customs regulation updates, and special offers.
          </p>
          <form class="space-y-3">
            <input type="email" placeholder="Your business email"
              class="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 text-sm" />
            <button type="submit"
              class="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow transition-all duration-300 flex items-center justify-center">
              <i class="fas fa-paper-plane mr-2"></i>
              Subscribe
            </button>
          </form>

          <div class="mt-6">
            <h4 class="text-sm font-semibold text-blue-300 mb-3">Certified By</h4>
            <div class="flex flex-wrap gap-3">
              <div class="w-12 h-12 rounded-lg bg-gray-700 border border-gray-600 flex items-center justify-center">
                <i class="fas fa-shield-alt text-blue-400"></i>
              </div>
              <div class="w-12 h-12 rounded-lg bg-gray-700 border border-gray-600 flex items-center justify-center">
                <i class="fas fa-certificate text-blue-400"></i>
              </div>
              <div class="w-12 h-12 rounded-lg bg-gray-700 border border-gray-600 flex items-center justify-center">
                <i class="fas fa-award text-blue-400"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-700 mt-12 mb-8"></div>

      <!-- Bottom Bar -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="text-sm text-gray-400">
          &copy; {{ new Date().getFullYear() }} WakaFreight Forwarders Limited. All rights reserved.
        </div>

        <div class="flex flex-wrap justify-center gap-4 md:gap-6">
          <a href="/privacy" class="text-gray-400 hover:text-white text-sm transition-colors flex items-center">
            <i class="fas fa-lock mr-1 text-xs"></i>
            Privacy Policy
          </a>
          <a href="/terms" class="text-gray-400 hover:text-white text-sm transition-colors flex items-center">
            <i class="fas fa-file-contract mr-1 text-xs"></i>
            Terms of Service
          </a>
          <a href="/sitemap" class="text-gray-400 hover:text-white text-sm transition-colors flex items-center">
            <i class="fas fa-sitemap mr-1 text-xs"></i>
            Sitemap
          </a>
          <a href="/careers" class="text-gray-400 hover:text-white text-sm transition-colors flex items-center">
            <i class="fas fa-briefcase mr-1 text-xs"></i>
            Careers
          </a>
        </div>

        <div class="text-sm text-gray-500">
          <span>Reg. No. CPR/2011/12345</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
}

/* Hover animations */
a:hover {
  transform: translateY(-1px);
}

/* Smooth transitions */
a,
button,
input {
  transition: all 0.3s ease;
}

/* Focus styles for accessibility */
a:focus,
button:focus,
input:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Glow effect for submit button */
button[type='submit'] {
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

button[type='submit']:hover {
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

/* Icon animations */
.fab,
.fas {
  transition: transform 0.2s ease;
}

a:hover .fab,
a:hover .fas {
  transform: scale(1.1);
}
</style>
