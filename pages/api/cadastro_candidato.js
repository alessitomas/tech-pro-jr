export default function addCandidato(req, res) {
  if (req.method === 'POST') {
    const formInfo = req?.body;

    console.log("formInfo", formInfo);
    return res.json({ message: "Candidato cadastrado com sucesso!" });
}

  return res.status(500).json({
     message: "Erro ao cadastrar candidato!" 

    })
 }