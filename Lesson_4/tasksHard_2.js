'use strict';

{
    const revenue= +prompt('Your revenue');
            
    if (revenue >0 && revenue < 15000) {
        console.log(`Tax: ${revenue * 0.13}`);
    } else if (revenue >= 15000 && revenue < 50000) {
        console.log(`Tax: ${15000 * 0.13 + (revenue - 15000) * 0.2}`);
    } else if (revenue >= 50000) {
        console.log(`Tax: ${15000 * 0.13 + (50000 - 15000) * 0.2 + (revenue - 50000) * 0.3}`)
    } else {'Ошибка'};
}
