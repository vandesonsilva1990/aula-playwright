import {test} from '@playwright/test';

test.beforeEach(async({}, testInfo) => {
    if (testInfo.title === 'Criar usuário com dados válidos') {
        console.log('CRIADO USUARIO\n');
    }

});


test.afterEach(async({}, testInfo) => {
    if (testInfo.title === 'Criar usuário com dados válidos') {
        console.log(' EXCLUINDO CADASTRO!');
    }
});

test('Criar usuário com dados válidos', async() => {
    const name: string = 'Maria Silva';
    const email: string = 'maria.teste@exemple.com';
    const password: string  ='Senhateste123';
    
    console.log('Cadastro de usuário com dados válidos');
    console.log(`Nome: ${name}, Email: ${email}, Senha: ${password}\n`);

})

test('Cadastro com usuário vazio', async() => {
    const name: string = '';
    const email: string = 'maria.teste@exemple.com';
    const password: string  ='Senhateste123';
    
    console.log('Cadastro com usuário vazio');
    console.log(`Nome: ${name}, Email: ${email}, Senha: ${password}\n`);

})