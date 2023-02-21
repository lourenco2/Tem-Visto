const {Router} = require("express")
const router = Router()

const {getLocalizacao} = require("../controllers/localizacaoController")
const {getLocalizacaoid} = require("../controllers/localizacaoController")
const {postLocalizacao} = require("../controllers/localizacaoController")
const {patchLocalizacao} = require("../controllers/localizacaoController")
const {deleteLocalizacao} = require("../controllers/localizacaoController")


router.get('/', getLocalizacao)

router.post('/', postLocalizacao)

router.patch('/', patchLocalizacao)

router.delete('/', deleteLocalizacao)

module.exports = router