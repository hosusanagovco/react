import InidiceGeneros from "./Generos/IndiceGeneros";
import LandingPage from "./LandingPage";

const rutas = [
    {path: '/generos', componente: InidiceGeneros},
    {path: '/', componete: LandingPage, exact: true}
];
export default rutas;