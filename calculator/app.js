const textField = document.getElementById("textField");
const clearBtn = document.getElementById("clear");

let textFieldData = "";
let bracketsFlag = false;
let signFlag = false;
const exceptableCharacters = /\d*[+]*/;

const handleButtonData = (e) => {
  if ("()" === e) {
    if (!bracketsFlag) {
      textFieldData += "(";
      bracketsFlag = true;
    } else {
      textFieldData += ")";
      bracketsFlag = false;
    }
  } else if ("+/-" === e) {
    if (!signFlag) {
      if (
        !textFieldData.toString().includes("+") &&
        !textFieldData.toString().includes("-") &&
        !textFieldData.toString().includes("*") &&
        !textFieldData.toString().includes("/") &&
        !textFieldData.toString().includes("%")
      ) {
        textFieldData = "(-" + textFieldData;
      } else {
        textFieldData += "(-";
      }

      signFlag = true;
      bracketsFlag = true;
    } else {
      textFieldData = textFieldData.replace("(-", "");
      signFlag = false;
      bracketsFlag = false;
    }
  } else {
    textFieldData += e;
  }

  textField.value = textFieldData;
};

const clearTextFiled = () => {
  textFieldData = "";
  textField.value = "0";
};

const getResult = () => {
  try {
    textField.value = eval(textFieldData);
    textFieldData = eval(textFieldData);
  } catch (error) {
    textField.value = "Error";
    textFieldData = "";
  }
};

document.addEventListener("load", clearTextFiled);
clearBtn.addEventListener("click", clearTextFiled);
