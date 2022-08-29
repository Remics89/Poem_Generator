describe("Romance", () => {
    it("is a function?", () => {
        expect(typeof generateWordPairs).toEqual("function");
    });

    it("builds a markov chain object", () => {
        let returnedValue = wordPairs;
        expect(returnedValue).toEqual({
            you: ['need'],
            need: ['my', 'my', 'my', 'my'],
            my: ['love', 'cell', 'love', 'love'],
            love: ['and', 'call', 'call'],
            and:['me'],
            me: ['on', 'we', 'on'],
            on: ['me', 'the'],
            we: ['just'],
            just: ['dont', 'dont'],
            dont: ['need', 'need'],
            cell: ['phone'],
            phone: ['late'],
            late: ['night'],
            night: ['need'],
            call: ['me', 'me'],
            the: ['city'],
            city: ['used'],
            used: ['to'],
            to: ['always'],
            always: ['stay'],
            stay: ['at'],
            at: ['that'],
            that: ['can'],
            can: ['only'],
            only: ['mean'],
            mean: ['just'],
        });
    });
});



