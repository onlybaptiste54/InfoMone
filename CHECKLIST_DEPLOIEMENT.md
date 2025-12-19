# ✅ Checklist de Déploiement - Site Infomone Consulting

## 📅 À faire avant jeudi soir (livraison vendredi matin)

---

## 🧪 Tests Locaux (http://localhost:3000)

### ✅ Fonctionnalités Générales
- [ ] La page se charge correctement
- [ ] Toutes les images s'affichent
- [ ] Pas d'erreurs dans la console du navigateur
- [ ] Scrolling fluide entre les sections
- [ ] Navigation navbar fonctionne

### ✅ Mode Sombre
- [ ] Toggle visible dans la navbar (desktop)
- [ ] Toggle visible dans la navbar (mobile)
- [ ] Basculement fonctionne (clair → sombre)
- [ ] La préférence est sauvegardée (rafraîchir la page)
- [ ] Tous les textes sont lisibles en mode sombre
- [ ] Les contrastes sont suffisants

### ✅ Simulateur
- [ ] Le champ CA accepte les nombres
- [ ] Le bouton "Voir mon estimation" fonctionne
- [ ] Le code couleur s'affiche (🟢🟠🔴)
- [ ] Le toggle "Où trouver mon RAFEC ?" se déplie
- [ ] Les informations RAFEC s'affichent correctement
- [ ] Le CTA Calendly apparaît selon le résultat
- [ ] Le lien Calendly s'ouvre dans un nouvel onglet

### ✅ Liens Calendly
- [ ] Hero section → Calendly fonctionne
- [ ] Navbar "Prendre RDV" → Calendly fonctionne
- [ ] Simulateur (résultat) → Calendly fonctionne
- [ ] Section Porteurs de projet → Calendly fonctionne
- [ ] Section Processus → Calendly fonctionne
- [ ] Section FAQ → Calendly fonctionne
- [ ] CTA Final → Calendly fonctionne
- [ ] Tous ouvrent dans un nouvel onglet (target="_blank")

### ✅ Contenu
- [ ] Section "Idées reçues" affichée et lisible
- [ ] 4 cas clients affichés avec badges
- [ ] Section "Porteurs de projet" visible
- [ ] Processus 3 étapes avec badges GRATUIT/PAYANT
- [ ] FAQ avec 5 questions
- [ ] Footer avec infos de contact

### ✅ Responsive Mobile
- [ ] Tester sur mobile (ou outil dev Chrome)
- [ ] Menu hamburger fonctionne
- [ ] Toggle mode sombre visible sur mobile
- [ ] Simulateur utilisable sur mobile
- [ ] Tous les textes lisibles sur petit écran
- [ ] Boutons cliquables facilement
- [ ] Pas de dépassement horizontal

---

## 🚀 Build & Production

### ✅ Commandes
```bash
# 1. Arrêter le serveur de dev (Ctrl+C)
npm run build

# 2. Vérifier qu'il n'y a pas d'erreurs

# 3. Tester la version production localement
npm start

# 4. Ouvrir http://localhost:3000 et retester tout
```

### ✅ Vérifications Build
- [ ] `npm run build` réussit sans erreurs
- [ ] Pas de warnings critiques
- [ ] La version production se lance avec `npm start`
- [ ] Le site fonctionne identiquement en production

---

## 🌐 Déploiement (Jeudi Soir)

### Option 1 : Vercel (Recommandé)
```bash
# 1. Installer Vercel CLI (si pas déjà fait)
npm i -g vercel

# 2. Se connecter
vercel login

# 3. Déployer
vercel --prod
```

### Option 2 : Netlify
1. Aller sur netlify.com
2. "Add new site" → "Deploy manually"
3. Glisser le dossier `.next` après build
4. Ou connecter le repo Git

### Option 3 : Autre hébergeur
- S'assurer que Node.js est supporté
- Configurer les variables d'environnement si nécessaire
- Lancer `npm install && npm run build && npm start`

### ✅ Après Déploiement
- [ ] Le site est accessible en ligne
- [ ] URL notée et sauvegardée
- [ ] Retester TOUS les liens Calendly en production
- [ ] Retester le mode sombre en production
- [ ] Retester le simulateur en production
- [ ] Vérifier sur mobile réel (pas simulateur)

---

## 📧 Communication (Vendredi Matin)

### ✅ Email à Envoyer
```
Bonjour David,

Le site est en ligne et prêt : [URL_DU_SITE]

✅ Toutes les modifications du compte rendu ont été implémentées :
- Boutons uniformisés en bleu
- Mode sombre ajouté avec toggle
- Nouveau simulateur simplifié (CA uniquement) avec code couleur
- Section "Idées reçues" ajoutée
- 4 cas clients détaillés
- Section "Porteurs de projet" créée
- Processus 3 étapes avec gratuité mise en avant
- FAQ complète avec explications RAFEC
- Liens Calendly intégrés partout

N'hésitez pas à me faire un retour !

Cordialement
```

---

## 🔧 Problèmes Potentiels & Solutions

### Si le mode sombre ne fonctionne pas :
- Vérifier que `suppressHydrationWarning` est dans `<html>`
- Vérifier que ThemeProvider entoure bien {children} dans layout.tsx
- Vider le cache du navigateur

### Si Calendly ne s'ouvre pas :
- Vérifier l'URL : https://calendly.com/infomone-consulting/reservation-d-appel
- Vérifier `target="_blank"` et `rel="noopener noreferrer"`

### Si le simulateur bug :
- Vérifier la console pour les erreurs JavaScript
- Tester avec différents montants de CA
- Vérifier que SimplifiedSimulator est bien importé dans page.tsx

### Si les styles dark ne s'appliquent pas :
- Vérifier que Tailwind est configuré pour le dark mode
- Vérifier les classes `dark:` dans les composants
- Rebuild : `npm run build`

---

## 📱 Compatibilité Navigateurs

### ✅ Tester sur :
- [ ] Chrome (Windows/Mac)
- [ ] Firefox
- [ ] Safari (Mac/iPhone)
- [ ] Edge
- [ ] Chrome Mobile (Android)
- [ ] Safari Mobile (iOS)

### Versions minimales supportées :
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 🎯 Métriques de Succès

### Performance
- [ ] Temps de chargement < 3 secondes
- [ ] Pas de clignotement (FOUC)
- [ ] Transitions fluides

### UX
- [ ] Navigation intuitive
- [ ] CTA visibles et clairs
- [ ] Formulaire (simulateur) simple
- [ ] Messages clairs

### Accessibilité
- [ ] Navigation au clavier fonctionne
- [ ] Contrastes suffisants
- [ ] Textes lisibles (taille minimale)
- [ ] Focus visible

---

## 📞 Contacts & Liens

### Liens Importants
- **Calendly** : https://calendly.com/infomone-consulting/reservation-d-appel
- **Email** : contact@infomone-consulting.fr
- **Téléphone** : +33 6 12 34 56 78 (à vérifier/mettre à jour si besoin)

### Documentation
- `COMPTE_RENDU_REUNION.md` - Compte rendu original
- `MODIFICATIONS_IMPLEMENTEES.md` - Documentation détaillée
- `README_MODIFICATIONS.md` - Résumé des modifications

---

## ✨ Dernières Vérifications

### Avant d'envoyer le lien vendredi :
- [ ] URL finale testée et fonctionnelle
- [ ] Pas d'erreurs 404
- [ ] HTTPS activé (cadenas vert)
- [ ] Favicon chargé
- [ ] Métadonnées SEO correctes (titre, description)
- [ ] Images optimisées et chargées

---

## 🎊 Prêt pour le Lancement !

Une fois toutes ces cases cochées, le site est **prêt à être livré** ! 🚀

**Bon courage et bon déploiement ! 💪**


