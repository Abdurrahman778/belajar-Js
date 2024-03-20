       // faktorial 
       function faktorialFor() {
        var inputNumber = document.getElementById("forLoop").value;
        var total = 1;
        
        if (inputNumber === "") {
            alert("isi bilangan terlebih dahulu!");
            return;
        }

        for (i = 1; i <= inputNumber; ++i) {
            total = total * i;
        }

        document.getElementById("demo").innerText = total;
        }

        // while loop

        function faktorialWhile() {
        var inputNumber = document.getElementById("whileLoop").value;
        var total = 1;

        if (inputNumber === "") {
            alert("isi bilangan terlebih dahulu!");
            return;
        }
        
        i = 1;
        while (i <= inputNumber) {
            total *= i;
            i++;
        }

        document.getElementById("while").innerText = total;
        }

        // do while loop 
        function faktorialDo() {
        var inputNumber = document.getElementById("doLoop").value;
        var total = 1;

        if (inputNumber === "") {
            alert("isi bilangan terlebih dahulu!");
            return;
        }
        
        i = 1;
        do {
            total *= i;
            i++
        } while (i <= inputNumber)

        document.getElementById("do").innerText = total;
        }
