const decoder = new TextDecoder("utf-8");
const data = await Deno.readFile("./day-1/day-1.txt");
const lists = decoder.decode(data);
// const exampleList = `3   4
// 4   3
// 2   5
// 1   3
// 3   9
// 3   3`;

const parseAndSortLists = (listsString: string) => {
  const listOne: number[] = [];
  const listTwo: number[] = [];

  listsString.split("\n").forEach((pair) => {
    const [firstNumber, secondNumber] = pair.split(/\s+/);
    listOne.push(Number(firstNumber));
    listTwo.push(Number(secondNumber));
  });

  return [listOne.sort(), listTwo.sort()];
};

const findTotalDistanceFromLists = (listString: string) => {
  const [listOne, listTwo] = parseAndSortLists(listString);

  return listOne.reduce(
    (acc, number, index) => acc + Math.abs(number - listTwo[index]),
    0,
  );
};

const findDuplicateAmounts = (listString: string) => {
  const [listOne, listTwo] = parseAndSortLists(listString);

  const listTwoDuplicateCounts = new Map();

  listTwo.forEach((number) => {
    listTwoDuplicateCounts.set(
      number,
      listTwoDuplicateCounts.get(number) + 1 || 1,
    );
  });

  return listOne.reduce((acc, number) => {
    return acc + (number * listTwoDuplicateCounts.get(number) || 0);
  }, 0);
};

console.log("Part 1 answer:", findTotalDistanceFromLists(lists));
console.log("Part 2 answer:", findDuplicateAmounts(lists));
