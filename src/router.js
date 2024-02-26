import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'HomeComponent',
    component: () => import('./components/home/Home.vue')
  },
  {
    path: '/about',
    name: 'AboutComponent',
    component: () => import('./components/about/About.vue')
  },
  {
    path: '/career',
    name: 'CareerComponent',
    component: () => import('./components/career/Career.vue')
  },
  {
    path: '/checkrate',
    name: 'CheckrateComponent',
    component: () => import('./components/checkrate/Checkrate.vue')
  },
  {
    path: '/congratulations',
    name: 'CongratsComponent',
    component: () => import('./components/congratulations/Congratulations.vue')
  },
  {
    path: '/thankyou',
    name: 'ThankYouComponent',
    component: () => import('./components/thankyou/ThankYou.vue')
  },
  {
    path: '/contact',
    name: 'ContactComponent',
    component: () => import('./components/contact/Contact.vue')
  },
  {
    path: '/faq',
    name: 'FaqComponent',
    component: () => import('./components/faq/Faq.vue')
  },
  {
    path: '/landing',
    name: 'LandingComponent',
    component: () => import('./components/landing/Landing.vue')
  },
  {
    path: '/debt-calculator',
    name: 'DebtCalculatorComponent',
    component: () => import('./components/debtcalculator/DebtCalculator.vue')
  },
  /*{
    path: '/mortgage',
    name: 'MortgageComponent',
    component: () => import('./components/mortgageloan/Mortgageloan.vue')
  },*/
  {
    path: '/personal',
    name: 'PersonalComponent',
    component: () => import('./components/personalloan/Personalloan.vue')
  },
  {
    path: '/privacy',
    name: 'PrivacyComponent',
    component: () => import('./components/privacy/Privacy.vue')
  },
  {
    path: '/terms',
    name: 'TermsComponent',
    component: () => import('./components/terms/Terms.vue')
  }
  
  
   
  
]

const router = createRouter({

  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
})

export default router