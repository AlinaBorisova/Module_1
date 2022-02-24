'use strict';

{
    const Revenue= +prompt('Your revenue');
            
    if (Revenue >0 && Revenue < 15000) {
        console.log(`Tax: ${Revenue * 0.13}`);
    } else if (Revenue >= 15000 && Revenue < 50000) {
        console.log(`Tax: ${15000 * 0.13 + (Revenue - 15000) * 0.2}`);
    } else if (Revenue >= 50000) {
        console.log(`Tax: ${15000 * 0.13 + (50000 - 15000) * 0.2 + (Revenue - 50000) * 0.3}`)
    } else {'Ошибка'};
}
