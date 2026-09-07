import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home/page'));
const ServicesPage = lazy(() => import('../pages/services/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const CompliancePage = lazy(() => import('../pages/compliance/page'));
const AILeadGenerationPage = lazy(() => import('../pages/ai-lead-generation/page'));
const AIIndianapolisPage = lazy(() => import('../pages/ai-indianapolis/page'));
const AIServicesIndianaPage = lazy(() => import('../pages/ai-services-indiana/page'));
const AIConsultingIndianapolisPage = lazy(() => import('../pages/ai-consulting-indianapolis/page'));
const AIConsultingIndianaPage = lazy(() => import('../pages/ai-consulting-indiana/page'));
const AIAutomationIndianapolisPage = lazy(() => import('../pages/ai-automation-indianapolis/page'));
const AIAutomationIndianaPage = lazy(() => import('../pages/ai-automation-indiana/page'));
const AIVoiceAgentsIndianaPage = lazy(() => import('../pages/ai-voice-agents-indiana/page'));
const AIAgentDevelopmentIndianaPage = lazy(() => import('../pages/ai-agent-development-indiana/page'));
const CustomAIDevelopmentIndianaPage = lazy(() => import('../pages/custom-ai-development-indiana/page'));
const AILawFirmsIndianaPage = lazy(() => import('../pages/ai-law-firms-indiana/page'));
const BestAICompaniesIndianapolisPage = lazy(() => import('../pages/best-ai-companies-indianapolis/page'));
const AIHealthcareIndianaPage = lazy(() => import('../pages/ai-healthcare-indiana/page'));
const AIManufacturingIndianaPage = lazy(() => import('../pages/ai-manufacturing-indiana/page'));
const AILogisticsIndianaPage = lazy(() => import('../pages/ai-logistics-indiana/page'));
const AIHomeServicesIndianaPage = lazy(() => import('../pages/ai-home-services-indiana/page'));
const AIConstructionIndianaPage = lazy(() => import('../pages/ai-construction-indiana/page'));
const GetLeadsPage = lazy(() => import('../pages/get-leads/page'));
const TMobileBusinessPage = lazy(() => import('../pages/tmobile-business/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));
const SitemapPage = lazy(() => import('../pages/sitemap/page'));
const IntakeFormPage = lazy(() => import('../pages/intake-form/page'));
const SupportPage = lazy(() => import('../pages/support/page'));
const TermsPage = lazy(() => import('../pages/terms/page'));
const PrivacyPage = lazy(() => import('../pages/privacy/page'));
const FractionalCAIOPage = lazy(() => import('../pages/fractional-caio/page'));
const AIProjectsPage = lazy(() => import('../pages/ai-projects/page'));
const ProductsPage = lazy(() => import('../pages/products/page'));
const RapidMVPPage = lazy(() => import('../pages/rapid-mvp/page'));
const ReceptionistPage = lazy(() => import('../pages/receptionist/page'));
const FAQPage = lazy(() => import('../pages/faq/page'));
const PricingPage = lazy(() => import('../pages/pricing/page'));
const UseCasesPage = lazy(() => import('../pages/use-cases/page'));
const NevadaAIReceptionistAfterHoursPage = lazy(() => import('../pages/nevtech-ai-what-a-nevada-ai-receptionist-does-after-hours/page'));
const HowWeBuildSoftwareNowPage = lazy(() => import('../pages/how-we-build-software-now/page'));
const BlogPage = lazy(() => import('../pages/blog/page'));
const BlogArticlePage = lazy(() => import('../pages/blog/ArticlePage'));
const AIAutomationAgenciesPage = lazy(() => import('../pages/ai-automation-agencies/page'));
const DataAndAIConsultantIndianapolisPage = lazy(() => import('../pages/data-and-ai-consultant-indianapolis/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/compliance',
    element: <CompliancePage />,
  },
  {
    path: '/ai-lead-generation',
    element: <AILeadGenerationPage />,
  },
  {
    path: '/ai-indianapolis',
    element: <AIIndianapolisPage />,
  },
  {
    path: '/ai-services-indiana',
    element: <AIServicesIndianaPage />,
  },
  {
    path: '/ai-consulting-indianapolis',
    element: <AIConsultingIndianapolisPage />,
  },
  {
    path: '/ai-consulting-indiana',
    element: <AIConsultingIndianaPage />,
  },
  {
    path: '/ai-automation-indianapolis',
    element: <AIAutomationIndianapolisPage />,
  },
  {
    path: '/ai-automation-indiana',
    element: <AIAutomationIndianaPage />,
  },
  {
    path: '/ai-voice-agents-indiana',
    element: <AIVoiceAgentsIndianaPage />,
  },
  {
    path: '/ai-agent-development-indiana',
    element: <AIAgentDevelopmentIndianaPage />,
  },
  {
    path: '/custom-ai-development-indiana',
    element: <CustomAIDevelopmentIndianaPage />,
  },
  {
    path: '/ai-law-firms-indiana',
    element: <AILawFirmsIndianaPage />,
  },
  {
    path: '/best-ai-companies-indianapolis',
    element: <BestAICompaniesIndianapolisPage />,
  },
  {
    path: '/ai-healthcare-indiana',
    element: <AIHealthcareIndianaPage />,
  },
  {
    path: '/ai-manufacturing-indiana',
    element: <AIManufacturingIndianaPage />,
  },
  {
    path: '/ai-logistics-indiana',
    element: <AILogisticsIndianaPage />,
  },
  {
    path: '/ai-home-services-indiana',
    element: <AIHomeServicesIndianaPage />,
  },
  {
    path: '/ai-construction-indiana',
    element: <AIConstructionIndianaPage />,
  },
  {
    path: '/get-leads',
    element: <GetLeadsPage />,
  },
  {
    path: '/tmobile-business',
    element: <TMobileBusinessPage />,
  },
  {
    path: '/intake-form',
    element: <IntakeFormPage />,
  },
  {
    path: '/support',
    element: <SupportPage />,
  },
  {
    path: '/terms',
    element: <TermsPage />,
  },
  {
    path: '/privacy',
    element: <PrivacyPage />,
  },
  {
    path: '/fractional-caio',
    element: <FractionalCAIOPage />,
  },
  {
    path: '/ai-projects',
    element: <AIProjectsPage />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/case-studies',
    element: <ProductsPage />,
  },
  {
    path: '/rapid-mvp',
    element: <RapidMVPPage />,
  },
  {
    path: '/receptionist',
    element: <ReceptionistPage />,
  },
  {
    path: '/faq',
    element: <FAQPage />,
  },
  {
    path: '/pricing',
    element: <PricingPage />,
  },
  {
    path: '/use-cases',
    element: <UseCasesPage />,
  },
  {
    path: '/nevtech-ai-what-a-nevada-ai-receptionist-does-after-hours',
    element: <NevadaAIReceptionistAfterHoursPage />,
  },
  {
    path: '/how-we-build-software-now',
    element: <HowWeBuildSoftwareNowPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/blog/:slug',
    element: <BlogArticlePage />,
  },
  {
    path: '/ai-automation-agencies',
    element: <AIAutomationAgenciesPage />,
  },
  {
    path: '/data-and-ai-consultant-indianapolis',
    element: <DataAndAIConsultantIndianapolisPage />,
  },
  {
    path: '/sitemap',
    element: <SitemapPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;