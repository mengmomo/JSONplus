registerTest(
    "15.12.3",
    "15.12.3-5-b-i-1.js",
    "JSON.stringify converts String wrapper object space aruguments to String values",
    function testcase() {
        var obj = { a1: { b1: [1, 2, 3, 4], b2: { c1: 1, c2: 2} }, a2: 'a2' };
        return JSON.stringify(obj, null, new String('xxx')) === JSON.stringify(obj, null, 'xxx');
    }
);