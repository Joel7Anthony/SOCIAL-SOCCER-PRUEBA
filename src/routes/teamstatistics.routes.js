const express = require("express");
const router = express.Router();
const teamstatisticsController = require ('../controllers/teamstatistics.controller');
//const { isLoggedIn } = require('../lib/auth');
const photoTeamstatisticsController = require('../controllers/photoTeamstatistics.controller.js')



router.get('/', teamstatisticsController.getListTeamstatistics);
router.post('/teamstatistics',teamstatisticsController.postTeamstatistic);
router.get('/add', teamstatisticsController.getAddTeamstatistics);
router.get('/list-teamstatistics',teamstatisticsController.getListTeamstatistics);
router.get('/delete-teamstatistics/:id',teamstatisticsController.deleteTeamstatistic);
router.get('/edit-teamstatistics/:id',teamstatisticsController.getTeamstatistic);
router.post('/edit-teamstatistics/:id',teamstatisticsController.updateTeamstatistic);

router.post('/photo-teamstatistics/:id',  photoTeamstatisticsController.updatePhoto);
module.exports = router;