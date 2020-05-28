function writeS() {
    let surname = document.getElementById('surname');
    let name = document.getElementById('name');
    let age = document.getElementById('age').value;
    let height = document.getElementById('height');
    let email = document.getElementById('email');
    let weight = document.getElementById('weight').value;
    let exercise2 = 15, exercise3 = 2;
    if(age>=50){
        exercise2 = 10;
        exercise3 = 1;
    }
    if(weight>=100){
        exercise2 = 5;
        exercise3 = 2;
    }
    if(age<=25 && age<=18){
        exercise3 = 3;
    }
        document.getElementById('result0').innerText = "Виконувати "+exercise3+" підходи по "+exercise2+" вправ"
            document.getElementById('result1').innerHTML = `<p><span style="color:#ff6500"><u><strong><span style="font-size:18px">Понеділка (Груди і Біцепс)</span></strong></u></span></p>
                        <p><strong><span style="font-size:16px">1. Жим на похилій лаві штанги - грудні м'язи</span></strong><br><span style="font-size:16px">1/15 і 1/15 розминка (1хв/відпочинок), 3/5-6 робочі сети (3-4 хв/відпочинок).</span></p>
                        <p><strong><span style="font-size:16px">2. Підйом на носки сидячи в тренажері - литкові м'язи</span></strong><br><span style="font-size:16px">Виконайте вправу для литок, між підходами важкої&nbsp;вправи як вставний&nbsp;сет, або зробіть в кінці тренування якщо у вас велика&nbsp;робоча&nbsp;вага. А для збільшення литок, виконайте спочатку тренування.</span><br><span style="font-size:16px">1/15 розминка (1хв /відпочинок), 3/12 робочі (2 хв/відпочинок).</span></p>
                        <p><strong><span style="font-size:16px">3. Згинання рук з гантелями на похилій лавці - біцепси</span></strong><br><span style="font-size:16px">1/15 і 1/10 розминка (1хв/відпочинок), 3/5-6 робочі (3 хв/відпочинок).</span></p>
                        <p><strong><span style="font-size:16px">4. Жим гантелей на похилій лавці- грудні м'язи</span></strong><br><span style="font-size:16px">1/15 і 1/10 розминка (1хв / відпочинок), 3/6-8 робочі (3 хв/відпочинок).</span></p>
                        <p><strong><span style="font-size:16px">5. одвійні скручування лежачи на підлозі - м'язи преса</span></strong><br><span style="font-size:16px">(Між підходами вправи 4)</span><br><span style="font-size:16px">Прес 3 сети по 12-15 повторень до відмови</span></p>
                        <p><strong><span style="font-size:16px">6. Згинання руки з 1 гаПнтелею&nbsp;на лавці - біцепси</span></strong><br><span style="font-size:16px">1/15 і 1/10 розминка (1хв/відпочинок), 3/6-8 робочі (3 хв/відпочинок).</span></p>
                        <p><strong><span style="font-size:16px">7. Віджимання на брусах - грудні м'язи</span></strong><br><span style="font-size:16px">1/15 і 1/10 розминка (1хв / відпочинок), 2/6-8 робочі (3 хв/відпочинок).</span></p>
                        <p><strong><span style="font-size:16px">8. Гіперекстензія - м'язовий корсет спини</span></strong><br><span style="font-size:16px">1/15 розминка (1хв/відпочинок), 2/12-15 робочі (3 хв/відпочинок).</span></p>`;
        document.getElementById('result2').innerHTML = `<p><span style="color:#ff6500"><span style="font-size:18px"><u><strong>Середа (Спина і Тріцепс)</strong></u></span></span></p>
                        <p><strong><span style="font-size:16px">1. Тяга вертикального блоку до підборіддя широким хватом - спина</span></strong><br><span style="font-size:16px">1/15 і 1/10 розминка (1хв/відпочинок), 3/5-6 робочі сети (3-4 хв / відпочинок).</span></p>
                        <p><strong><span style="font-size:16px">2. Розгинання рук у верхнього блоку - тріцепс</span></strong><br><span style="font-size:16px">1/15 і 1/10 розминка (1хв/відпочинок), 3/5-6 робочі сети (3-4 хв/відпочинок).</span></p>
                        <p><strong><span style="font-size:16px">3. Тяга гантелі до поясу в нахилі - спина</span></strong><br><span style="font-size:16px">1/15 і 1/10 розминка (1хв/відпочинок), 3/5-6 робочі сети (3-4 хв/відпочинок).</span></p>
                        <p><strong><span style="font-size:16px">4. Французький жим лежачи - тріцепс</span></strong><br><span style="font-size:16px">1/15 і 1/10 розминка (1хв/відпочинок), 2/10-12 робочі сети (3-4 хв/відпочинок).</span></p>
                        <p><strong><span style="font-size:16px">5. Тяга вертикального блоку вузьким зворотнім хватом - спина</span></strong><br><span style="font-size:16px">1/15 і 1/10 розминка (1хв/відпочинок), 3/5-6 робочі сети (3-4 хв/відпочинок).</span></p>
                        <p><strong><span style="font-size:16px">6. Гіперекстензія - м'язовий корсет спини</span></strong><br><span style="font-size:16px">1/15 розминка (1хв/відпочинок), 2/12-15 робочі (3 хв/відпочинок).</span></p>
                        <p><strong><span style="font-size:16px">7. Прес - підйом корпусу на римському стільці</span></strong><br><span style="font-size:16px">1/15 розминка (1хв/відпочинок), 3/10 робочі (2 хв/відпочинок).</span></p>
                        <p><strong><span style="font-size:16px">8. Литкові м'язи - жим носками лежачи в тренажері для жиму ногами</span></strong><br><span style="font-size:16px">1/15 розминка (1хв/відпочинок), 3/12 робочі (2 хв/відпочинок).</span></p>`;
        document.getElementById('result3').innerHTML = `<p><span style="color:#ff6500"><span style="font-size:18px"><u><strong>П\`ятниця (Плечі і Ноги)</strong></u></span></span></p>
                        <p><strong><span style="font-size:16px">1. Розведення гантелей стоячи - середній і задній пучок плеча</span></strong><br><span style="font-size:16px">1/15 і 1/10 розминка (1хв/відпочинок), 3/5-6 робочі сети (3-4 хв/відпочинок).</span></p>
                        <p><strong><span style="font-size:16px">2. Жим гантелей сидячи з вертикальною спинкою - передній пучок плеча</span></strong><br><span style="font-size:16px">1/15 і 1/10 розминка (1хв/відпочинок), 3/5-6 робочі сети (3-4 хв/відпочинок).</span></p>
                        <p><strong><span style="font-size:16px">3.&nbsp;</span></strong><strong><span style="font-size: 16px;">Розведення гантелей</span></strong><strong><span style="font-size:16px">&nbsp;в нахилі - задній пучок плеча</span></strong><br><span style="font-size:16px">1/15 і 1/10 розминка (1хв/відпочинок), 3/5-6 робочі сети (3-4 хв/відпочинок).</span></p>
                        <p><strong><span style="font-size:16px">4. Жим ногами лежачи</span></strong><br><span style="font-size:16px">1/15 і 1/10 розминка (1хв/відпочинок), 2/10-12 робочі сети (3-4 хв/відпочинок).</span></p>
                        <p><strong><span style="font-size:16px">5. Згинання ніг лежачи на животі</span></strong><br><span style="font-size:16px">1/15 розминка (1хв/відпочинок), 2/10-12 робочі сети (2-3 хв/відпочинок).</span></p>
                        <p><strong><span style="font-size:16px">6. Жим носками в тренажері для жиму ногами</span></strong><br><span style="font-size:16px">1/15 і 1/10 розминка (1хв/відпочинок), 3/5-6 робочі сети (3-4 хв/відпочинок).</span><br><span style="font-size:16px">Виконайте вправу для литок, між підходами важкої вправи як вставний сет, або зробіть в кінці тренування якщо у вас велика робоча вага. А для збільшення литок, виконайте спочатку тренування.</span></p>
                        <p><strong><span style="font-size:16px">7. Гіперекстензія - м'язовий корсет спини</span></strong><br><span style="font-size:16px">1/15 розминка (1хв/відпочинок), 2/12-15 робочі (3 хв/відпочинок).</span></p>
                        <p><strong><span style="font-size:16px">8. Прес - підйом корпусу на римському стільці</span></strong><br><span style="font-size:16px">1/15 розминка (1хв/відпочинок), 3/10 робочі (2 хв/відпочинок).</span></p>`;
}