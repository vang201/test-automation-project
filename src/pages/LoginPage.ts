import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.submitButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.error-message');
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'networkidle' }),
      this.submitButton.click()
    ]);
  }

  async expectError(message: string) {
    await this.errorMessage.waitFor({ state: 'visible' });
    await this.errorMessage.waitFor();
    const txt = await this.errorMessage.textContent();
    if (!txt?.includes(message)) {
      throw new Error(`Expected error containing "${message}" but got "${txt}"`);
    }
  }
}
