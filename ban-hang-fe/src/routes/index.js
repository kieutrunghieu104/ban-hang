// pages
import HomePage from "~/pages/HomePage";
import OrderPage from "~/pages/OrderPage";
import ProductsPage from "~/pages/ProductsPage";
import NotFoundPage from "~/pages/NotFoundPage";
import SignInPage from "~/pages/SignInPage";

// routes
import configs from "~/configs";

const publicRouter = [
  { path: configs.routes.home, component: HomePage },
  { path: configs.routes.products, component: ProductsPage, layout: "" },
  { path: configs.routes.order, component: OrderPage },
  { path: configs.routes.signIn, component: SignInPage, layout: null },
  { path: configs.routes.notfound, component: NotFoundPage, layout: null },
];

const privateRouter = [

]

export {
  publicRouter,
  privateRouter
}