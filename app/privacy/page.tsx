export const metadata = {
  title: 'Politique de confidentialité - Infomone Consulting',
  description: 'Politique de confidentialité et protection des données personnelles - Infomone Consulting',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Politique de confidentialité</h1>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Collecte des données</h2>
            <p className="text-slate-700 mb-4">
              Dans le cadre de nos services, nous collectons les données personnelles suivantes :
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
              <li>Nom et prénom</li>
              <li>Nom de l'entreprise</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Ville / région</li>
              <li>Secteur d'activité</li>
              <li>Informations relatives à votre activité (CA mensuel, taux de commission, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Finalité du traitement</h2>
            <p className="text-slate-700 mb-4">
              Vos données personnelles sont collectées et traitées pour les finalités suivantes :
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
              <li>Réalisation d'un audit de vos commissions bancaires</li>
              <li>Prise de contact et suivi de votre demande</li>
              <li>Envoi d'informations relatives à nos services</li>
              <li>Amélioration de nos services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Base légale</h2>
            <p className="text-slate-700">
              Le traitement de vos données personnelles est basé sur votre consentement, que vous exprimez en cochant la case d'acceptation lors de la soumission du formulaire de demande d'audit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Conservation des données</h2>
            <p className="text-slate-700">
              Vos données personnelles sont conservées pendant une durée maximale de 3 ans à compter de notre dernier contact, sauf obligation légale ou réglementaire de conservation plus longue.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Destinataires des données</h2>
            <p className="text-slate-700 mb-4">
              Vos données personnelles sont destinées à Infomone Consulting et peuvent être transmises à :
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
              <li>Nos prestataires techniques (hébergeur, outils de gestion CRM, etc.)</li>
              <li>Les autorités compétentes en cas d'obligation légale</li>
            </ul>
            <p className="text-slate-700 mt-4">
              Vos données ne sont en aucun cas vendues ou cédées à des tiers à des fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Vos droits</h2>
            <p className="text-slate-700 mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
              <li><strong>Droit d'accès</strong> : vous pouvez obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification</strong> : vous pouvez demander la correction de vos données inexactes</li>
              <li><strong>Droit à l'effacement</strong> : vous pouvez demander la suppression de vos données</li>
              <li><strong>Droit à la limitation</strong> : vous pouvez demander la limitation du traitement de vos données</li>
              <li><strong>Droit à la portabilité</strong> : vous pouvez récupérer vos données dans un format structuré</li>
              <li><strong>Droit d'opposition</strong> : vous pouvez vous opposer au traitement de vos données</li>
              <li><strong>Droit de retirer votre consentement</strong> : vous pouvez retirer votre consentement à tout moment</li>
            </ul>
            <p className="text-slate-700 mt-4">
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante :{' '}
              <a href="mailto:contact@infomone-consulting.fr" className="text-blue-600 hover:underline">
                contact@infomone-consulting.fr
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Sécurité des données</h2>
            <p className="text-slate-700">
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour assurer la sécurité et la confidentialité de vos données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Cookies</h2>
            <p className="text-slate-700">
              Ce site n'utilise pas de cookies de tracking. Seuls les cookies techniques nécessaires au fonctionnement du site peuvent être utilisés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Réclamation</h2>
            <p className="text-slate-700">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                www.cnil.fr
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Contact</h2>
            <p className="text-slate-700">
              Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter à :<br />
              <strong>Infomone Consulting</strong><br />
              Email :{' '}
              <a href="mailto:contact@infomone-consulting.fr" className="text-blue-600 hover:underline">
                contact@infomone-consulting.fr
              </a>
              <br />
              Téléphone : +33 6 12 34 56 78
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <a href="/" className="text-blue-600 hover:underline">
            ← Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}

