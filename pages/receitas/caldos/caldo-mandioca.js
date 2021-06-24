import Recipe from '../../../components/Recipe/Recipe'


 export default function caldoMandioca(){
     return(
         <div>
             <Recipe 
             name="Caldo de Mandioca"
             picture="https://img.itdg.com.br/tdg/images/recipes/000/124/626/283922/283922_original.jpg?mode=crop&width=710&height=400"
             time="60 MIN"
             servings="12 porções"
             >
                 <h2>INGRIDIENTES</h2>
                 <ul>
                     <li>500 g de mandioca picada</li>
                     <li>600 g de chanzinha picado em cubos</li>
                     <li>1 tablete de caldo de carne</li>
                     <li>2 tablete de caldo de legumes</li>
                 </ul>
                 <h2>MODO DE PREPARO</h2>
                 <ol>
                     <li>Primeiro cozinhe a mandioca.</li>
                     <li>O ponto de cozimento é quando furar com um garfo, se não forçar já está bom.</li>
                     <li>Separe 300 g da mandioca e bata no liquidificador com um pouco de água, se ficar muito grosso complete com mais água.</li>
                     <li>O ponto bom é da textura de mel. Reserve.
</li>
                 </ol>

             </Recipe>
         </div>
     )
 }