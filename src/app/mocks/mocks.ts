import { MenuItem } from "../@types/types";

export const menu: MenuItem[] = [
  {
    id: 1,
    name: "Pizza Média",
    price: 35,
    image:
      "https://media.istockphoto.com/id/1442417585/pt/foto/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=o6JHC-n7sm95A2alD5UqO_EKM0e6JgxfxgsSeKEqNtQ=",
    category: "pizzas",
  },
  {
    id: 2,
    name: "Pizza Grande",
    price: 45,
    image:
      "https://media.istockphoto.com/id/1442417585/pt/foto/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=o6JHC-n7sm95A2alD5UqO_EKM0e6JgxfxgsSeKEqNtQ=",
    category: "pizzas",
  },
  {
    id: 3,
    name: "Pizza Família",
    price: 60,
    image:
      "https://media.istockphoto.com/id/1442417585/pt/foto/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=o6JHC-n7sm95A2alD5UqO_EKM0e6JgxfxgsSeKEqNtQ=",
    category: "pizzas",
  },
  {
    id: 4,
    name: "Cheddar Burguer",
    price: 15,
    image:
      "https://minhasreceitinhas.com.br/wp-content/uploads/2016/12/hamburguer.jpg",
    category: "hamburgers",
  },
  {
    id: 5,
    name: "X-Bacon",
    price: 18,
    image: "https://embutidosbonatti.ind.br/temp/BIN_57_V9Fb0BwK.jpg",
    category: "hamburgers",
  },
  {
    id: 6,
    name: "X-Calabresa",
    price: 18,
    image:
      "https://nobelhamburgueria.zapdeliveries.com.br/_core/_uploads//2024/05/1232040524fiac699c3d.jpg",
    category: "hamburgers",
  },
  {
    id: 7,
    name: "X-Tudo",
    price: 22,
    image:
      "https://www.estadao.com.br/resizer/wFBjQhfZWvaU8hzdRi7NOC0aJyg=/arc-anglerfish-arc2-prod-estadao/public/67M2WACSBBE6JC7WTDNSU2RGCE.jpg",
    category: "hamburgers",
  },
  {
    id: 8,
    name: "Batata Simples",
    price: 15,
    image:
      "https://marmitexdesucesso.com.br/wp-content/uploads/2024/10/1-kg-de-batata-frita-serve-quantas-pessoas-1200x900.jpg",
    category: "batatas",
  },
  {
    id: 9,
    name: "Batata Especial",
    price: 20,
    image:
      "https://www.paollarestaurante.com.br/uploads/images/2019/08/batata-palito-especial-1565054508.jpg",
    category: "batatas",
  },
  {
    id: 10,
    name: "Espetinho Completo",
    price: 20,
    image:
      "https://curtamais.com.br/uploads/midias/b9757291d352d09d731e2a0dcaf95cc7.jpg",
    category: "churrascos",
  },
  {
    id: 11,
    name: "Espetinho Simples",
    price: 15,
    image:
      "https://minervafoods.com/wp-content/uploads/2022/12/espetinho_bovino_-_blog-3.jpg",
    category: "churrascos",
  },
  {
    id: 12,
    name: "Açaí 500ml",
    price: 20,
    image:
      "https://static.itdg.com.br/images/1200-630/5bc51417bb232f6f73993623c7b6cfc8/284459-original.jpg",
    category: "acais",
  },
  {
    id: 1,
    name: "Refrigerante 2L",
    image:
      "https://lembreiquetem.com.br/wp-content/uploads/2024/12/COCA-COLA-2-LITROS-REFRIGERANTE-GRANDE-LEMBREI-QUE-TEM-SJC-SP-7894900027013.png",
    price: 15.0,
    category: "bebidas",
  },
  {
    id: 2,
    name: "Refrigerante 1L",
    image:
      "https://mercantilatacado.vtexassets.com/arquivos/ids/168732/653fe3aa752720c144887a26.jpg?v=638342826765970000",
    price: 10.0,
    category: "bebidas",
  },
  {
    id: 3,
    name: "Refrigerante lata",
    image:
      "https://boa.vtexassets.com/arquivos/ids/575048/Refrigerante-Original-Coca-Cola-Lata-350ml.jpg?v=638550499528830000",
    price: 5.0,
    category: "bebidas",
  },
  {
    id: 4,
    name: "Sucos",
    image:
      "https://www.receiteria.com.br/wp-content/uploads/receitas-de-sucos.jpg",
    price: 7.0,
    category: "bebidas",
  },
];

export const pizzaFlavors = [
  {
    id: 1,
    nome: "Moda da Casa",
    descricao:
      "Queijo, presunto, frango, calabresa, azeitona, cebola, tomate, milho, pimentão e orégano",
  },
  {
    id: 2,
    nome: "Portuguesa",
    descricao:
      "Queijo, ovo, presunto, tomate, molho barbecue, azeitona, milho verde e orégano",
  },
  {
    id: 3,
    nome: "Bacon",
    descricao:
      "Queijo, bacon, pimentão, azeitona, milho verde, cebola e orégano",
  },
  {
    id: 4,
    nome: "Calabresa",
    descricao: "Queijo, calabresa, cebola, azeitona, milho verde e orégano",
  },
  {
    id: 5,
    nome: "Frango com Catupiry",
    descricao:
      "Queijo, frango, catupiry, cebola, azeitona, tomate, milho verde e orégano",
  },
  {
    id: 6,
    nome: "Frango ao Creme",
    descricao:
      "Queijo, frango ao creme, azeitona, tomate, milho verde e orégano",
  },
  {
    id: 7,
    nome: "Carne de Sol",
    descricao:
      "Queijo, carne de sol, azeitona, cebola, tomate, milho verde e orégano",
  },
];

export const categories = [
  { id: "pizzas", name: "🍕 PIZZA" },
  { id: "hamburgers", name: "🍔 HAMBÚRGUER" },
  { id: "batatas", name: "🍟 BATATA FRITA" },
  { id: "churrascos", name: "🍢 ESPETINHO" },
  { id: "acais", name: "🥣 AÇAÍ NA TIGELA" },
  { id: "bebidas", name: "🍺 BEBIDAS" },
];
