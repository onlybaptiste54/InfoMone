export const metadata = {
  title: 'Mentions légales - Infomone Consulting',
  description: 'Mentions légales du site Infomone Consulting',
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Mentions légales</h1>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Éditeur du site</h2>
            <p className="text-slate-700">
              Le site <strong>infomone-consulting.fr</strong> est édité par :
            </p>
            <p className="text-slate-700">
              <strong>Infomone Consulting</strong><br />
              [Adresse complète]<br />
              [Numéro SIRET]<br />
              Téléphone : +33 6 12 34 56 78<br />
              Email : contact@infomone-consulting.fr
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Directeur de publication</h2>
            <p className="text-slate-700">
              David [Nom]<br />
              Responsable de la publication
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Hébergement</h2>
            <p className="text-slate-700">
              Le site est hébergé par :<br />
              [Nom de l'hébergeur]<br />
              [Adresse de l'hébergeur]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Propriété intellectuelle</h2>
            <p className="text-slate-700">
              L'ensemble du contenu de ce site (textes, images, logos, etc.) est la propriété exclusive d'Infomone Consulting, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Protection des données personnelles</h2>
            <p className="text-slate-700">
              Les données personnelles collectées sur ce site sont traitées conformément à la réglementation en vigueur (RGPD). Pour plus d'informations, consultez notre{' '}
              <a href="/privacy" className="text-blue-600 hover:underline">
                politique de confidentialité
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Limitation de responsabilité</h2>
            <p className="text-slate-700">
              Infomone Consulting s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Infomone Consulting ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Droit applicable</h2>
            <p className="text-slate-700">
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
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

