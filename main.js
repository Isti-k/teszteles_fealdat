import { tesztesetem_fuggvenyemhez } from "./teszt.js";

export function fuggvenyem(szam) {
  let x = 0;
  while (szam != 0) {
    let y = szam % 10; 
    x = x * 10 + y;  
    szam=Number.parseInt(szam / 10)
  
  }
  return x
}

tesztesetem_fuggvenyemhez()