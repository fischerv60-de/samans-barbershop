/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

import { Route as rootRouteImport } from './routes/__root'
import { Route as TerminRouteImport } from './routes/termin'
import { Route as StimmenRouteImport } from './routes/stimmen'
import { Route as LeistungenRouteImport } from './routes/leistungen'
import { Route as GalerieRouteImport } from './routes/galerie'
import { Route as IndexRouteImport } from './routes/index'

const TerminRoute = TerminRouteImport.update({
  id: '/termin',
  path: '/termin',
  getParentRoute: () => rootRouteImport,
} as any)
const StimmenRoute = StimmenRouteImport.update({
  id: '/stimmen',
  path: '/stimmen',
  getParentRoute: () => rootRouteImport,
} as any)
const LeistungenRoute = LeistungenRouteImport.update({
  id: '/leistungen',
  path: '/leistungen',
  getParentRoute: () => rootRouteImport,
} as any)
const GalerieRoute = GalerieRouteImport.update({
  id: '/galerie',
  path: '/galerie',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/galerie': typeof GalerieRoute
  '/leistungen': typeof LeistungenRoute
  '/stimmen': typeof StimmenRoute
  '/termin': typeof TerminRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/galerie': typeof GalerieRoute
  '/leistungen': typeof LeistungenRoute
  '/stimmen': typeof StimmenRoute
  '/termin': typeof TerminRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/galerie': typeof GalerieRoute
  '/leistungen': typeof LeistungenRoute
  '/stimmen': typeof StimmenRoute
  '/termin': typeof TerminRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/galerie' | '/leistungen' | '/stimmen' | '/termin'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/galerie' | '/leistungen' | '/stimmen' | '/termin'
  id: '__root__' | '/' | '/galerie' | '/leistungen' | '/stimmen' | '/termin'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  GalerieRoute: typeof GalerieRoute
  LeistungenRoute: typeof LeistungenRoute
  StimmenRoute: typeof StimmenRoute
  TerminRoute: typeof TerminRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  GalerieRoute: GalerieRoute,
  LeistungenRoute: LeistungenRoute,
  StimmenRoute: StimmenRoute,
  TerminRoute: TerminRoute,
}

export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>()
