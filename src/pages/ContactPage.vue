<script setup>
import { ref } from 'vue';
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';

// Form handling
const formData = ref({
  name: '',
  email: '',
  phone: '',
  shipmentNumber: '',
  message: ''
});

const formMessage = ref('');
const alertType = ref('');

const submitForm = () => {
  // Form validation
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    formMessage.value = 'Please fill in all required fields';
    alertType.value = 'error';
    return;
  }

  // Submit logic would go here
  formMessage.value = 'Your message has been sent successfully!';
  alertType.value = 'success';

  // Reset form
  setTimeout(() => {
    formData.value = {
      name: '',
      email: '',
      phone: '',
      shipmentNumber: '',
      message: ''
    };
    formMessage.value = '';
  }, 3000);
};

// Branch locations
const branches = [
  {
    city: 'Nakuru',
    address: 'Nacha Plaza, 3rd Floor, P.O. Box 13098-20100',
    phone: '+254 725 396 801',
    email: 'wakafreight@gmail.com',
    map: 'https://maps.google.com/maps?q=Nacha+Plaza+Nakuru&output=embed'
  },
  {
    city: 'Nairobi',
    address: 'KeMu Towers, 17th Floor, P.O. Box 70343-00400',
    phone: '+254 722 123 456',
    email: 'nairobi@wakafreight.com',
    map: 'https://maps.google.com/maps?q=KeMu+Towers+Nairobi&output=embed'
  },
];

// Operational hours
const operationalHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 1:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
  { day: 'Emergency', hours: '24/7 Support Available' }
];
</script>

<template>
  <TheNavbar />

  <!-- Hero Section -->
  <div class="relative bg-blue-900 text-white pt-32 pb-22">
    <div class="absolute inset-0 bg-black/60 z-0">
      <img src="@/assets/images/services/support.jpg" alt="Happy clients" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-black/80"></div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Contact Our Logistics Team</h1>
        <div class="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto">
          Get in touch with our freight experts for shipment tracking, customs clearance, or any logistics inquiries.
        </p>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 -mt-16">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Contact Form -->
      <div class="lg:col-span-2 bg-white rounded-xl shadow-xl overflow-hidden">
        <div class="bg-blue-600 px-6 py-4">
          <h2 class="text-2xl font-bold text-white flex items-center">
            <i class="fas fa-headset mr-3"></i> Logistics Inquiry Form
          </h2>
        </div>
        <div class="p-6 md:p-8">
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Alert Message -->
            <div v-if="formMessage"
              :class="`p-4 rounded-lg ${alertType === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'} flex items-start`">
              <i :class="`fas ${alertType === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-3 mt-1`"></i>
              <span>{{ formMessage }}</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Name -->
              <div class="relative">
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <div class="relative">
                  <i class="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input type="text" id="name" v-model="formData.name" placeholder="John Doe" required
                    class="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
                </div>
              </div>

              <!-- Email -->
              <div class="relative">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <div class="relative">
                  <i class="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input type="email" id="email" v-model="formData.email" placeholder="your@email.com" required
                    class="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
                </div>
              </div>

              <!-- Phone -->
              <div class="relative">
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <div class="relative">
                  <i class="fas fa-phone-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input type="tel" id="phone" v-model="formData.phone" placeholder="+254 700 000 000"
                    class="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
                </div>
              </div>

              <!-- Shipment Number -->
              <div class="relative">
                <label for="shipment" class="block text-sm font-medium text-gray-700 mb-1">Shipment Number (if
                  applicable)</label>
                <div class="relative">
                  <i class="fas fa-barcode absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input type="text" id="shipment" v-model="formData.shipmentNumber" placeholder="WF-123456"
                    class="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
                </div>
              </div>
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
              <textarea id="message" v-model="formData.message" rows="5"
                placeholder="How can we assist with your logistics needs?" required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit"
              class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center">
              <i class="fas fa-paper-plane mr-2"></i> Send Inquiry
            </button>
          </form>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="space-y-8">
        <!-- Branch Locations -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-blue-600 px-6 py-4">
            <h2 class="text-2xl font-bold text-white flex items-center">
              <i class="fas fa-map-marked-alt mr-3"></i> Our Locations
            </h2>
          </div>
          <div class="p-6">
            <div class="space-y-6">
              <div v-for="(branch, index) in branches" :key="index"
                class="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <h3 class="text-lg font-semibold text-blue-800 mb-2">{{ branch.city }} Office</h3>

                <!-- Map -->
                <div class="rounded-xl overflow-hidden shadow-md mb-3" style="aspect-ratio: 16/9;">
                  <iframe :src="branch.map" class="w-full h-full border-0" allowfullscreen="" loading="lazy"></iframe>
                </div>

                <!-- Contact Details -->
                <div class="space-y-2">
                  <div class="flex items-start">
                    <i class="fas fa-map-marker-alt mt-1 text-blue-500 mr-3"></i>
                    <span class="text-gray-700">{{ branch.address }}</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-phone-alt text-blue-500 mr-3"></i>
                    <a :href="`tel:${branch.phone}`" class="text-gray-700 hover:text-blue-600">{{ branch.phone }}</a>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-envelope text-blue-500 mr-3"></i>
                    <a :href="`mailto:${branch.email}`" class="text-gray-700 hover:text-blue-600">{{ branch.email }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Operational Hours -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-blue-600 px-6 py-4">
            <h2 class="text-2xl font-bold text-white flex items-center">
              <i class="fas fa-clock mr-3"></i> Operational Hours
            </h2>
          </div>
          <div class="p-6">
            <ul class="space-y-3">
              <li v-for="(hour, index) in operationalHours" :key="index" class="flex justify-between">
                <span class="font-medium text-gray-700">{{ hour.day }}</span>
                <span class="text-gray-600">{{ hour.hours }}</span>
              </li>
            </ul>

            <div class="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div class="flex items-start">
                <i class="fas fa-exclamation-circle text-blue-500 mt-1 mr-3"></i>
                <p class="text-sm text-blue-800">
                  For urgent after-hours shipment inquiries, call our 24/7 support line:
                  <a href="tel:+254711223344" class="font-semibold hover:underline">+254 711 223 344</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Emergency Contact -->
        <div class="bg-red-50 border border-red-200 rounded-xl p-6">
          <div class="flex items-start">
            <div class="bg-red-100 p-3 rounded-full text-red-600 mr-4">
              <i class="fas fa-exclamation-triangle text-xl"></i>
            </div>
            <div>
              <h3 class="text-lg font-bold text-red-800 mb-2">Urgent Shipment Issues?</h3>
              <p class="text-red-700 mb-3">For immediate assistance with delayed shipments, customs hold, or other
                urgent matters:</p>
              <a href="tel:+254711223344"
                class="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                <i class="fas fa-phone-alt mr-2"></i> Call Emergency Line
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TheFooter />
</template>

<style scoped>
/* Custom styling for the contact page */
.contact-form-input:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

/* Smooth transitions for interactive elements */
a,
button,
input,
textarea {
  transition: all 0.2s ease;
}

/* Map container styling */
.map-container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  /* 16:9 Aspect Ratio */
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
