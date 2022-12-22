const parseArgs = () => {
    const args = process.argv.slice(2);

    const pairs = args.reduce(function(result, value, index, array) {
        if (index % 2 === 0)
          result.push(array.slice(index, index + 2));
        return result;
      }, []);

    for (const pair of pairs) {
        console.log(`${pair[0].replace(/--/g, '')} is ${pair[1]}`);
    }
};

parseArgs();