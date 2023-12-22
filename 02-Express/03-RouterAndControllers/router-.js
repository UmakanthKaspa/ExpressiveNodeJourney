import express from 'express';

const router   =  express.Router();
// router

//without controllers
// router.get('/', (req, res) => {
//     res.send('get all routes');
// })

// router.put('/', (req, res) => {
//     res.send('update  routes');
// })
// router.delete('/', (req, res) => {
//     res.send('delete all routes');
// })
// router.post('/', (req, res) => {
//     res.send('add  routes');
// })
//with controllers
import { all_routes,post_route,delete_route,put_route } from './controllers.js';
router.get('/', all_routes)
router.put('/', put_route)
router.delete('/', delete_route)
router.post('/', post_route)
export default router