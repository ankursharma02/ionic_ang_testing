function helloWorld() {
  return 'Hello world!';
}
describe('Hello world', () => {

  let expected = "";

  beforeEach(() => {
    expected = "Hello world!";
  });

  afterEach(() => {
    expected = "";
  });

  it('says hello', () => {
    expect(helloWorld())
        .toEqual(expected);
  });
});

describe('Hellotest',()=>{
  
  let expected;
  let notexpected;
  let expectMatch=null;
  beforeEach(()=>{
      expected="hellotest";
      notexpected="hellotest123";
      expectMatch=new RegExp(/^hello/);
  })
  afterEach(()=>
  {
      expected="";
      notexpected="";
  });
 
it('checks if hellotest is hellotest',()=>expect('hellotest').toBe(expected));
it('checks if hellotest is  not hellotest',()=>expect('hellotest').not.toBe(notexpected));
it('checks if hellotest start with hello',()=>expect('hellotest').toMatch(expectMatch))
}

});