class Abstract {
    add(a, b) {}
    diff(a, b) {}
    mult(a, b) {}
    divide(a, b) {}
}

class User{

    // any_a(){
    //     let a = window.prompt("Enter a:");
    //     let b = window.prompt("Enter b:");
    //     return parseInt(a,b);

    // }

    any(vn){
        return parseInt(prompt("Enter "+vn+":"))
    }

    // any_b(){
    //     let b = window.prompt("Enter b:");
    //     return parseInt(b);
    // }
}

class Choise{
    choise(){
        window.alert("Яку дію ви хочете зробити? 1-додати, 2-відняти, 3-помножити, 4-поділити.");
        const answer = window.prompt('Enter number: ');
        if(answer){
            let first = new User();
            const a = first.any("a");
            const b = first.any("b");
            const an = new Calc_Junior();

            switch(answer){
                case "1":
                    return an.add(a,b);
                case "2":
                    return an.diff(a,b);
                case "3":
                    return an.mult(a,b);
                case "4":
                    return an.divide(a,b);
            }
        }
         else{
            window.alert('Enter number');
        }
    }
    
}

class Calc extends Abstract{
    
    add(a, b){
        return a + b;
    }
    
    diff(a, b){
        return a - b;
    }

    mult(a, b){
        return a * b;
    }

    divide(a, b){
        return a / b;
    }
}

class Calc_Junior extends Calc{

}

const end = new Choise();
const ok = end.choise();
console.log(ok);

//let a = prompt("Action? 1 , 2 , 3 , 4"); x= prompt("X: "); y=prompt("Y: "); alert(eval("x"+["+","-","*","/"][a]+"y"))