import Curtida from "../models/curtidaModel.js"
import Empresa from "../models/empresaModel.js"

export const getEmpresa = async (req, res) => {

    try{
         // 1º Buscar informações da empresa -> tabela_empresa
         //  const infoEmpresa = await Empresa.findAll({raw: true})
         //  const infoEmpresa = await Empresa.findOne({raw: true, where: {id:1}})
         const infoEmpresa = await Empresa.findByPk(1, {raw: true})
 
         // 2º Contar a quantidade de likes da tabela curtida
         const likes = await Curtida.count({
            where: {
                tipo_avaliacao: "up",
            }
         });
         // 3º Contar a quantidade de deslikes da tabela curtida

         const deslikes = await Curtida.count({
            where: {
                tipo_avaliacao: "down",
            }
         });

         infoEmpresa.likes = likes
         infoEmpresa.deslikes = deslikes
         res.status(200).json(infoEmpresa)

    } catch (error){
        console.log(error)
        res.status(500).json({ message: "Erro ao buscar dados da empresa"})
    }
}