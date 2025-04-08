import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { Carousel } from 'primeng/carousel';
import { DataView } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { IconField } from 'primeng/iconfield';
import { Image } from 'primeng/image';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItemContent, MenuModule } from 'primeng/menu';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { PaginatorModule } from 'primeng/paginator';
import { PopoverModule } from 'primeng/popover';
import { ProgressBar } from 'primeng/progressbar';
import { SelectModule } from 'primeng/select';
import { Skeleton } from 'primeng/skeleton';
import { SliderModule } from 'primeng/slider';
import { SplitterModule } from 'primeng/splitter';
import { TabsModule } from 'primeng/tabs';
import { Tag } from 'primeng/tag';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { Toolbar } from 'primeng/toolbar';
import { DurationPipe } from './services/duration-pipe.pipe';
import { Card } from 'primeng/card';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Toolbar,
    ButtonModule,
    InputTextModule,
    IconField,
    InputIcon,
    Menubar,
    PopoverModule,
    MenubarModule,
    MenuModule,
    Carousel,
    Tag,
    Image,
    FontAwesomeModule,
    ToggleButtonModule,
    FormsModule,
    MenuItemContent,
    SelectModule,
    SplitterModule,
    TabsModule,
    DataView,
    Skeleton,
    DurationPipe,
    DialogModule,
    AvatarModule,
    ProgressBar,
    SliderModule,
    PaginatorModule,
    RouterLink,
    Card,
  ],
  exports: [
    Toolbar,
    ButtonModule,
    InputTextModule,
    IconField,
    InputIcon,
    Menubar,
    PopoverModule,
    MenubarModule,
    MenuModule,
    Carousel,
    Tag,
    Image,
    FontAwesomeModule,
    ToggleButtonModule,
    FormsModule,
    MenuItemContent,
    SelectModule,
    SplitterModule,
    TabsModule,
    DataView,
    Skeleton,
    DurationPipe,
    DialogModule,
    AvatarModule,
    ProgressBar,
    SliderModule,
    PaginatorModule,
    RouterLink,
    Card,
  ],
})
export class SharedModule {}
