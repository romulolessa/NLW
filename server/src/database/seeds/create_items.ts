import knex from 'knex';

export async function seed(knex: knex){
  await knex( 'items').insert([
    {title: 'Lâmpada', image: 'lampadas.svg'},
    {title: 'Pilhas e Baterias', image: 'baterias.svg'},
    {title: 'Papéis e Papelão', image: 'papeis-papelao.svg'},
    {title: 'Residuos Eletronicos', image: 'eletronicos.svg'},
    {title: 'Residos Organicos', image: 'organicos.svg'},
    {title: 'Oleo de Cozinha', image: 'oleo.svg'}
  ]);
}