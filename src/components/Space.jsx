import {useState} from 'react';
import {NavLink,Navigate,useParams,Link} from 'react-router-dom';
import {Bell,LogOut,Menu} from 'lucide-react';
import {SPACES} from '../pages/spaces.jsx';
import {useStore} from '../lib/store.js';
import {NOTIF} from '../lib/data.js';
export default function Space(){const {role,page}=useParams(),S=SPACES[role],[open,setOpen]=useState(false),[nt]=useStore('nt_'+role,NOTIF[role]||[]);
  if(!S)return <Navigate to="/login"/>;const cur=S.pages.find(p=>p.path===page);if(!cur)return <Navigate to={`/${role}/${S.pages[0].path}`} replace/>;
  const unread=nt.filter(n=>!n[2]).length,date=new Date().toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  return <div className="app"><aside className={'side'+(open?' open':'')}><Link to="/" className="brand"><span className="mark">É</span><span>École Iba Sène<small>{S.label}</small></span></Link>
    <nav>{S.pages.map(p=><NavLink key={p.path} to={`/${role}/${p.path}`} onClick={()=>setOpen(false)}><p.icon size={18}/>{p.title}</NavLink>)}</nav>
    <Link to="/login" className="out"><LogOut size={18}/>Se déconnecter</Link></aside>
    <div className="main"><header className="top"><button className="icon-btn burger" onClick={()=>setOpen(o=>!o)} aria-label="Menu"><Menu size={20}/></button><span className="date">{date}</span>
      <div className="who"><NavLink to={`/${role}/notifications`} className="bell" aria-label="Notifications"><Bell size={19}/>{unread>0&&<i>{unread}</i>}</NavLink><span className="avatar">{S.user.split(' ').map(x=>x[0]).join('').slice(0,2)}</span><span className="uname">{S.user}</span></div></header>
      <main key={cur.path}><div className="ph"><h1>{cur.title}</h1><p>{cur.sub}</p></div>{cur.el}</main></div></div>}
