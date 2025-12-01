import { Routes } from '@angular/router';

import { ContatoComponent } from './componentes/main/contato/contato.component';
import { SobreComponent } from './componentes/main/sobre/sobre.component';
import { ServicosComponent } from './componentes/main/servicos/servicos.component';
import { ServicosDescricaoComponent } from './componentes/main/servicos-descricao/servicos-descricao.component';
import { HomeComponent } from './componentes/main/home/home.component';
import { PedidoComponent } from './componentes/pedido/pedido.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent, title: "Home" },
    { path: "contato", component: ContatoComponent, title: "Contato" },
    { path: "sobre", component: SobreComponent, title: "Sobre" },
    { path: "pedido", component:PedidoComponent, title:"pedido" },
    { path: "servicos", component: ServicosComponent, title: "Serviços" },
    { path: 'servicos-Descricao/:id', component: ServicosDescricaoComponent },
    { path: "**", redirectTo: "home", pathMatch: "full" }
];
