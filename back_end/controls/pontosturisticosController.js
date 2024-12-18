const pontos = require('../models/pontosturisticosModel.js')

exports.getpontosturisticos = async(req, res) => {
    try {
        const pontosturisticos = await pontos.pontosturisticosModel.find();
        res.json(pontosturisticos)
        //res.send(pontosturisticos);
    }catch(error) {
        res.status(500).json({ message: error.message });

    }
}

exports.getonepontosturisticos = async (req, res) => {   
  try {;
    res.status(201).json(await pontos.pontosturisticosModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createpontosturisticos = async (req, res) => {   
    try {;
      res.status(201).json(await pontos.pontosturisticosModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updatepontosturisticos = async (req, res) => {   
    try {;
      res.status(201).json(await pontos.pontosturisticosModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deletepontosturisticos = async (req, res) => {   
    try {;
      res.status(201).json(await pontos.pontosturisticosModel.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  
  exports.getonepontosturisticosCNPJ = async (req, res) => {         
      try {

        const cpf = parseInt(req.params.id); // CPF a ser pesquisado
        const pontosturisticos = await pontos.pontosturisticosModel.findOne({ cpf: cpf }); // Procura cliente por CPF        

        if (!pontosturisticos) {
          return res.status(404).json({ message: "pontosturisticos não encontrado" });
    }

    res.status(200).json(pontosturisticos);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
  };
