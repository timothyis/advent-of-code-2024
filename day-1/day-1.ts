const decoder = new TextDecoder("utf-8");
const data = await Deno.readFile("./day-1/day-1.txt");
const lists = decoder.decode(data);
// const exampleList = `3   4
// 4   3
// 2   5
// 1   3
// 3   9
// 3   3`;

const findTotalDistanceFromLists = (list: string) => {
  const listOne: number[] = [];
  const listTwo: number[] = [];

  list.split("\n").forEach((pair) => {
    const [firstNumber, secondNumber] = pair.split(/\s+/);
    listOne.push(Number(firstNumber));
    listTwo.push(Number(secondNumber));
  });

  listOne.sort();
  listTwo.sort();

  return listOne.reduce(
    (acc, number, index) => acc + Math.abs(number - listTwo[index]),
    0,
  );
};

console.log(findTotalDistanceFromLists(lists));
