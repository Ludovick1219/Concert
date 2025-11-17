


function sumOfDistinctElements(set1, set2) {
  let sum = 0;
  let seen = new Set();

  for (let num of set1) seen.add(num), sum += num;
  for (let num of set2) if (!seen.has(num)) seen.add(num), sum += num;

  return sum;
}

console.log("Problem 1 Answer:", sumOfDistinctElements([3,1,7,9], [2,4,1,9,3])); // 26


function dotProduct(v1, v2) {
  let sum = 0;
  for (let i = 0; i < v1.length; i++) sum += v1[i] * v2[i];
  return sum;
}

const testPairs = [
  [[1, 2], [2, -1]],
  [[3, 4], [5, 6]],
  [[0, 5], [8, 0]]
];

console.log("\nProblem 2 - Orthogonal Check:");
testPairs.forEach((pair, i) => {
  const result = dotProduct(pair[0], pair[1]);
  console.log(`Pair ${i+1}: Dot = ${result} → ${result === 0 ? "ORTHOGONAL ✓" : "Not orthogonal"}`);
});