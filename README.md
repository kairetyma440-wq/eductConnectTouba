# ÉduConnect — frontend (React + Vite)

Plateforme de gestion scolaire : notes, absences, emplois du temps, communication école-parents.
Version sans backend : les données sont fictives et sauvegardées dans le navigateur.

## Démarrage
```
npm install
cp .env.example .env     # puis adapter si besoin
npm run dev              # http://localhost:5173
```

## Scripts
| Commande | Effet |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Compile le site dans `dist/` |
| `npm run preview` | Prévisualise le site compilé |
| `npm run lint` | Vérifie le code (ESLint) |
| `npm run format` | Met en forme le code (Prettier) |
| `npm test` | Lance les tests (Vitest) |

## Connexion de démonstration
N'importe quel numéro et mot de passe, puis le code SMS `123456` (modifiable dans `.env`).

## Documentation
Voir le dossier `docs/` : architecture et couverture des écrans E01 à E20.
