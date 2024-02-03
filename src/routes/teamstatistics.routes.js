const express = require("express");
const router = express.Router();
const teamstatisticsController = require ('../controllers/teamstatistics.controller');
//const { isLoggedIn } = require('../lib/auth');



router.get('/', teamstatisticsController.getListTeamstatistics);
router.post('/teamstatistics',teamstatisticsController.postTeamstatistic);
router.get('/add', teamstatisticsController.getAddTeamstatistics);
router.get('/list-teamstatistics',teamstatisticsController.getListTeamstatistics);
router.get('/delete-teamstatistics/:id',teamstatisticsController.deleteTeamstatistic);
router.get('/edit-teamstatistics/:id',teamstatisticsController.getTeamstatistic);
router.post('/edit-teamstatistics/:id',teamstatisticsController.updateTeamstatistic);


module.exports = router;