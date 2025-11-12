import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { validUser, invalidUser } from '../utils/test-data';

const BASE_URL = process.env.BASE_URL ?? 'https://example.com';

test.describe('Login flow', () => {
  test('should show error with invalid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto(`${BASE_URL}/login`);
    await login.login(invalidUser.username, invalidUser.password);
    await login.expectError('Invalid credentials');
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto(`${BASE_URL}/login`);
    await login.login(validUser.username, validUser.password);
    // Example assertion — adapt to the SUT
    await expect(page).toHaveURL(`${BASE_URL}/dashboard`);
    await expect(page.locator('text=Welcome')).toBeVisible();
  });
});
