import express from 'express';
import getClients from '../controllers/getClients.controller';
import clientRegistration from '../controllers/clientRegistration.controller';
import validateCpf from '../middlewares/validateCpf.middleware';
import updateClient from '../controllers/updateClient.controller';
import deleteClient from '../controllers/deleteClient.controller';

const router = express.Router();

router.get('/clients', getClients);
router.post('/registration', validateCpf, clientRegistration);
router.patch('/update/:findCpf', updateClient);
router.delete('/delete/:findCpf', deleteClient);

export default router;