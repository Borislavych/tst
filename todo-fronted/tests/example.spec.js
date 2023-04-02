// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page.getByTestId('title-home-page')).toHaveText('Todo App');
  await page.getByTestId('add-title').type('123');
  await page.getByTestId('add-description').type('456');
  await page.getByTestId('button-add-todo').click();
  //КАКОГО ХУЯ ОН С ПЕРВОГО РАЗА НЕ ПРОКЛИКИВАЕТСЯ БЛЯТЬ???
  await page.getByTestId('button-add-todo').click();
  await page.getByTestId('button-delete').click();
  await expect(page.getByTestId('text-no-todo')).toHaveText('Sorry! No Todos Found.');

});

