import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './component/album/album.component';
import { FormulaireComponent } from './component/formulaire/formulaire.component';
import { TestComponent } from './component/test/test.component';

const routes: Routes = [
  { path: 'form', component: FormulaireComponent },
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: '**', redirectTo: '/form', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
