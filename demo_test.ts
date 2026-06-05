import { assertEquals } from "@std/assert";
import { formattedAddition } from "./demo.ts";
import { wuerfelwurfeln, wuerfelnZusammen } from "../wuerfelfunktion.ts";


Deno.test("3 + 5 = 8", function addTest() {
  // Arrange
  const a = 3;
  const b = 5;

  // Act
  const actual = formattedAddition(a, b);

  // Assert
  assertEquals(actual, "3 + 5 = 8");
});

Deno.test("3 + -5 = -2", function addTest() {
  // Given
  const a = 3;
  const b = -5;

  // When
  const actual = formattedAddition(a, b);

  // Then
  assertEquals(actual, "3 + -5 = -2");
});

Deno.test("Wurfel gibt Zahl 1 - 6", function(){

const gewuerfelteZahl = wuerfelwurfeln();

assertEquals(gewuerfelteZahl >= 1 && gewuerfelteZahl <= 6, true);


});

Deno.test("2 Wuerfel zusammen geben 2 - 12", function(){

  const gewuerfelteZahlZusammen = wuerfelnZusammen();

  assertEquals(gewuerfelteZahlZusammen >= 2 && gewuerfelteZahlZusammen <= 12, true);

});