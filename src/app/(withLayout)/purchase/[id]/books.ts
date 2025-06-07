export interface IBook {
    id: string;
    title: string;
    price: number;
}

const books = [
    {
        id: "ctb001",
        title: "Un espacio para sanar",
        price: 20000,
    },
    {
        id: "ctb002",
        title: "La magia del amor",
        price: 30000,
    },
];

export default books;
