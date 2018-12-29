import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { DiscoverPage } from '../discover/discover';

// import { HomePage } from '../home/home';
// import { NotifitionPage } from '../notifition/notifition';
// import { ChatPage } from '../chat/chat';
// import { MorePage } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabHome = HomePage;
  tabDiscovery = DiscoverPage;
  tabMore = DiscoverPage;
  tabNotifition = DiscoverPage;
  tabChat = DiscoverPage;

  constructor() {

  }
}
