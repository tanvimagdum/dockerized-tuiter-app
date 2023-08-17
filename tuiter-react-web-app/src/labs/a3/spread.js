function Spread() {
    const arr1 = [ 1, 2, 3 ];
    const arr2 = [ ...arr1, 4, 5, 6 ];
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { ...obj1, d: 4, e: 5, f: 6 };
    const obj3 = { ...obj1, b: 4 };


    // const qwe = { asd: 123, sdf: 234 }
    // const zxc = { sdf: 345, ...qwe, asd: 456, zxc: 567 }
    // const { sdf, asd } = zxc
    // console.log(asd)
    // console.log(sdf)

    // const r = [123, 234, 345, 456]
    // const v = [...r, r[0]]
    // console.log(v)

    const qwe = 456
    const asd = 456
    const zxc = [321, qwe, 432, asd, 321]
    const [ewq, rew] = zxc
    console.log(ewq)
    console.log(rew)

    const a = {a: 567, b: 654}
    const b = {...a, z: 654, b: 543}
    console.log(b);



    return (
      <div>
        <h2>Spread Operator</h2>
        <h3>Array Spread</h3>
        arr1 = { JSON.stringify(arr1) }  <br />
        arr2 = { JSON.stringify(arr2) }  <br />
        <h3>Object Spread</h3>
        { JSON.stringify(obj1) }         <br />
        { JSON.stringify(obj2) }         <br />
        { JSON.stringify(obj3) }         <br />
      </div>
    );
}
export default Spread;
   
   