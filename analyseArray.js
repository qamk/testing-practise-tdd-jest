const analyseArray = () => {
  let min, max, length;
  let mean = 0;
  let ignored = [];

  const updateMin = (data) => {
    if ( min === undefined ) {
      min = data;
      return;
    }

    min = (min < data) ? min : data;
  }

  const updateMax = (data) => {
    if ( max === undefined ) {
      max = data;
      return;
    }

    max = (max > data) ? max : data;
  }

  // Number.EPSILON is used for greater precision
  // Here we go from something like:
    // 24.58913 (* 100)--> 2458.913
    //          (Math.round)--> 2458
    //          (/ 100)--> 24.58
  // So it keeps the two decimal places :-)
  // To vary it just multiply and divide by 10^x where x is the number of d.p. (pass it into the function)

  // Rounds value to 2 d.p.
  const twoDP = (value) => Math.round((value + Number.EPSILON) * 100) / 100;

  const updateMean = (data) => {
    // console.log(`Mean eq: ${mean} + ${twoDP(data / length)} 2 d.p. \n\t(where ${data} / ${length} = ${(data / length)})`);
    mean += data;
  }

  const updateIgnored = (data) => {
    ignored.push(data);
  }

  const validData = (data) => {
    const asANumber = Number(data);

    return !isNaN(asANumber);
  }

  const updateStats = (data) => {
    data = Number(data);
    updateMin(data);
    updateMax(data);
    updateMean(data);
    return true;
  }

  const noData = () => {
    return { min: NaN, max: NaN, mean: NaN, length: NaN }
  }

  const run = (data) => {
    length = data.length;
    if (length === 0) { return noData }

    for (let datum of data) {
      const valid = validData(datum) && updateStats(datum);

      // console.log('Mean:', mean, "\nData:", datum, "\nLength:", length);
      if ( valid ) continue
      
      updateIgnored(datum);
      length -= 1;
    }
    
    mean = (mean / length);
    return { mean: twoDP(mean), min: min, max: max, length: length, ignored: ignored }
  }

  return { run }
};

module.exports = analyseArray;