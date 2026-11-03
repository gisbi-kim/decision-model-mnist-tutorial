const examples = [
  {instruction:'빨간 상자에 있는 홀수를 골라.', expected:'LEFT', predicted:'LEFT', probs:[98.2,0.6,0.6,0.6]},
  {instruction:'가장 작은 홀수를 골라.', expected:'RIGHT', predicted:'LEFT', probs:[98.2,0.6,0.6,0.5]},
  {instruction:'짝수를 골라.', expected:'CENTER', predicted:'CENTER', probs:[0.7,97.8,0.8,0.7]},
  {instruction:'파란 상자에 있는 짝수를 골라.', expected:'NONE', predicted:'RIGHT', probs:[0.7,0.7,98.0,0.6]}
];
const buttons = document.querySelectorAll('[data-example]');
function showExample(i) {
  const x=examples[i], right=x.expected===x.predicted;
  buttons.forEach((b,j)=>{b.classList.toggle('active',j===i);b.setAttribute('aria-pressed',String(j===i));});
  document.getElementById('example-result').innerHTML=`<p>“${x.instruction}”</p><div class="example-line"><span>정답 <b>${x.expected}</b> · 모델 선택 <b>${x.predicted}</b></span><strong class="${right?'correct':'wrong'}">${right?'일치':'불일치'}</strong></div>`;
  document.getElementById('probabilities').innerHTML=['LEFT','CENTER','RIGHT','NONE'].map((name,j)=>`<div class="${name===x.predicted?'winner':''}">${name}<strong>${x.probs[j].toFixed(1)}%</strong></div>`).join('');
}
buttons.forEach((b,i)=>b.addEventListener('click',()=>showExample(i)));showExample(0);
