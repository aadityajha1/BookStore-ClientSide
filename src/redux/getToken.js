import Cookies from "js-cookie";
import { secretKey } from "../shared/config";
var CryptoJs = require("crypto-js");

var ciphertext = Cookies.get("token");
// var bytes = ;

if (ciphertext) {
  var result = CryptoJs.AES.decrypt(ciphertext, secretKey).toString(
    CryptoJs.enc.Utf8
  );
}

export const token = result;
