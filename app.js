function split() {
    let hours = [];
    let minutes = [];
    let secs = [];
    let time = ['02:59:59', '02:15:59', '02:10:05', '02:50:15', '02:15:15']

    time.forEach(element => {
        let spl = element.split(':');

        let h = parseFloat(spl[0]);
        hours.push(h);

        let m = parseFloat(spl[1]);
        minutes.push(m);

        let s = parseFloat(spl[2]);
        secs.push(s);

    });

    console.log(hours);
    console.log(minutes);
    console.log(secs);


    function sums(secs) {
        let totals = 0;
        for (let s in secs) {
            totals += secs[s];
        }
        return totals;
    }
    console.log(sums(secs));
    let ress = (sums(secs) % 60);
    let ints = Math.floor(sums(secs) / 60);
    console.log(ress);
    console.log(ints);



    function summ(minutes) {
        let totalm = 0 + ints;
        for (let m in minutes) {
            totalm += minutes[m];
        }
        return totalm;
    }
    console.log(summ(minutes));
    let resm = (summ(minutes) % 60);
    let intm = Math.floor(summ(minutes) / 60);
    console.log(resm);
    console.log(intm);




    function sumh(hours) {
        let totalh = 0 + intm;
        for (let h in hours) {
            totalh += hours[h];
        }
        return totalh;
    }
    console.log(sumh(hours));


    document.getElementById('total').innerHTML = sumh(hours) + ' hours ' + intm + ' minutes ' + ress + ' seconds ';




    //     let three = toString(sums(secs));
    //     let two =  toString(summ(minutes));
    //     let one = toString(sumh(hours));
    //     let finalTime = one + two + three;
    //     console.log(finalTime);
    //    document.getElementById('total').innerHTML= finalTime;
}


