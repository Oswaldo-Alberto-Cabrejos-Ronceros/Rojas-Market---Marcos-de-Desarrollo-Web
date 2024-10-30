import { useState } from "react";
import BarraNav from "./components/BarraNav/BarraNav";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ModuleNosotros from "./components/ModuleNosotros/ModuleNosotros";
import ModulePromociones from "./components/ModulePromociones/ModulePromociones";
import "./App.css";
import Footer from "./components/Footer/Footer";
import ModuleLogin from "./components/ModuleLogin/ModuleLogin";
import ModuleHome from "./components/ModuleHome/ModuleHome";
import ModuleRegistrarse from "./components/ModuleRegistrase/ModuleRegistrarse";
import ListadoProductos from "./components/Productos/ListadoProductos"
import EditarProductos from "./components/Productos/EditarProducto"
import AgregarProductos from "./components/Productos/AgregarProductos"
import BuscarProducto from "./components/Productos/BuscarProducto"
import ModuleCarrito from "./components/ModuleCarrito/ModuleCarrito";
import Product from './components/component-product/ProductDetail'
import {Categoria} from './components/Categorias/Categoria'
import {CartProvider} from './components/CardContext/CardContext'

function App() {
  let categoria={
    nombre:"Lacteos",
  }
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <div className="main">
         <BarraNav />
          <div className="containerCamb">
            <Routes>
              <Route path="/" element={<ModuleHome/>} />
              <Route path="/nosotros" element={<ModuleNosotros />} />
              <Route path="/promociones" element={<ModulePromociones />} />
              <Route path="/login" element={<ModuleLogin />} />
              <Route path="/home" element={<ModuleHome />} />
              <Route path="/registrarse" element={<ModuleRegistrarse />} />
              <Route path="/productos" element={<ListadoProductos />} />
              <Route exact path="/editar/:id" element={<EditarProductos/>}/>
              <Route exact path="/agregar" element={<AgregarProductos/>}/>
              <Route path="/productos/categoria/:categoriaId" element={<Categoria/>}/>
              <Route path="/categorias" element={<Categoria />} />
              <Route path="/carrito" element={<ModuleCarrito />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
          </div>
            <Footer/>
        </div>
      </BrowserRouter></CartProvider>
    </>
  );
}

export default App;
