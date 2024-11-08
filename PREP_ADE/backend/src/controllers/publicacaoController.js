import Publicacao from "../models/publicacaoModel.js";
import { literal } from "Sequelize";

export const getAll = async (request, response)=>{
try{
    //1º buscar informações de publicações
    const publicacao = await Publicacao.findAll({
        raw: true,
        attriburtes:[
            "id",
            "título",
            "local",
            "cidade",
            "imagem",
            //Add likes
        [
            literal(`(
            SELECT COUNT(*) FROM curtidas
            WHERE curtidas.publicacao_id = publicacoes.id
            AND curtidas.tipo_avaliacao = 'up'
            "Total Likes")`),],]
    })
    response.status(200).json(publicacao)
}catch(error){
console.log(error)
response.status(500).json({err:"Erro"})
}
//2º Buscar likes individualmente
//3º Buscar deslikes individualmente
//4ºBuscar comentários individualmente
};
