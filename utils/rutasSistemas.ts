interface Rutas {
    name: string;
    path: string;
    permiso?: string;
}
export default () => {
    const rutas: Rutas[] = [
        { name: "Home", path: "/" },
        { name: "Portafolio", path: "/project" },
        { name: "Blog", path: "/blog" },
        { name: "Agregar projecto", path: "/project/addProject", permiso: 'ADMINISTRADOR' },
        { name: "category", path: "/category", permiso: 'ADMINISTRADOR' },
        { name: "Agregar category", path: "/category/addCategory", permiso: 'ADMINISTRADOR' },
        { name: "Agregar blog", path: "/blog/addBlog", permiso: 'ADMINISTRADOR' },
        { name: "Favoritos", path: "/project/favoritos" },
    ]
    return rutas;
}