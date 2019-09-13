class RandomGenerator {
   /**
    * Gets random String.
    * 
    * @returns random String.
    */
   static getRandomString() {
    const STRING_LENGTH = 7

    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( var i = 0; i < STRING_LENGTH; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
    }

}

module.exports = RandomGenerator