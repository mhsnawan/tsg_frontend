import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'insert_chart', class: '' },
    { path: '/calender', title: 'Calender',  icon: 'date_range', class: '' },
    { path: '/tasks', title: 'Tasks',  icon: 'assignment', class: '' },
    { path: '/notes', title: 'Notes',  icon: 'notes', class: '' },
    { path: '/projects', title: 'Projects',  icon: 'dashboard', class: '' },
    { path: '/teams', title: 'Teams',  icon: 'recent_actors', class: '' },
    { path: '/admincenter', title: 'Admin Center',  icon: 'people', class: '' },
    { path: '/directory', title: 'Directory',  icon: 'subdirectory_arrow_right', class: '' },
    { path: '/documentcenter', title: 'Document Center',  icon: 'ballot', class: '' },
    { path: '/forum', title: 'Forum',  icon: 'forum', class: '' },
    { path: '/hrcenter', title: 'HR Center',  icon: 'contact_support', class: '' },
    { path: '/knowledgebase', title: 'Knowledge Base',  icon: 'insert_chart', class: '' },
    { path: '/itcenter', title: 'IT Center',  icon: 'contact_support', class: '' },
    // { path: '/user-management', title: 'User Management',  icon: 'person', class: '' },
    // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
