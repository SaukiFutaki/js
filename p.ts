type Props = {
  name: string;
  age: number;
};

const data: Props[] = [
  {
    name: "John",
    age: 25,
  },
  {
    name: "Jane",
    age: 24,
  },
];




console.log(
  data.map((item) => {
    return item.name + " " + item.age
  })
);
