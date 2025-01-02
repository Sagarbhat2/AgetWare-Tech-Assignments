function combineLists(list1) {
    const combinedList = [];
    let i = 0;
    let j = 1;

    while (i < list1.length - 1) {
        const elem1 = list1[i];
        const elem2 = list1[j];

        const mid1 = (elem1.positions[0] + elem1.positions[1]) / 2;
        const mid2 = (elem2.positions[0] + elem2.positions[1]) / 2;

        if (
            (mid1 >= elem2.positions[0] && mid1 <= elem2.positions[1]) ||
            (mid2 >= elem1.positions[0] && mid2 <= elem1.positions[1])
        ) {
            combinedList.push({
                positions: [
                    Math.min(elem1.positions[0], elem2.positions[0]),
                    Math.max(elem1.positions[1], elem2.positions[1]),
                ],
                values: [...elem1.values, ...elem2.values],
            });
            i++;
            j++;
        } else {
            combinedList.push(elem1);
            i++;
        }

        if (j >= list1.length) {
            i++;
            j = i + 1;
        }
    }

    if (i < list1.length) {
        combinedList.push(list1[i]);
    }

    return combinedList;
}

const list1 = [
    { positions: [1, 8], values: [10, 20, 50, 60, 30, 40] },
    { positions: [7, 10], values: [70, 80] },
];

const combinedList = combineLists(list1);
console.log(combinedList);