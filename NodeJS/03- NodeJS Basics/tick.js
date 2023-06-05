const { pbkdf2 } = require('crypto');
const start = Date.now();

const hash1 = () => {
    pbkdf2('password', '##', 10, 100, 'sha256', () => {
        console.log('Hash1:', Date.now() - start);
    });
};

const ecrypt = () => {
    pbkdf2('password', '##', 10000, 1000, 'sha256', () => {
        console.log('Ecrypt:', Date.now() - start);
    });
};

ecrypt(); // this will take more time than hash1() because of the number of iterations. >> 10000 >> so it will be a pending callback.
hash1();
hash1();
setImmediate(() => { // setImmediate() is a special function that runs a callback at the end of the current loop or on the next loop iteration, after I/O events.
    console.log('Immediate:', Date.now() - start);
}, 'Immediate');
process.nextTick(() => { // is similar, but it runs the callback before any I/O events (the highest priority).
    console.log('Next Tick:', Date.now() - start);
});
hash1();
hash1();


/*
        process.nextTick() vs setImmediate():
        process.nextTick() fires immediately on the same phase
        setImmediate() fires on the following iteration or 'tick' of the event loop

        In essence, the names should be swapped. process.nextTick() fires more
        immediately than setImmediate()
*/


// Please look at microsoft whiteboard for the diagram of tick loop

// Note: the priorities of the event loop is on the level of one loop tick, not on the level of whole evet loop ..