import { Component } from '@angular/core';

import { HomePage } from '../home/home';

// import { HomePage } from '../home/home';
// import { NotifitionPage } from '../notifition/notifition';
// import { ChatPage } from '../chat/chat';
// import { MorePage } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabHome = HomePage;
  tabDiscovery = HomePage;
  tabMore = HomePage;
  tabNotifition = HomePage;
  tabChat = HomePage;

  constructor() {

  }
}
