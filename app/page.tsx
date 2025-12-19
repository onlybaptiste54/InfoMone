import SimplifiedSimulator from '@/components/SimplifiedSimulator';
import AuditForm from '@/components/AuditForm';
import Navbar from '@/components/Navbar';
import { AccordionItem } from '@/components/Accordion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white dark:bg-slate-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Texte à gauche */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                Réduisez jusqu'à 30% vos commissions bancaires
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-light">
                Sans changer de banque, sans changer de terminal, simplement en optimisant vos contrats et vos frais.
              </p>
              
              {/* Promesse avec animation */}
              <div className="mb-8 p-4 border-l-4 border-[#2563eb] bg-blue-50 dark:bg-blue-900/20 animate-fade-in">
                <p className="text-base text-slate-900 dark:text-white font-medium">
                  Si je ne vous fais pas économiser de l'argent, je ne vous fais pas payer.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="https://calendly.com/infomone-consulting/reservation-d-appel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-[#2563eb] text-white font-normal rounded-sm hover:bg-[#1d4ed8] transition-colors text-base"
                >
                  Réserver mon appel gratuit de 30 minutes
                </a>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-light">
                  Premier entretien gratuit – Si et seulement si je peux vous aider, on passe à l'étape suivante.
                </p>
              </div>
            </div>

            {/* Logo à droite */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/InfoMoneConsultingLogo.jpg"
                alt="Infomone Consulting"
                width={400}
                height={400}
                priority
                className="w-full max-w-[300px] sm:max-w-[400px] h-auto"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400 font-light">
              En moyenne, nos clients économisent <span className="font-medium text-slate-900 dark:text-white">25 à 30%</span> sur leurs frais de CB.
            </p>
          </div>
        </div>
      </section>

      {/* Idées reçues */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white mb-8 text-center tracking-tight">
            Les idées reçues sur les commissions bancaires
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-900 p-6 border-l-4 border-red-500">
              <p className="text-base font-medium text-slate-900 dark:text-white mb-2">Idée reçue</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                "Mes contrats monétiques ne peuvent pas être renégociés"
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 border-l-4 border-green-500">
              <p className="text-base font-medium text-slate-900 dark:text-white mb-2">Réalité</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Tout se renégocie. Vos taux, vos frais fixes, vos options. Toujours.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 border-l-4 border-red-500">
              <p className="text-base font-medium text-slate-900 dark:text-white mb-2">Idée reçue</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                "Mes taux sont actualisés automatiquement"
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 border-l-4 border-green-500">
              <p className="text-base font-medium text-slate-900 dark:text-white mb-2">Réalité</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Les banques ne baissent jamais vos taux d'elles-mêmes. C'est à vous de demander.
              </p>
            </div>
          </div>

          <div className="bg-[#2563eb] text-white p-6 rounded-sm text-center">
            <p className="text-base font-medium mb-2">Ma promesse</p>
            <p className="text-sm font-light leading-relaxed">
              Si je ne vous fais pas économiser de l'argent, je ne vous fais pas payer.
            </p>
          </div>
        </div>
      </section>

      {/* Ce que fait Infomone */}
      <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 mb-20 text-center tracking-tight">
            Ce que je fais pour vous
          </h2>
          <div className="space-y-12 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 border border-slate-300 flex items-center justify-center mr-6 mt-1">
                <span className="text-slate-700 text-sm font-normal">1</span>
              </div>
              <div className="pt-1">
                <p className="font-medium text-slate-900 mb-2">Je récupère votre RAFEC et vos contrats</p>
                <p>J'analyse vos relevés de commissions CB : frais de paiement, location TPE, options, etc.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 border border-slate-300 flex items-center justify-center mr-6 mt-1">
                <span className="text-slate-700 text-sm font-normal">2</span>
              </div>
              <div className="pt-1">
                <p className="font-medium text-slate-900 mb-2">Je détermine les leviers de renégociation</p>
                <p>J'identifie les anomalies, les frais inutiles et les marges de négociation avec des prestataires de confiance.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 border border-slate-300 flex items-center justify-center mr-6 mt-1">
                <span className="text-slate-700 text-sm font-normal">3</span>
              </div>
              <div className="pt-1">
                <p className="font-medium text-slate-900 mb-2">Vous gardez le libre choix</p>
                <p>Vous choisissez de renégocier avec votre banque ou de changer de prestataire. Vous économisez dans les deux cas.</p>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <a
              href="#simulator"
              className="text-slate-600 hover:text-slate-900 font-normal underline text-sm"
            >
              Estimer mes économies potentielles →
            </a>
          </div>
        </div>
      </section>

      {/* Économies réalisées */}
      <section id="economies" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 mb-20 text-center tracking-tight">
            Économies réalisées avec mes clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Cas 1 : Renégociation avec la banque */}
            <div className="bg-white p-10 border-2 border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-normal text-slate-900">Commerce de proximité</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Renégociation</span>
              </div>
              <p className="text-slate-600 mb-6 text-sm">CA mensuel CB non communiqué</p>
              <div className="space-y-3 mb-6">
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>Action :</strong> Renégociation des commissions avec la banque actuelle
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>Résultat :</strong> Économies réalisées sans changement de prestataire
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 font-light">✅ Client conserve sa banque</p>
              </div>
            </div>

            {/* Cas 2 : Changement de prestataire */}
            <div className="bg-white p-10 border-2 border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-normal text-slate-900">PME</h3>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Changement</span>
              </div>
              <p className="text-slate-600 mb-6 text-sm">CA mensuel CB non communiqué</p>
              <div className="space-y-3 mb-6">
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>Action :</strong> Changement de prestataire de paiement
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>Résultat :</strong> Optimisation complète de la structure tarifaire
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 font-light">✅ Nouveau prestataire + économies</p>
              </div>
            </div>

            {/* Cas 3 : Gros volume */}
            <div className="bg-white p-10 border-2 border-green-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-normal text-slate-900">Entreprise de services</h3>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Cas majeur</span>
              </div>
              <p className="text-slate-600 mb-6 text-sm">4 000 000 € de CA annuel</p>
              <div className="space-y-3 mb-6">
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>Action :</strong> Audit complet et renégociation globale
                </p>
              </div>
              <div className="pt-6 border-t border-green-200">
                <p className="text-3xl font-normal text-green-600 mb-2">28 000 €</p>
                <p className="text-sm text-slate-600 font-light">économisés par an</p>
              </div>
            </div>

            {/* Cas 4 : Pharmacie */}
            <div className="bg-white p-10 border-2 border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-normal text-slate-900">Pharmacie</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Santé</span>
              </div>
              <p className="text-slate-600 mb-6 text-sm">Secteur réglementé</p>
              <div className="space-y-3 mb-6">
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>Action :</strong> Optimisation du choix de banque et renégociation des conditions
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>Résultat :</strong> Économies significatives adaptées au secteur pharmaceutique
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 font-light">✅ Solution spécifique santé</p>
              </div>
            </div>
          </div>
          <p className="text-center text-base text-slate-600 font-light max-w-2xl mx-auto">
            En moyenne, mes clients économisent l'équivalent de <strong>1 à 2 mois de loyer commercial par an</strong>. 
            Que vous choisissiez de renégocier avec votre banque ou de changer de prestataire, vous économisez.
          </p>
        </div>
      </section>

      {/* Simulateur */}
      <section id="simulator" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <SimplifiedSimulator />
      </section>

      {/* Porteurs de projet */}
      <section id="porteurs-projet" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white mb-8 text-center tracking-tight">
            Vous montez votre business ?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mb-12 text-center font-light">
            Accompagnement des porteurs de projet pour choisir la bonne solution de paiement dès le départ
          </p>

          <div className="bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700">
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Rédaction de l'expression de besoin
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Je rédige pour vous l'expression de besoin à présenter aux banques et prestataires. 
                  Document professionnel qui cadre vos attentes et facilite les comparaisons.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Mise en relation avec des prestataires de confiance
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Je connais les bons acteurs du marché. Je vous mets en contact avec des prestataires 
                  fiables et adaptés à votre secteur d'activité.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Accompagnement dans le choix de votre solution
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Conseil personnalisé pour choisir la solution monétique la plus adaptée à votre activité, 
                  votre volume et vos besoins. Évitez les mauvais choix qui coûtent cher.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-sm mb-6">
              <p className="text-blue-900 dark:text-blue-100 font-medium mb-1 text-sm">Pourquoi c'est important ?</p>
              <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                Choisir la bonne solution de paiement dès le départ vous évite de payer trop cher pendant des années. 
                La plupart des entrepreneurs signent le premier contrat qu'on leur propose, sans comparer ni négocier.
              </p>
            </div>

            <div className="text-center">
              <a
                href="https://calendly.com/infomone-consulting/reservation-d-appel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#2563eb] text-white font-normal rounded-sm hover:bg-[#1d4ed8] transition-colors text-base"
              >
                Échanger sur mon projet
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 mb-20 text-center tracking-tight">
            Cas clients & témoignages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 border-l border-slate-300">
              <p className="text-slate-600 mb-6 leading-relaxed font-light">
                "En 3 semaines, nous avons réduit nos frais de CB de 29%. J'ai enfin compris ce que je payais réellement."
              </p>
              <p className="text-sm text-slate-700">
                — Marie, gérante d'une boulangerie
              </p>
            </div>

            <div className="p-8 border-l border-slate-300">
              <p className="text-slate-600 mb-6 leading-relaxed font-light">
                "Sans changer de banque, nous avons récupéré près de 6 000 € par an. Le process était clair et accompagné de A à Z."
              </p>
              <p className="text-sm text-slate-700">
                — Karim, restaurateur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio / À propos */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 dark:text-white mb-20 text-center tracking-tight">
            À propos de David
          </h2>
          <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 border border-slate-200 dark:border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Photo David Coquin */}
              <div className="flex justify-center md:justify-start">
                <div className="relative w-48 h-48 rounded-sm overflow-hidden border-2 border-slate-200 dark:border-slate-700">
                  <Image
                    src="/David_COQUIN.png"
                    alt="David Coquin - Consultant Monétique"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 192px"
                  />
                </div>
              </div>
              
              {/* Bio */}
              <div className="md:col-span-2 space-y-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                <p>
                  <strong className="text-slate-900 dark:text-white font-medium">Plus de 10 ans d'expérience</strong> dans la monétique et les systèmes de paiement.
                </p>
                <p>
                  A accompagné banques, fintechs et commerces de proximité dans l'optimisation de leurs solutions de paiement.
                </p>
                <p>
                  Aujourd'hui : se consacre à aider les commerçants et PME à reprendre la main sur leurs frais bancaires.
                </p>
              </div>
            </div>
            
            <div className="border-t border-slate-200 dark:border-slate-700 pt-8 mt-8">
              <div className="space-y-4 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                <p className="font-medium text-slate-900 dark:text-white">
                  Mon constat
                </p>
                <p>
                  Les commissions bancaires sont souvent la ligne de frais que personne ne regarde. Les commerçants signent, paient, et ne remettent jamais en question leurs contrats.
                </p>
                <p className="font-medium text-slate-900 dark:text-white mt-6">
                  Mon métier
                </p>
                <p>
                  Rendre ces frais lisibles, les corriger quand ils sont injustifiés, et négocier pour que vous payiez le juste prix, pas plus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white mb-8 text-center tracking-tight">
            Comment ça se passe ?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mb-12 text-center font-light max-w-3xl mx-auto">
            Un processus simple et transparent. <strong>Gratuit</strong> si et seulement si je peux vous aider.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Étape 1 : Premier contact GRATUIT */}
            <div className="relative">
              <div className="bg-white dark:bg-slate-800 border-2 border-[#2563eb] p-6 rounded-sm h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#2563eb] text-white flex items-center justify-center rounded-sm">
                    <span className="text-xl font-normal">1</span>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">GRATUIT</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">
                  Premier entretien gratuit
                </h3>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p><strong>Appel de 30 minutes</strong></p>
                  <p>Comprendre vos besoins et cadrer votre projet</p>
                  <p>Apprendre à mieux vous connaître</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-xs font-medium text-[#2563eb]">
                    Si et seulement si je peux vous aider, on passe à l'étape 2
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 text-3xl text-slate-300">→</div>
            </div>

            {/* Étape 2 : Audit GRATUIT */}
            <div className="relative">
              <div className="bg-white dark:bg-slate-800 border-2 border-[#2563eb] p-6 rounded-sm h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#2563eb] text-white flex items-center justify-center rounded-sm">
                    <span className="text-xl font-normal">2</span>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">GRATUIT</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">
                  Analyse de vos frais
                </h3>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>Récupération de votre RAFEC et contrats</p>
                  <p>Analyse approfondie des frais</p>
                  <p>Rédaction d'un rapport détaillé</p>
                  <p>3 solutions d'optimisation</p>
                  <p>Expression de besoin rédigée</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-xs font-medium text-[#2563eb]">
                    Validation du rapport et des solutions
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 text-3xl text-slate-300">→</div>
            </div>

            {/* Étape 3 : Plan d'action */}
            <div className="bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 p-6 rounded-sm h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-slate-700 text-white flex items-center justify-center rounded-sm">
                  <span className="text-xl font-normal">3</span>
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-800 text-xs rounded-full font-medium">PAYANT</span>
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">
                Mise en place du plan d'action
              </h3>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>Challenge des prestataires de confiance</p>
                <p>Accompagnement pour la renégociation</p>
                <p>Ou changement de prestataire si pertinent</p>
                <p>Suivi de la mise en place</p>
                <p>Validation des économies réalisées</p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Vous gardez le libre choix du prestataire
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 p-6 rounded-sm mb-8 text-center">
            <p className="text-base font-medium text-green-900 dark:text-green-100 mb-2">
              Ma garantie : Si je ne vous fais pas économiser de l'argent, je ne vous fais pas payer.
            </p>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Les deux premières étapes sont totalement gratuites. Vous ne payez que si vous décidez de mettre en place le plan d'action.
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://calendly.com/infomone-consulting/reservation-d-appel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#2563eb] text-white font-normal rounded-sm hover:bg-[#1d4ed8] transition-colors text-base"
            >
              Réserver mon appel gratuit de 30 minutes
            </a>
          </div>
        </div>
      </section>

      {/* FAQ / Informations pratiques */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white mb-8 text-center tracking-tight">
            Questions fréquentes
          </h2>

          <div className="space-y-3">
            <AccordionItem title="Qu'est-ce que le RAFEC et où le trouver ?" defaultOpen={true}>
              <div className="space-y-2">
                <p>
                  <strong>RAFEC</strong> = <strong>Relevé d'Activité et Frais d'Encaissement Carte</strong>
                </p>
                <p>
                  <strong>Où le trouver :</strong> Dans votre espace client bancaire, rubrique "Documents", "Monétique" ou "Moyens de paiement"
                </p>
                <p>
                  <strong>Fréquence :</strong> Document mensuel qui récapitule toutes vos commissions de carte bancaire
                </p>
                <p>
                  <strong>Contenu :</strong> Détail de vos frais de transaction, frais fixes, location TPE, options, etc.
                </p>
                <p className="mt-3 bg-blue-50 dark:bg-blue-900/30 p-3 rounded border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-100">
                  <strong>Processus simple :</strong> Téléchargez vos 3 derniers RAFEC et envoyez-les lors de l'audit. 
                  C'est tout ce dont j'ai besoin pour analyser votre situation.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem title="Combien de temps prend le processus ?">
              <div className="space-y-2">
                <p>• <strong>Premier appel :</strong> 30 minutes, immédiatement planifiable</p>
                <p>• <strong>Audit :</strong> 5 à 7 jours ouvrés</p>
                <p>• <strong>Plan d'action :</strong> 2 à 4 semaines selon la complexité</p>
                <p className="pt-2">
                  En moyenne, mes clients voient les premiers résultats en <strong>moins d'un mois</strong>.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem title="Comment sont calculés vos honoraires ?">
              <div className="space-y-3">
                <p>
                  Les <strong>deux premières étapes sont gratuites</strong> (appel + audit).
                </p>
                <p>
                  Si vous décidez de mettre en place le plan d'action, mes honoraires sont calculés au succès : 
                  je ne gagne que si vous économisez réellement de l'argent.
                </p>
                <p className="mt-3 bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-200 dark:border-green-800 text-green-900 dark:text-green-100">
                  <strong>Ma garantie :</strong> Si je ne vous fais pas économiser de l'argent, je ne vous fais pas payer.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem title="Dois-je changer de banque ?">
              <div className="space-y-2">
                <p>
                  <strong>Non, pas nécessairement.</strong> Dans la majorité des cas, on renégocie avec votre banque actuelle.
                </p>
                <p>
                  Je ne recommande un changement de prestataire que si c'est vraiment plus avantageux pour vous. 
                  Vous gardez toujours le <strong>libre choix</strong> de votre prestataire final.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem title="Pour quel type de commerce ?">
              <div>
                <p className="mb-3">
                  J'accompagne tous types de commerces et entreprises qui encaissent par carte bancaire :
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <span className="mr-2">✓</span> Commerces de proximité
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✓</span> Restaurants & Hôtels
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✓</span> Pharmacies
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✓</span> PME & TPE
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✓</span> E-commerce
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✓</span> Services B2B
                  </div>
                </div>
              </div>
            </AccordionItem>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">Une autre question ?</p>
            <a
              href="https://calendly.com/infomone-consulting/reservation-d-appel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#2563eb] text-white font-normal rounded-sm hover:bg-[#1d4ed8] transition-colors text-base"
            >
              Contactez-moi directement
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final - Prendre RDV */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 mb-6 tracking-tight">
            Prêt à optimiser vos frais bancaires ?
          </h2>
          <p className="text-lg text-slate-600 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
            Réservez votre appel gratuit de 30 minutes. Si et seulement si je peux vous aider, on passe à l'étape suivante.
          </p>
          <a
            href="https://calendly.com/infomone-consulting/reservation-d-appel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#2563eb] text-white font-medium rounded-sm hover:bg-[#1d4ed8] transition-colors text-lg shadow-lg hover:shadow-xl"
          >
            🗓️ Réserver mon appel gratuit maintenant
          </a>
          <p className="text-sm text-slate-500 mt-6">
            ✅ Aucun engagement • ✅ Premier contact gratuit • ✅ Réponse sous 24h
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="mb-6">
                <Image
                  src="/logo-white.svg"
                  alt="Infomone Consulting"
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-slate-400 mb-2 text-sm font-light">Audit des commissions bancaires</p>
              <p className="text-slate-400 text-sm font-light">Optimisation des frais CB</p>
            </div>
            <div>
              <h4 className="font-normal mb-6 text-sm uppercase tracking-wide">Contact</h4>
              <p className="text-slate-400 mb-3 text-sm font-light">
                <a href="mailto:contact@infomone-consulting.fr" className="hover:text-white transition-colors">
                  contact@infomone-consulting.fr
                </a>
              </p>
              <p className="text-slate-400 mb-3 text-sm font-light">
                <a href="tel:+33612345678" className="hover:text-white transition-colors">
                  +33 6 12 34 56 78
                </a>
              </p>
              <p className="text-slate-400 text-sm font-light">Guadeloupe, France</p>
            </div>
            <div>
              <h4 className="font-normal mb-6 text-sm uppercase tracking-wide">Informations légales</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/legal" className="text-slate-400 hover:text-white transition-colors text-sm font-light">
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm font-light">
                    Politique de confidentialité
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-xs font-light">
            <p>&copy; {new Date().getFullYear()} Infomone Consulting. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
