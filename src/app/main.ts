// Estructuras complejas en TS y extender interfaces.
import { addProduct, productArray} from "./products/product.service";
import { faker } from "@faker-js/faker"; // FakerJS - Genera campos falsos

// Aqui se consume la interfaz

for (let i = 0; i<50; i++){
  addProduct({
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    image: faker.image.url(),
    description:faker.commerce.productDescription(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    stock: faker.datatype.number({min: 10, max: 100}),
    category:{
      id: faker.datatype.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      name: faker.commerce.department()
    },
    isNew: faker.datatype.boolean(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  });
};

console.log(productArray);
