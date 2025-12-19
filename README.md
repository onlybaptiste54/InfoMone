# Infomone Consulting - Site Vitrine

Site vitrine pour Infomone Consulting, cabinet de conseil spécialisé dans l'audit des commissions bancaires sur les paiements par carte.

## 🚀 Démarrage rapide

### Installation des dépendances

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
infomone/
├── app/
│   ├── api/
│   │   └── audit-request/     # Route API pour les demandes d'audit
│   ├── legal/                  # Page mentions légales
│   ├── privacy/                # Page politique de confidentialité
│   ├── layout.tsx              # Layout principal
│   ├── page.tsx                # Page d'accueil (one-page)
│   └── globals.css             # Styles globaux
├── components/
│   ├── AuditForm.tsx           # Formulaire de demande d'audit
│   └── Simulator.tsx           # Simulateur d'économies
└── public/                     # Assets statiques
```

## 🎨 Fonctionnalités

- **Page one-page** avec toutes les sections demandées
- **Simulateur d'économies** : calcul côté front sans stockage de données
- **Formulaire de contact** : validation avec React Hook Form
- **Design sobre et professionnel** : palette bleu/gris/blanc
- **Responsive** : mobile-first
- **SEO optimisé** : métadonnées et structure sémantique

## 🔧 Configuration

### Route API

La route `/api/audit-request` reçoit les demandes d'audit. Actuellement, les données sont loggées dans la console. Pour la production, vous pouvez :

1. Intégrer avec un webhook n8n
2. Envoyer un email via un service (SendGrid, Resend, etc.)
3. Sauvegarder dans un CRM
4. Utiliser un service de base de données

Exemple d'intégration dans `app/api/audit-request/route.ts` :

```typescript
// Exemple avec webhook n8n
await fetch('https://votre-webhook-n8n.com/audit-request', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

### Personnalisation

- **Coordonnées** : Modifiez les informations dans le footer (`app/page.tsx`)
- **Couleurs** : Ajustez la palette dans les classes Tailwind
- **Contenu** : Tous les textes sont directement dans les composants

## 📝 Pages

- `/` : Page d'accueil (one-page)
- `/legal` : Mentions légales
- `/privacy` : Politique de confidentialité

## 🛠️ Technologies

- **Next.js 16** : Framework React
- **TypeScript** : Typage statique
- **Tailwind CSS** : Styles utilitaires
- **React Hook Form** : Gestion des formulaires

## 📦 Déploiement

Le site peut être déployé sur :
- Vercel (recommandé pour Next.js)
- Netlify
- Tout hébergeur supportant Node.js

## 📄 Licence

Propriété d'Infomone Consulting.
