import Link from 'next/link'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Cards from '../components/Cards/Cards'

export default function Index (){
return(
<div>

<Header title="TrinaCook"/>



<main>

<Cards 
 category="Doces" 
 name="Brigadeiros"
 link="receitas/doces/brigadeiro"
 img="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg"
 />
 
 <Cards 
 category="Sopa" 
 name="Sopa de ervilha"
 link="receitas/sopas/sopas-ervilha"
 img="https://img.itdg.com.br/tdg/images/recipes/000/147/490/354640/354640_original.jpg?mode=crop&width=710&height=400"
 />

<Cards 
 category="Caldos" 
 name="Caldos de mandioca"
 link="receitas/caldos/caldo-mandioca"
 img="https://img.itdg.com.br/tdg/images/recipes/000/124/626/283922/283922_original.jpg?mode=crop&width=710&height=400"
/>


<Footer/>
</main>








</div>

)}