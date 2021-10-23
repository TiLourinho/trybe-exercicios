window.onload = function() {
  const select1 = document.querySelector('#background-color');
  const select2 = document.querySelector('#color');
  const select3 = document.querySelector('#font');
  const body = document.querySelector('body');
  const paragraph = document.querySelector('p');
  const inputFontSize = document.querySelector('input[name="font-size"]');
  const inputFontHeight = document.querySelector('input[name="font-height');

  select1.addEventListener('change', function() {
    const selected1 = select1.selectedOptions[0];
    body.style.backgroundColor = selected1.value;

    localStorage.setItem('Background-color', selected1.value);
  })

  select2.addEventListener('change', function() {
    const selected2 = select2.selectedOptions[0];
    body.style.color = selected2.value;

    localStorage.setItem('Color', selected2.value);
  })
  
  inputFontSize.addEventListener('change', function() {
    paragraph.style.fontSize = inputFontSize.value + 'px';

    localStorage.setItem('Font-size', (inputFontSize.value + 'px'));
  })

  inputFontHeight.addEventListener('change', function() {
    paragraph.style.lineHeight = inputFontHeight.value + 'px';

    localStorage.setItem('Line-height', (inputFontHeight.value + 'px'));
  })

  select3.addEventListener('change', function() {
    const selected3 = select3.selectedOptions[0];
    body.style.fontFamily = selected3.value;

    localStorage.setItem('Font-family', selected3.value);
  })

  //Resgate do Local Storage
  let savedBackgroundColor = localStorage.getItem('Background-color');
  body.style.backgroundColor = savedBackgroundColor;
  let savedColor = localStorage.getItem('Color');
  body.style.color = savedColor;
  let savedFontSize = localStorage.getItem('Font-size');
  paragraph.style.fontSize = savedFontSize;
  let savedFontHeight = localStorage.getItem('Line-height');
  paragraph.style.lineHeight = savedFontHeight;
  let savedFontFamily = localStorage.getItem('Font-family');
  body.style.fontFamily = savedFontFamily;
}