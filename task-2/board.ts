const makeChess = () => {
    let chessWrap = '';
    let chessBlock = '';

    for(let i = 0; i < 8; i++) {
        let chessStr = '';
        for (let j = 0; j < 8; j++) {
            if((i + j) % 2 === 0) {
                chessBlock = '  ';
            } else {
                chessBlock = '██';
            }
            chessStr += chessBlock;
        }
        chessWrap += chessStr + '\n';
    }
    return chessWrap;
};
console.log(makeChess());