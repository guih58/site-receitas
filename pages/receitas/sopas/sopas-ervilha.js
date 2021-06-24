import Recipe from "../../../components/Recipe/Recipe"

export default function sopaErvilha(){
    return(
        <div>
            <Recipe
            name="Sopa de ervilha"
            picture="https://img.itdg.com.br/tdg/images/recipes/000/147/490/354640/354640_original.jpg?mode=crop&width=710&height=400"
            time="25 MIN"
            servings="10 porções"
            >
             <h2>Ingredientes</h2>
             <ul>
                 <li>500 g de ervilha desidratada (1 pacote)</li>
                 <li>1 cebola grande picada</li>
                 <li>2 dentes de alho amassados</li>
                 <li>2 Cenouras médias picadas</li>
             </ul>
             <h2>Mode de prepraro</h2>
             <ol>
                 <li>Lavar bem a ervilha e deixar de molho por 5 minutos em água</li>
                 <li>Picar a cenoura e a batata e reservar.</li>
                 <li>Em uma panela de pressão grande colocar o azeite ou óleo e fritar a cebola e o alho até ficarem dourados.</li>
             </ol>
            </Recipe>
        </div>
    )
}