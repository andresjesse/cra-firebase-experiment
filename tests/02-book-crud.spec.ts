import { test, expect, Page } from "@playwright/test";

test.describe("book crud", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/login");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL(/.*admin/);

    await deleteAllBooks(page);
  });

  test("can create and delete a book", async ({ page }) => {
    await page.goto("http://localhost:3000/admin/books");
    await page.getByRole("link", { name: "Create" }).click();
    await page.getByRole("button", { name: "Create a random Book" }).click();

    await expect(page.getByText('"title":"Titlw 1"')).toHaveCount(1);

    await deleteAllBooks(page);

    await expect(page.getByText('"title":"Titlw 1"')).toHaveCount(0);
  });
});

async function deleteAllBooks(page: Page) {
  await page.goto("http://localhost:3000/admin/books");
  //wait for loading..
  await page.waitForTimeout(1000);

  const bts = await page.getByRole("button", { name: "Remove" }).all();
  const count = bts.length;

  for (let i = 0; i < count; i++) {
    await bts[0].click();
  }
}
