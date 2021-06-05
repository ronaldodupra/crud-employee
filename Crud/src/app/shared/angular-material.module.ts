
import { 
    MatButtonModule,
    MatFormFieldModule,MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatSelectModule,
    MatTabsModule,
    MatExpansionModule,
    MatGridListModule,
    MatDialogModule,
    MatBadgeModule,
    MatTreeModule,
    
} from "@angular/material";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
@NgModule({ 

    exports:[MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,MatCardModule,
        MatSelectModule,
        MatTabsModule,
        MatExpansionModule,
        MatGridListModule,
        MatDialogModule,
        MatBadgeModule,
        MatTreeModule,
        MatSnackBarModule
       
        
    ]
    
})
export class MaterialModule {}
