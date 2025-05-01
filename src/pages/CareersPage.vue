<script setup>
import { ref } from 'vue';
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';

// Current job openings (would normally come from backend API)
const jobOpenings = ref([
  {
    id: 1,
    position: 'Logistics Coordinator',
    type: 'Full-time',
    location: 'Nairobi, Kenya',
    department: 'Operations',
    posted: '2023-11-15',
    description: 'Coordinate shipments, manage documentation, and liaise with clients and carriers to ensure smooth logistics operations.',
    requirements: [
      'Bachelor\'s degree in Logistics or related field',
      '2+ years experience in freight forwarding',
      'Strong organizational skills',
      'Knowledge of customs procedures'
    ]
  },
  {
    id: 2,
    position: 'Customs Clearance Officer',
    type: 'Full-time',
    location: 'Mombasa, Kenya',
    department: 'Customs',
    posted: '2023-11-10',
    description: 'Prepare and submit customs documentation, calculate duties, and ensure compliance with KRA regulations.',
    requirements: [
      'Certified Customs Agent',
      '3+ years clearance experience',
      'Excellent knowledge of HS codes',
      'Attention to detail'
    ]
  },
  {
    id: 3,
    position: 'Trucking Operations Manager',
    type: 'Full-time',
    location: 'Nakuru, Kenya',
    department: 'Transport',
    posted: '2023-11-05',
    description: 'Oversee cross-border trucking operations, manage fleet, and optimize routing for efficiency.',
    requirements: [
      '5+ years transport management',
      'Knowledge of East African routes',
      'Fleet management experience',
      'Problem-solving skills'
    ]
  }
]);

// Attachment program details
const internshipProgram = {
  title: '3-Month Professional Attachment',
  description: 'Gain hands-on experience in the logistics industry through our structured internship program.',
  benefits: [
    'Real-world experience in freight forwarding',
    'Mentorship from industry professionals',
    'Exposure to air, sea and land logistics',
    'Potential for full-time employment'
  ],
  requirements: [
    'Currently enrolled in or recent graduate of a logistics-related program',
    'Strong academic record',
    'Excellent communication skills',
    'Willingness to learn'
  ],
  applicationProcess: 'Submit your documents via email to careers@wakafreight.com'
};

const activeJob = ref(null);

const toggleJobDetails = (jobId) => {
  activeJob.value = activeJob.value === jobId ? null : jobId;
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};
</script>

<template>
  <TheNavbar />
  <!-- Hero Section -->
  <section class="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24 md:py-32">
    <div class="absolute inset-0 bg-black/40 z-0"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Build Your Career in Logistics</h1>
        <div class="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
        <p class="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
          Join East Africa's leading freight forwarding company and grow with a team that values professionalism and
          innovation.
        </p>
      </div>
    </div>
  </section>

  <!-- Current Openings -->
  <section class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Job Openings</h2>
        <div class="w-20 h-1 bg-blue-500 mx-auto"></div>
        <p class="text-gray-600 max-w-2xl mx-auto mt-6">
          Explore opportunities to join our growing team of logistics professionals
        </p>
      </div>

      <!-- Job Listings -->
      <div class="space-y-4">
        <div v-for="job in jobOpenings" :key="job.id"
          class="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all"
          :class="{ 'ring-2 ring-blue-500': activeJob === job.id }">
          <!-- Job Header -->
          <div class="bg-gray-50 px-6 py-4 cursor-pointer" @click="toggleJobDetails(job.id)">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
              <div class="mb-3 md:mb-0">
                <h3 class="text-xl font-bold text-gray-900">{{ job.position }}</h3>
                <div class="flex flex-wrap gap-3 mt-2">
                  <span
                    class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <i class="fas fa-briefcase mr-1"></i> {{ job.type }}
                  </span>
                  <span
                    class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <i class="fas fa-map-marker-alt mr-1"></i> {{ job.location }}
                  </span>
                  <span
                    class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    <i class="fas fa-building mr-1"></i> {{ job.department }}
                  </span>
                </div>
              </div>
              <div class="flex items-center">
                <span class="text-sm text-gray-500 mr-4">Posted: {{ formatDate(job.posted) }}</span>
                <i
                  :class="`fas fa-chevron-${activeJob === job.id ? 'up' : 'down'} text-blue-600 transition-transform`"></i>
              </div>
            </div>
          </div>

          <!-- Job Details -->
          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-screen" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 max-h-screen" leave-to-class="opacity-0 max-h-0">
            <div v-show="activeJob === job.id" class="overflow-hidden">
              <div class="p-6 border-t border-gray-200">
                <div class="grid md:grid-cols-3 gap-8">
                  <div class="md:col-span-2">
                    <h4 class="text-lg font-semibold text-gray-900 mb-3">Job Description</h4>
                    <p class="text-gray-600 mb-6">{{ job.description }}</p>

                    <h4 class="text-lg font-semibold text-gray-900 mb-3">Requirements</h4>
                    <ul class="space-y-2 mb-6">
                      <li v-for="(requirement, index) in job.requirements" :key="index" class="flex items-start">
                        <i class="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                        <span class="text-gray-600">{{ requirement }}</span>
                      </li>
                    </ul>
                  </div>

                  <div class="bg-blue-50 border border-blue-100 rounded-lg p-6 h-fit">
                    <h4 class="text-lg font-semibold text-blue-800 mb-4">How to Apply</h4>
                    <p class="text-gray-700 mb-4">
                      To apply for this position, please email the following documents to
                      <a href="mailto:careers@wakafreight.com"
                        class="text-blue-600 font-medium">careers@wakafreight.com</a>:
                    </p>
                    <ul class="space-y-2 mb-6">
                      <li class="flex items-start">
                        <i class="fas fa-file-alt text-blue-500 mt-1 mr-2"></i>
                        <span>Updated CV/Resume</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-file-certificate text-blue-500 mt-1 mr-2"></i>
                        <span>Academic certificates</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-id-card text-blue-500 mt-1 mr-2"></i>
                        <span>Professional certifications (if any)</span>
                      </li>
                    </ul>
                    <p class="text-sm text-gray-500">
                      Use the job title as the email subject. Only shortlisted candidates will be contacted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!-- No Jobs Available -->
        <div v-if="jobOpenings.length === 0" class="text-center py-12">
          <div class="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <i class="fas fa-search text-blue-600 text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">No Current Openings</h3>
          <p class="text-gray-600 max-w-md mx-auto">
            We don't have any open positions at the moment, but check back later or consider our attachment program
            below.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Attachment Program -->
  <section id="attachment" class="py-16 md:py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-white">
          <h2 class="text-2xl md:text-3xl font-bold flex items-center">
            <i class="fas fa-graduation-cap mr-3"></i> Professional Attachment Program
          </h2>
        </div>
        <div class="p-6 md:p-8">
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">{{ internshipProgram.title }}</h3>
              <p class="text-gray-600 mb-6">{{ internshipProgram.description }}</p>

              <h4 class="text-lg font-semibold text-gray-900 mb-3">Program Benefits</h4>
              <ul class="space-y-3 mb-6">
                <li v-for="(benefit, index) in internshipProgram.benefits" :key="'benefit-' + index"
                  class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <i class="fas fa-check text-xs"></i>
                    </div>
                  </div>
                  <span class="ml-3 text-gray-600">{{ benefit }}</span>
                </li>
              </ul>
            </div>

            <div>
              <div class="bg-blue-50 border border-blue-100 rounded-lg p-6 h-full">
                <h4 class="text-lg font-semibold text-blue-800 mb-4">Application Details</h4>

                <h5 class="font-medium text-gray-900 mb-2">Requirements:</h5>
                <ul class="space-y-2 mb-6">
                  <li v-for="(requirement, index) in internshipProgram.requirements" :key="'req-' + index"
                    class="flex items-start">
                    <i class="fas fa-circle text-blue-500 text-xs mt-2 mr-2"></i>
                    <span class="text-gray-600">{{ requirement }}</span>
                  </li>
                </ul>

                <h5 class="font-medium text-gray-900 mb-2">How to Apply:</h5>
                <p class="text-gray-600 mb-4">
                  Email the following documents to
                  <a href="mailto:careers@wakafreight.com" class="text-blue-600 font-medium">careers@wakafreight.com</a>
                  with subject "Attachment Application":
                </p>
                <ul class="space-y-2 mb-6">
                  <li class="flex items-start">
                    <i class="fas fa-file-alt text-blue-500 mt-1 mr-2"></i>
                    <span>Cover letter</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-file text-blue-500 mt-1 mr-2"></i>
                    <span>Updated CV</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-certificate text-blue-500 mt-1 mr-2"></i>
                    <span>Academic transcripts</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-id-card text-blue-500 mt-1 mr-2"></i>
                    <span>National ID copy</span>
                  </li>
                </ul>

                <div class="bg-blue-100 border border-blue-200 rounded-lg p-4">
                  <p class="text-blue-800 text-sm">
                    <i class="fas fa-info-circle mr-2"></i>
                    Applications are accepted year-round. Intakes occur quarterly in January, April, July, and October.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Work With Us -->
  <section class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join WakaFreight?</h2>
        <div class="w-20 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600 mx-auto">
            <i class="fas fa-chart-line text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-center text-gray-900 mb-3">Career Growth</h3>
          <p class="text-gray-600 text-center">
            Structured career paths with training programs to help you advance in the logistics industry.
          </p>
        </div>

        <div class="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600 mx-auto">
            <i class="fas fa-globe-africa text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-center text-gray-900 mb-3">Regional Exposure</h3>
          <p class="text-gray-600 text-center">
            Work with clients and partners across East Africa and gain valuable international experience.
          </p>
        </div>

        <div class="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600 mx-auto">
            <i class="fas fa-users text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-center text-gray-900 mb-3">Team Culture</h3>
          <p class="text-gray-600 text-center">
            Collaborative environment that values innovation, integrity, and professional development.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 md:py-24 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Have Questions About Careers at WakaFreight?</h2>
      <p class="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
        Our HR team is ready to assist you with any inquiries about job opportunities or the attachment program.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="mailto:hr@wakafreight.com"
          class="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-colors">
          <i class="fas fa-envelope mr-2"></i> Email HR
        </a>
        <a href="tel:+254700000000"
          class="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-colors">
          <i class="fas fa-phone-alt mr-2"></i> Call Us
        </a>
      </div>
    </div>
  </section>
  <TheFooter />
</template>

<style scoped>
/* Smooth transitions for job listings */
.job-listing {
  transition: all 0.3s ease;
}

/* Custom scrollbar for job descriptions */
.job-description {
  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;
}

.job-description::-webkit-scrollbar {
  width: 6px;
}

.job-description::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.job-description::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 10px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .job-meta {
    flex-direction: column;
    align-items: flex-start;
  }

  .job-type-badges {
    margin-top: 0.5rem;
  }
}
</style>
