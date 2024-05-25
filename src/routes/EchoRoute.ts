import express from 'express';
import { echoRequest } from '../controllers/EchoController';

const router = express.Router();

router.post('/echo', echoRequest);

export default router;