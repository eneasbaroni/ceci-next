export interface IBook {
    id: string;
    title: string;
    price: number;
}

const books = [
    {
        id: "ctb001",
        title: "Un espacio para sanar",
        price: 28000,
    },
    {
        id: "ctb002",
        title: "La magia del amor",
        price: 38000,
    },
];

export default books;
