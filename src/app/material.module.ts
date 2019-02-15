
//=============================================================================

//--- @Angular/material components
import {
	MatCheckboxModule, MatToolbarModule, MatIconModule, MatButtonModule, MatButtonToggleModule,
	MatGridListModule, MatCardModule, MatListModule,  MatSelectModule, MatSidenavModule, MatTabsModule, MatTooltipModule,
	MatDialogModule, MatFormFieldModule, MatInputModule, MAT_DIALOG_DATA, MatDialogRef, MatTableModule,MatSliderModule, MatExpansionModule, MatSlideToggleModule,MatMenuModule,MatRadioModule, MatSortModule, MatPaginatorModule, MatProgressSpinnerModule,MatDatepickerModule,MatNativeDateModule,MatSnackBarModule
}
from '@angular/material';

//--- Prime NG components

import {
	BreadcrumbModule, PanelMenuModule, DataTableModule, SharedModule, SlideMenuModule, MenuModule,
    ContextMenuModule, OverlayPanelModule, PanelModule, ListboxModule, DropdownModule, PickListModule,
    MultiSelectModule, FileUploadModule, ButtonModule,SplitButtonModule, MessagesModule, DialogModule, GrowlModule,
    CheckboxModule, TabViewModule, InputTextModule, SpinnerModule, AccordionModule,  ConfirmDialogModule, CalendarModule, AutoCompleteModule,TreeModule,SidebarModule
}
from 'primeng/primeng';

import {TableModule} from 'primeng/table';
import { NgModule } from '@angular/core';

import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';



//--- Components

//=============================================================================

@NgModule({
    imports: [
        MatCheckboxModule, MatToolbarModule, MatIconModule, MatButtonModule,
		MatGridListModule, MatCardModule, MatListModule,   MatSelectModule, MatSidenavModule,
		MatTabsModule, MatButtonToggleModule, MatTooltipModule,MatDialogModule,
		MatFormFieldModule, MatInputModule, MatSliderModule,MatExpansionModule, MatSlideToggleModule,
        MatMenuModule,MatRadioModule,MatTableModule,
		CdkTableModule,
        // DataSource,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
		MatTableModule,
		MatInputModule,
        MatPaginatorModule,
        MatSortModule,
		MatProgressSpinnerModule,
		MatSortModule,
		MatDatepickerModule,
		MatNativeDateModule ,
        BreadcrumbModule, PanelMenuModule, DataTableModule, SharedModule,
		SlideMenuModule, MenuModule, ContextMenuModule, OverlayPanelModule,
		PanelModule, ListboxModule, DropdownModule,PickListModule, MultiSelectModule,
		FileUploadModule, ButtonModule,SplitButtonModule, MessagesModule, DialogModule, GrowlModule,
		CheckboxModule, TabViewModule,InputTextModule,SpinnerModule,
		AccordionModule,ConfirmDialogModule,AutoCompleteModule,
		CalendarModule,SidebarModule, TreeModule,MatSnackBarModule,

		TableModule,

    ],
    exports: [
        MatCheckboxModule, MatToolbarModule, MatIconModule, MatButtonModule,
		MatGridListModule, MatCardModule, MatListModule,   MatSelectModule, MatSidenavModule,
		MatTabsModule, MatButtonToggleModule, MatTooltipModule,MatDialogModule,
		MatFormFieldModule, MatInputModule, MatSliderModule,MatExpansionModule, MatSlideToggleModule,
        MatMenuModule,MatRadioModule,MatTableModule,
		CdkTableModule,
        // DataSource,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
		MatTableModule,
		MatInputModule,
        MatPaginatorModule,
        MatSortModule,
		MatProgressSpinnerModule,
		MatSortModule,
		MatDatepickerModule,
		MatNativeDateModule,
        BreadcrumbModule, PanelMenuModule, DataTableModule, SharedModule,
		SlideMenuModule, MenuModule, ContextMenuModule, OverlayPanelModule,
		PanelModule, ListboxModule, DropdownModule,PickListModule, MultiSelectModule,
		FileUploadModule, ButtonModule,SplitButtonModule, MessagesModule, DialogModule, GrowlModule,
		CheckboxModule, TabViewModule,InputTextModule,SpinnerModule,
		AccordionModule,ConfirmDialogModule,AutoCompleteModule,
		CalendarModule,SidebarModule, TreeModule,MatSnackBarModule,

		TableModule,
    ]
  })
  export class MaterialModule {}

//=============================================================================
