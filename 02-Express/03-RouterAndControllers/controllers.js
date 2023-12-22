import express from 'express';

// const all_routes  = (req, res) => {
//     res.send('get all routes');
// }
const all_routes  = (req, res) => res.send('get all routes');
const put_route = (req, res) => res.send('update  routes');
const delete_route = (req, res) => res.send('delete all routes');
const post_route = (req, res) => res.send('add  routes');

export {all_routes, put_route, delete_route, post_route}