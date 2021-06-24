import Recipe from "../../../components/Recipe/Recipe"
export default function Brigadeiro(){
    return(
        <div>
       
            <Recipe 
            name="Brigadeiro"
            picture="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg"
            time="40min"
            servings="1 porção"
            >
            <h2>Ingredientes</h2>
                        
                        <ul>
                            <li>1/2 xicara(chá) de leite</li>
                            <li>2 colheres de achocolatado</li>
                            <li>1 colher de mantega</li>
                        </ul>
                        <h2>Modo de  Preparo</h2>
                        <ol>
                            <li>em um recipiente misture todos os igridientes</li>
                            <li>Coloque na panela</li>
                            <li>No fogo medio, misture tudo</li>
                        </ol>
            </Recipe>
                        

      
        </div>
    )
}