# Architecture du frontend ÉduConnect

Application React (Vite) sans backend. Les données sont stockées dans le navigateur (localStorage).

## Dossiers
| Chemin | Rôle |
|---|---|
| `src/main.jsx` | Point d'entrée, routeur et notifications |
| `src/App.jsx` | Routes : `/`, `/login`, `/:role/:page` |
| `src/pages/` | Site public (`Public`), connexion (`Login`), contenu des 5 espaces (`spaces.jsx`) |
| `src/components/` | `Space` (menu + en-tête), `ui` (briques génériques), `widgets` (notes, appel, bulletins, emploi du temps) |
| `src/lib/` | `store` (sauvegarde), `data` (données fictives), `config` (.env), `grades` (calculs de moyennes) |
| `public/` | Fichiers servis tels quels (icône) |
| `dist/` | Site compilé, créé par `npm run build` |

## Brancher un vrai backend
1. Renseigner `VITE_API_URL` dans `.env`.
2. Remplacer `useStore` (`src/lib/store.js`) par des appels à l'API : les pages n'ont pas à changer.
3. Remplacer le code SMS de démonstration (`VITE_DEMO_OTP`) par la vérification réelle.
