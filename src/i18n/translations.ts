export type Lang = 'fr' | 'en'

export const translations = {
  fr: {
    navbar: {
      about: 'À propos',
      experiences: 'Expériences',
      projects: 'Projets',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      badge: 'Disponible · Freelance Remote',
      title: 'Développeur Fullstack JS',
      bio: 'Développeur fullstack passionné basé à Madagascar, spécialisé en React, Next.js, Node.js et GraphQL. Je conçois et développe des applications web et mobiles performantes pour des clients du monde entier. Disponible pour des missions freelance en remote.',
      location: 'Madagascar',
      availability: 'Remote Worldwide',
      downloadCv: 'Télécharger CV',
    },
    experiences: {
      label: '// 01. Expériences',
      title: 'Mon parcours professionnel',
      items: [
        {
          title: 'Développeur Fullstack JS',
          company: 'Freelance',
          period: 'Janv. 2024 – Aujourd\'hui',
          description: [
            'Conception et développement d\'applications web sur mesure adaptées aux besoins clients',
            'Interfaces utilisateurs ergonomiques et réactives avec React et Tailwind CSS',
            'Développement d\'API REST et GraphQL avec Node.js, Express et Prisma',
            'Intégration de systèmes de paiement en ligne (Stripe, GPay, Apple Pay)',
            'Collaboration directe avec les clients pour analyser les besoins et proposer des solutions techniques',
          ],
        },
        {
          title: 'Développeur Fullstack JS',
          company: 'Devphantom',
          period: 'Mars 2025 – Mars 2026',
          description: [
            'Conception et développement d\'applications web adaptées aux besoins clients',
            'Implémentation de designs UI/UX responsifs',
            'Intégration d\'API internes et externes',
          ],
        },
        {
          title: 'Développeur React & .NET',
          company: 'Ravinala Airports',
          period: 'Juin 2024 – Mars 2025',
          description: [
            'Développement d\'une application complète de gestion de projets (phases, ressources, budgets)',
            'Implémentation d\'un système de gestion des utilisateurs avec rôles et permissions',
            'Création de tableaux de bord interactifs avec filtres et tri personnalisés',
            'Mise en place de notifications en temps réel et rappels d\'échéances',
            'Collaboration avec l\'équipe interne pour adapter l\'application aux processus métiers',
          ],
        },
        {
          title: 'Développeur Mobile',
          company: 'CELTO (CDD)',
          period: 'Déc. 2023 – Janv. 2024',
          description: [
            'Développement d\'une application mobile de suivi de la chaîne de production fromagère',
            'Gestion des volumes livrés par trayeur, suivi des paiements et des transactions',
            'Scan et génération de QR codes pour une traçabilité optimale',
            'Développement d\'un back-office web pour l\'administration des données',
          ],
        },
        {
          title: 'Développeur Plugin WordPress',
          company: 'Materauto (Stage)',
          period: 'Oct. 2022 – Janv. 2023',
          description: [
            'Conception et développement d\'un plugin WordPress intégrant un chatbot intelligent',
            'Implémentation d\'une IA capable de répondre aux questions utilisateurs et de router vers le bon interlocuteur',
            'Automatisation des demandes d\'information et des précommandes de location de véhicules',
          ],
        },
      ],
    },
    projects: {
      label: '// 02. Projets',
      title: 'Ce que j\'ai construit',
      items: [
        {
          title: 'BPF — Plateforme e-learning',
          description: 'Plateforme d\'apprentissage en ligne permettant aux étudiants d\'accéder à des cours par catégorie (IT, design, business…) et aux formateurs de créer et monétiser leurs programmes. Propose des vidéos, flashcards, fiches de révision et QCM interactifs, disponible sur web et mobile.',
          tech: ['Next.js', 'React Native', 'Symfony', 'MySQL', 'Stripe'],
        },
        {
          title: 'INF — SaaS Concessionnaire Auto',
          description: 'Application SaaS multi-tenant destinée aux concessionnaires automobiles pour gérer leur inventaire de véhicules, les relations clients et les ventes. Intègre un catalogue public consultable par les clients, la prise de rendez-vous synchronisée avec Google Calendar et un tableau de bord analytique.',
          tech: ['Next.js', 'Symfony', 'MySQL', 'Google Calendar API', 'Stripe'],
        },
        {
          title: 'ODRN — Gestion d\'interventions terrain',
          description: 'Outil de gestion des interventions terrain pour les entreprises de maintenance (CVC, plomberie…). Permet de créer des bons de travail, dispatcher les techniciens selon leurs disponibilités, gérer les devis et la facturation, et signer les documents directement depuis l\'application.',
          tech: ['Next.js', 'Symfony', 'MySQL', 'Payplug', 'DocuSeal', 'FullCalendar'],
        },
        {
          title: 'SOX — SaaS Cabinets Comptables',
          description: 'Plateforme de gestion tout-en-un pour les cabinets comptables et juridiques. Centralise le suivi des entreprises clientes, des déclarations fiscales et sociales, des documents et des équipes. Intègre la signature électronique, l\'envoi d\'emails automatisé et un système de ticketing interne.',
          tech: ['Next.js', 'Symfony', 'MySQL', 'Stripe', 'DocuSeal', 'Mailgun'],
        },
        {
          title: 'GrootPay — Gestion de Restaurant',
          description: 'Solution complète pour la gestion digitale de restaurant, composée d\'un menu interactif pour les clients, d\'un back-office pour les gérants et d\'une API GraphQL en temps réel. Couvre la prise de commandes, les paiements, la gestion des stocks, les pourboires et un programme de fidélité.',
          tech: ['React', 'Node.js', 'GraphQL', 'MySQL', 'Prisma', 'Stripe'],
        },
      ],
      modal: {
        close: 'Fermer',
        prev: 'Précédent',
        next: 'Suivant',
      },
    },
    skills: {
      label: '// 03. Skills',
      title: 'Technologies & outils',
      categories: ['Frontend', 'Backend', 'Base de données & ORM', 'Outils & Autres'],
    },
    footer: {
      sub: 'Développeur Fullstack JS · Freelance Remote · Madagascar',
      copy: (year: number) => `© ${year} RJFM. Tous droits réservés.`,
    },
  },
  en: {
    navbar: {
      about: 'About',
      experiences: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      badge: 'Available · Remote Freelance',
      title: 'Fullstack JS Developer',
      bio: 'Passionate fullstack developer based in Madagascar, specializing in React, Next.js, Node.js, and GraphQL. I design and build high-performance web and mobile applications for clients worldwide. Available for remote freelance missions.',
      location: 'Madagascar',
      availability: 'Remote Worldwide',
      downloadCv: 'Download CV',
    },
    experiences: {
      label: '// 01. Experience',
      title: 'My professional journey',
      items: [
        {
          title: 'Fullstack JS Developer',
          company: 'Freelance',
          period: 'Jan. 2024 – Present',
          description: [
            'Design and development of custom web applications tailored to client needs',
            'Ergonomic and responsive user interfaces with React and Tailwind CSS',
            'REST and GraphQL API development with Node.js, Express and Prisma',
            'Integration of online payment systems (Stripe, GPay, Apple Pay)',
            'Direct collaboration with clients to analyse needs and deliver adapted technical solutions',
          ],
        },
        {
          title: 'Fullstack JS Developer',
          company: 'Devphantom',
          period: 'Mar. 2025 – Mar. 2026',
          description: [
            'Design and development of web applications tailored to client needs',
            'Implementation of responsive UI/UX designs',
            'Integration of internal and external APIs',
          ],
        },
        {
          title: 'React & .NET Developer',
          company: 'Ravinala Airports',
          period: 'Jun. 2024 – Mar. 2025',
          description: [
            'Development of a complete project management application (phases, resources, budgets)',
            'Implementation of a user management system with roles and permissions',
            'Interactive dashboards with custom filters and sorting',
            'Real-time notifications and deadline reminders',
            'Collaboration with the internal team to adapt the app to business processes',
          ],
        },
        {
          title: 'Mobile Developer',
          company: 'CELTO (Fixed-term)',
          period: 'Dec. 2023 – Jan. 2024',
          description: [
            'Mobile app for tracking the cheese production chain (milk collection → distribution)',
            'Volume and payment tracking per milker',
            'QR code scanning and generation for optimal traceability',
            'Web back-office for data administration',
          ],
        },
        {
          title: 'WordPress Plugin Developer',
          company: 'Materauto (Internship)',
          period: 'Oct. 2022 – Jan. 2023',
          description: [
            'Design and development of a WordPress plugin integrating an intelligent chatbot',
            'AI capable of answering user questions and routing to the right contact',
            'Automation of information requests and vehicle rental pre-orders',
          ],
        },
      ],
    },
    projects: {
      label: '// 02. Projects',
      title: 'What I\'ve built',
      items: [
        {
          title: 'BPF — E-learning Platform',
          description: 'An online learning platform where students access courses across 20+ categories and instructors create and monetize their programs. Features video lessons, flashcards, revision sheets, and interactive quizzes — available on both web and mobile.',
          tech: ['Next.js', 'React Native', 'Symfony', 'MySQL', 'Stripe'],
        },
        {
          title: 'INF — Car Dealership SaaS',
          description: 'A multi-tenant SaaS platform for car dealerships to manage vehicle inventory, customer relationships, and sales pipelines. Includes a public catalog for buyers, appointment scheduling synced with Google Calendar, and an analytics dashboard for sales tracking.',
          tech: ['Next.js', 'Symfony', 'MySQL', 'Google Calendar API', 'Stripe'],
        },
        {
          title: 'ODRN — Field Service Management',
          description: 'A field service management platform for maintenance companies (HVAC, plumbing, etc.). Handles work order creation, technician dispatching, quote and billing management, and integrated document signing — with a dedicated client portal for order tracking.',
          tech: ['Next.js', 'Symfony', 'MySQL', 'Payplug', 'DocuSeal', 'FullCalendar'],
        },
        {
          title: 'SOX — Accounting Firm SaaS',
          description: 'An all-in-one management platform for accounting and legal firms. Centralizes client company tracking, tax and social declarations, document workflows, and team coordination. Features e-signature, automated email sequences, and an internal ticketing system.',
          tech: ['Next.js', 'Symfony', 'MySQL', 'Stripe', 'DocuSeal', 'Mailgun'],
        },
        {
          title: 'GrootPay — Restaurant Management',
          description: 'A complete digital restaurant management solution with three integrated apps: an interactive menu for customers, a back-office for managers, and a real-time GraphQL API. Covers order processing, payments, inventory, staff tips, and a tiered loyalty program.',
          tech: ['React', 'Node.js', 'GraphQL', 'MySQL', 'Prisma', 'Stripe'],
        },
      ],
      modal: {
        close: 'Close',
        prev: 'Previous',
        next: 'Next',
      },
    },
    skills: {
      label: '// 03. Skills',
      title: 'Technologies & tools',
      categories: ['Frontend', 'Backend', 'Database & ORM', 'Tools & Other'],
    },
    footer: {
      sub: 'Fullstack JS Developer · Remote Freelance · Madagascar',
      copy: (year: number) => `© ${year} RJFM. All rights reserved.`,
    },
  },
}
