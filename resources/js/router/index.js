import Home from '../views/Home';
import About from '../views/About';
import Contacts from '../views/Contacts';
import NewNote from '../views/notes/Create';
import TableOfNote from '../views/notes/Table';
import ShowNote from '../views/notes/Show';

export default {
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'pages.about',
      component: About
    },
    {
      path: '/contacts',
      name: 'pages.contacs',
      component: Contacts
    },
    {
      path: '/notes/create',
      name: 'notes.create',
      component: NewNote
    },
    {
      path: '/notes/table',
      name: 'notes.table',
      component: TableOfNote
    },
    {
      path: '/notes/:noteSlug',
      name: 'notes.show',
      component: ShowNote
    },
  ]
}