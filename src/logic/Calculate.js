function updateState(obj, name) {
  if (isNaN(Number(name)) && name !== ".") {
    state.updateOperation(name, obj);
  } else {
    state.operands(name, obj);
  }
  //console.log(obj);
  return obj;
}

let ops = {
  "+": (num1, num2) => {
    let id1 = num1.indexOf(".");
    let id2 = num2.indexOf(".");
    if (id1 !== -1) id1 = num1.length - 1 - id1;
    if (id2 !== -1) id2 = num2.length - 1 - id2;
    id1 = id1 >= id2 ? id1 : id2;
    num1 = Number(num1);
    num2 = Number(num2);
    let num3 = num1 + num2;
    if (id1 !== -1) {
      num3 = num3.toFixed(id1).toString();

      let flag = 0;
      for (let i = num3.indexOf(".") + 1; i < num3.length; i++) {
        if (num3[i] !== "0") {
          flag++;
          break;
        }
      }
      if (!flag) return num3.substr(0, num3.indexOf("."));
      else return num3;
    } else return num3.toString();
    //return num1 + num2;
  },
  "*": (num1, num2) => {
    let id1 = num1.indexOf(".");
    let id2 = num2.indexOf(".");
    if (id1 !== -1) id1 = num1.length - 1 - id1;
    else id1 = 0;
    if (id2 !== -1) id2 = num2.length - 1 - id2;
    else id2 = 0;
    id1 = id1 + id2;
    let num3 = num1 * num2;
    if (id1) {
      num3 = num3.toFixed(id1).toString();
      let flag = 0;
      for (let i = num3.indexOf(".") + 1; i < num3.length; i++) {
        if (num3[i] !== "0") {
          flag++;
          break;
        }
      }
      if (!flag) return num3.substr(0, num3.indexOf("."));
      else return num3;
    } else return num3.toString();
  },
  "/": (num1, num2) => (num2 == 0 ? "Err" : (num1 / num2).toString()),

  "-": (num1, num2) => {
    let id1 = num1.indexOf(".");
    let id2 = num2.indexOf(".");
    if (id1 !== -1) id1 = num1.length - 1 - id1;
    if (id2 !== -1) id2 = num2.length - 1 - id2;
    id1 = id1 >= id2 ? id1 : id2;
    num1 = Number(num1);
    num2 = Number(num2);
    let num3 = num1 - num2;
    if (id1 !== -1) {
      num3 = num3.toFixed(id1).toString();
      let flag = 0;
      for (let i = num3.indexOf(".") + 1; i < num3.length; i++) {
        if (num3[i] !== "0") {
          flag++;
          break;
        }
      }
      if (!flag) return num3.substr(0, num3.indexOf("."));
      else return num3;
    } else return num3.toString();
  },
  "%": (num1, num2) => (Number(num1) % Number(num2)).toString(),
  Usqrt: num1 => Math.sqrt(num1),
  AC: obj => {
    obj.op1 = "0";
    obj.op2 = obj.operation = null;
  },
  CE: str => str.substr(0, str.length - 1),
  calculate: (obj, name) => {
    if (!name) obj.op1 = "" + ops[obj.operation](obj.op2, obj.op1);
    else obj.op1 = "" + ops[name](Number(obj.op1));
  }
};

let state = {
  next_op: 1,
  // warning: false,
  //done: false,
  operands: (name, obj) => {
    //  if (!state.warning) {
    if (state.next_op) {
      if (name === ".") obj.op1 = "0.";
      else obj.op1 = name;
      state.next_op = 0;
    } else {
      if (obj.op1 === null) {
        if (name === ".") obj.op1 = "0.";
        else obj.op1 = name;
      } else obj.op1 = obj.op1 + name;
    }
    // }
  },
  updateOperation: (name, obj) => {
    // if (!state.warning || name === "AC" || name === "Delete") {
    if (name === "AC") {
      ops[name](obj);
      state.next_op = 1;
    } else if (name === "=" || name === "Enter") {
      //console.log(name);
      if (!state.next_op && obj.operation) {
        ops.calculate(obj);
        // if (obj.op1 === "Err") state.warning = true;
      } else if (state.next_op && obj.operation) obj.op1 = obj.op2;
      obj.op2 = obj.operation = null;
      state.next_op = 1;
    } else if (name === "CE") {
      //  if (obj.op1)
      obj.op1 = ops[name](obj.op1);
      if (obj.op1 === "") obj.op1 = null;
    } else if (name[0] === "U") {
      if (obj.op1) ops.calculate(obj, name);
    } else {
      if (obj.operation === null) {
        obj.operation = name;
        obj.op2 = obj.op1;
        obj.op1 = null;
        state.next_op = 1;
      } else {
        if (!state.next_op) {
          ops.calculate(obj);
          if (obj.op1 === "Err") {
            obj.op2 = obj.operation = null;
            // state.warning = true;
          } else {
            obj.operation = name;
            obj.op2 = obj.op1;
            obj.op1 = null;
          }
          state.next_op = 1;
        } else {
          obj.operation = name;
          state.next_op = 1;
        }
      }
    }
    // }
  }
};

export default updateState;
