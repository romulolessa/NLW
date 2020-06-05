import express from 'express';
import knex from './database/connection';


const routes = express.Router();

routes.get('/items', async(request, response)=>{
  const items = await knex('items').select('*');

  const serializedItems = items.map( item => {
    return {
      title: item.title,
      image_url: `http://localhost:3333/uploads/${ item.image }`,
    }
  })

  return response.json(serializedItems);
});

routes.post('/points', async(request, response)=>{
  const  {
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    cidade,
    uf,
    items
  } = request.body;

  await knex('points').insert({
    image: 'image-fake',
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    cidade,
    uf
  });

  return response.json({sucess: true})
})

export default routes;