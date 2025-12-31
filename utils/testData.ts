/**
 * Test Data Generator
 * Provides sample test data for various test scenarios
 */

export const testUsers = {
  validUser: {
    email: 'testuser@example.com',
    password: 'Test@123456',
    firstName: 'John',
    lastName: 'Doe',
  },
  invalidUser: {
    email: 'invalid@example.com',
    password: 'wrongpassword',
  },
  adminUser: {
    email: 'admin@example.com',
    password: 'Admin@123456',
    firstName: 'Admin',
    lastName: 'User',
  },
};

export const testUrls = {
  baseUrl: process.env.BASE_URL || 'https://example.com',
  loginPage: '/login',
  signupPage: '/signup',
  dashboard: '/dashboard',
  profile: '/profile',
};

export const testSelectors = {
  emailInput: 'input[name="email"]',
  passwordInput: 'input[name="password"]',
  submitButton: 'button[type="submit"]',
  loginButton: 'button:has-text("Login")',
  signupButton: 'a:has-text("Sign Up")',
};

export const testStrings = {
  successMessage: 'Login successful',
  errorMessage: 'Invalid credentials',
  welcomeText: 'Welcome',
};

/**
 * Generate random email for unique test accounts
 */
export function generateRandomEmail(prefix = 'test'): string {
  const timestamp = Date.now();
  return `${prefix}_${timestamp}@example.com`;
}

/**
 * Generate random user data
 */
export function generateRandomUser() {
  return {
    email: generateRandomEmail('user'),
    password: 'Test@123456',
    firstName: `TestUser`,
    lastName: `${Date.now()}`,
  };
}

/**
 * Delay helper for waits
 */
export async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
