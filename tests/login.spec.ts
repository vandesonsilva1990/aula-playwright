import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

// test.describe('Testes de login',()=>{
//     test("Login válido redireciona para o inventário",async ({page})=>{
//         await page.goto("/");

//         await page.fill('#user-name','standard_user');
//         await page.fill('#password','secret_sauce');
//         await page.click('#login-button');

//         await expect(page).toHaveURL(/inventory/);
//         await expect(page.locator(".inventory_list")).toBeVisible(); 
//     });

//     test("Login inválido mostra mensagem de erro",async ({page})=>{
//         await page.goto("/");

//         await page.fill('#user-name','usuario_errado');
//         await page.fill('#password','senha_errada');
//         await page.click('#login-button');

//         await expect(page.locator(".error-message-container")).toBeVisible();
//     });
// });




let loginPage: LoginPage;

test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
})

test.describe('Testes de login',()=>{
    test("Login válido redireciona para o inventário",async ({page})=>{
        //Arrange
        await expect(page).toHaveTitle(/Swag Labs/);
        //Act
        await loginPage.loginWithCredentials('standard_user', 'secret_sauce')
        //Assert
        await expect(page).toHaveURL(/inventory/);
        await expect(loginPage.inventoryList).toBeVisible(); 
    });

    test("Login com usuário inválido mostra mensagem de erro",async ({page})=>{

        await loginPage.loginWithCredentials('chicoBento', 'secret_sauce')
        await expect(loginPage.error).toBeVisible();
    });
});

test( 'Tentativa de login com username vazio', async ({ page }) => {
    await loginPage.loginWithCredentials('', 'secret_sauce');
    await expect(loginPage.error).toBeVisible();
    await expect(loginPage.error).toHaveText('Epic sadface: Username is required');

})

