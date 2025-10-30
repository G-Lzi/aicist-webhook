"use client"

import Link from "next/link"
import { useState } from "react"
import N8NChatV1 from "@/components/n8n-chat-v1"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactForm from "@/components/ContactForm"
import {
  MessageSquare,
  Phone,
  Mail,
  Zap,
  Shield,
  Globe,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Bot,
  TrendingUp,
  Clock,
  Users,
  FileText,
  Settings,
  BarChart3,
} from "lucide-react"

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span>
              AICIST<span className="text-primary">.ai</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
              Méthode
            </a>
            <a href="#usecases" className="text-muted-foreground hover:text-foreground transition-colors">
              Cas d'usage
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Tarifs
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
              <Link href="#contact">Parler à un expert</Link>
            </Button>
            <Button size="sm" asChild className="group">
              <Link href="#contact">
                Obtenir un devis
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Agence d'automatisation IA • France • RGPD
              </Badge>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-balance">
                Accélérez vos ventes avec des{" "}
                <span className="text-primary relative inline-block">
                  agents IA
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path d="M0 4C50 2 150 2 200 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                multicanaux
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Chat, voix et e-mail qui répondent, qualifient et génèrent des devis. Intégrations web, WhatsApp et CRM
                — livrées en jours, pas en mois.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="group text-base">
                  <Link href="#contact">
                    Demander une démo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
                  <Link href="#services">Voir les services</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="font-medium">Prototype en 3–5 jours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="font-medium">Données hébergées UE</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="font-medium">Conformité RGPD</span>
                </div>
              </div>
            </div>

            <div className="relative lg:h-[600px]">
              <Card className="absolute top-0 right-0 w-72 p-6 shadow-xl border-2 animate-fade-in-up bg-card/95 backdrop-blur">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Agent IA</p>
                    <p className="text-xs text-muted-foreground">Bonjour ! Comment puis-je vous aider aujourd'hui ?</p>
                  </div>
                </div>
              </Card>

              <Card className="absolute top-32 left-0 w-64 p-5 shadow-xl border-2 animate-fade-in-up [animation-delay:200ms] bg-card/95 backdrop-blur">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Devis généré</span>
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 bg-muted rounded-full w-full" />
                    <div className="h-2 bg-muted rounded-full w-3/4" />
                    <div className="h-2 bg-muted rounded-full w-1/2" />
                  </div>
                  <div className="pt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>Envoyé il y a 2 min</span>
                  </div>
                </div>
              </Card>

              <Card className="absolute bottom-0 right-12 w-56 p-5 shadow-xl border-2 animate-fade-in-up [animation-delay:400ms] bg-card/95 backdrop-blur">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Taux de conversion</span>
                  </div>
                  <div className="text-3xl font-bold">+47%</div>
                  <p className="text-xs text-muted-foreground">vs. formulaire classique</p>
                </div>
              </Card>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl -z-10 animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-border/40 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground font-medium">
            Déjà utilisé par des PME, agences et artisans exigeants
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">Nos services</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Des briques modulaires, prêtes pour votre stack. On s'occupe du setup, des prompts, de l'UX et des
              intégrations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: MessageSquare,
                title: "Chatbots Web & Widget",
                desc: "Répondez 24/7 sur votre site. FAQ, prise de RDV, qualification et génération de leads.",
              },
              {
                icon: Phone,
                title: "Agents Voix (téléphone)",
                desc: "Numéro dédié. Accueil, routage, prise de messages ou commandes. Intégration Twilio/VoIP.",
              },
              {
                icon: Mail,
                title: "Traitement e-mail & Tickets",
                desc: "Classement, réponses automatiques, extraction d'infos, création de devis et factures.",
              },
              {
                icon: Zap,
                title: "Connecteurs & Intégrations",
                desc: "WhatsApp, Messenger, Slack, CRM, Notion, Google Sheets, Zapier, Make, API internes.",
              },
              {
                icon: Settings,
                title: "Automatisation RPA",
                desc: "Remplissage de formulaires, scraping contrôlé, mises à jour de back-office et ERP.",
              },
              {
                icon: Shield,
                title: "Conseil & RGPD",
                desc: "Gouvernance données, stockage UE, politiques, consentement et journalisation.",
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="group relative p-8 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 bg-card"
                onMouseEnter={() => setHoveredService(idx)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  <div
                    className={`flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 ${hoveredService === idx ? "translate-x-2 opacity-100" : "opacity-0"}`}
                  >
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">Notre méthode en 4 étapes</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", title: "Cadrage", desc: "Objectifs, canaux, données, RGPD. 60–90 min.", icon: Users },
              {
                step: "2",
                title: "Prototype",
                desc: "Agent fonctionnel sur votre cas d'usage en 3–5 jours.",
                icon: Zap,
              },
              {
                step: "3",
                title: "Intégration",
                desc: "Connexion à vos outils, tests, formation équipe.",
                icon: Settings,
              },
              {
                step: "4",
                title: "Pilotage",
                desc: "Tableau de bord, QA continue, optimisation prompts.",
                icon: BarChart3,
              },
            ].map((step, idx) => (
              <Card
                key={idx}
                className="relative p-8 border-2 hover:border-primary/50 transition-all duration-300 group bg-card"
              >
                <div className="absolute -top-4 left-8">
                  <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                </div>
                <div className="mt-8 space-y-3">
                  <step.icon className="h-8 w-8 text-primary/60" />
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="usecases" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">Cas d'usage concrets</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Devis instantanés",
                points: ["Collecte d'infos", "Calcul tarifaire", "Génération PDF + envoi"],
                icon: FileText,
                color: "text-blue-500",
              },
              {
                title: "Support client 24/7",
                points: ["FAQ personnalisée", "Escalade humaine", "Satisfaction mesurée"],
                icon: MessageSquare,
                color: "text-green-500",
              },
              {
                title: "Qualification de leads",
                points: ["Scoring", "Routage CRM", "Prise de RDV"],
                icon: TrendingUp,
                color: "text-purple-500",
              },
              {
                title: "Back‑office automatique",
                points: ["Extraction de pièces", "Création facture", "Mises à jour ERP"],
                icon: Settings,
                color: "text-orange-500",
              },
            ].map((usecase, idx) => (
              <Card
                key={idx}
                className="p-8 border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <usecase.icon className={`h-6 w-6 ${usecase.color}`} />
                  </div>
                  <div className="space-y-4 flex-1">
                    <h3 className="text-xl font-semibold">{usecase.title}</h3>
                    <ul className="space-y-2">
                      {usecase.points.map((point, pidx) => (
                        <li key={pidx} className="flex items-center gap-3 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 text-center mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              Tarifs simples, adaptés à la PME
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Démarrez petit, évoluez selon l'usage. Contactez‑nous pour un chiffrage précis.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "490€",
                period: "/setup",
                bullets: ["1 canal (chat ou e‑mail)", "Base de connaissances", "Hébergement inclus"],
                cta: "Démarrer",
                highlight: false,
              },
              {
                name: "Pro",
                price: "990€",
                period: "/setup",
                bullets: ["Jusqu'à 2 canaux (chat+e‑mail)", "Intégration CRM/Sheets", "Tableau de bord"],
                cta: "Demander un devis",
                highlight: true,
              },
              {
                name: "Entreprise",
                price: "Sur mesure",
                period: "",
                bullets: ["Voix+téléphonie", "RPA & API internes", "SLA & RGPD avancé"],
                cta: "Parler à un expert",
                highlight: false,
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`relative p-8 flex flex-col border-2 transition-all duration-300 ${
                  plan.highlight
                    ? "border-primary shadow-xl scale-105 bg-primary/5"
                    : "border-border hover:border-primary/50 bg-card"
                }`}
              >
                {plan.highlight && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Populaire
                  </Badge>
                )}
                <div className="space-y-6 flex-1">
                  <div>
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {plan.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  asChild
                  className={`mt-8 w-full ${plan.highlight ? "" : "variant-outline"}`}
                  variant={plan.highlight ? "default" : "outline"}
                >
                  <Link href="#contact">{plan.cta}</Link>
                </Button>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Abonnements mensuels selon volume d'utilisations & modèles — à partir de 59€/mois.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">Parlons de votre projet</h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Expliquez votre contexte et vos outils. On vous propose un plan concret avec délais et budget.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="p-6 border-2 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:contact@aicist.ai"
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        contact@aicist.ai
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-primary" />
                      <span className="font-medium">Déploiement Vercel</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="font-medium">Données hébergées UE</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="font-medium">Conformité RGPD</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <Card className="p-8 border-2 shadow-xl bg-card">
              <ContactForm />
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">
                AICIST<span className="text-primary">.ai</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © <span suppressHydrationWarning>{new Date().getFullYear()}</span> AICIST.ai — Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Mentions légales
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating chatbot widget in bottom-right corner */}
      <div className="fixed bottom-6 right-6 z-50">
        <N8NChatV1 />
      </div>
    </main>
  )
}
