const inputs = document.querySelectorAll('input');

const inputSquare = document.querySelector('#square');
const inputCeiling = document.querySelector('#ceiling');

const inputCalcBtn = document.querySelector('#calc_btn');

const inputTypeHouse = document.querySelector('[name="type_of_house"]');
const inputTypeRepair = document.querySelector('[name="type_of_repair"]');
const inputTypeRedevelopment = document.querySelector('[name="type_of_redevelopment"]');
const inputTypeDismantling = document.querySelector('[name="type_of_dismantling"]');
const inputTypeWalls = document.querySelector('[name="type_of_walls"]');
const inputTypeLoggia = document.querySelector('[name="type_of_loggia"]');

const textResult = document.querySelector('#text-result');
const textSquare = document.querySelector('#result-square');
const textCeiling = document.querySelector('#result-ceiling');
const textSum = document.querySelector('#result-sum');


inputSquare.addEventListener('input', function() {
    resultSquare = +(inputSquare.value) * 500;
});

inputCeiling.addEventListener('input', function() {
    resultCeiling = +(inputCeiling.value);
});

// Переменные
let result;
let resultTypeHouse = +(inputTypeHouse.value);
let resultTypeRepair = +(inputTypeRepair.value);
let resultTypeRedevelopment = +(inputTypeRedevelopment.value);
let resultTypeDismantling = +(inputTypeDismantling.value);
let resultTypeWalls = +(inputTypeWalls.value);
let resultTypeLoggia = +(inputTypeLoggia.value);

// Тип помещения
inputTypeHouse.addEventListener('change', function() {
    resultTypeHouse = +(inputTypeHouse.value);
});

// Какой тип ремонта нужен
inputTypeRepair.addEventListener('change', function() {
    resultTypeRepair = +(inputTypeRepair.value);
});

// Нужна ли перепланировка
inputTypeRedevelopment.addEventListener('change', function() {
    resultTypeRedevelopment = +(inputTypeRedevelopment.value);
});

// Нужен ли демонтаж
inputTypeDismantling.addEventListener('change', function() {
    resultTypeDismantling = +(inputTypeDismantling.value);
});

// Нужно ли выравнивать стены
inputTypeWalls.addEventListener('change', function() {
    resultTypeWalls = +(inputTypeWalls.value);
});

// Нужно ли ремонтировать балкон или лоджию
inputTypeLoggia.addEventListener('change', function() {
    resultTypeLoggia = +(inputTypeLoggia.value);
});


inputCalcBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Функции для бордера input red
    function inputCeilingRed() {
        inputCeiling.style.border = ('2px solid red');
    };
    function inputSquareRed() {
        inputSquare.style.border = ('2px solid red');
    };
    // Функции для бордера input black
    function inputSquareBlack() {
        inputSquare.style.border = ('1px solid #E2E6EB');
    };
    function inputCeilingBlack() {
        inputCeiling.style.border = ('1px solid #E2E6EB');
    };
    
    if (inputSquare.value === ''){
        inputSquareBlack();
        if (inputCeiling.value <= 0){
            inputCeilingRed();
        }
            else if (inputCeiling.value === ''){
                inputCeilingRed()
            }
            else if (inputCeiling.value > 0){
                inputCeilingBlack();
            }       
    };
    
    if (inputSquare.value === ''){
        inputSquareRed();
    }
    else if (inputSquare.value <= 0){
        inputSquareRed();
        inputSquareBlack();
    }

    else if (inputCeiling.value === ''){
        inputCeilingRed();
        inputSquareBlack();
    }
    else if (inputCeiling.value <= 0){
        inputCeilingRed();
        inputSquareBlack();
    }
    
    else if (inputCeiling.value > 0){
        
        inputCeilingBlack();
        inputSquareBlack();
        result = resultSquare * resultCeiling * resultTypeHouse * resultTypeRepair * resultTypeRedevelopment * resultTypeDismantling * resultTypeWalls * resultTypeLoggia;

        textResult.classList.remove('hiden');
        
        inputSquareBlack();
        inputCeilingBlack();

        textSquare.textContent = inputSquare.value + ' кв.м';
        textCeiling.textContent = inputCeiling.value + ' кв.м';
        textSum.textContent = result.toFixed(2) + ' руб';
    }
    
     // Код для скроллинга до низа страницы
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
});