const args = process.argv.slice(2);

for (const item of args) {
    let dayString: string;

    // allows you to supply 'Day1' or just '1' as the argument
    if (isNaN(parseInt(item, 10))) {
        dayString = item;
    } else {
        dayString = `Day${item}`;
    }

    // dynamically import the day and run both of the parts
    import(`${__dirname}/${dayString}/${dayString}`).then((day) => {
        const dayObject = new day[dayString]();
        dayObject.part1();
        dayObject.part2();
    });
}
