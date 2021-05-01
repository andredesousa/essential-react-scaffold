describe('React app', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000');
  });

  it('should contains "Learn React" text in the page', async () => {
    await expect(page).toMatch('Learn React');
  });

  it('should match an anchor with "Learn React" text', async () => {
    await expect(page).toMatchElement('.app-link', { text: 'Learn React' });
  });
});
