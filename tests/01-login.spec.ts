import { test, expect } from "@playwright/test";

test("test login redirects to admin page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveURL(/.*admin/);
});
