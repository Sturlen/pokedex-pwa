import PokemonRoute from "./PokemonRoute"
import MoveRoute from "./MoveRoute"

export type AppRoute = {
  path: string
  component: () => JSX.Element
}

export type AppRoutes = {
  [routeName: string]: AppRoute
}

const routes: AppRoutes = {
  pokemon: { path: "/pokemon", component: PokemonRoute },
  moves: { path: "/moves", component: MoveRoute },
}

export default routes
