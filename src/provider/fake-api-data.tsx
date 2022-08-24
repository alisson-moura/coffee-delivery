export type Data = {
  title: string
  description: string
  types: string[]
  img: string
  id: number
  price: number
}

const data: Data[] = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    types: ['tradicional'],
    img: './src/assets/coffees/expresso-tradicional.svg',
    price: 9.90
  },
  {
    id: 2,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    types: ['tradicional'],
    img: './src/assets/coffees/expresso-americano.svg',
    price: 5.90
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    types: ['tradicional'],
    img: './src/assets/coffees/expresso-cremoso.svg',
    price: 10.50
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    types: ['tradicional', 'gelado'],
    img: './src/assets/coffees/expresso-gelado.svg',
    price: 9.90
  },
  {
    id: 5,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    types: ['tradicional', 'com leite'],
    img: './src/assets/coffees/cafe-leite.svg',
    price: 10.00
  },
  {
    id: 6,
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    types: ['tradicional', 'com leite'],
    img: './src/assets/coffees/latte.svg',
    price: 12.50
  },
  {
    id: 7,
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    types: ['tradicional', 'com leite'],
    img: './src/assets/coffees/capuccino.svg',
    price: 15.00
  },
  {
    id: 8,
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    types: ['tradicional', 'com leite'],
    img: './src/assets/coffees/macchiato.svg',
    price: 15.00
  }
]

export function getAllData () {
  return data
}
export function filterProduct (id: number): Data | undefined {
  return data.find(d => d.id === id)
}

type Item = {
  product_id: number
  amount: number
}
interface Request {
  items: Item[]
  cep: string
  address: string
  number: string
  district: string
  city: string
  uf: string
  payment: string
  complement?: string
}

interface Response {
  status: number
}

export async function sendRequest (requests: Request): Promise<Response> {
  const timeout = new Promise((resolve, reject) => setTimeout(() => { resolve(null) }, 3000))
  await timeout
  return { status: 200 }
}
