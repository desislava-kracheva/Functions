function solve (m, n ){

    let result = m;
    for(let i = 1; i< n; i++){
    
        result *= m;
    }
    console.log(result);
    
    }

    solve(2,8)
      