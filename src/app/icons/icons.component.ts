import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  filteredIcons: string[];

  constructor() { this.filteredIcons = this.icons;}
  ngOnInit() { }

   applyFilter(filterString: string): void {
    if (filterString) {
      this.filteredIcons = this.icons.filter(i => {
        return i.toLowerCase().includes(filterString.toLowerCase());
      });
    }
    else {
      this.filteredIcons = this.icons;
    }
  }

  icons = [
    "home","menu","three_dot",
    "add_a_photo",
    "add_alarm",
    "low_priority",
    "loyalty",
    "mail",
    "mail_outline",
    "map",
    "markunread",
    "markunread_mailbox",
    "memory",
    "mood",
    "music_video",
    "my_location",
    "nature", "queue",
    "queue_music",
    "queue_play_next",
    "radio",
    "router",
    "schedule",
    "school",
    "screen_share",
    "sd_card",
    "sd_storage",
    "search",
    "security",
    "select_all",
    "send",
    "sentiment_neutral",
    "sentiment_satisfied",
    "settings",
    "share",
    "shop",
    "shop_two",
    "shopping_basket",
    "shopping_cart",
    "short_text",
    "show_chart",
    "shuffle",
    "skip_previous",
    "timeline",
    "timer",
    "toc",
    "today",
    "toll",
    "tonality",
    "touch_app",
    "toys",
    "track_changes",
    "traffic",
    "train",
    "tv",
    "update",
    "usb",
    "visibility",
    "visibility_off",
    "voice_chat",
    "voicemail",
    "wc",
    "web",
    "wrap_text",
    "youtube_searched_for",
    "zoom_in",
    "zoom_out",
    "zoom_out_map"
  ];
}
